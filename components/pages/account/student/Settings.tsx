"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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

export default function Settings() {
  const [settings, setSettings] = useState({
    name: "Mohamed Khaled",
    email: "mohamed.khaled@example.com",
    language: "English",
    theme: "Light",
    emailNotifications: true,
    pushNotifications: false,
  });
  const { t } = useTranslation()
  function handleChange<T = string>(field: string, value: T) {
    setSettings({ ...settings, [field]: value });
  };

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold text-foreground">  {t("dashboard.tabs.settings")} </h2>

      <Card className="rounded-2xl border shadow-sm">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-semibold text-lg mb-2">Account</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label>Name</Label>
              <Input
                value={settings.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your name"
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                value={settings.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label>Language</Label>
              <Select
                value={settings.language}
                onValueChange={(value) => handleChange("language", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Arabic">Arabic</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Theme</Label>
              <Select
                value={settings.theme}
                onValueChange={(value) => handleChange("theme", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Light">Light</SelectItem>
                  <SelectItem value="Dark">Dark</SelectItem>
                  <SelectItem value="System">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border shadow-sm">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-semibold text-lg mb-2">Notifications</h3>
          <div className="flex items-center justify-between">
            <div>
              <Label>Email Notifications</Label>
              <p className="text-sm text-gray-500">
                Receive updates about assignments and announcements.
              </p>
            </div>
            <Switch
              checked={settings.emailNotifications}
              onCheckedChange={(val) => handleChange("emailNotifications", val)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>Push Notifications</Label>
              <p className="text-sm text-gray-500">
                Get alerts directly to your device.
              </p>
            </div>
            <Switch
              checked={settings.pushNotifications}
              onCheckedChange={(val) => handleChange("pushNotifications", val)}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button className="px-6">Save Changes</Button>
      </div>
    </div>
  );
}
