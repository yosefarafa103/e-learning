"use client"

import Course from '@/components/atoms/Course'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import img from "@/app/_assets/courses-imgs/marek-piwnicki-cOEOiVxB2os-unsplash.jpg"
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import Courses from '@/helpers/coursesData'
import Loader from '@/components/atoms/Loader'

const AllCoursesSection = () => {
    const { t } = useTranslation();
    const courses = new Courses()
    const { data, isLoading } = useQuery({
        queryFn: () => courses.getCoursesData(),
        queryKey: ["courses"]
    });
    console.log();

    return (
        <>
            <h3 className="text-xl font-bold mt-8 mb-2"> {t("allCourses")} </h3>
            <Separator />
            <section className="my-5 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-2">

                {
                    data?.courses?.map((el) => (
                        // @ts-ignore
                        <Course id={el._id!} description={el.description} title={el.title} img={img} />
                    ))
                }
                {isLoading &&
                    <Loader />}
            </section>
        </>
    )
}

export default AllCoursesSection