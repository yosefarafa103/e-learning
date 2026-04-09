"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useTranslation } from "react-i18next";

export default function MyCourses() {
  const { t } = useTranslation();

  const [courses] = useState([
    {
      id: 1,
      title: "Computer Science 101",
      instructor: "Dr. Ahmed Ali",
      progress: 80,
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 2,
      title: "Frontend Engineering",
      instructor: "Eng. Salma Hassan",
      progress: 45,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 3,
      title: "Database Management Systems",
      instructor: "Dr. Omar Mahmoud",
      progress: 100,
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 4,
      title: "Artificial Intelligence Basics",
      instructor: "Dr. Sarah Ibrahim",
      progress: 20,
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=60",
    },
  ]);

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6"> {t("dashboard.tabs.courses")} </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="overflow-hidden rounded-2xl shadow-sm border hover:shadow-lg transition"
          >
            <div className="h-36 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

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
                variant={course.progress === 100 ? "secondary" : "default"}
              >
                {course.progress === 100
                  ? "View Certificate"
                  : "Continue Course"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
