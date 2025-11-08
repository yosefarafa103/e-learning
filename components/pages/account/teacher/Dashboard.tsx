"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AddNewCourseDialog from "../../coursePage/AddNewCourseForm";
import CourseTab from "./CourseTab";
import ChargeTab from "./ChargeTab";
import InstructorSettings from "./Settings";
import { MobileNavDropdown } from "./MobileNavDropDown";
import GroupsTab from "../../../atoms/groupPage/GroupsTab";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import Loader from "@/components/atoms/Loader";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<
    "courses" | "charge" | "group" | "settings"
  >("courses");
  const { data, isLoading } = useCurrentUser();
  const { t } = useTranslation();

  return (
    <div className="min-h-svh bg-background">
      <nav className="bg-background shadow-sm border-b">
        <div className="flex items-center justify-between p-4 w-full">
          {isLoading ? (
            <Loader />
          ) : (
            <h3 className="text-xl font-semibold text-blue-500 flex">
              {t("dashboard.welcome", { name: data?.name || "" })}
            </h3>
          )}
          <MobileNavDropdown
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="flex items-center gap-3 justify-end max-sm:hidden">
            <Button
              variant={activeTab === "courses" ? "blue" : "ghost"}
              className={cn(
                "transition-all",
                activeTab === "courses" && "shadow-md"
              )}
              onClick={() => setActiveTab("courses")}
            >
              {t("dashboard.tabs.courses")}
            </Button>
            <Button
              variant={activeTab === "charge" ? "blue" : "ghost"}
              className={cn(
                "transition-all",
                activeTab === "charge" && "shadow-md"
              )}
              onClick={() => setActiveTab("charge")}
            >
              {t("dashboard.tabs.charge")}
            </Button>
            <Button
              variant={activeTab === "group" ? "blue" : "ghost"}
              className={cn(
                "transition-all",
                activeTab === "group" && "shadow-md"
              )}
              onClick={() => setActiveTab("group")}
            >
              {t("dashboard.tabs.groups")}
            </Button>
            <Button
              variant={activeTab === "settings" ? "blue" : "ghost"}
              onClick={() => setActiveTab("settings")}
            >
              {t("dashboard.tabs.settings")}
            </Button>
            <AddNewCourseDialog />
          </div>
        </div>
      </nav>

      <section className="py-6 px-3 sm:px-5">
        {activeTab === "courses" && (
          <motion.div
            key="courses"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <CourseTab />
          </motion.div>
        )}

        {activeTab === "charge" && (
          <motion.div
            key="charge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <ChargeTab />
          </motion.div>
        )}

        {activeTab === "settings" && (
          <motion.div
            key="settings"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <InstructorSettings />
          </motion.div>
        )}

        {activeTab === "group" && (
          <motion.div
            key="group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <GroupsTab />
          </motion.div>
        )}
      </section>
    </div>
  );
}
