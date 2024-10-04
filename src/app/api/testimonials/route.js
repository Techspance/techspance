// pages/api/testimonials/route.js
import connectToDatabase from "../../../lib/mongodb";
import { NextResponse } from "next/server";

// Handle GET request to fetch all testimonials
export async function GET() {
  try {
    const db = await connectToDatabase();
    console.log("connected to database")
    const testimonials = await db.collection("testimonials").find({}).toArray();

    return NextResponse.json({ success: true, data: testimonials });
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
