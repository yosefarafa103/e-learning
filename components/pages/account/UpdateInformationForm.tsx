"use client"
import {
    useState
} from "react"
import {
    toast
} from "sonner"
import {
    SubmitHandler,
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import {
    z
} from "zod"
import {
    cn
} from "@/lib/utils"
import {
    Button
} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"
import { useMutation } from "@tanstack/react-query"
import { IUser } from "@/types/user"
import { jwtDecode } from "jwt-decode"
import { getCookie } from "cookies-next"
import axios, { AxiosResponse } from "axios"
const formSchema = z.object({
    name: z.string({ error: "Please Fill" }).min(1),
    subject: z.string({ error: "Please Fill" }).min(1)
});
export default function UpdatInformationForm({ userId }: { userId: string }) {
    async function UpdateUser(id: string, user: Partial<IUser>) {
        try {
            const response: AxiosResponse<{ user: IUser }> = await axios.patch(`https://e-learning-eight-tau.vercel.app/api/auth/users/${id}`, user);
            return response.data;
        } catch (error) {
            console.error("Error fetching user:", error);
            return null;
        }
    }
    const { mutate, isPending } = useMutation({
        //  @ts-ignore
        mutationFn: (data) => UpdateUser(userId, data)
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const user = jwtDecode(getCookie("token") as string)
            // MUTATION
            //  @ts-ignore
            mutate(values)
            toast.success("Done!")
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto w-full py-10">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Update Your Name Here"
                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>Update Your Name</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Update your Subject Here"
                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>Update your Subject</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit"> {isPending ? "Updating.." : "Update"} </Button>
            </form>
        </Form>
    )
}