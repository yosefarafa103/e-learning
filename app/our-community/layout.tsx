// "use client"
import FullHeading from "@/components/molecules/FullHeading"
import { Button } from "@/components/ui/button"
import WrapperBody from "@/components/WrapperBody";
import { Plus } from "lucide-react";
import Link from "next/link";
import AddNewPostButton from "./_components/AddNewPostButton";

const layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <WrapperBody>
            <AddNewPostButton />
            <main className="mt-12">
                {children}
            </main>
        </WrapperBody>
    )
}

export default layout