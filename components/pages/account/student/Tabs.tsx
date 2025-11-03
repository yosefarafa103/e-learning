"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
const MyCourses = dynamic(() => import("./MyCourses"));
const Dashboard = dynamic(() => import("./Dashboard"));
const MyMessages = dynamic(() => import("./MyMessages"));
const Assignments = dynamic(() => import("./Assignments"));
const Settings = dynamic(() => import("./Settings"));
const Profile = dynamic(() => import("./Profile"));
const TabsStudent = () => {
  const [active, setActive] = useState("dashboard");
  const tabs = [
    { id: "dashboard", label: "Dashboard ", component: <Dashboard /> },
    { id: "courses", label: "My Courses", component: <MyCourses /> },
    { id: "assignments", label: "Assignments", component: <Assignments /> },
    {
      id: "messages",
      label: "Messages",
      component: <MyMessages />,
    },
    { id: "profile", label: "Profile", component: <Profile /> },
    { id: "settings", label: "Settings", component: <Settings /> },
  ];
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
      <Card className="rounded-2xl border-muted border-2 py-3 bg-primary-foreground">
        <CardContent className="px-4">
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 mb-6 max-sm:hidden">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 w-full sm:w-auto ${
                  active === t.id
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {t.label}
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
        </CardContent>
      </Card>
      <div className="dark:border-muted border-transparent border rounded-xl text-gray-700 max-sm:hidde mt-5">
        <Suspense fallback={<Loader />}>
          {tabs.map((t) => active === t.id && t?.component)}
        </Suspense>
      </div>
    </>
  );
};

export default TabsStudent;
