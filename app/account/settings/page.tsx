import type { Metadata } from "next";
import PageContent from "@/components/pages/settings/PageContent";
const metadata: Metadata = {
    title: "Settings",
    description: "Settings Page"
}
const page = () => {
    return (
        <>
            <PageContent />
        </>
    )
}

export default page