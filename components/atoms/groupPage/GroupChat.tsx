import { Card } from "@/components/ui/card";
import { MessageSquareCode, Send } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const GroupChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, user: "الأستاذ خالد", text: "مرحبًا بالجميع 👋", role: "teacher" },
    { id: 2, user: "أحمد محمد", text: "أهلاً أستاذ 😊", role: "student" },
  ]);
  const sendMessage = () => {
    if (!message.trim()) return;
    setMessage("");
  };
  return (
    <Card className="flex-1 flex flex-col shadow-lg border-primary-foreground bg-background backdrop-blur-md rounded-2xl overflow-hidden mt-4">
      <div className="flex items-center gap-2 bg-indigo-600 text-white p-4">
        <MessageSquareCode size={20} />
        <h2 className="text-lg font-semibold">غرفة المحادثة</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${
              msg.role === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-2xl max-w-xs ${
                msg.role === "me"
                  ? "bg-indigo-600 text-primary rounded-br-none"
                  : msg.role === "teacher"
                  ? "bg-yellow-100 text-gray-800 rounded-bl-none"
                  : "bg-gray-100 text-gray-800 rounded-bl-none"
              }`}
            >
              <p className="text-sm font-semibold mb-1">{msg.user}</p>
              <p className="text-sm">{msg.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-4 bg-background border-t flex gap-2">
        <Input
          placeholder="اكتب رسالتك..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1"
        />
        <Button
          onClick={sendMessage}
          className="bg-indigo-600 border-0 hover:bg-indigo-700 text-white"
        >
          <Send size={18} />
        </Button>
      </div>
    </Card>
  );
};

export default GroupChat;
