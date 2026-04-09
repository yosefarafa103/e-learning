"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useLoggedInUser } from "@/hooks/useLoggedInUser";
import { ICourse } from "@/types/courses";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

const formSchema = z.object({
  course_title: z.string().min(1, "Course title is required."),
  course_description: z.string().min(1, "Course description is required."),
  course_price: z.string().min(1, "Course price is required."),
});

export default function AddNewCourseDialog() {
  const [open, setOpen] = useState(false);
  const { user } = useLoggedInUser();

  const mutation = useMutation({
    mutationFn: async (values: ICourse) => {
      return axios.post(`https://e-learning-eight-tau.vercel.app/api/courses`, {
        title: values.title,
        description: values.description,
        price: values.price,
        instructor_id: user,
      });
    },
    onSuccess: (data) => {
      toast.success("Course created successfully!");
      console.log(data);
      setOpen(false);
    },
    onError: (error) => {
      console.error("Error creating course:", error);
      toast.error("Failed to create course.");
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      mutation.mutate({
        title: values.course_title,
        description: values.course_description,
        price: parseInt(values.course_price),
        // @ts-ignore
        instructor_id: user!,
      });
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="text-white" variant="blue">
          Create New Course <Plus className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Create New Course
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 py-4"
          >
            <FormField
              control={form.control}
              name="course_title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your course title"
                      type="text"
                      {...field}
                    />
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
                      placeholder="Enter your course description"
                      type="text"
                      {...field}
                    />
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
                      placeholder="Enter course price"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={mutation.isPending}
              variant={"green"}
              className="w-full"
              type="submit"
            >
              {mutation.isPending ? "Loading..." : "Add Course"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
