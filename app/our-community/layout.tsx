"use client"
import FullHeading from "@/components/molecules/FullHeading"
import { Button } from "@/components/ui/button"
import WrapperBody from "@/components/WrapperBody";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

const layout = ({ children }: { children: React.ReactNode }) => {
    const { t } = useTranslation();
    return (
        <WrapperBody>
            <FullHeading lanKey={t("our Community.headPageTitle")} desc={t("our Community.headPageDescription")} />
            <section className="my-4">
                <Button variant={"green"} className="float-end"> اضف موضوع جديد <Plus /> </Button>
            </section>
            <main className="mt-12">
                {children}
            </main>
        </WrapperBody>
    )
}

export default layout