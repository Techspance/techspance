// pages/api/careers/route.js
import connectToDatabase from "../../../lib/mongodb";
import { NextResponse } from "next/server";

// Handle GET request to fetch all careers
export async function GET() {
  try {
    const db = await connectToDatabase();
    console.log("connected to database")
    const careers = await db.collection("careers").find({}).toArray();

    return NextResponse.json({ success: true, data: careers });
  } catch (error) {
    console.error("Failed to fetch careers:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch careers" },
      { status: 500 }
    );
  }
}
