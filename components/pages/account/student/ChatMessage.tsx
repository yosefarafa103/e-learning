import { MessageInfo } from '@/types/dashboard'
import React from 'react'

const ChatMessage = ({ time, from, text, }: MessageInfo) => {
    return (
        <div
            className={`flex ${from === "me" ? "justify-end" : "justify-start"
                }`}
        >
            <div
                className={`max-w-[70%] p-3 rounded-2xl text-sm shadow-sm ${from === "me"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800"
                    }`}
            >
                <p>{text}</p>
                <span className="block text-xs mt-1 opacity-70">
                    {time}
                </span>
            </div>
        </div>
    )
}

export default ChatMessage
