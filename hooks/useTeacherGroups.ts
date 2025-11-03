import { IGroup } from "@/types/groups";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchTeacherGroups(teacherId: string): Promise<TeacherGroups> {
  const res = await axios.get(`/api/groups/${teacherId}`);
  return res.data;
}
export interface TeacherGroups {
  count: number;
  groups: IGroup[];
}
export function useTeacherGroups(teacherId?: string) {
  return useQuery<TeacherGroups>({
    queryKey: ["groups"],
    queryFn: () => fetchTeacherGroups(teacherId!),
    enabled: !!teacherId,
    staleTime: 1000 * 60 * 5,
  });
}
