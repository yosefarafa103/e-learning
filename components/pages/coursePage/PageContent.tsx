"use client"
import character from "@/app/_assets/emmanuel-serratrice-black-guy-disney-03.jpg"
import { useParams } from "next/navigation"

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
import axios, { AxiosResponse } from "axios";
import { YouTubeSearchResponse } from "@/types/videos";
import { useQuery } from "@tanstack/react-query";
const PageContent = () => {
    const getCourseData = async () => {
        try {
            const playList: AxiosResponse<YouTubeSearchResponse> = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${courseId}&maxResults=50&key=${process.env.YT_API_KEY}`)
            return playList.data
        } catch (error: any) {
            throw new Error(error)
        }
    }

    const { courseId } = useParams<{ courseId: string }>();
    const { t } = useTranslation()
    const { data } = useQuery({
        queryKey: [`Course_${courseId}_data`],
        queryFn: getCourseData
    });
    console.log(data);

    return (
        <>

            <WrapperBody>
                <section className="my-4">

                </section>
                <h4 className="text-3xl font-bold capitalize my-5">
                    {CoursesData[+courseId - 1]?.title}
                </h4>
                <p className="text-gray-950"> {CoursesData[+courseId - 1]?.description} </p>
                
                <Button className="mt-4 mb-2 float-end capitalize" variant={"blue"} > {t("collectCourse")} </Button>
            </WrapperBody>
        </>
    )
}

export default PageContent
