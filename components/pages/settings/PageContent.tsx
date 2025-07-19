"use client";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import useLangugeStore from "@/_stores/langugeStore";
import { handelChangeLanguge } from "@/utils/handelChangeLanguge";
import { memo, Suspense } from "react";
import { Label } from "@/components/ui/label";
import Loader from "@/components/atoms/Loader";

// Dynamic component imports
const Heading = dynamic(() => import("@/components/atoms/Heading"));
const SettingsForm = dynamic(() => import("./SettingsForm"));
const Combobox = dynamic(() => import("@/components/atoms/ComboBox"));
const ChangePasswordForm = dynamic(() => import("./ChangePasswordForm"));

const PageContent = () => {
    const setLanguge = useLangugeStore((s) => s.setCurrentLanguge)
    const { t } = useTranslation();
    const frameworks = [
        {
            value: "ar",
            label: "Arabic",
        },
        {
            value: "en",
            label: "English",
        },

    ]
    return (
        <>
            <Suspense fallback={<Loader />} >

                <Heading title={`${t("settings")}`} />
                <SettingsForm />
                <Label asChild>
                    <h3 className="text-xl font-bold capitalize my-4"> {t("preferredLanguages")} </h3>
                </Label>
                <Combobox handelOnChangeValue={handelChangeLanguge} searchedData={frameworks} searchFor="Languge" />
                <ChangePasswordForm />
            </Suspense>

        </>
    )
}

export default memo(PageContent)