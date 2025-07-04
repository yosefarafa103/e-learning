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
import { Separator } from "@/components/ui/separator"
import { useTranslation } from "react-i18next"

// Translation keys object
const LABEL_KEYS = {
    fullName: "fullName",
    email: "email",
    bio: "bio"
}

const formSchema = z.object({
    fullName: z.string().min(1),
    email: z.string({ message: "Invalid Email" }).min(1, { message: "Enter Valid email" }).email(),
    bio: z.string().min(1).optional()
});

export default function SettingsForm() {
    const { t } = useTranslation();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { fullName: "John Doe", email: "JohnDoe@email.com" }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            toast(
                "تم"
            );
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-10">
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t(LABEL_KEYS.fullName)}</FormLabel>
                                <FormControl>
                                    <Input
                                        className="p-6 px-4 rounded-2xl"
                                        placeholder={t(LABEL_KEYS.fullName)}
                                        type=""
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t(LABEL_KEYS.email)}</FormLabel>
                                <FormControl>
                                    <Input
                                        className="p-6 px-4 rounded-2xl"
                                        placeholder={t(LABEL_KEYS.email)}
                                        type="email"
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t(LABEL_KEYS.bio)}</FormLabel>
                                <FormControl>
                                    <Input
                                        className="p-6 px-4 rounded-2xl"
                                        placeholder={t(LABEL_KEYS.bio)}
                                        type=""
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button variant={"blue"} className="float-end p-5 rounded-full" type="submit"> {t("submit")} </Button>
                </form>
            </Form>
            <Separator className="mt-5" />
        </>
    )
}