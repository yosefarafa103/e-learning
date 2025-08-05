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
        const response: AxiosResponse<{ user: IUser }> = await axios.get(`http://localhost:3000/api/auth/users/${decodedToken.userId}`);
        return response.data.user;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}