import { dbConnection } from "@/lib/db";
import Course from "@/models/courses.model";
import { ICourse } from "@/types/courses";
import { NextResponse } from "next/server";
export async function GET(req: NextResponse) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

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

export async function PATCH(_request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const {
      buyers,
      description,
      title,
      price,
      rating
    }: ICourse = await _request.json();

    const body = { buyers, description, title, price, rating };

    await dbConnection();

    let course;

    if (buyers && Array.isArray(buyers)) {
      course = await Course.findByIdAndUpdate(
        id,
        { $addToSet: { buyers: { $each: buyers } } },
        { new: true }
      );
    } else {
      course = await Course.findByIdAndUpdate(id, body, { new: true });
    }

    if (!course) {
      return Response.json(
        { status: "Course Not Found" },
        { status: 404 }
      );
    }

    return Response.json(
      {
        status: "Course Updated Successfully",
        course
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Err:", error);
    return Response.json(
      { status: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ status: "Missing ID" }, { status: 400 });
    }

    await dbConnection();

    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return NextResponse.json({ status: "Course Not Found" }, { status: 404 });
    }

    return NextResponse.json(
      { status: "Success", message: "Course deleted successfully", course: deletedCourse },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Err:", error);
    return NextResponse.json(
      {
        status: "Failed To Delete Course",
        err: error.message,
      },
      { status: 500 }
    );
  }
}