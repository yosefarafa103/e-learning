import ContentTabs from '@/components/pages/coursePage/ContentTabs';
import NavigationBreadCrumb from '@/components/pages/coursePage/NavigationBreadCrumb'
import PageContent from '@/components/pages/coursePage/PageContent'
import WrapperBody from '@/components/WrapperBody';
import { getChannelDetails, getCourseComments } from '@/services/functions';
import { CommentThreadListResponse, YouTubeChannelListResponse, YouTubePlaylistItemsResponse, YouTubeSearchResponse } from '@/types/videos'
import axios, { AxiosResponse } from 'axios'
import Head from 'next/head';
import { cookies } from 'next/headers';


const page = async ({ params }: Props) => {
    const { courseId } = await params;
    const playList: YouTubePlaylistItemsResponse = await (await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${courseId}&maxResults=200&key=${process.env.YT_API_KEY}`)).data
    const comments: CommentThreadListResponse = await getCourseComments(playList.items[0].snippet?.resourceId?.videoId);
    const channel: YouTubeChannelListResponse = await getChannelDetails(playList.items[0].snippet.channelId)
    console.log((await cookies()).get("hasPayCourse"));

    return (
        <>
            <WrapperBody>
                <NavigationBreadCrumb courseId={courseId} course={playList.items[0].snippet.title} />
                <ContentTabs channel={channel} comments={comments} playList={playList} />
            </WrapperBody>
            {/* <PageContent /> */}
        </>
    )
}

export default page