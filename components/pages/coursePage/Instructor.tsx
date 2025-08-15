import Heading from "@/components/atoms/Heading";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { YouTubeChannelListResponse } from "@/types/videos";

export default function Instructor({ channel }: { channel: YouTubeChannelListResponse }) {
    console.log();
    const { snippet: { title, description, thumbnails: { medium } } } = channel.items[0]

    const { t } = useTranslation();
    return (
        <>
            <Heading title={t("instructor")} />
            <section className="center-flex mt-4 max-sm:flex-col max-sm:!items-start">
                <Image className="rounded-[50%] object-cover max-sm:mx-auto" width={150} height={150} src={medium!.url} alt="Instructor" />
                <section className="">
                    <h3 className="collapsed-link_course max-sm:text-center">{title}</h3>
                    <p className="paragraph sepcail !text-foreground mt-5"> {description} </p>
                </section>
            </section>
        </>
    );
}
