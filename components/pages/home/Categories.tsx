import Heading from "@/components/atoms/Heading";
import React from "react";
import {
  FlaskConical,
  Palette,
  LaptopMinimal,
  BookOpenText,
  Sigma,
} from "lucide-react";
import Link from "next/link";
const Categories = () => {
  const categories = [
    {
      title: "Science",
      icon: <FlaskConical />,
    },
    {
      title: "Arts",
      icon: <Palette />,
    },
    {
      title: "Technology",
      icon: <LaptopMinimal />,
    },
    {
      title: "Literature",
      icon: <BookOpenText />,
    },
    {
      title: "Mathematics",
      icon: <Sigma />,
    },
  ];
  return (
    <>
      <Heading title="Browse by Category" />
      <div className="grid grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1 gap-1">
        {categories.map((el) => (
          <Link
            href={`/courses?subject=${el.title.toLowerCase()}`}
            className="p-6 border flex items-center gap-3 hover:bg-primary hover:text-background group transition"
          >
            <div className="flex items-center justify-center size-12 rounded-full bg-accent-foreground text-background">
              {el.icon}
            </div>
            <div>{el.title}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;
