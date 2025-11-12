import type { Course } from "@/types/courses";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const Course = ({ description, img, title, id }: Course) => {
  return (
    <div className="flex flex-col relative min-h-[200px] w-full border rounded-2xl">
      <div className="dark:bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="relative">
          <div className="h-[200px] bg-[#eee] rounded-2xl m-4" />
        </div>

        <div className="p-6 flex flex-col gap-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2">
            {title}
          </h3>

          {description && (
            <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3">
              {description}
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
      </div>
    </div>
  );
};

export default Course;
