"use client"

import SearchInput from "@/components/atoms/SearchInput"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "react-i18next"
import ar from "@/public/lang/ar.json"
import FullHeading from "@/components/molecules/FullHeading"
type DropDownItemData = { title: string, content: string[] }
const ExploreCourses = () => {
    const { t } = useTranslation();

    const dropDownsData = [
        {
            title: "Subject",
            content: ["s1", "s2", "s3"]
        },
        {
            title: "Level",
            content: ["level 1", "Level 2 ", "Level 3"]
        },
        {
            title: "Duration",
            content: ["10h", "15h", "20h"]
        },
        {
            title: "Languge",
            content: ["Arabic", "English", "Spain"]
        }
    ] satisfies DropDownItemData[]
    return (
        <>
            <FullHeading lanKey={t("exploreCourses")} desc={t("perfectCourse")} />
            <SearchInput width="15" name="search-course" placeholder="Search For All Courses" />
            <section
                className="flex items-center gap-2"
            >
                {dropDownsData.map((el) => (
                    <DropdownMenu>
                        <DropdownMenuTrigger className="px-3 py-2 rounded-lg bg-[#eee] flex items-center gap-2"> {t(`${el.title.toLowerCase()}.title`)} <ChevronDown /> </DropdownMenuTrigger>
                        <DropdownMenuContent >
                            {el.content.map((e) => (
                                <DropdownMenuItem> {Object.keys(ar["level"].levels).map((el) => {
                                    return (
                                        <span>
                                            {t(`level.levels[${el}]`)}
                                        </span>
                                    )
                                })} </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                ))}
            </section>

        </>
    )
}

export default ExploreCourses