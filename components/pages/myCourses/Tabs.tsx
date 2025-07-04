"use client"

import useTabsStore from '@/_stores/useTabsStore';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import React, { useState } from 'react'

const Tabs = ({ tabs }: { tabs: string[] }) => {
    const { activeTab,
        setActiveTab
    } = useTabsStore()
    return (
        <>
            <section className="flex items-center gap-3 h-fit w-full">
                {tabs.map((item, i) => (
                    <Button onClick={() => setActiveTab(i)} className={`focus-visible:border-transparent py-5 bg-transparent ${activeTab === i ? "border-b-solid border-b-[3px] border-b-[#000] rounded-[0px] " : ""}`} variant={"secondary"}> {item} </Button>
                ))}
            </section>
            <Separator className='mb-3' />
        </>
    )
}

export default Tabs