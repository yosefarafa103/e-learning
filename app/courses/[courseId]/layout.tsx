import WrapperBody from "@/components/WrapperBody";
import { YouTubeSearchResponse } from "@/types/videos";
import axios from "axios";

type Props = {
    params: Promise<{ courseId: string }>;
};
export async function generateMetadata({ params }: {
    params: Promise<{ courseId: string }>
}) {
    const { courseId } = await params;
    const playList: YouTubeSearchResponse = await (await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${courseId}&maxResults=200&key=${process.env.YT_API_KEY}`)).data
    return {
        title: playList.items[0].snippet.title
    }
}
export default function RootLayout({
    children,
    paidUsers,
    unPaidUsers
}: Readonly<{
    children: React.ReactNode,
    paidUsers: React.ReactNode,
    unPaidUsers: React.ReactNode,

}>) {
    const isPaid = true
    return (
        <WrapperBody>
            {isPaid ?
                children
                :
                paidUsers
            }
        </WrapperBody>
    );
}
