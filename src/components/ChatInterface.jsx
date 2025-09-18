// ...existing code...
import React, { useState, useEffect, useRef } from "react";
import { Send, Bot, Plus, Trash2, MessageCircle } from "lucide-react";
import axiosInstance from "@/config/axiosInstance";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatInterface = () => {
  const [sessions, setSessions] = useState([]);
  const [currentSession, setCurrentSession] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionsLoading, setSessionsLoading] = useState(true);
  const messagesEndRef = useRef(null);

  // Auto-scroll
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages, currentSession]);

  // Fetch sessions
  useEffect(() => {
    fetchChatSessions();
  }, []);
  const fetchChatSessions = async () => {
    try {
      setSessionsLoading(true);
      const response = await axiosInstance.get("/chat/sessions");
      setSessions(response.data.data.sessions || []);
    } catch (err) {
      console.error("Error fetching sessions:", err);
    } finally {
      setSessionsLoading(false);
    }
  };

  // Create session
  const createNewSession = async () => {
    try {
      const response = await axiosInstance.post("/chat/sessions");
      const newSession = response.data.data;
      setSessions((prev) => [newSession, ...prev]);
      setCurrentSession(newSession);
      setMessages([]);
    } catch (err) {
      console.error("Error creating session:", err);
    }
  };

  // Select session
  const selectSession = async (session) => {
    setCurrentSession(session);
    try {
      const response = await axiosInstance.get(`/chat/sessions/${session._id}`);
      setMessages(response.data.data.messages || []);
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
  };

  // Send message (keeps optimistic UI)
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || !currentSession || loading) return;

    const msgText = inputMessage.trim();
    setInputMessage("");
    setLoading(true);

    const tempId = Date.now();
    const userMsg = {
      _id: tempId,
      sender: "student",
      message: msgText,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const response = await axiosInstance.post(
        `/chat/sessions/${currentSession._id}/messages`,
        { message: msgText }
      );
      const { userMessage, botMessage } = response.data.data;

      setMessages((prev) =>
        prev.map((m) => (m._id === tempId ? userMessage : m)).concat(botMessage ? [botMessage] : [])
      );
      fetchChatSessions();
    } catch (err) {
      console.error("Error sending message:", err);
      setMessages((prev) => prev.filter((m) => m._id !== tempId));
    } finally {
      setLoading(false);
    }
  };

  // Delete session
  const deleteSession = async (id, e) => {
    e.stopPropagation();
    if (!confirm("Delete this chat?")) return;
    try {
      await axiosInstance.delete(`/chat/sessions/${id}`);
      setSessions((prev) => prev.filter((s) => s._id !== id));
      if (currentSession?._id === id) {
        setCurrentSession(null);
        setMessages([]);
      }
    } catch (err) {
      console.error("Error deleting session:", err);
    }
  };

  const formatTime = (ts) =>
    ts ? new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "";

  return (
    <div className="flex h-full min-h-[500px] bg-transparent text-white">
      {/* Left: Sessions sidebar */}
      <aside className="w-72 p-4">
        <Card className="bg-[#141a2b] border-[#263044]">
          <CardHeader className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="bg-[#7f5af0]">
                <AvatarFallback>V</AvatarFallback>
              </Avatar>
              <CardTitle className="text-white text-base">Chats</CardTitle>
            </div>
            <Button
              onClick={createNewSession}
              size="sm"
              className="bg-gradient-to-r from-[#5ddcff] to-[#7f5af0] text-black"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </CardHeader>

          <CardContent className="p-0">
            <ScrollArea className="h-[60vh]">
              <div className="p-2 space-y-2">
                {sessionsLoading ? (
                  <div className="py-6 text-center text-sm text-[#a0aec0]">Loading...</div>
                ) : sessions.length === 0 ? (
                  <div className="text-center text-[#a0aec0] py-8">
                    <MessageCircle className="w-10 h-10 mx-auto mb-2 opacity-50" />
                    No chats yet
                  </div>
                ) : (
                  sessions.map((s) => {
                    const lastMsg = s.messages?.[s.messages.length - 1];
                    const isActive = currentSession?._id === s._id;
                    return (
                      <div
                        key={s._id}
                        onClick={() => selectSession(s)}
                        className={`flex items-start gap-3 p-3 rounded-md cursor-pointer transition ${
                          isActive ? "bg-[#2a3550]" : "hover:bg-[#1c2337]"
                        }`}
                      >
                        <Avatar className="h-9 w-9 bg-[#5ddcff]/20 text-[#5ddcff]">
                          <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-[#e0e6f6] truncate">
                              {lastMsg?.message || "New conversation"}
                            </div>
                            <div className="text-xs text-[#9fb0c9] ml-2">
                              {lastMsg?.timestamp ? formatTime(lastMsg.timestamp) : ""}
                            </div>
                          </div>
                          <div className="text-xs text-[#9fb0c9] truncate mt-1">
                            {s.participants?.length ? `${s.participants.length} participants` : "Vybe Assistant"}
                          </div>
                        </div>
                        <button
                          onClick={(e) => deleteSession(s._id, e)}
                          className="ml-2 text-red-400 opacity-0 hover:opacity-100 group-hover:opacity-100"
                          title="Delete chat"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </aside>

      {/* Right: Chat area */}
      <section className="flex-1 p-4">
        <Card className="h-full flex flex-col bg-[#0f1622] border-[#263044]">
          <CardHeader className="flex items-center justify-between border-b border-[#263044] pb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-gradient-to-r from-[#7f5af0] to-[#5ddcff] flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-medium">Vybe Assistant</div>
                <div className="text-xs text-[#9fb0c9]">Conversational support & guidance</div>
              </div>
            </div>
            <div className="text-sm text-[#9fb0c9]">{currentSession ? "Session active" : "No session selected"}</div>
          </CardHeader>

          <CardContent className="flex-1 p-0 flex flex-col">
            {currentSession ? (
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-4 min-h-[40vh]">
                  {messages.length === 0 ? (
                    <div className="text-center py-12 text-[#a0aec0]">
                      <Bot className="w-14 h-14 mx-auto mb-4 opacity-50" />
                      <div>Start a conversation</div>
                    </div>
                  ) : (
                    messages.map((m) => (
                      <div
                        key={m._id}
                        className={`flex ${m.sender === "student" ? "justify-end" : "justify-start"}`}
                      >
                        {m.sender !== "student" && (
                          <div className="mr-3">
                            <Avatar className="h-8 w-8 bg-[#5ddcff]/20 text-[#5ddcff]">
                              <AvatarFallback>AI</AvatarFallback>
                            </Avatar>
                          </div>
                        )}
                        <div className={`max-w-[70%] px-4 py-2 rounded-lg ${m.sender === "student" ? "bg-gradient-to-r from-[#5ddcff] to-[#7f5af0] text-black" : "bg-[#141a2b] text-[#e0e6f6] border border-[#263044]"}`}>
                          <div className="text-sm whitespace-pre-wrap">{m.message}</div>
                          <div className={`text-xs mt-1 ${m.sender === "student" ? "text-black/60" : "text-[#9fb0c9]"}`}>
                            {formatTime(m.timestamp)}
                          </div>
                        </div>
                        {m.sender === "student" && (
                          <div className="ml-3">
                            <Avatar className="h-8 w-8 bg-[#7f5af0] text-white">
                              <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
            ) : (
              <div className="flex-1 flex items-center justify-center px-6 py-8">
                <div className="text-center">
                  <MessageCircle className="w-14 h-14 mx-auto mb-3 text-[#7f5af0] opacity-60" />
                  <p className="text-lg text-[#e0e6f6] mt-2">Select or start a chat</p>
                </div>
              </div>
            )}
          </CardContent>

          {/* Input area */}
          <div className="p-4 border-t border-[#263044] bg-transparent">
            <form onSubmit={sendMessage} className="flex gap-3">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                disabled={loading || !currentSession}
                className="flex-1 bg-[#0f1622] border-[#2a3550] text-[#e0e6f6]"
              />
              <Button
                type="submit"
                disabled={loading || !inputMessage.trim() || !currentSession}
                className="bg-gradient-to-r from-[#5ddcff] to-[#7f5af0] text-black"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default ChatInterface;
// ...existing code...