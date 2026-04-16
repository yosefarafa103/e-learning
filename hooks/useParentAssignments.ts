"use client";
import { useMemo, useState } from "react";

export function useParentAssignments(data: any[]) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [selectedChild, setSelectedChild] = useState<any>(null);

  const filtered = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch =
        item.student.toLowerCase().includes(search.toLowerCase()) ||
        item.title.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "all" || item.status.toLowerCase() === status;

      return matchesSearch && matchesStatus;
    });
  }, [data, search, status]);

  return {
    search,
    setSearch,
    status,
    setStatus,
    filtered,
    selectedChild,
    setSelectedChild,
  };
}