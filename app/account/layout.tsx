import ProfileInfo from "@/components/pages/account/ProfileInfo";
import { getSignInUser } from "@/helpers/getSignInUser";
import { redirect } from "next/navigation";

const page = async ({
  children,
  teacherDashboard,
  studentDashboard,
}: {
  children: React.ReactNode;
  teacherDashboard: React.ReactNode;
  studentDashboard: React.ReactNode;
}) => {
  const user = await getSignInUser();
  // if (!user) return redirect("/login");
  return (
    <>
      {/* <ProfileInfo /> */}
      <section className="dark:bg-blue-900/10 bg-blue-50">
        {user?.role === "teacher" ? (
          <>{teacherDashboard} </>
        ) : (
          <>{studentDashboard}</>
        )}
      </section>
      {/* <section className="p-3">{children}</section> */}
    </>
  );
};

export default page;
