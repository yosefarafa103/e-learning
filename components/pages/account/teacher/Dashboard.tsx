"use client";
import React, { useState } from "react";
import AddNewCourseDialog from "../../coursePage/AddNewCourseForm";
import { MobileNavDropdown } from "./MobileNavDropDown";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import Loader from "@/components/atoms/Loader";
import { useTranslation } from "react-i18next";
import { Tabs, } from "@/types/dashboard";
import { TabItem } from "@/components/atoms/TabItem";
import { tabs } from "@/constants/dashboard";
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tabs>("courses");
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
            {tabs.map((tab, idx) =>
              <TabItem.Button
                itemKey={idx === tabs.length - 1 ? tab.key + "s" as any : tab.key}
                setActiveTab={setActiveTab}
                t={t}
                activeTab={activeTab} >
              </TabItem.Button>
            )}
            <AddNewCourseDialog />
          </div>
        </div>
      </nav>
      <section className="py-6 px-3 sm:px-5">
        {tabs.map((tab) => activeTab === tab.key ? <TabItem key={tab.key}>
          <tab.element />
        </TabItem> : null)}
      </section>
    </div>
  );
}

