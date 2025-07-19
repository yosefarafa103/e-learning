import Heading from "@/components/atoms/Heading";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import img from "@/app/_assets/emmanuel-serratrice-black-guy-disney-03.jpg";
import { YouTubeChannel, YouTubeChannelListResponse } from "@/types/videos";

export default function Instructor({ channel }: { channel: YouTubeChannelListResponse }) {
    console.log();
    const { snippet: { title, description, thumbnails: { medium } } } = channel.items[0]

    const { t } = useTranslation();
    return (
        <>
            <Heading title={t("instructor")} />
            <section className="center-flex mt-4 max-sm:flex-col max-sm:!items-start">
                <Image className="rounded-[50%] object-cover max-sm:mx-auto" width={150} height={150} src={medium!.url} alt="Instructor" />
                <section className="column">
                    <h3 className="collapsed-link_course max-sm:text-center">{title}</h3>
                    <p className="paragraph sepcail"> {description } </p>
                </section>
            </section>
            <p className="paragraph text-center mt-4"> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </>
    );
}
