import { dbConnection } from "@/lib/db";
import { NextResponse } from "next/server";
import Group from "@/models/group.model";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ teacherId: string }> }
) {
  try {
    await dbConnection();

    const { teacherId } = await params;

    if (!teacherId) {
      return NextResponse.json(
        { error: "Teacher ID is required" },
        { status: 400 }
      );
    }

    const groups = await Group.find({ teacher: teacherId })
      .populate("teacher", "name email")
      .populate("students", "name email");

    if (!groups || groups.length === 0) {
      return NextResponse.json(
        { message: "No groups found for this teacher" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        count: groups.length,
        groups,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Failed to fetch teacher groups:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
