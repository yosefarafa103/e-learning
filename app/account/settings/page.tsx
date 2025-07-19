import PageContent from "@/components/pages/settings/PageContent";
import type { Metadata } from "next";

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