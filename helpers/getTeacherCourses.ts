import { IUser } from "@/types/user";
import axios, { Axios, AxiosResponse } from "axios";
import { ICourse } from "@/types/courses";
import { getSignInUser } from "./getSignInUser";
export async function getTeacherCourses() {
    try {
        const user = await getSignInUser()
        const response: AxiosResponse<{ courses: ICourse[] }> = await axios.get(`https://e-learning-eight-tau.vercel.app/api/courses/user/${user!._id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}