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
const AddPostForm = () => {
    const { user } = useLoggedInUser()
    const postSchema = z.object({
        author: z.string().nonempty("Must Be Auther").default(user!),
        content: z.string().nonempty("Please Write Post Content"),
        tags: z.array(z.string()).optional(),
        visibility: z.enum(['public', 'private', 'followers'], { error: "should be 'public' Or 'private' Or 'followers'" }),
    });
    const handelAddNewPost = async (body: z.infer<typeof postSchema>) => {
        try {
            await axios.post(`/api/posts`, body)
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
                    onSuccess(data,) {
                        toast.success("Post Added")
                    }, onError(error, variables, context) {
                        toast.error(error.message)
                    },
                },)
            })} className="w-full">
                <Label className="text-lg">visibility</Label>
                <div className="flex gap-3 my-4">
                    <Label htmlFor="public">public</Label>
                    <input value={"public"} type="radio" {...register("visibility")} id="public" />
                    {/*  */}
                    <Label htmlFor="private">private</Label>
                    <input value={"private"} type="radio" {...register("visibility")} id="private" />
                    {/*  */}
                    <Label htmlFor="followers">followers</Label>
                    <input value={"followers"} type="radio" {...register("visibility")} id="followers" />
                </div>
                <span className="text-sm text-red-500">
                    {errors.visibility?.message}
                </span>
                <Input hidden disabled name="author" defaultValue={user} placeholder={user} value={user} />
                <section className="flex gap-2 mt-4">
                    <User className="size-10" />
                    <div className="flex flex-col gap-2 w-full">
                        <Textarea placeholder="Type your message here."  {...register("content")} />
                        <span className="text-sm text-red-500">
                            {errors.content?.message}
                        </span>
                    </div>
                </section>
                <Button type="submit" size={"sm"} className="w-fit float-end"> {isPending ? <>
                    <Loader className="animate-spin duration-1000" /> Posting..
                </> : "Add New Post"} </Button>
            </form>
        </>
    )
}

export default AddPostForm