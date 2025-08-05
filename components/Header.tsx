// "use client"
import Link from "next/link";
import logo from "@/app/_assets/logo.png"
import Image from "next/image";
import { Separator } from "./ui/separator";
import HeaderMobile from "./HeaderMobile";
import AuthAreaHeader from "./atoms/AuthAreaHeader";
import React from 'react'
import ToggleTheme from "./ToggleTheme";
import HeaderLinks from "./atoms/HeaderLinks";

const Header = () => {
    return (
        <>
            <header className={`py-3 fixed top-0 w-full flex justify-between bg-background px-5 items-center z-[999] shadow-sm shadow-amber-50`}>
                <section className="flex items-center gap-3 w-full max-sm:justify-between">
                    <div className="center-flex">
                        <Link href="/">
                            <Image src={logo.src} width={120} height={50} className="object-cover sm:h-[50px] h-[50px] max-sm:w-[100px]" alt="logo" priority />
                        </Link>
                    </div>
                    <HeaderLinks />
                    <section className="flex items-center gap-2">

                        <HeaderMobile />
                    </section>
                </section>
                <AuthAreaHeader />
                <ToggleTheme />
            </header >
        </>
    )
}

export default Header