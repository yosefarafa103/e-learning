import { getSignInUser } from "@/helpers/getSignInUser"
import { redirect } from "next/navigation";


const page = async ({ children, teacherDashboard }: { children: React.ReactNode, teacherDashboard: React.ReactNode }) => {
    const user = await getSignInUser();
    if (!user) return redirect("/login");
    return (
        <>
            <>
                {user?.role === "teacher" && 
                <> 
                {teacherDashboard} </>
                }
            </>
            <section className="p-3">
                {children}
            </section>
        </>
    )
}

export default page