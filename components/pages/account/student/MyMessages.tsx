"use client";

import { SetStateAction, useCallback, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import ChatMessage from "./ChatMessage";
import { chats, fakeMessages } from "@/constants/dashboard";
type fakeChats = {
  id: "teacher" | "classmates" | "support";
  name: string;
  last: string;
}[]
export default function MyMessages() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(fakeMessages)
  const [selectedChat, setSelectedChat] = useState<"teacher" | "classmates" | "support">("teacher");
  const handleSend = useCallback(() => {
    if (!message.trim()) return;
    setMessages((prev) => {
      const nMessage = { from: "me", text: message, time: "Now" }
      prev[selectedChat].push(nMessage)
      return prev;
    })
    setMessage("");
  }, [message, selectedChat]);
  const selectedchat = useMemo(
    () => chats.find((c) => c.id === selectedChat)?.name,
    [selectedChat]
  );
  const { t } = useTranslation()

  return (
    <div className="w-full mx-auto">
      <Card className="shadow-md rounded-2xl overflow-hidden py-0 bg-transparent">
        <div className="flex flex-col sm:flex-row h-[70vh]">
          <div className="w-full sm:w-1/3 border-r border-muted p-4 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4"> {t("dashboard.tabs.messages")} </h2>
            <div className="space-y-2">
              {chats.map((chat) => (
                <ChatButton {...chat} selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="border-b border-muted p-4">
              <h3 className="font-semibold">{selectedchat}</h3>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages[selectedChat]?.map((msg) => (
                <ChatMessage {...msg} />
              ))}
            </div>

            <div className="border-t border-muted p-4 flex gap-2">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend}>Send</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

interface ButtonProps {
  id: "teacher" | "classmates" | "support",
  selectedChat: "teacher" | "classmates" | "support",
  name: string,
  last: string,
  setSelectedChat: (value: SetStateAction<"teacher" | "classmates" | "support">) => void
}
export function ChatButton({ id, selectedChat, name, setSelectedChat, last }: ButtonProps) {
  return <Button
    size="lg"
    onClick={() => setSelectedChat(id)}
    className={`w-full text-left! p-3 rounded-lg transition flex flex-col ${selectedChat === id
      ? "border-blue-600 border-2 text-blue-600"
      : "border-2 border-muted dark:dark:hover:bg-gray-900 cursor-pointer hover:bg-gray-100"
      }`}
  >
    <div className="font-medium">{name}</div>
    <div className="text-sm opacity-80 truncate">{last}</div>
  </Button>
}