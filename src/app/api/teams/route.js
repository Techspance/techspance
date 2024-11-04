// pages/api/teams/route.js
import connectToDatabase from "../../../lib/mongodb";
import { NextResponse } from "next/server";

// Handle GET request to fetch all teams
export async function GET() {
  try {
    const db = await connectToDatabase();
    console.log("connected to database")
    const teams = await db.collection("teams").find({}).toArray();

    return NextResponse.json({ success: true, data: teams });
  } catch (error) {
    console.error("Failed to fetch teams:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch teams" },
      { status: 500 }
    );
  }
}
