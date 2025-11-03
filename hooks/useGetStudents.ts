import { IUser } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useStudents() {
  return useQuery<IUser[]>({
    queryKey: ["students"],
    queryFn: async () => {
      const res = await axios.get("/api/users/get-students");
      return res.data.students;
    },
  });
}
