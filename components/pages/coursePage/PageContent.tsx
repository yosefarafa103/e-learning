"use client"
import character from "@/app/_assets/emmanuel-serratrice-black-guy-disney-03.jpg"
import { useParams } from "next/navigation"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import WrapperBody from "@/components/WrapperBody"
import { CoursesData } from "@/constants/courses"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import React, { useState } from "react"
import { Course } from "@/types/courses"
import Heading from "@/components/atoms/Heading"
import CourseModule from "@/components/atoms/CourseModule"
import Image from "next/image"
import { Star } from "lucide-react"
import StudentComment from "@/components/atoms/StudentComment";
import Head from "next/head";
import { useTranslation } from "react-i18next";
type Overview = Pick<Course, "overview">
const PageContent = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const [tab, setTab] = useState(0);
    const { t } = useTranslation()

    return (
        <>
            <Head>
                <title> تعلّمك - {CoursesData[+courseId - 1].title} </title>
            </Head>
            <WrapperBody>
                <section className="my-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="text-blue-950 font-semibold text-lg">
                                <Link href="/courses"> {t('Courses'.toLowerCase())} </Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem >
                                <Link href={`/courses/${CoursesData[+courseId - 1]?.link}`} className="text-sm text-black "> {CoursesData[+courseId - 1]?.title.toLowerCase()} </Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </BreadcrumbList>
                    </Breadcrumb>
                </section>
                <h4 className="text-3xl font-bold capitalize my-5">
                    {CoursesData[+courseId - 1]?.title}
                </h4>
                <p className="text-gray-950"> {CoursesData[+courseId - 1]?.description} </p>
                <section className="flex items-center gap-3 mt-4 ">
                    {["Overview", "Content", "Instructor", "Reviews"].map((item, i) => (
                        <Button onClick={() => setTab(i)} className={`focus-visible:border-transparent py-5 bg-transparent ${tab === i ? "border-b-solid border-b-[3px] border-b-[#000] rounded-[0px] " : ""}`} variant={"secondary"}> {t(`${item}`.toLowerCase())} </Button>
                    ))}
                </section>
                <Separator />
                <section className="pt-5">
                    {tab === 0 ?
                        <CourseOverView overview={CoursesData[+courseId - 1]?.overview} />
                        : tab === 1 ? <CourseContent /> : tab === 2 ? <Instructor /> : <CourseReview />}
                </section>
                <Button className="mt-4 mb-2 float-end capitalize" variant={"blue"} > {t("collectCourse")} </Button>
            </WrapperBody>
        </>
    )
}

export default PageContent

export function CourseOverView({ overview }: Overview) {
    const { t } = useTranslation()

    return (
        <>
            <Heading title={`${t("overview")}`} />
            <p className="text-gray-950 leading-[1.5]"> {overview} </p>
        </>
    )
}
export function CourseContent() {
    const { t } = useTranslation()
    const [isCollapsed, setIsCollapsed] = useState(false);
    let arr = [1, 2, 3, 4, 5, 6, 7, 4, 5, 6, 7, 7, 7]
    return (
        <>
            <Heading title={t("content")} />
            <section className="flex flex-col gap-5">
                {arr.slice(0, (!isCollapsed ? 5 : arr.length)).map(() => (
                    <CourseModule />
                ))}
                <Button className="w-fit" variant={"outline"} onClick={() => setIsCollapsed(!isCollapsed)}> {!isCollapsed ? `اظهر ${arr.length - arr.slice(0, 5).length} عناصر ` : "Show Less"} </Button>
            </section>

        </>
    )
}
export function Instructor() {
    const { t } = useTranslation()
    return (
        <>
            <Heading title={t("instructor")} />
            <section className="center-flex mt-4 max-sm:flex-col max-sm:!items-start">
                <Image className="rounded-[50%] object-cover" width={150} height={150} src={character.src} alt="Instructor" />
                <section className="column">
                    <h3 className="collapsed-link_course max-sm:text-center">Omar Hassan</h3>
                    <p className="paragraph sepcail">Arabic Languge Expert</p>
                </section>
            </section>
            <p className="paragraph text-center mt-4"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sit deleniti exercitationem! Suscipit adipisci unde, asperiores aut molestiae corporis nulla laudantium beatae est optio dolorum sunt, ipsam explicabo, aperiam repellat.
            </p>
        </>
    )
}
export function CourseReview() {
    const { t } = useTranslation()

    return (
        <>
            <Heading title={t("reviews")} />
            <section className="flex gap-10">
                <div className="column">
                    <h4 className="text-lg font-bold">4.6</h4>
                    <div className="center-flex !gap-1">
                        <Star size={20} fill={"#000"} />
                        <Star size={20} fill={"#000"} />
                        <Star size={20} fill={"#000"} />
                        <Star size={20} fill={"#000"} />
                        <Star size={20} />
                    </div>
                    <h5 className="font-semibold"> 150 reviews </h5>
                </div>
                <div className="column max-lg:flex-grow w-[60%] ">
                    {[50, 30, 10, 4, 6].map((el, i) => (
                        <section className="center-flex">
                            <span className="flex">{el} </span>
                            <Progress value={el} />
                            <span className="flex"> {[5, 4, 3, 2, 1][i]} </span>
                        </section>
                    )
                    )}
                </div>
            </section>
            <section className="mt-5">
                <StudentComment />
                <StudentComment />
                <StudentComment />
                <StudentComment />
            </section>
        </>
    )
}