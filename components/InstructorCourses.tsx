"use client"
import { CoursesData } from "@/constants/courses"
import Heading from "./atoms/Heading"
import Course from "./pages/instructors/Course"
import { Separator } from "./ui/separator"
import { useTranslation } from "react-i18next"

const InstructorCourses = () => {
    const { t } = useTranslation()

    return (
        <>
            <section className="mt-10">

                <Heading title={t("courses")} />
                <Separator className="my-5" />
                {CoursesData.map((el) => (
                    <Course  topic={el.topic!} title={el.title} id={el.id} />
                ))}
            </section>
        </>
    )
}

export default InstructorCourses