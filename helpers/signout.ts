"use server"
import axios from "axios";
import { cookies } from "next/headers";
export async function signOutUser() {
    try {
        await axios.post("https://e-learning-eight-tau.vercel.app/api/auth/signout");
        (await cookies()).delete("token");
        
    } catch (error) {
        console.error("Error signing out:", error);
    }
}
