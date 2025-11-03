import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLoggedInUser } from "./useLoggedInUser";
import { IUser } from "@/types/user";

export function useCurrentUser() {
  const { user: userId } = useLoggedInUser();

  return useQuery<IUser>({
    queryKey: ["current-user", userId],
    queryFn: async () => {
      if (!userId) throw new Error("No token found");
      const res = await axios.get(`http://localhost:3000/api/auth/users/${userId}`);
      return res.data?.user;
    },
    staleTime: 60_000,
    enabled: !!userId,
  });
}
