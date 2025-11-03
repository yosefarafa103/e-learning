"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useStudents } from "@/hooks/useGetStudents";
import Loader from "@/components/atoms/Loader";
import { IGroup } from "@/types/groups";
import { useUpdateGroup } from "@/hooks/useUpdateGroup";

interface GroupItemProps {
  group: IGroup;
}

export default function GroupItem({ group }: GroupItemProps) {
  const studentForm = useForm<{ students: string[] }>({
    defaultValues: { students: [] },
  });

  const { isLoading, data: students } = useStudents();
  const { mutate: addStudents, isPending } = useUpdateGroup();

  const handleSubmit = (data: { students: string[] }) => {
    if (data.students.length === 0) {
      toast.warning("Please select at least one student.");
      return;
    }

    addStudents(
      { groupId: group._id!, students: data.students },
      {
        onSuccess: () => {
          studentForm.reset({ students: [] });
        },
      }
    );
  };

  return (
    <Card key={group._id} className="border shadow-sm">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>{group.name}</CardTitle>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" variant="outline">
              <Plus className="mr-1" /> Add Student
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle>Add Students to {group.name} Group</DialogTitle>
            </DialogHeader>

            {isLoading ? (
              <Loader />
            ) : (
              <Form {...studentForm}>
                <form
                  onSubmit={studentForm.handleSubmit(handleSubmit)}
                  className="space-y-4 mt-2"
                >
                  <FormField
                    control={studentForm.control}
                    name="students"
                    render={({ field }) => (
                      <FormItem className="space-y-2 max-h-[50svh] overflow-y-scroll">
                        <FormLabel className="sticky top-0 bg-white pb-4">
                          Select Students
                        </FormLabel>
                        <FormControl className="flex flex-col gap-2">
                          <>
                            {students?.map((student) => (
                              <label
                                key={student._id}
                                className="flex items-center gap-2"
                              >
                                <Checkbox
                                  value={student._id}
                                  checked={field.value?.includes(student._id!)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      field.onChange([
                                        ...(field.value || []),
                                        student._id,
                                      ]);
                                    } else {
                                      field.onChange(
                                        (field.value || []).filter(
                                          (id) => id !== student._id
                                        )
                                      );
                                    }
                                  }}
                                />
                                <span>{student.name}</span>
                              </label>
                            ))}
                          </>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    variant="green"
                    className="w-full"
                    disabled={isPending}
                  >
                    {isPending ? "Adding..." : "Add Selected Students"}
                  </Button>
                </form>
              </Form>
            )}
          </DialogContent>
        </Dialog>
      </CardHeader>

      <CardContent>
        {group.students.length === 0 ? (
          <p className="text-gray-500">No students yet.</p>
        ) : (
          <div className="text-gray-700 space-y-1 flex gap-2">
            {group.students.slice(0, 3).map((s, i) => (
              <div key={s._id}>
                {s.name} {i !== group.students.length - 1 ? "&" : ""}{" "}
              </div>
            ))}

            {group.students.length > 3 && (
              <div className="text-gray-500">
                +{group.students.length - 3} more student
                {group.students.length - 3 > 1 ? "s" : ""}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
