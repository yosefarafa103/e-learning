import useTabsStore from "@/_stores/teacherTabs";
import Heading from "@/components/atoms/Heading";
import TeacherTabs from "@/components/atoms/TeacherTabs";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import WrapperBody from "@/components/WrapperBody";
import { getSignInUser } from "@/helpers/getSignInUser";
import { getTeacherCourses } from "@/helpers/getTeacherCourses";
import { Plus } from "lucide-react";
import Link from "next/link";
const page = async () => {
    const user = await getSignInUser();
    const teacherCourses = await getTeacherCourses();
    return (
        <WrapperBody>
            <Separator className="my-5" />
            <Button className="mb-5 float-end" variant="green" asChild>
                <Link href={`/courses/create-course`}>
                    Create New Course <Plus className="ml-2" />
                </Link>
            </Button>
            <section>
                <Heading title="My Courses" />
                {teacherCourses && teacherCourses.courses && teacherCourses.courses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                        {teacherCourses.courses.map((course) => (
                            <Link href={`/courses/platform/${course._id}`}>
                                <Card className="gap-2 border-solid border-[4px] border-blue-500 rounded-lg">
                                    <CardHeader>
                                        <CardTitle className="text-xl"> {course.title} </CardTitle>
                                    </CardHeader>
                                    <CardContent className="my-0">
                                        <p> {course.description} </p>
                                        <p className="flex items-center gap-2 my-2">
                                            <b>0.0</b>
                                            <small className="text-[#4361ee]">(0 Ratings)</small>
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <p className="font-bold"> ${course.price} </p>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">No courses found.</p>
                )}
            </section>
            <section className="my-5">
                <Heading title="My Charge" />
            </section>
        </WrapperBody>
    )
}

export default page