"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Loader from "@/components/atoms/Loader";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useTranslation } from "react-i18next";

export default function InstructorSettings() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { data: user, isLoading, isError } = useCurrentUser();

  const updateUser = useMutation({
    mutationFn: async (updatedData: any) => {
      const { data } = await axios.patch(
        `/api/auth/users/${user?._id}`,
        updatedData
      );
      return data;
    },
    onSuccess: () => {
      toast.success(t("settings.success"));
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
    onError: () => toast.error(t("settings.error")),
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    imgProfile: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        bio: user.bio || "",
        imgProfile: user.imgProfile || "",
      });
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isDataChanged = () => {
    if (!user) return false;
    return (
      formData.name !== (user.name || "") ||
      formData.email !== (user.email || "") ||
      formData.bio !== (user.bio || "") ||
      formData.imgProfile !== (user.imgProfile || "")
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?._id) return toast.error(t("settings.userNotFound"));
    if (!isDataChanged()) {
      toast.info(t("settings.noChanges"));
      return;
    }
    updateUser.mutate(formData);
  };

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <p className="text-red-500 text-center">{t("settings.loadError")}</p>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl mx-auto bg-background rounded-2xl shadow-sm border p-6 mt-8"
    >
      <h2 className="text-2xl font-semibold text-primary mb-6">
        {t("settings.title")}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex items-center gap-4">
          <img
            src={
              formData.imgProfile ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover border"
          />
          <div>
            <Label className="text-sm font-medium">
              {t("settings.imageUrl")}
            </Label>
            <Input
              name="imgProfile"
              placeholder={t("settings.imagePlaceholder")}
              value={formData.imgProfile}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="name">{t("settings.fullName")}</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email">{t("settings.email")}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="bio">{t("settings.bio")}</Label>
          <Textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder={t("settings.bioPlaceholder")}
            className="mt-1"
          />
        </div>

        <div className="flex justify-end">
          <Button
            variant="blue"
            type="submit"
            className="px-6"
            disabled={updateUser.isPending}
          >
            {updateUser.isPending
              ? t("settings.saving")
              : t("settings.saveChanges")}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
