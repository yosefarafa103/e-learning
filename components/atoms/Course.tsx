import type { Course } from "@/types/courses";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";


const Course = ({
    description,
    img,
    title,
    id
}: Course) => {
    return (
        <Link href={`/courses/${id}`} className="flex flex-col relative min-h-[200px] ">
            <Image src={img} className="object-cover rounded-xl w-full h-[250px] " alt="course" />
            <h3 className="font-semibold mt-3"> {title} </h3>
            <p className="text-gray-500"> {description} </p>
        </Link>
    )
}

export default Course
