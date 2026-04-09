import { getSignInUser } from "@/helpers/getSignInUser";
import { CoursesResponse, ICourse } from "@/types/courses";
import { IUser } from "@/types/user";
import axios, { AxiosResponse } from "axios";
import { redirect } from "next/navigation";

export async function UpdateUser(id: string, user: Partial<IUser>) {
    try {
        const response: AxiosResponse<{ user: IUser }> = await axios.patch(
            `https://e-learning-eight-tau.vercel.app/api/auth/users/${id}`,
            user
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}

export async function getCurrentUser(userId: string) {
    try {
        const response: AxiosResponse<{ user: IUser }> = await axios.get(
            `https://e-learning-eight-tau.vercel.app/api/auth/users/${userId}`
        );
        return response.data.user;
    } catch (error) {
        return redirect("/login");
    }
}

export async function getTeacherCourses() {
    try {
        const user = await getSignInUser()
        const response: AxiosResponse<CoursesResponse> = await axios.get(`https://e-learning-eight-tau.vercel.app/api/courses/user/${user!._id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}