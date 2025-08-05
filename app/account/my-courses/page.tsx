import { getSignInUser } from "@/helpers/getSignInUser"
import { redirect } from "next/navigation";


const page = async () => {
    const user = await getSignInUser();
    if (!user) return redirect("/login");
    return (
        <>

            page
        </>
    )
}

export default page