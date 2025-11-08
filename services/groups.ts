import { IGroup } from "@/types/groups";
import axios from "axios";

export async function createGroup(body: {
  name: string;
  teacherId: string;
}): Promise<IGroup | null> {
  try {
    const group = await axios.post("http://e-learning-eight-tau.vercel.app/api/groups", body);
    return group.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}


export async function getGroup(groupId: string): Promise<IGroup | null> {
  try {
    const res = await fetch(`http://e-learning-eight-tau.vercel.app/api/group/${groupId}`, {
      method: "GET",
      next: { revalidate: 300 },
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch group (${res.status})`);
    }

    const data: IGroup = await res.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching group:", error);
    throw new Error(error.message || "Error fetching group");
  }
}
