import { CoursesData } from "@/constants/courses"
import Course from "../instructors/Course"

const AllCourses = () => {
  return (
    <>
      <Course  {...CoursesData[0]} />
    </>
  )
}

export default AllCourses