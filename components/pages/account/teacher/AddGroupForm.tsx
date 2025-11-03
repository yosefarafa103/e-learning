import { createGroup } from "@/actions/addGroup";
import Loader from "@/components/atoms/Loader";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useCurrentUser } from "@/hooks/useCurrentUser";

import React, { useRef, useTransition } from "react";
import { useForm } from "react-hook-form";

const AddGroupForm = () => {
  const [isPending, startTransition] = useTransition();
  const { data, isLoading } = useCurrentUser();
  const groupForm = useForm<{ name: string; teacherId: string }>();
  const dialogClose = useRef<HTMLButtonElement | null>(null);
  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        await createGroup(formData);
        dialogClose.current?.click();
      } catch (error) {
        console.log(error);
      }
    });
  }
  return (
    <>
      <Form {...groupForm}>
        {isLoading ? (
          <Loader />
        ) : (
          <form action={handleSubmit} className="space-y-4 mt-2">
            <FormField
              control={groupForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Group Name</FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      placeholder="Enter group name"
                      className="w-full border rounded-md p-2"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={groupForm.control}
              name="teacherId"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      {...field}
                      value={data?._id}
                      type="hidden"
                      placeholder="Enter group name"
                      className="w-full border rounded-md p-2"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              disabled={isPending}
              type="submit"
              variant="blue"
              className="w-full"
            >
              {isPending ? (
                <>
                  please wait <Loader />
                </>
              ) : (
                "Create Group"
              )}
            </Button>
          </form>
        )}
      </Form>
      <DialogClose ref={dialogClose} />
    </>
  );
};

export default AddGroupForm;
