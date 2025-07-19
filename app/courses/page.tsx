import Course from "@/components/pages/instructors/Course";
import WrapperBody from "@/components/WrapperBody"
import { YouTubeSearchResponse } from "@/types/videos";
import axios, { AxiosResponse } from "axios"
const page = async () => {
    const handelFetchProgramming = async () => {
        try {
            const data: AxiosResponse<YouTubeSearchResponse> = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=js&type=playlist&maxResults=10&key=${process.env.YT_API_KEY}`, {
                headers: {
                    "Authorization": `Berear eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..VkK6OQF_9ak6SjgM.PfQCmv0txiq_qqXcLxMuJ2MK1lw58qSzNRWrm95yzDB0_55_US_KBoK-psRga5OxqRBACyZc_ZpQm4oJGoaR06qE4u8PJC2Ub7Iud96pFfoRDXvi18e7n9uyvvwhuFAz9pgMjusuIt1cakYSHCdtL1F-Er2E2Byv7WAXCpnhntJIHduOXvtq2fmiAXKc4SAu0RiOm61LPzsqd2xI5ERu1-UfSURda-2QCDOujwii3w5dOT21LWVOK-mG93iGVOSpYFjIjx3QG8Koj2x0plCKOYbWXl0QdXjoYQKNqFhTYaxbR0xguVESpLpiKiEEiKICVm-MtFWXWgOAZrw2bdgkom1_FqGDKs5zz63Q0D8.Lkg8NB0-fBNtzjmljE716g`
                }
            });
            return data.data
        } catch (error: any) {
            throw Error(error)
        }

    }
    const data = await handelFetchProgramming()
    // https://www.googleapis.com/youtube/v3/search?part=snippet&q=js&type=video&maxResults=10&key=AIzaSyA6txX3U9xdlIQiGXldTC5JE-o17kDRobo
    return (
        <WrapperBody>
            {data.items.map((el) => (
                <Course id={el.id.playlistId!} title={el.snippet.title} img={el.snippet.thumbnails.high.url} />
            ))}
        </WrapperBody>
    )
}

export default page