"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from "@tanstack/react-query"
import postsModel from "@/models/posts.model"
import axios from "axios"
import { toast } from "sonner"
import { Loader, User } from "lucide-react"
import { useLoggedInUser } from "@/hooks/useLoggedInUser"
import { useParams } from "next/navigation"
const AddPostForm = () => {
    const { user } = useLoggedInUser()
    const postSchema = z.object({
        author: z.string().nonempty("Must Be Auther").default(user!),
        content: z.string().nonempty("Please Write Comment Content"),
    });
    const { postId } = useParams<{ postId: string }>()

    const handelAddNewPost = async (body: z.infer<typeof postSchema>) => {
        try {
            await axios.post(`/api/posts/comments?postId=${postId}`, body)
        } catch (error) {
            console.log(error);
        }
    }

    const { mutate, isPending } = useMutation({
        mutationFn: handelAddNewPost
    })
    const { handleSubmit, register, formState: { isSubmitting, errors } } = useForm({
        resolver: zodResolver(postSchema),
    });
    return (
        <>
            <form onSubmit={handleSubmit((data) => {
                console.log(data);
                mutate(data, {
                    onSuccess() {
                        toast.success("Comment Added Successfully")
                    }, onError(error, variables, context) {
                        toast.error(error.message)
                    },
                },)
            })} className="w-full">

                <Input hidden disabled name="author" defaultValue={user} placeholder={user} value={user} />
                <section className="flex gap-2 mt-4">
                    <User className="size-10" />
                    <div className="flex flex-col gap-2 w-full">
                        <Textarea placeholder="Type Your Comment Here." className="border-green-400"  {...register("content")} />
                        <span className="text-sm text-red-500">
                            {errors.content?.message}
                        </span>
                    </div>
                </section>
                <Button type="submit" size={"sm"} className="w-fit float-end border-green-400 text-white bg-background my-3 border-2"> {isPending ? <>
                    <Loader className="animate-spin duration-1000" /> Posting..
                </> : "Add New Comment"} </Button>
            </form>
        </>
    )
}

export default AddPostForm