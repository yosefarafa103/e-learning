"use client"
import { CollapsibleContent } from '@radix-ui/react-collapsible';
import React, { useEffect, useState } from 'react'
import { Collapsible, CollapsibleTrigger } from './ui/collapsible';
import { Button } from './ui/button';
import { List } from 'lucide-react';
import Link from 'next/link';
import { Separator } from './ui/separator';
import ToggleLanguges from './ToggleLanguges';

const HeaderMobile = () => {
    let links: { link: string, title: string }[] = [{ link: "/courses", title: "الكورسات" },
    { link: "/explore", title: "تصفح" },
    { link: "/instructors", title: "المدربين" }
    ]
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        return () => {
            setIsOpen(false)
        }
    }, [])
    return (
        <>
        <ToggleLanguges />
            <Collapsible open={isOpen} className="sm:hidden">
                <CollapsibleTrigger onClick={() => setIsOpen(true)}>
                    <Button asChild size={"icon"} variant={"ghost"}>
                        <List className="sm:hidden cursor-pointer " />

                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="fixed top-[80px] right-0 w-full bg-background z-10 ">
                    {isOpen &&
                        <>
                            {links.map((l) => (
                                <>
                                    <Button key={l.link} onClick={() => setIsOpen(!isOpen)} asChild className="w-full block" variant={"ghost"}>
                                        <Link href={l.link} key={l.link} >
                                            {
                                                l.title
                                            }
                                        </Link>
                                    </Button>
                                    <Separator />
                                </>

                            ))}
                        </>

                    }
                </CollapsibleContent>
            </Collapsible>
        </>
    )
}

export default HeaderMobile