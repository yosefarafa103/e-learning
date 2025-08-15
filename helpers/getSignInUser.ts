import { IUser } from "@/types/user";
import axios, { Axios, AxiosResponse } from "axios";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
export async function getSignInUser() {
    const _cookies = await cookies();
    if (!(_cookies.get("token"))) {
        return null;
    }
    const token = _cookies.get("token")?.value;
    if (!token) {
        return null;
    }

    const decodedToken = jwt.decode(token);
    if (!decodedToken || typeof decodedToken !== 'object' || !('userId' in decodedToken)) {
        return null;
    }

    try {
        const response: AxiosResponse<{ user: IUser }> = await axios.get(`https://e-learning-eight-tau.vercel.app/api/auth/users/${decodedToken.userId}`);
        return response.data.user;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}
export async function UpdateUser(id: string, user: Partial<IUser>) {
    try {
        const response: AxiosResponse<{ user: IUser }> = await axios.patch(`https://e-learning-eight-tau.vercel.app/api/auth/users/${id}`, user);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}