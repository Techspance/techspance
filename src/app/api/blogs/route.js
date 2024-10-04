// pages/api/blogs/route.js
import connectToDatabase from "../../../lib/mongodb";
import { NextResponse } from "next/server";

// Handle GET request to fetch all blogs
export async function GET() {
  try {
    const db = await connectToDatabase();
    console.log("connected to database")
    const blogs = await db.collection("blogs").find({}).toArray();

    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
