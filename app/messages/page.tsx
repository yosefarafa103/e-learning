"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
    useSidebar,
} from "@/components/ui/sidebar"

export default function Page() {
    const { open } = useSidebar();
    
    return (
        <SidebarProvider
            open={open}
            style={
                {
                    "--sidebar-width": "350px",
                } as React.CSSProperties
            }
        >
            <AppSidebar />
            <div className="flex flex-1 flex-col gap-4 p-4">
                {Array.from({ length: 24 }).map((_, index) => (
                    <div> Chat {index + 1} </div>
                ))}
            </div>
        </SidebarProvider>
    )
}
