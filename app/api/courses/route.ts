import { dbConnection } from "@/lib/db";
import Course from "@/models/courses.model";
import User from "@/models/user.model";
import { ICourse } from "@/types/courses";
import { IUser } from "@/types/user";

export async function POST(req: Request) {
  try {
    await dbConnection();
    const { description, instructor_id, price, title, }: ICourse = await req.json();
    const user: IUser = await User.findById(instructor_id) as IUser;

    /* 
  7  Set Courses In User Account After Buying 
    
    */
    // @ts-ignore
    const course: ICourse = await Course.create({
      price,
      title,
      instructor_id: user?._id,
      description,
    }) as Partial<ICourse>
    if (user.role === "student") {
      return Response.json({
        status: "Failed",
        message: "Student Accounts Does Not Have Ability To Publish Courses"
      }, { status: 401 })
    }
    return Response.json({
      status: "Post Created Successfully",
      course
    }, {
      status: 201,
    })
  } catch (error: any) {
    console.log("Err: " + error);
    return Response.json({
      status: "Failed To Create Post",
      err: error
    }, { status: 404 })
  }
}

export async function GET() {
  try {
    await dbConnection();
    const courses = await Course.find()
      .populate("instructor_id lessons")
    return Response.json({
      status: "Success",
      courses,
    }, {
      status: 200,
    });
  } catch (error: any) {
    console.log("Err: " + error);
    return Response.json({
      status: "Failed To Fetch Courses",
      err: error.message,
    }, {
      status: 404,
    });
  }
}