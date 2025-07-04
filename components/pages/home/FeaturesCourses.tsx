"use client"
import Course from "@/components/atoms/Course"
import { Separator } from "@/components/ui/separator"
import { CoursesData } from "@/constants/courses"
import { useTranslation } from "react-i18next"

const FeaturesCourses = () => {
        const { t } = useTranslation()
    return (
        <>
            <h3 className="text-xl font-bold mt-8 mb-2">{t("featuredCourses")} </h3>
            <Separator />
            <section className="my-5 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {CoursesData.map((course) => (
                    <Course id={course.id} link={course.link} description={course.description} title={course.title} img={course.img} />
                ))}
            </section>
        </>
    )
}

export default FeaturesCourses