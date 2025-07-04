"use client"
import useLangugeStore from "@/_stores/langugeStore"
import { useEffect } from "react";
import "@/lib/i18n"
import i18n from "@/lib/i18n";
import { SessionProvider } from "next-auth/react"
import { Header } from "./Header";
import { Sidebar, SidebarProvider } from "./ui/sidebar";

const PageWrapper = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const { currentLanguge } = useLangugeStore()
    useEffect(() => {
        i18n.changeLanguage(currentLanguge)
        document.dir = currentLanguge === "ar" ? "rtl" : "ltr";
    }, [currentLanguge]);
    return (
        <>
            <SessionProvider>
                <SidebarProvider className="w-full">
                    <Header />
                    <section className="pt-[80px]">

                        {children}
                    </section>
                </SidebarProvider>
            </SessionProvider>
        </>
    );
}

export default PageWrapper