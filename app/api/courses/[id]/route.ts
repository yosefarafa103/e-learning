import { dbConnection } from "@/lib/db";
import Course from "@/models/courses.model";
import { NextResponse } from "next/server";


export async function GET(req: NextResponse) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop(); // or use regex if needed

    if (!id) {
      return NextResponse.json({ status: "Missing ID" }, { status: 400 });
    }

    await dbConnection();
    const course = await Course.findById(id)
      .populate("instructor_id")
      .populate("lessons");

    if (!course) {
      return NextResponse.json({ status: "Course Not Found" }, { status: 404 });
    }

    return NextResponse.json({ status: "Success", course }, { status: 200 });
  } catch (error: any) {
    console.error("Err:", error);
    return NextResponse.json(
      {
        status: "Failed To Fetch Course",
        err: error.message,
      },
      { status: 500 }
    );
  }
}