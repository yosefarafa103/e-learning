import { IGroup } from "@/types/groups";
import axios from "axios";

export async function createGroup(body: {
  name: string;
  teacherId: string;
}): Promise<IGroup | null> {
  try {
    const group = await axios.post("http://localhost:3000/api/groups", body);
    return group.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
