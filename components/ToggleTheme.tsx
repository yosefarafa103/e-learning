"use client"
import { SunMedium, SunMoon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useTheme } from "next-themes"
import { Button } from "./ui/button";
const ToggleTheme = () => {
    const { theme, setTheme, themes } = useTheme();
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant={"secondary"} size={"icon"} className="mx-2">
                        {theme === "dark" ?
                            <SunMedium /> :
                            <SunMoon />
                        }
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-5">
                    <DropdownMenuItem className="w-fit" asChild onClick={() => setTheme("dark")}>
                        <Button variant={"secondary"} >
                            <SunMedium /> Light
                        </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="w-fit" asChild onClick={() => setTheme("light")}>
                        <Button variant={"secondary"}>
                            <SunMoon />Dark
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default ToggleTheme