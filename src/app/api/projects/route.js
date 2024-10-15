// pages/api/projects/route.js
import connectToDatabase from "../../../lib/mongodb";
import { NextResponse } from "next/server";

// Handle GET request to fetch all projects
export async function GET() {
  try {
    const db = await connectToDatabase();
    console.log("connected to database")
    const projects = await db.collection("projects").find({}).toArray();

    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
