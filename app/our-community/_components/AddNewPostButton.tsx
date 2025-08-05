"use client"

import FullHeading from "@/components/molecules/FullHeading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
const AddNewPostButton = () => {
    const pathname = usePathname();
    const { t } = useTranslation()
    return (
        <>
            <FullHeading lanKey={t("our Community.headPageTitle")} desc={t("our Community.headPageDescription")} />

            <Button disabled={pathname.split('/').length !== 1} variant={"green"} className="float-end" asChild>
                {pathname.split('/').filter((e) => e).length == 1 ?
                    <Link href={`/our-community/add`}>
                        اضف موضوع جديد <Plus />
                    </Link>
                    :
                    `
                اضف موضوع جديد ${<Plus />}
                `
                }
            </Button>
        </>
    )
}

export default AddNewPostButton