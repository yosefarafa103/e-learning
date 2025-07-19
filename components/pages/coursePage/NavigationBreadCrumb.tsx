"use client"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const NavigationBreadCrumb = ({ courseId, course }: { courseId: string, course: string }) => {
    const { t } = useTranslation()
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem className="text-blue-950 font-semibold text-lg">
                        <Link href="/courses"> {t('Courses'.toLowerCase())} </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem >
                        <Link href={`/courses/${courseId}`} className="text-sm text-black "> {course} </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                </BreadcrumbList>
            </Breadcrumb>
        </>
    )
}

export default NavigationBreadCrumb