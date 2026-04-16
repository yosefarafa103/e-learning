"use client";

import { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  User,
  Mail,
  BookOpen,
  GraduationCap,
  Edit3,
  TrendingUp,
  Info,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { transformNumberToAR } from "@/helpers";
import { useDirection } from "@/hooks/useDirection";
import { fakeUser } from "@/constants/general";
import type { User as UserType } from "@/types/user";
export default function Profile() {
  const { dir } = useDirection();
  const handelNumToAr = useCallback(
    (num: number, d: typeof dir) => transformNumberToAR(num.toString(), d),
    [dir],
  );
  const [user, setUser] = useState<UserType>(fakeUser);
  useEffect(() => {
    setUser({
      ...user,
      gpa: handelNumToAr(3.8, dir),
      completedCourses: handelNumToAr(12, dir),
      inProgressCourses: handelNumToAr(3, dir),
    });
  }, [dir]);
  return (
    <div className="mx-auto space-y-3">
      <Profile.Landing {...user} />
      <div className="grid mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Profile.AcadimicInformation {...user} />
        <Profile.Overview {...user} />
        <Profile.Performance />
        <Profile.UserInfo {...user} />
      </div>
    </div>
  );
}
Profile.Landing = (user: UserType) => {
  const { t } = useTranslation();
  const { dir } = useDirection();

  return (
    <Card dir={dir} className="rounded-2xl overflow-hidden pt-0">
      <div className="bg-gradient-to-r from-blue-400 to-indigo-900 h-50" />
      <CardContent className="-mt-25 flex flex-col sm:flex-row sm:items-end items-center gap-4 p-6">
        <img
          src={user.avatar}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
        />
        <div className="flex-1 max-sm:text-center">
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">
            {user.major} — {user.university}
          </p>
          <p className="text-gray-500 text-sm">{user.email}</p>
        </div>
        <Button className="gap-2">
          <Edit3 size={18} /> {t("editYourInfo")}
        </Button>
      </CardContent>
    </Card>
  );
};

Profile.UserInfo = (user: UserType) => {
  const { t } = useTranslation();
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-5 space-y-3">
        <div className="flex items-center gap-3 mb-2">
          <Info />
          <h3 className="text-lg font-semibold mb-3">
            {t("profile_sections.contactInformation")}
          </h3>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <User className="text-blue-600" size={18} />
          <span>{user.name}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <Mail className="text-blue-600" size={18} />
          <span>{user.email}</span>
        </div>
      </CardContent>
    </Card>
  );
};

Profile.Performance = () => {
  const { t } = useTranslation();
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-5">
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="text-purple-600" />
          <h3 className="font-semibold text-lg">
            {t("profile_sections.performance")}
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          {t("profile_sections.courses.overallProgress")}
        </p>
        <Progress value={78} className="h-2 mb-2" />
        <p className="text-sm text-gray-500">
          {t("profile_sections.courses.courseCompletion")}
          {transformNumberToAR((78).toString())}%
        </p>
      </CardContent>
    </Card>
  );
};

Profile.Overview = (user: UserType) => {
  const { t } = useTranslation();
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-5">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="text-green-600" />
          <h3 className="font-semibold text-lg"> {t("overview")} </h3>
        </div>
        <p className="text-sm text-gray-600">
          {t("profile_sections.courses.completedCourses")}:
          <span className="font-medium">{user.completedCourses}</span>
        </p>
        <p className="text-sm text-gray-600">
          {t("dashboard.assignments_status.inProgress")}:
          <span className="font-medium">{user.inProgressCourses}</span>
        </p>
      </CardContent>
    </Card>
  );
};

Profile.AcadimicInformation = (user: UserType) => {
  const { t } = useTranslation();
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-5">
        <div className="flex items-center gap-3 mb-2">
          <GraduationCap className="text-blue-600" />
          <h3 className="font-semibold text-lg">
            {" "}
            {t("profile_sections.academicInfo")}{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600">
          {t("profile_sections.year")} :{" "}
          <span className="font-medium">{user.year}</span>
        </p>
        <p className="text-sm text-gray-600">
          {t("profile_sections.gpa")}:
          <span className="font-medium">{user.gpa}</span>
        </p>
        <p className="text-sm text-gray-600">
          {t("profile_sections.major")}:
          <span className="font-medium">{user.major}</span>
        </p>
      </CardContent>
    </Card>
  );
};
