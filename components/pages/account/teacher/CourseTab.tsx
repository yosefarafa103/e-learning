"use client"
import { useTranslation } from "react-i18next";
const CourseTab = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="text-2xl font-semibold text-primary mb-4"> {t("dashboard.tabs.my_courses")} </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-background rounded-2xl shadow-sm p-4 border">
          <h3 className="font-medium">React Basics</h3>
          <p className="text-sm text-gray-500">
            Learn how to build apps with React.
          </p>
        </div>
        <div className="bg-background rounded-2xl shadow-sm p-4 border">
          <h3 className="font-medium">Next.js Mastery</h3>
          <p className="text-sm text-gray-500">
            Build modern web apps with Next.js.
          </p>
        </div>
      </div>
    </>
  );
};

export default CourseTab;
