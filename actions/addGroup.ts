"use server";
import { createGroup as addNewGroup } from "@/services/groups";
export async function createGroup(formData: FormData) {
  const name = formData.get("name") as string;
  const teacherId = formData.get("teacherId") as string;

  try {
    await addNewGroup({ name, teacherId });
  } catch (error: any) {
    throw new Error(error.message);
  }
}
