"use client"

import Course from '@/components/atoms/Course'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import img from "@/app/_assets/courses-imgs/marek-piwnicki-cOEOiVxB2os-unsplash.jpg"
import { useTranslation } from 'react-i18next'

const AllCoursesSection = () => {
    const { t } = useTranslation()
    return (
        <>
            <h3 className="text-xl font-bold mt-8 mb-2"> {t("allCourses")} </h3>
            <Separator />
            <section className="my-5 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-2">
                <Course description="lorem aaaa" title="Introdution To Markting" img={img} />
                <Course description="lorem aaaa" title="Introdution To Markting" img={img} />
                <Course description="lorem aaaa" title="Introdution To Markting" img={img} />
            </section>
        </>
    )
}

export default AllCoursesSection