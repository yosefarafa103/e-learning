import Heading from "@/components/atoms/Heading";
import { useTranslation } from "react-i18next";
import { YouTubeSearchResultItem } from "@/types/videos";
import CourseModule from "@/components/atoms/CourseModule";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BuyCourseButton from "@/components/atoms/BuyCourseButton";

type courseItem = Pick<YouTubeSearchResultItem, "snippet">;

export default function CourseContent({ snippet }: { snippet: YouTubeSearchResultItem[] }) {
    const { t } = useTranslation();
    const [isCollapsed, setIsCollapsed] = useState(false);
    console.log(snippet[0].id);
    console.log(snippet[0].snippet.playListId);
    
    return (
        <>
            <Heading title={t("content")} />
            <section className="flex flex-col gap-5">
                {snippet.slice(0, (!isCollapsed ? 5 : snippet.length)).map((el) => (
                    <CourseModule lessonName={el.snippet.title} desc={el.snippet.description} />
                ))}
                <Button className="w-fit" variant={"outline"} onClick={() => setIsCollapsed(!isCollapsed)}> {!isCollapsed ? `اظهر ${snippet.length - snippet.slice(0, 5).length} عناصر ` : "Show Less"} </Button>
            </section>
            <BuyCourseButton courseId={snippet[0].snippet.playListId!} imgs={snippet.slice(0, 5).map((item) => item.snippet.thumbnails.medium.url)} courseTitle={snippet[0].snippet.title} price={10000} courseDescription="No" />
            {/* <Button variant={"blue"} className="sticky bottom-5 right-0"> {t("bookCourse")} 99.99$ </Button> */}
        </>
    );
}
