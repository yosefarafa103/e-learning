import {
  CommentThreadListResponse,
  YouTubeChannelListResponse,
} from "@/types/videos";
import axios, { AxiosResponse } from "axios";

export const getCourseComments = async (vidId: string) => {
  const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${vidId}&maxResults=80&key=${process.env.YT_API_KEY}`;
  try {
    const commentsData: AxiosResponse<CommentThreadListResponse> =
      await axios.get(`${url}`, {});
    return commentsData.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getChannelDetails = async (channelId: string) => {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.YT_API_KEY}`;
  try {
    const channelData: AxiosResponse<YouTubeChannelListResponse> =
      await axios.get(`${url}`);
    return channelData.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
