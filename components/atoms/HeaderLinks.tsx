"use client"

import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import Link from 'next/link'
import ToggleLanguges from '../ToggleLanguges'

const HeaderLinks = () => {
    const { t } = useTranslation()

    let links: { link: string, title: string }[] = [{ link: "/courses", title: "الكورسات" },
    { link: "/explore", title: "تصفح" },
    { link: "/instructors", title: "المدربين" },
    { link: "/our Community", title: "مجتمعنا" }
    ]
    return (
        <section className="sm:flex items-center gap-1 hidden">
            {links.map((l, i) => (
                <Button key={l.link} asChild variant={"ghost"}>
                    <Link href={l.link.split(" ").join("-").toLowerCase()} key={l.link} >
                        {
                            t(`${i !== 3 ? l.link.slice(1) : `our Community.title`}`)
                        }
                    </Link>
                </Button>
            ))}

            <ToggleLanguges />
        </section>
    )
}

export default HeaderLinks