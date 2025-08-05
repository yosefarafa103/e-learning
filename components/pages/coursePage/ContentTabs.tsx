"use client"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CommentThreadListResponse, YouTubeChannel, YouTubeChannelListResponse, YouTubeSearchResponse } from "@/types/videos";
import { useTranslation } from "react-i18next";
import React, { Suspense, useState } from "react";
import CourseReview from "./CourseReview";
import Loader from "@/components/atoms/Loader";

const CourseOverView = React.lazy(() => import("./CourseOverView"));
const CourseContent = React.lazy(() => import("./CourseContent"));
const Instructor = React.lazy(() => import("./Instructor"));

const ContentTabs = ({ playList, comments, channel }: { playList: Pick<YouTubeSearchResponse, "items">, comments: CommentThreadListResponse, channel: YouTubeChannelListResponse }) => {
    const [tab, setTab] = useState<number>(0);
    const { t } = useTranslation();
    
    return (
        <>
            <section className="flex items-center gap-3 mt-4 ">
                {["Overview", "Content", "Instructor", "Reviews"].map((item, i) => (
                    <Button onClick={() => setTab(i)} className={`focus-visible:border-transparent py-5 bg-transparent ${tab === i ? "border-b-solid border-b-[3px] border-b-[#000] rounded-[0px] " : ""}`} variant={"secondary"}> {t(`${item}`.toLowerCase())} </Button>
                ))}
            </section>
            <Separator />
            <section className="pt-5">
                <Suspense fallback={<Loader />}>
                    {tab === 0 ? (
                        <CourseOverView overview={playList.items[0].snippet.description} />
                    ) : tab === 1 ? (
                        <CourseContent snippet={playList.items} />
                    ) : tab === 2 ? (
                        <Instructor channel={channel} />
                    ) : (
                        <CourseReview comments={comments} vids={playList.items} />
                    )}
                </Suspense>
            </section>
        </>
    );
};

export default ContentTabs;
