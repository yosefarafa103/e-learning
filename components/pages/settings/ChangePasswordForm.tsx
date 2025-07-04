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
    Button
} from "@/components/ui/button"
import {
    Form,
    FormControl,
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
    currentPassword: "currentPassword",
    newPassword: "newPassword",
    confirmPassword: "confirmPassword"
}

// Zod schema for change password
const formSchema = z.object({
    currentPassword: z.string().min(8, { message: "Current password must be at least 8 characters" }),
    newPassword: z.string().min(8, { message: "New password must be at least 8 characters" }),
    confirmPassword: z.string().min(8, { message: "Confirm password must be at least 8 characters" }),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export default function ChangePasswordForm() {
    const { t } = useTranslation();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        }
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
                        name="currentPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t(LABEL_KEYS.currentPassword)}</FormLabel>
                                <FormControl>
                                    <Input
                                        className="p-6 px-4 rounded-2xl"
                                        placeholder={t(LABEL_KEYS.currentPassword)}
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t(LABEL_KEYS.newPassword)}</FormLabel>
                                <FormControl>
                                    <Input
                                        className="p-6 px-4 rounded-2xl"
                                        placeholder={t(LABEL_KEYS.newPassword)}
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t(LABEL_KEYS.confirmPassword)}</FormLabel>
                                <FormControl>
                                    <Input
                                        className="p-6 px-4 rounded-2xl"
                                        placeholder={t(LABEL_KEYS.confirmPassword)}
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button variant={"blue"} className="float-end p-5 rounded-full" type="submit">
                        {t("changePassword")}
                    </Button>
                </form>
            </Form>
            <Separator className="mt-5" />
        </>
    )
}