"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { Course as CourseType } from "@/types/courses"
import Link from "next/link";
import { useTranslation } from "react-i18next";
type Course = Partial<CourseType>
const Course = ({
    title, topic,
    id,
    description,
    img
}: Course) => {
    const { t
    } = useTranslation()
    return (
        <section className="flex sm:justify-between max-sm:flex-col-reverse mt-5">
            <div className="column sm:w-fit mt-3">
                <span className="paragraph special"> التسويق </span>
                <h3 className="text-2xl font-bold capitalize mb-2">  {title} </h3>
                <span className="paragraph special"> {description || ""} </span>
                <Button variant={"blue"} className="mt-4 max-sm:w-full capitalize w-fit" asChild>
                    <Link href={`/courses/${id}`}>
                        {t("collectCourse")}
                    </Link>
                </Button>
            </div>
            <Image alt="" height={100} width={200} className="object-cover w-[350px] rounded-lg sm:h-[200px] h-[250px] max-sm:!w-full" src={img!} />
        </section>
    )
}

export default Course