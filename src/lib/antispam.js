// src/lib/antispam.js

// Simple in-memory rate limiter per IP address
const rateLimitMap = new Map();

/**
 * Check if client IP has exceeded submission limits (max 5 requests per 10 minutes)
 */
export function checkRateLimit(ip) {
  if (!ip || ip === "unknown") return true;

  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 5;

  const timestamps = (rateLimitMap.get(ip) || []).filter(
    (time) => now - time < windowMs
  );

  if (timestamps.length >= maxRequests) {
    return false; // Rate limit exceeded
  }

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true;
}

/**
 * Validate Cloudflare Turnstile token if configured
 */
export async function verifyTurnstileToken(token, ip) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    // If Turnstile secret is not set, pass through gracefully
    return { success: true };
  }

  if (!token) {
    return { success: false, error: "Missing Turnstile verification token" };
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token);
    if (ip && ip !== "unknown") {
      formData.append("remoteip", ip);
    }

    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    return { success: !!data.success, error: data["error-codes"] };
  } catch (err) {
    console.error("Turnstile verification error:", err);
    return { success: true }; // Don't block real users if Cloudflare API has issues
  }
}

/**
 * Main Anti-Spam Inspector
 * Inspects request payload for bot patterns:
 * 1. Honeypot traps
 * 2. Submission speed (humans take > 2 seconds)
 * 3. Message heuristic tests (numeric phone-only payloads, gibberish)
 * 4. Email validation
 */
export function inspectSubmission(data) {
  const {
    _gotcha,
    website_hp,
    bot_check,
    _timestamp,
    email,
    message,
    name,
    firstName,
    lastName,
  } = data;

  // 1. Honeypot check: If any hidden honeypot field is filled, it's definitely a bot
  if (_gotcha || website_hp || bot_check) {
    return {
      isSpam: true,
      reason: "honeypot_triggered",
      silentDrop: true, // Tell API to pretend it succeeded so bot does not retry
    };
  }

  // 2. Submission speed check: Humans take at least 2.5 seconds to fill out a form
  if (_timestamp) {
    const elapsed = Date.now() - Number(_timestamp);
    if (!isNaN(elapsed) && elapsed < 2500) {
      return {
        isSpam: true,
        reason: "submitted_too_fast",
        silentDrop: true,
      };
    }
  }

  // 3. Message content heuristics
  const cleanMessage = String(message || "").trim();

  // If message is purely a number (like the bot messages: "3610660315")
  if (/^\d+$/.test(cleanMessage)) {
    return {
      isSpam: true,
      reason: "numeric_only_message",
      silentDrop: true,
    };
  }

  // Message too short (under 5 characters)
  if (cleanMessage.length < 5) {
    return {
      isSpam: true,
      reason: "message_too_short",
      silentDrop: false,
      userError: "Please provide a more descriptive message (at least 5 characters).",
    };
  }

  // 4. Basic Email check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return {
      isSpam: true,
      reason: "invalid_email",
      silentDrop: false,
      userError: "Please provide a valid email address.",
    };
  }

  // 5. Name check (must exist)
  const fullName = [name, firstName, lastName].filter(Boolean).join(" ").trim();
  if (!fullName) {
    return {
      isSpam: true,
      reason: "missing_name",
      silentDrop: false,
      userError: "Please provide your name.",
    };
  }

  return { isSpam: false };
}
