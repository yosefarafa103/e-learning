"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";
import { fakeUserSettings } from "@/constants/general";
interface Settings {
  name: string;
  email: string;
  language: string;
  theme: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
}
interface ChildrenProps<K = Settings> {
  handleChange: (field: keyof K, value: any) => void;
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
}
export default function Settings() {
  const [settings, setSettings] = useState<Settings>(() => fakeUserSettings);
  function handleChange<T = string>(field: string, value: T) {
    setSettings({ ...settings, [field]: value });
  }
  return (
    <div className="space-y-3">
      <Settings.BasicSettings
        setSettings={setSettings}
        settings={settings}
        handleChange={handleChange}
      />
      <Settings.Notifications settings={settings} handleChange={handleChange} />
    </div>
  );
}

Settings.Languages = ({ setSettings, settings }: ChildrenProps) => {
  const { t } = useTranslation();
  function handleChange(field: string, value: any) {
    setSettings({ ...settings, [field]: value });
  }
  const { dir } = useDirection();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <Label>{t("language.title")}</Label>
        <Select
          value={settings.language}
          onValueChange={(value) => handleChange("language", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent align={dir === "right" ? "end" : "start"}>
            {["English", "Arabic", "Spanish"].map((lan) => (
              <SelectItem value={lan}>
                {" "}
                {t("language." + lan.toLowerCase().slice(0, 2))}{" "}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Settings.Theming settings={settings} handleChange={handleChange} />
    </div>
  );
};
Settings.Theming = ({
  settings,
  handleChange,
}: Pick<ChildrenProps<Settings>, "settings" | "handleChange">) => {
  const { t } = useTranslation();
  return (
    <div>
      <Label> {t("settings.themes.title")} </Label>
      <Select
        value={settings.theme}
        onValueChange={(value) => handleChange("theme", value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent>
          {["Light", "Dark", "System"].map((theme) => (
            <SelectItem value={theme}>
              {" "}
              {t("settings.themes." + theme.toLowerCase())}{" "}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

Settings.Notifications = ({
  settings,
  handleChange,
}: Omit<ChildrenProps, "setSettings">) => {
  const { t } = useTranslation();
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardContent className="p-6 space-y-4">
        <h3 className="font-semibold text-lg mb-2">
          {" "}
          {t("settings.notifications.title")}{" "}
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <Label>{t("settings.notifications.email.title")}</Label>
            <p className="text-xs text-gray-500">
              {t("settings.notifications.email.desc")}
            </p>
          </div>
          <Switch
            checked={settings.emailNotifications}
            onCheckedChange={(val) => handleChange("emailNotifications", val)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Label>{t("settings.notifications.push.title")}</Label>
            <p className="text-xs text-gray-500">
              {t("settings.notifications.push.desc")}
            </p>
          </div>
          <Switch
            checked={settings.pushNotifications}
            onCheckedChange={(val) => handleChange("pushNotifications", val)}
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="px-6 text-sm"> {t("settings.saveChanges")} </Button>
      </CardFooter>
    </Card>
  );
};

Settings.BasicSettings = ({
  settings,
  handleChange,
  setSettings,
}: ChildrenProps<Settings>) => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="text-2xl font-semibold text-foreground">
        {" "}
        {t("dashboard.tabs.settings")}{" "}
      </h2>
      <Card className="rounded-2xl border shadow-sm">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-semibold text-lg mb-2"> {t("myAccount")} </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label>{t("forms.name")}</Label>
              <Input
                value={settings.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your name"
              />
            </div>
            <div>
              <Label>{t("email")}</Label>
              <Input
                value={settings.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="you@example.com"
              />
            </div>
          </div>
          <Settings.Languages
            handleChange={handleChange}
            setSettings={setSettings}
            settings={settings}
          />
        </CardContent>
      </Card>
    </>
  );
};
