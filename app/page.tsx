"use client";
import WrapperBody from "@/components/WrapperBody";
import { Suspense } from "react";
import ExploreCourses from "@/components/pages/home/ExploreCourses";
import AllCoursesSection from "@/components/pages/home/AllCoursesSection";
import AllSubjects from "@/components/pages/home/AllSubjects";
import Loader from "@/components/atoms/Loader";
import Categories from "@/components/pages/home/Categories";
import AboutSection from "@/components/pages/home/AboutPlatform";
import Footer from "@/components/pages/home/Footer";
import StatisticsSection from "@/components/pages/home/StatisticsSection";
import ErrorBoundary from "@/components/atoms/ErrorBoundary";
export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary>
        <WrapperBody>
          <ExploreCourses />
          <AllCoursesSection />
          <AllSubjects />
          <Categories />
          <AboutSection />
          <StatisticsSection />
          <Footer />
        </WrapperBody>
      </ErrorBoundary>
    </Suspense>
  );
}
