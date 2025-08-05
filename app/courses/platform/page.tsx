import Heading from "@/components/atoms/Heading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import WrapperBody from "@/components/WrapperBody";
import Courses from "@/helpers/coursesData";
import { ICourse } from "@/types/courses";
import { IUser } from "@/types/user";
import type { Metadata } from "next";

import { BadgeDollarSign, DollarSign, GraduationCap, School, Star } from "lucide-react";
import Link from "next/link";
export const metadata: Metadata = {
    title: "دورات المنصة"
}
const page = async () => {
    const courseService = new Courses()
    const { courses }: { courses: ICourse[] } = await courseService.getCoursesData();
    return (
        <WrapperBody>
            <Heading title="دوراتنا" />
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {courses.map((course) => (
                    <Link href={`/courses/platform/${course._id}`}>
                        <Card className="gap-2 hover:bg-orange-50 transition-all duration-300">
                            <CardHeader className="">
                                <CardTitle className="text-xl text-ellipsis whitespace-nowrap overflow-hidden "> {course.title} </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p> {course.description} </p>
                                <Link href={`/user/${course.instructor_id._id}`} className="center-flex font-semibold underline text-gray-700"> <GraduationCap />{(course.instructor_id as IUser).name} </Link>
                                <p className="center-flex">
                                    <Star className="!text-yellow-300" />
                                    <b>0.0</b>
                                    <small className="text-violet-500 center-flex">  (0 Ratings)</small>
                                </p>
                            </CardContent>
                            <CardFooter>
                                <p className="font-semibold flex items-center gap-1"> <BadgeDollarSign className="text-green-600" /> ${course.price} </p>
                            </CardFooter>
                        </Card>
                    </Link>

                ))}
            </section>
        </WrapperBody>
    )
}

export default page