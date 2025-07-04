"use client"
import Link from "next/link";
import logo from "@/app/_assets/logo.png"
import Image from "next/image";
import { Button } from "./ui/button";
import { List } from "lucide-react";
import { Separator } from "./ui/separator";
import ToggleLanguges from "./ToggleLanguges";

import HeaderMobile from "./HeaderMobile";
import ToggleTheme from "./ToggleTheme";
import { useTranslation } from "react-i18next";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Loader from "./atoms/Loader";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useDirection } from "@/hooks/useDirection";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
export function Header() {
    const { data, status, } = useSession()
    let links: { link: string, title: string }[] = [{ link: "/courses", title: "الكورسات" },
    { link: "/explore", title: "تصفح" },
    { link: "/instructors", title: "المدربين" }
    ]
    const { dir } = useDirection()
    const { t } = useTranslation()
    const path = usePathname();
    const { open } = useSidebar()
    return (
        <>
            <header className={`py-3 fixed top-0 w-full flex justify-between bg-background px-5 items-center ${cn(path.startsWith("/account") && open ? "sm:!w-[calc(100%-260px)] " : "sm:!w-full", dir === "right" && open ? "sm:right-[250px]" : dir === "left" && open ? "sm:left-[250px]" : "" )}`}>
                <section className="flex items-center gap-3 w-full max-sm:justify-between">
                    <SidebarTrigger />
                    <Link href="/">
                        <Image src={logo.src} width={120} height={50} className="object-cover sm:h-[50px] h-[50px] max-sm:w-[100px]" alt="logo" priority />
                    </Link>
                    <section className="flex items-center gap-2">
                        {status !== "authenticated" &&
                            <Button variant={"secondary"} className="cursor-pointer sm:hidden"> {t("login")} </Button>
                        }
                        <HeaderMobile />
                    </section>
                    <section className="sm:flex items-center gap-1 hidden">
                        {links.map((l) => (
                            <Button key={l.link} asChild variant={"ghost"}>
                                <Link href={l.link} key={l.link} >
                                    {
                                        t(`${l.link.slice(1)}`)
                                    }
                                </Link>
                            </Button>
                        ))}

                        <ToggleLanguges />
                    </section>

                </section>
                {status !== "authenticated" && status === "loading" ? <Loader /> : status === "authenticated" ? <>
                    <DropdownMenu dir={(document.getElementsByTagName("html")[0].dir) as "rtl" | "ltr"}>
                        <DropdownMenuTrigger>
                            <Avatar title={data?.user?.name!}>
                                <AvatarImage src={data?.user?.image!} />
                                <AvatarFallback> {data?.user?.name} </AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="min-w-[250px]">
                            <DropdownMenuItem asChild>
                                <Link href={`/account`}> {t("myAccount")} </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </> :
                    <Button variant={"secondary"} className="cursor-pointer max-sm:hidden" asChild>
                        <Link href={`/login`}>
                            {t("login")}</Link>
                    </Button>

                }
                <ToggleTheme />
            </header >
            <Separator />
        </>
    )
}