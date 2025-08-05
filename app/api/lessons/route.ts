import { dbConnection } from "@/lib/db";
import Course from "@/models/courses.model";
import Lesson from "@/models/lesson.model";
import User from "@/models/user.model";
import { ICourse, ILesson } from "@/types/courses";
import { IUser } from "@/types/user";
export async function POST(req: Request) {
    try {
        await dbConnection();
        const lesson: ILesson = await req.json();
        const course: ICourse = await Course.findById(lesson.course_id) as ICourse
        const user: IUser = await User.findById(course.instructor_id) as IUser;
        const newLesson: ILesson = await Lesson.create(lesson);
        await Course.findByIdAndUpdate(course._id, {
            $push: {
                lessons: newLesson._id
            }
        }, {
            new: true
        })
        return Response.json({
            status: "Lesson Posted Successfully",
            lesson
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
        const lessons = await Lesson.find()
        return Response.json({
            status: "Success",
            lessons,
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