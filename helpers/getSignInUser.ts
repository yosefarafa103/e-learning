import { IUser } from "@/types/user";
import axios, { Axios, AxiosResponse } from "axios";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { getCurrentUser } from "@/services/users";
export async function getSignInUser(): Promise<IUser | null> {
  const _cookies = await cookies();
  const token = _cookies.get("token");
  if (!token) return null
  const decodedToken = jwt.decode(token?.value);
  if (
    !decodedToken ||
    typeof decodedToken !== "object" ||
    !("userId" in decodedToken)
  ) return null;
  return await getCurrentUser(token?.value)
}
