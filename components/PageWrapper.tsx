"use client"
import useLangugeStore from "@/_stores/langugeStore"
import { useEffect } from "react";
import "@/lib/i18n"
import i18n from "@/lib/i18n";
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
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <section className="pt-[80px] px-5 md:px-[2%] lg:px-[5%]">
                    {children}
                </section>
            </QueryClientProvider>
        </>
    );
}

export default PageWrapper