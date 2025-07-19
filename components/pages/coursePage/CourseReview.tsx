"use client"

import Heading from "@/components/atoms/Heading"
import Loader from "@/components/atoms/Loader"
import StudentComment from "@/components/atoms/StudentComment"
import { Progress } from "@/components/ui/progress"
import { Comment, CommentThreadListResponse, YouTubeSearchResultItem } from "@/types/videos"
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios"
import { Star } from "lucide-react"
import { useParams } from "next/navigation"
import { useTranslation } from "react-i18next"

function CourseReview({ vids, comments }: { vids: YouTubeSearchResultItem[], comments: CommentThreadListResponse }) {
    const { t } = useTranslation();
    const { courseId } = useParams<{ courseId: string }>();
    console.log(comments);

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
                    <h5 className="font-semibold"> {comments.items.length} Review{`${comments.items.length > 1 ? `s` : ""}`} </h5>
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
                {/* {isLoading ? <Loader /> : data?.snippet } */}
                {
                    comments.items.map((el) => (
                        <StudentComment key={el.id} publishedDate={el.snippet.topLevelComment.snippet.publishedAt} commentAutherImg={el.snippet.topLevelComment.snippet.authorProfileImageUrl} commentAuther={el.snippet.topLevelComment.snippet.authorDisplayName} text={el.snippet.topLevelComment.snippet.textDisplay} numberOfLikes={el.snippet.topLevelComment.snippet.likeCount} />
                    ))
                }
            </section>
        </>
    )
}


export default CourseReview