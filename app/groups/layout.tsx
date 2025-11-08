import { getSignInUser } from "@/helpers/getSignInUser";
import { redirect } from "next/navigation";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getSignInUser();
  if (user?.role !== "teacher") return redirect("account");
  return <> {children} </>;
};

export default layout;
