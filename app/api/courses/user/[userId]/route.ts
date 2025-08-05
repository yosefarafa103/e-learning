import { dbConnection } from "@/lib/db";
import User from "@/models/user.model";
import Course from "@/models/courses.model";

export async function GET(request: Request, { params }: { params: Promise<{ userId: string }> }) {

  try {
    await dbConnection();
    const { userId } = await params;
    const teacherCourses = await Course.find({ instructor_id: userId });
    // instructor_id
    console.log(teacherCourses);

    return Response.json(
      {
        status: "User Success",
        courses: teacherCourses,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Err:", error);
    return Response.json(
      {
        status: "error",
        error: error.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}
