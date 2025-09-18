// src/pages/student/StudentDashboard.jsx

import React from "react";
import { Bot } from "lucide-react";
import ChatInterface from "@/components/ChatInterface";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f1622] text-white">
      {/* Header */}
      {/* <header className="w-full border-b border-[#263044] bg-[#0b1220]/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-2">
          <Bot className="w-6 h-6 text-[#7f5af0]" />
          <h1 className="text-xl font-bold tracking-tight">
            Vybe AI Assistant
          </h1>
        </div>
      </header> */}

      {/* Chat Interface */}
      <main className="flex-1 w-full px-4 py-6">
        <div className="h-screen w-full rounded-2xl border border-[#263044] bg-[#0b1220]/60 shadow-lg overflow-hidden">
          <ChatInterface />
        </div>
      </main>
    </div>
  );
}
