"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { List } from "lucide-react";
import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/atoms/Loader";
import { io } from "socket.io-client";
import { useTranslation } from "react-i18next";
const MyCourses = dynamic(() => import("./MyCourses"));
const Dashboard = dynamic(() => import("./Dashboard"));
const MyMessages = dynamic(() => import("./MyMessages"));
const Assignments = dynamic(() => import("./Assignments"));
const Settings = dynamic(() => import("./Settings"));
const Profile = dynamic(() => import("./Profile"));

const TabsStudent = () => {
  const { t: translation } = useTranslation()
  const tabs = [
    {
      id: "dashboard",
      tKey: "",
      label: "Dashboard ", component: <Dashboard />
    },
    {
      id: "my_courses",
      label: "My Courses", component: <MyCourses />
    },
    {
      id: "assignments",
      label: "Assignments", component: <Assignments />
    },
    {
      id: "messages",
      label: "Messages",
      component: <MyMessages />,
    },
    { id: "profile", label: "Profile", component: <Profile /> },
    { id: "settings", label: "Settings", component: <Settings /> },
  ];
  const [active, setActive] = useState("dashboard");

  const socket = io("http://localhost:5000");
  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Connected to socket server:", socket.id);
    });
    socket.on("conenction-success", (data) => {
      console.log(data?.user, "connected to our server");
    });
    socket.on("disconnected-success", (data) => {
      console.log(data?.user, "socket disconnected from our server");
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <>
      <div className="rounded-2xl border-blue-900 sm:border-2 p-2 sm:sticky top-[80px] z-[999] bg-blue-900/50">
        <>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 max-sm:hidden">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 w-full sm:w-auto ${active === t.id
                  ? "bg-white dark:bg-blue-900 dark:text-white text-blue-900  border-white"
                  : "bg-background dark:text-white  border-blue-900 hover:bg-foreground hover:text-background"
                  }`}
              >
                {translation(`dashboard.tabs.${t.id.toLowerCase().trim()}`)}
              </button>
            ))}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="float-end sm:hidden">
                <List />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[150px]">
              {tabs.map((t) => (
                <DropdownMenuItem onClick={() => setActive(t.id)} key={t.id}>
                  <h2 className="font-semibold mb-2">{t.label}</h2>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      </div>
      <div className="dark:border-muted border-transparent border rounded-xl text-gray-700 max-sm:hidde mt-5 p-5">
        <Suspense fallback={<Loader />}>
          {tabs.map((t) => active === t.id && t?.component)}
        </Suspense>
      </div>
    </>
  );
};

export default TabsStudent;
