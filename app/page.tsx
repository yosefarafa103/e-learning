"use client"
import { Header } from "@/components/Header"
import AllCoursesSection from "@/components/pages/home/AllCoursesSection"
import ExploreCourses from "@/components/pages/home/ExploreCourses"
import FeaturesCourses from "@/components/pages/home/FeaturesCourses"
import WrapperBody from "@/components/WrapperBody"

export default function Home() {
  return (
    <>
      <WrapperBody>
        <ExploreCourses />
        <FeaturesCourses />
        <AllCoursesSection />
      </WrapperBody>
    </>
  )
}
