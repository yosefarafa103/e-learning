"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToken } from "@/lib/getCookieClient";
import jwt from "jsonwebtoken";
import { useTeacherGroups } from "@/hooks/useTeacherGroups";
import AddGroupForm from "../../pages/account/teacher/AddGroupForm";
import Loader from "@/components/atoms/Loader";
import GroupItem from "./GroupItem";
import { useTranslation } from "react-i18next";

export default function GroupsTab() {
  const { t } = useTranslation();
  const token = useToken();
  const teacherId = (jwt.decode(token!) as { userId: string }).userId;
  const { data, isLoading } = useTeacherGroups(teacherId);

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-primary">
          {t("groups.title")}
        </h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="blue">
              <Plus className="mr-2" /> {t("groups.addGroupButton")}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{t("groups.dialogTitle")}</DialogTitle>
            </DialogHeader>
            <AddGroupForm />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <Loader />
        ) : data?.groups?.length ? (
          data.groups.map((group) => (
            <GroupItem key={group._id} group={group} />
          ))
        ) : (
          <p className="text-gray-500 text-center w-full col-span-full">
            {t("groups.noGroups")}
          </p>
        )}
      </div>
    </div>
  );
}
