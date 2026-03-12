"use client";

import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Send, Users, Hash, MessageSquare, Zap } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

interface Message {
  id: number;
  user: string;
  text: string;
  time: string;
  isMe: boolean;
  avatar?: string;
}

const initialMessages: Message[] = [
  { id: 1, user: "RaiderFan99", text: "What a goal by Lauwaert! 🚨", time: "7:45 PM", isMe: false },
  { id: 2, user: "HockeyMom_ON", text: "The atmosphere at Alcott is electric tonight!", time: "7:46 PM", isMe: false },
  { id: 3, user: "GoalieGuru", text: "Quinn is standing on his head in the 3rd period.", time: "7:48 PM", isMe: false },
];

const Chatroom = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const msg: Message = {
      id: Date.now(),
      user: "You",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };

    setMessages([...messages, msg]);
    setNewMessage("");
    
    // Simulate a response
    setTimeout(() => {
      const response: Message = {
        id: Date.now() + 1,
        user: "RaiderBot",
        text: "Go Raiders Go! 🏒",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: false
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container py-8 flex flex-col h-[calc(100vh-120px)]">
        <div className="flex flex-col md:flex-row gap-6 h-full">
          {/* Sidebar */}
          <div className="hidden md:flex flex-col w-64 gap-4">
            <Card className="bg-zinc-900 border-none shadow-lg flex-grow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Hash className="h-4 w-4" /> Channels
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <Button variant="ghost" className="w-full justify-start gap-2 text-red-500 bg-red-500/10 font-bold">
                  <Zap className="h-4 w-4" /> Game-Day-Live
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2 text-slate-400 hover:text-white">
                  <MessageSquare className="h-4 w-4" /> General-Chat
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2 text-slate-400 hover:text-white">
                  <Users className="h-4 w-4" /> Off-Topic
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-none shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase">Online Fans</span>
                  <Badge variant="outline" className="text-[10px] border-green-500 text-green-500">142</Badge>
                </div>
                <div className="space-y-3">
                  {["RaiderFan99", "GoalieGuru", "HockeyMom_ON", "PuckMaster"].map((user) => (
                    <div key={user} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-sm text-slate-300">{user}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <Card className="flex-grow flex flex-col bg-zinc-900 border-none shadow-2xl overflow-hidden">
            <CardHeader className="border-b border-zinc-800 bg-black/20 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-red-600 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">Game-Day-Live</CardTitle>
                    <p className="text-xs text-slate-500">Discussing: Raiders vs. Menace</p>
                  </div>
                </div>
                <Badge className="bg-red-600 text-white border-none animate-pulse">LIVE</Badge>
              </div>
            </CardHeader>

            <CardContent className="flex-grow p-0 relative">
              <ScrollArea className="h-full p-6" viewportRef={scrollRef}>
                <div className="space-y-6">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex gap-4 ${msg.isMe ? "flex-row-reverse" : ""}`}>
                      <Avatar className="h-10 w-10 border-2 border-zinc-800">
                        <AvatarFallback className={msg.isMe ? "bg-red-600 text-white" : "bg-zinc-800 text-slate-400"}>
                          {msg.user[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`flex flex-col max-w-[70%] ${msg.isMe ? "items-end" : ""}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-white">{msg.user}</span>
                          <span className="text-[10px] text-slate-500">{msg.time}</span>
                        </div>
                        <div className={`p-3 rounded-2xl text-sm ${
                          msg.isMe 
                            ? "bg-red-600 text-white rounded-tr-none" 
                            : "bg-zinc-800 text-slate-200 rounded-tl-none"
                        }`}>
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>

            <div className="p-4 bg-black/40 border-t border-zinc-800">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..." 
                  className="bg-zinc-800 border-none text-white focus-visible:ring-red-600 h-12 rounded-xl"
                />
                <Button type="submit" className="h-12 w-12 rounded-xl bg-red-600 hover:bg-red-700 text-white p-0">
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Chatroom;