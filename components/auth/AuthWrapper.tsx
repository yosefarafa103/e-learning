import { cookies as _cookies } from "next/headers"
import { redirect } from "next/navigation";
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}
const AuthWrapper = async ({ children }: Props) => {
    const cookies = await _cookies();
    if (!cookies.get("token")) return redirect("/login")
    return (
        <> {children} </>
    )
}

export default AuthWrapper