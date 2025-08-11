"use client"
import {
    useState
} from "react"
import {
    toast
} from "sonner"
import {
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
import axios from "axios"
import { useLoggedInUser } from "@/hooks/useLoggedInUser"
import { useMutation } from "@tanstack/react-query"
import { ICourse } from "@/types/courses"

const formSchema = z.object({
    course_title: z.string({ error: "Course title is required." }),
    course_description: z.string({ error: "Course description is required." }),
    course_price: z.string({ error: "Course price must be a number." }).min(0, { error: "Course price must be at least 0." })
});
export default function AddNewCourseForm() {
    const { user } = useLoggedInUser()
    const mutation =
        useMutation({
            mutationFn: async (values: ICourse) => {
                return axios.post(`https://e-learning-eight-tau.vercel.app/api/courses`, {
                    title: values.title,
                    description: values.description,
                    price: values.price,
                    instructor_id: user
                });
            },
            onSuccess: (data) => {
                toast.success("Course created successfully!");
                console.log(data);
            },
            onError: (error) => {
                console.error("Error creating course:", error);
                toast.error("Failed to create course.");
            }
        })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    console.log(user);
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            mutation.mutate({
                title: values.course_title,
                description: values.course_description,
                price: parseInt(values.course_price),
                // @ts-ignore
                instructor_id: user!
            })

            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            );
        } catch (error) {
            console.error("Form submission error", error);
            toast.error?.("Failed to submit the form. Please try again."); // Use toast.error if available
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">

                <FormField
                    control={form.control}
                    name="course_title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Course Title</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Please Enter Your Course Title"

                                    type="text"
                                    {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="course_description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Course Description</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Please Enter Course Description"
                                    type="text"
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="course_price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Please Write Course Price "
                                    type="number"
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={mutation.isPending} variant={"green"} className="max-sm:w-full" type="submit">
                    {mutation.isPending ? "Loading..." : "Add Course"}
                </Button>
            </form>
        </Form>
    )
}