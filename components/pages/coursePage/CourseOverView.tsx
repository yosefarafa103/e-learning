import Heading from "@/components/atoms/Heading";
import { useTranslation } from "react-i18next";
import { Course } from "@/types/courses";

type Overview = Pick<Course, "overview">;

export default function CourseOverView({ overview }: Overview) {
    const { t } = useTranslation();
    return (
        <>
            <Heading title={`${t("overview")}`} />
            <p className="text-foreground leading-[1.5]"> {overview} </p>
        </>
    );
}
