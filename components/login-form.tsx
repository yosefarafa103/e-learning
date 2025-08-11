"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { IUser } from "@/types/user"
import { toast } from "sonner"
import { useTranslation } from "react-i18next"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Loader } from "lucide-react"
import { redirect, useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
type signupBody = Pick<IUser, "email" | "name" | "password" | "role">
type loginBody = Pick<IUser, "email" | "password">

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { t } = useTranslation();
  const { handleSubmit, register, } = useForm()

  const login = async (body: loginBody) => {

    try {
      await axios.post(`/api/auth/signin`, body, {
        headers: {
          "haveAccess": 1
        }
      })
      toast(`${t("loginSuccess")}`)
      useRouter().push("/")
    } catch (error: any) {
      console.log(error.response.data.status);
      toast(`${t("loginFail")}`)
    }
  }
  const { mutate: logUser, isPending: isPendingLoading } = useMutation({
    mutationFn: login
  })
  const [tab, setTab] = useState(0)
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {tab === 0 &&
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Login </CardTitle>
            <CardDescription>
              Login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* @ts-ignore */}
            <form onSubmit={handleSubmit((data: loginBody) => {
              logUser(data)
            })}>
              <div className="grid gap-3">

                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>

                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      {...register("password")}
                      type="password" required
                      placeholder="enter strong password"
                    />
                  </div>
                  <Button disabled={isPendingLoading} type="submit" className="w-full">
                    {isPendingLoading ? <>
                      <Loader className="animate-spin" />
                      Logging in Your Account...
                    </> : "Login"}
                  </Button>
                </div>

              </div>
            </form>
          </CardContent>
        </Card>
      }
      {tab === 1 &&
        <SignIn />
      }

      {tab === 0 &&
        <div className="text-center text-sm">
          <div onClick={() => setTab(1)} className="w-fit underline underline-offset-4 cursor-pointer inline mx-2">
            Sign up
          </div>
          or
        </div>
      }
      {tab === 1 &&
        <div className="text-center text-sm">
          <div onClick={() => setTab(0)} className="w-fit underline underline-offset-4 cursor-pointer inline mx-2">
            Login
          </div>
          or
        </div>
      }
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
export function SignIn() {
  const { t } = useTranslation();
  const { handleSubmit, register, } = useForm()
  const signUp = async (body: signupBody) => {
    try {
      console.log(body);
      await axios.post(`/api/auth/signup`, body, {
        headers: {
          "haveAccess": 1
        }
      })
      toast(`${t("loginSuccess")}`)
    } catch (error: any) {
      console.log(error.response.data.status);
      toast(`${t("loginFail")}`)
    }
  }
  const { mutate, isPending } = useMutation({
    mutationFn: signUp
  })
  const [role, setRole] = useState("");
  console.log(role);
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Welcome back</CardTitle>
        <CardDescription>
          Login with your Apple or Google account
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* @ts-ignore */}
        <form onSubmit={handleSubmit((data: signupBody) => {
          mutate({ ...data, role: role as "student" | "teacher" })
        })}>
          <div className="grid gap-3">
            <div className="flex flex-col gap-4">
              <Button onClick={() => signIn("facebook")} variant="outline" className="w-full">
                Login with Facebook
              </Button>
              <Button onClick={() => signIn("google")} variant="outline" className="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="currentColor"
                  />
                </svg>
                Login with Google
              </Button>
            </div>
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-background text-muted-foreground relative z-10 px-2">
                Or continue with
              </span>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Name</Label>
                <Input
                  {...register("name")}
                  type="text"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  {...register("password")}
                  type="password" required />
              </div>
              <Input name="role" type="hidden" value={role} />
              <Select required onValueChange={(val) => setRole(val)
              }>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Account Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem onClick={() => setRole("student")} value={"student"}>
                    Student
                  </SelectItem>
                  <SelectItem onClick={() => setRole("teacher")} value={"teacher"}>
                    Teacher
                  </SelectItem>
                </SelectContent>
              </Select>
              <Button disabled={isPending} type="submit" className="w-full ">
                {isPending ? "Creating Account..." : "Create Account"}
              </Button>
            </div>

          </div>
        </form>
      </CardContent>
    </Card>
  )
}