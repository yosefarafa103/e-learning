"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateGroup } from "@/actions/updateGroup";
import { toast } from "sonner";

export function useUpdateGroup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      groupId,
      students,
    }: {
      groupId: string;
      students: string[];
    }) => await updateGroup(groupId, { students }),
    onSuccess: (data) => {
      toast.success("✅ Students added successfully!");
      queryClient.invalidateQueries({ queryKey: ["groups"] });
    },
    onError: (error: any) => {
      toast.error(error.message || "❌ Failed to update group");
    },
  });
}
