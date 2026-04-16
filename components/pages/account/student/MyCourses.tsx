"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useTranslation } from "react-i18next";
import { dashboardFakeCourses } from "@/constants/courses";
import Course from "@/components/atoms/Course";
export default function MyCourses() {
  const { t } = useTranslation();
  const [courses] = useState(dashboardFakeCourses);
  return (
    <>
      <h2 className="text-2xl text-foreground font-semibold mb-6">
        {t("dashboard.tabs.courses")}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <CourseItem {...course} />
        ))}
      </div>
    </>
  );
}
export function CourseItem(course: typeof dashboardFakeCourses[number]) {
  const { t } = useTranslation();
  return <Card
    key={course.id}
    className="overflow-hidden rounded-2xl shadow-sm border hover:shadow-lg transition"
  >
    <Course.ImagePlaceholder size="lg" />
    <CardContent className="p-5">
      <h3 className="font-semibold text-lg mb-1 line-clamp-1">
        {course.title}
      </h3>
      <p className="text-sm text-gray-500 mb-3">
        Instructor: {course.instructor}
      </p>
      <div className="mb-3">
        <Progress value={course.progress} className="h-2" />
        <p className="text-xs text-gray-500 mt-1">
          Progress: {course.progress}%
        </p>
      </div>
      <Button
        className="w-full"
        variant={course.progress !== 100 ? "secondary" : "blue"}
      >
        {course.progress === 100
          ? t("profile_sections.courses.showCertificate")
          : t("profile_sections.courses.continue_course")}
      </Button>
    </CardContent>
  </Card>
}