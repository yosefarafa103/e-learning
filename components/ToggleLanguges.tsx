"use client"
import React, { useCallback } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Languages } from 'lucide-react'
import i18n from '@/lib/i18n'
import { Button } from './ui/button'
import useLangugeStore from "@/_stores/langugeStore"
import { handelChangeLanguge } from '@/utils/handelChangeLanguge'

const ToggleLanguges = () => {
    const langugesStore = useLangugeStore()
    const handelSwitchLanguge = useCallback(handelChangeLanguge, [])
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Languages className={"text-sm"} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-2">
                <Button className="w-full" size={"icon"} onClick={() => {
                    i18n.changeLanguage("ar")
                    handelSwitchLanguge(i18n.language)
                }} variant={"ghost"} >
                    عربي
                </Button>
                <Button className="w-full" size={"icon"} onClick={() => {
                    i18n.changeLanguage("en")
                    handelSwitchLanguge(i18n.language)
                }} variant={"ghost"} >
                    EN
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ToggleLanguges