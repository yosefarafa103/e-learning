"use client"
import useLangugeStore from "@/_stores/langugeStore"
import { useEffect } from "react";
import "@/lib/i18n"
import i18n from "@/lib/i18n";
import { SessionProvider } from "next-auth/react"
import {  SidebarProvider,  } from "./ui/sidebar";
import { useCookies } from 'next-client-cookies';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const PageWrapper = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const queryClient = new QueryClient()
    const { currentLanguge } = useLangugeStore()
    useEffect(() => {
        i18n.changeLanguage(currentLanguge)
        document.dir = currentLanguge === "ar" ? "rtl" : "ltr";
    }, [currentLanguge]);
    const cookieStore = useCookies()
    // @ts-ignore
    const defaultOpen = cookieStore.get("sidebar_state")!?.value === "true"
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <SessionProvider>
                    <SidebarProvider defaultOpen={defaultOpen} className="w-full">
                        <section className="pt-[80px]">
                            {children}
                        </section>
                    </SidebarProvider>
                </SessionProvider >
            </QueryClientProvider>
        </>
    );
}

export default PageWrapper