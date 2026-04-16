import type { Course as CourseType } from "@/types/courses";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const Course = ({ description, img, title, id }: CourseType) => {
  return (

    <Card className="flex flex-col relative min-h-[250px] w-full">
      <Course.ImagePlaceholder />
      <CardContent>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2">
            {title}
          </h3>
          {description && (
            <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3">
              {description.slice(0, 40)}
            </p>
          )}
          <Button asChild variant="outline">
            <Link
              href={`/courses/platform/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition text-center"
            >
              عرض الكورس
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Course;


Course.ImagePlaceholder = ({ size = 'sm' }: { size?: "sm" | "lg" }) => (
  <div className="relative -mt-3">
    <div className={cn(size === "lg" ? 'min-h-[250px]' : "min-h-[200px]",
      "animate-pulse duration-500 dark:bg-muted bg-accent rounded-2xl m-4"
    )} />
  </div>
)