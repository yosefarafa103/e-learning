"use client";

import { useEffect, useState } from "react";
import { getCookie } from "cookies-next/client";
import jwt from "jsonwebtoken";
interface JwtUserToken {
  userId?: string;
  iat?: Date;
}
export function useLoggedInUser() {
  const [user, setUser] = useState<JwtUserToken>();
  const userToken = getCookie("token");
  useEffect(() => {
    const decodedUser = jwt.decode(userToken as string) as JwtUserToken;
    setUser(decodedUser);
  }, [userToken]);
  return { user: user?.userId, };
}

