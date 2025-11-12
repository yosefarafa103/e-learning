"use client";

import SearchInput from "@/components/atoms/SearchInput";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import ar from "@/public/lang/ar.json";
import FullHeading from "@/components/molecules/FullHeading";
import { useRouter, useSearchParams } from "next/navigation";
type DropDownItemData = { title: string; content: string[] };
const ExploreCourses = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const sParams = useSearchParams();
  const updateSingleParam = (key: string, val: string) => {
    const params = new URLSearchParams(sParams.toString());
    params.set(key, val);
    router.replace(`?${params.toString()}`);
  };
  const dropDownsData = [
    {
      title: "Subject",
      content: [
        "كيمياء",
        "لغة عربية",
        "لغة انجليزية",
        "تاريخ",
        "جغرافيا",
        "علوم",
      ],
    },
    {
      title: "Level",
      content: ["level 1", "Level 2 ", "Level 3"],
    },
    {
      title: "Duration",
      content: ["10h", "15h", "20h"],
    },
    {
      title: "Languge",
      content: ["Arabic", "English", "Spain"],
    },
  ] satisfies DropDownItemData[];
  return (
    <>
      <FullHeading lanKey={t("exploreCourses")} desc={t("perfectCourse")} />
      <SearchInput
        width="15"
        name="search-course"
        placeholder="Search For All Courses"
      />
      <section className="flex items-center gap-2">
        {dropDownsData.map((el) => (
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-2 rounded-lg bg-background flex items-center gap-2">
              {t(`${el.title.toLowerCase()}.title`)} <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {el.content.map((e, i) => (
                <DropdownMenuItem
                  onClick={(item) => {
                    const key = sParams.get(el.title.toLowerCase());
                    updateSingleParam(
                      el.title.toLowerCase(),
                      (item.target as HTMLElement).textContent
                    );
                    console.log((item.target as HTMLElement).textContent);
                  }}
                >
                  {el.content[i]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </section>
    </>
  );
};

export default ExploreCourses;
