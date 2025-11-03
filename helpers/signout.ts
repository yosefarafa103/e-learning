"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export async function signOutUser() {
  console.log("aaa");

  try {
    // await axios.post(
    //   process.env.NODE_ENV === "development"
    //     ? "http://localhost:3000/api/auth/signout"
    //     : "https://e-learning-eight-tau.vercel.app/api/auth/signout"
    // );
    (await cookies()).delete("token");
    redirect("/login");
  } catch (error) {
    console.error("Error signing out:", error);
  }
}
