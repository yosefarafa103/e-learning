import AllCoursesSection from "@/components/pages/home/AllCoursesSection"
import AllSubjects from "@/components/pages/home/AllSubjects"
import ExploreCourses from "@/components/pages/home/ExploreCourses"
import FeaturesCourses from "@/components/pages/home/FeaturesCourses"
import WrapperBody from "@/components/WrapperBody"
export default function Home() {
  return (
    <>
      <WrapperBody>
        <ExploreCourses />
        <AllCoursesSection />
        <AllSubjects />
      </WrapperBody>
    </>
  )
}
