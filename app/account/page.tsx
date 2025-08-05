"use client"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from "@/components/ui/sidebar"
import { useDirection } from "@/hooks/useDirection";
type Sides = "left" | "right"
import img from "@/app/_assets/emmanuel-serratrice-black-guy-disney-03.jpg"
import ProfileAccount from "@/components/atoms/ProfileAccount";
import { Separator } from "@/components/ui/separator";
import { LogOut, Mail, Settings, Youtube } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";

const page = () => {
    const router = useRouter()
    // useEffect(() => router.push("/account/my-courses"), [])
    const { dir } = useDirection();
    const { t } = useTranslation()
    return (
        <>
            <Sidebar variant="floating" side={dir as Sides} >
                <SidebarTrigger className="fixed " />
                <SidebarHeader className="flex">
                    <ProfileAccount img={img} personName="Ahmed. A" personDescription="Student" />
                </SidebarHeader>
                <Separator />
                <SidebarContent>
                    <SidebarMenu>
                        {[
                            {
                                icon: Youtube,
                                text: "دوراتي",
                                link: "/my-courses"
                            },
                            {
                                icon: Mail,
                                text: "الرسائل",
                                link: "/messages"
                            },
                            {
                                icon: Settings,
                                text: "الاعدادات",
                                link: "/settings"
                            }
                        ].map((item) => (

                            <SidebarMenuItem key={item.icon + ""}>
                                <SidebarMenuButton className="text-lg" asChild>
                                    <Link href={`/account${item.link}`}>
                                        <item.icon />
                                        {item.text}
                                    </Link>

                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}

                    </SidebarMenu>
                </SidebarContent>
                <SidebarFooter>
                    <Button variant={"destructive"} onClick={() => signOut()}> {t("logout")} <LogOut /> </Button>
                </SidebarFooter>
            </Sidebar>
        </>
    )
}

export default page