import { useQuery } from "@tanstack/react-query";
import { IGroup } from "@/types/groups";
import { getGroup } from "@/services/groups";

export function useGroup(groupId: string) {
    return useQuery<IGroup | null>({
        queryKey: ["group", groupId],
        queryFn: () => getGroup(groupId),
        enabled: !!groupId,
        staleTime: 1000 * 60 * 5
    });
}
