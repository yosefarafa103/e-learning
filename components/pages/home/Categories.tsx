'use client'
import Heading from "@/components/atoms/Heading";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { categories } from "@/constants/general";
const Categories = () => {
  const { t } = useTranslation()
  return (
    <>
      <Heading title={t("browseCategory")} />
      <div className="grid grid-cols-2 lg:grid-cols-4 max-sm:grid-cols-1 gap-1">
        {categories.map((el) => (
          <Link
            href={`/courses?subject=${el.title.toLowerCase()}`}
            className="p-6 border flex items-center gap-3 hover:bg-indigo-900 hover:not-[dark]:text-white hover:dark:text-foreground group transition"
          >
            <div className="flex text-indigo-600 items-center justify-center size-12 rounded-full border-2 border-foreground/5">
              {el.icon}
            </div>
            <div>{t("subjects." + el.title.toLowerCase())}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;
