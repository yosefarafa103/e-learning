"use client"
import WrapperBody from "@/components/WrapperBody"
import { useDirection } from "@/hooks/useDirection"
import { cn } from "@/lib/utils"
import img from "@/app/_assets/emmanuel-serratrice-black-guy-disney-03.jpg"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Edit } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useLoggedInUser } from "@/hooks/useLoggedInUser"
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios"
import { IUser } from "@/types/user"
import { getCookie } from "cookies-next"
import UpdatInformationForm from "./UpdateInformationForm"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"
import Loader from "@/components/atoms/Loader"
const ProfileInfo = () => {
    const { t } = useTranslation()
    async function getSignInUserClientComponent() {
        try {
            const user = jwtDecode(getCookie("token") as string)
            // @ts-ignore
            const response: AxiosResponse<{ user: IUser }> = await axios.get(`http://localhost:3000/api/auth/users/${user?.userId}`);
            return response?.data?.user
        } catch (error) {
            console.error("Error fetching user:", error);
            return null;
        }

    }
    const [tabs, setTabs] = useState(["Role", "Email", "Phone",])
    const { dir } = useDirection();
    const { user } = useLoggedInUser();
    const { data, isLoading } = useQuery<IUser>({
        // @ts-ignore
        queryFn: async () => await getSignInUserClientComponent(),
        queryKey: ["loggedInUser"]
    })
    useEffect(() => {
        {/* @ts-ignore */ }
        if (data?.role === "teacher") {
            setTabs([...tabs, "Subjects"])
        }
    }, [data])
    console.log(isLoading, user, data);
    return (
        <WrapperBody>
            <section className="p-5 rounded-3xl bg-accent">
                <h3 className={`p-2 py-3 flex items-center justify-between ${cn(dir === "right" ? "border-r-4 border-r-solid" : "border-l-4 ")} border-blue-500`}>Profile Info
                    <Dialog>
                        <DialogTrigger className="cursor-pointer">
                            <Edit />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogTitle> {t("editYourInfo")} </DialogTitle>
                            {/* @ts-ignore */}
                            <UpdatInformationForm userId={data?._id} />
                        </DialogContent>
                    </Dialog>
                </h3>
                <Separator />
                <div className="flex mt:4 sm:mt-10 sm:gap-10 max-sm:flex-col">
                    <Image
                        src={img}
                        alt="PROFILE"
                        width={100}
                        height={100}
                        className="rounded-[50%] my-4"
                    />
                    <div className="flex flex-col gap-2 pt-5 w-full">
                        {/* @ts-ignore */}
                        <h4> {data?.name || ""} </h4>
                        {isLoading ? <Loader /> :
                            <div className="flex sm:items-center gap-5 w-full max-sm:flex-col">
                                {tabs?.map((el, i) => (
                                    <>
                                        <div className="flex flex-col sm:mt-4 flex-1">
                                            <h5 className="text-muted-foreground font-light">{t(el.toLowerCase())}</h5>
                                            {/* @ts-ignore */}
                                            <section className="flex items-center gap-2 mt-3 flex-wrap">
                                                {/* @ts-ignore */}
                                                {
                                                    //@ts-ignore
                                                    data?.subjects && i === 3 && data?.subjects?.map((el) => (
                                                        <Badge> {el} </Badge>
                                                    ))
                                                }
                                            </section>
                                            <p>
                                                {/* @ts-ignore */}
                                                {(data?.[el.toLowerCase()] && el.toLowerCase() !== "subjects") ? t(data?.[el.toLowerCase()]) || "" : el.toLowerCase() !== "subjects" && `${data?.name} ${t("doesntHave")} ${t(el.toLowerCase())}`}
                                            </p>
                                            {/* {data[el.toLowerCase()] ? <Badge> {data?.role} </Badge> : <p> {data[el.toLowerCase()] || `${data?.name} Dosent Have ${data[el.toLowerCase()]}`} </p>} */}
                                        </div>
                                        {i < tabs.length - 1 &&
                                            <Separator className="sm:hidden" />
                                        }
                                    </>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </section>
        </WrapperBody>
    )
}

export default ProfileInfo