import { dbConnection } from "@/lib/db";
import { NextResponse } from "next/server";
import User from "@/models/user.model";
export async function GET() {
  try {
    await dbConnection();
    const students = await User.find({ role: "student" }).select("-password");
    return NextResponse.json(
      {
        status: "success",
        count: students.length,
        students,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching students:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to fetch students",
      },
      { status: 500 }
    );
  }
}
