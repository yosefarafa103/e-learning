"use client"
import { useTranslation } from "react-i18next";
import { Separator } from "../ui/separator";
type Props = {
    desc: string;
    lanKey?: string
}

const FullHeading = ({ desc,  lanKey }: Props) => {
    return (
        <>
            <section className="flex flex-col gap-3">
                <h4 className="font-bold text-3xl"> {(`${lanKey}`)} </h4>
                <p className="text-sm text-gray-500 font-semibold"> {desc} </p>
            </section>
            <Separator className="my-4" />
        </>
    )
}

export default FullHeading