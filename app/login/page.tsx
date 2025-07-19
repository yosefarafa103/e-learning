import { LoginForm } from "@/components/login-form"
import logo from "@/app/_assets/logo.png"
import { useSession } from "next-auth/react";
export default function LoginPage() {

    return (
        <div className="bg-muted flex min-h-[calc(100vh-200px)] flex-col items-center justify-center gap-6 p-6">
            <div className="flex w-full max-w-sm flex-col gap-2 justify-center">
                <img src={logo.src} className="size-[180px] h-[80px] object-cover mx-auto" alt="" />
                <LoginForm />
            </div>
        </div>
    )
}


