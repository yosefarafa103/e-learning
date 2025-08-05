"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TeacherTabs = () => {
    const pathname = usePathname();
    const [active, setActive] = useState<number>(0);
    return (
        <div className="flex items-center gap-3 ">
            {
                [
                    "My Courses",
                    "My Charge",
                    "Course Statistics",
                ].map((item, idx) => {
                    const isActive = pathname === `/account/${item.toLowerCase().replace(" ", "-")}`;
                    return (
                        <div onClick={() => setActive(idx)} key={item} className="flex items-center">
                            <Button variant={isActive ? "blue" : "secondary"} className="cursor-pointer" asChild>
                                <Link href={`/account/${item.toLowerCase().replace(" ", "-")}`}> {item} </Link>
                            </Button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TeacherTabs