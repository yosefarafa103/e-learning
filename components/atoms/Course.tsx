import type { Course } from "@/types/courses";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";

const Course = ({ description, img, title, id }: Course) => {
  return (

    <Card className="flex flex-col relative min-h-[250px] w-full">
      <div className="relative -mt-3">
        <div className="min-h-[200px] animate-pulse duration-500 dark:bg-muted bg-accent rounded-2xl m-4" />
      </div>
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
          <Link
            href={`/courses/platform/${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition text-center"
          >
            عرض الكورس
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default Course;
