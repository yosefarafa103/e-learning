"use client"
import { Book, Gauge, Info } from "lucide-react"
import { Card, CardContent, CardTitle } from "../ui/card"
import type { ISubject } from "@/models/subjects.model"
import { Separator } from "../ui/separator"
import { Badge } from "../ui/badge"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { useDirection } from "@/hooks/useDirection"
const SubjectCard = ({ title, category, level, description }: ISubject) => {
    const { t } = useTranslation();
    const { dir } = useDirection()
    return (
        <Card className="relative gap-4">
            <CardTitle className="px-5"> {title} </CardTitle>
            <Separator className="bg-blue-900" />
            <CardContent>
                <h5 className="flex gap-2 my-4 text-sm">
                    <Info size={20} />
                    {description}
                </h5>
                <h5 className="flex gap-2 my-4 text-sm">
                    <Gauge size={20} />
                    {t("subjects." + level.toLowerCase())}
                </h5>
                <Badge variant={"green"} className="flex gap-2">
                    {category}
                </Badge>
            </CardContent>
            <Book className={cn('absolute top-2 opacity-50',
                dir !== "right" ? "right-2" : "left-2"
            )} size={25} />
        </Card>
    )
}

export default SubjectCard