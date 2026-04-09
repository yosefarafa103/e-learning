"use client";

import { ForwardRefExoticComponent, ReactElement, RefAttributes, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, ClipboardList, LucideProps, TrendingUp, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toCamelCase } from "@/helpers/camelCase";

export default function Dashboard() {
  const [assignments] = useState([
    {
      id: 1,
      title: "Assignment 1: Intro to Programming",
      due: "Nov 5, 2025",
      progress: 60,
    },
    {
      id: 2,
      title: "Quiz 1: Data Structures",
      due: "Nov 2, 2025",
      progress: 100,
    },
  ]);
  const { t } = useTranslation();

  const [courses] = useState([
    { id: 1, name: "Computer Science 101", instructor: "Dr. Ahmed Ali" },
    { id: 2, name: "Frontend Engineering", instructor: "Eng. Salma Hassan" },
  ]);
  const dashboardCards: CardItemProps[] = [
    {
      title: "Active Courses",
      icon: <BookOpen className="text-blue-600 w-8 h-8" />,
      count: 4
    },
    {
      title: "Average Grade",
      icon: <ClipboardList className="text-yellow-500 w-8 h-8" />,
      count: 2
    },
    {
      title: "Assignments Due",
      icon: <TrendingUp className="text-green-500 w-8 h-8" />,
      count: "87%".split("").map(el => /\d/.test(el) ? Number(el).toLocaleString("ar-EG") : el).join(""),
    },
    {
      title: "Profile",
      icon: <User className="text-purple-600 w-8 h-8" />,
      count: t("dashboard.cardsContent.complete")
    }
  ]
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          dashboardCards.map(({ count,
            icon,
            title
          }) => (
            <Dashboard.CardItem
              count={typeof parseInt(count.toString()) === "number" ? count.toLocaleString("ar-EG") : count}
              icon={icon}
              title={t(`dashboard.cardsContent.${toCamelCase(title)}`)}
            />
          ))
        }
      </div>
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-primary">
            {t('dashboard.upcomming_assignments')}
          </h2>
          <Button variant="outline" size="sm">
            {t('showMore')}
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 grid-cols-1">
          {assignments.map((a) => (
            <Card key={a.id} className="shadow-sm border rounded-2xl py-0">
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold">{a.title}</h3>
                    <p className="text-sm text-gray-500">Due: {a.due}</p>
                  </div>
                  <span
                    className={`text-xs whitespace-nowrap font-medium px-2 py-1 rounded-full ${a.progress === 100
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                      }`}
                  >
                    {a.progress === 100 ? t("dashboard.assignments_status." + toCamelCase("Completed")) : t("dashboard.assignments_status." + toCamelCase("In Progress"))}
                  </span>
                </div>
                <Progress value={a.progress} className="h-2 mb-3" />
                <Button
                  className="w-full"
                  variant={a.progress === 100 ? "secondary" : "default"}
                >
                  {a.progress === 100 ? "View Submission" : "Continue"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-primary">
            {t("dashboard.tabs.my_courses")}
          </h2>
          <Button variant="outline" size="sm">
            {t("dashboard.browseCourses")}
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <Card
              key={c.id}
              className="rounded-2xl border shadow-sm hover:shadow-md transition"
            >
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-1 text-primary">
                  {c.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Instructor: {c.instructor}
                </p>
                <Button className="w-full" variant="default">
                  Continue Course
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
interface CardItemProps {
  icon: ReactElement<LucideProps>
  count: number | string;
  title: string;

}
Dashboard.CardItem = ({ icon: Icon, count, title }: CardItemProps) => (
  <Card className="rounded-2xl shadow-sm border-2 bg-blue-900/5 border-blue-900/50">
    <CardContent className="p-5 flex items-center justify-between">
      <div>
        <p className="text-gray-500"> {title} </p>
        <h3 className="text-xl font-semibold">{count} </h3>
      </div>
      {Icon}
    </CardContent>
  </Card>

)