"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Share2, Download, Users, Star } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const FanZone = () => {
  const handleDownload = (item: string) => {
    showSuccess(`Starting download for ${item}...`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-blue-600 text-white py-20">
          <div className="container text-center">
            <Users className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h1 className="text-5xl font-black tracking-tighter mb-4">FAN ZONE</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">The heart of the Raiders community. Your home for exclusive content and fan rewards.</p>
          </div>
        </section>

        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Fan of the Month */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Star className="text-yellow-500" />
                  Fan of the Month
                </h2>
                <Card className="overflow-hidden border-none shadow-xl bg-white">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 h-64 md:h-auto">
                      <img 
                        src="https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&q=80&w=800" 
                        alt="Fan of the Month" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                      <Badge className="w-fit mb-4 bg-blue-600">OCTOBER 2024</Badge>
                      <h3 className="text-2xl font-bold mb-2">Sarah "The Roar" Jenkins</h3>
                      <p className="text-muted-foreground mb-6">
                        "I haven't missed a home game in 12 years. The Raiders aren't just a team, they're family. My favorite memory is the 2018 championship win!"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-black text-blue-600">142</p>
                          <p className="text-[10px] uppercase font-bold text-muted-foreground">Games Attended</p>
                        </div>
                        <div className="h-8 w-px bg-slate-200" />
                        <div className="text-center">
                          <p className="text-2xl font-black text-blue-600">12</p>
                          <p className="text-[10px] uppercase font-bold text-muted-foreground">Years a Member</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Download className="text-blue-600" />
                  Digital Downloads
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "2024/25 Schedule Wallpaper", type: "Desktop", size: "4.2 MB" },
                    { title: "Raiders Logo Pack", type: "Vector", size: "1.8 MB" },
                    { title: "Player Poster: Connor Reed", type: "Mobile", size: "2.5 MB" },
                    { title: "Arena Virtual Background", type: "Video", size: "12.4 MB" },
                  ].map((item, i) => (
                    <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 flex items-center justify-between">
                        <div>
                          <h4 className="font-bold">{item.title}</h4>
                          <p className="text-xs text-muted-foreground">{item.type} • {item.size}</p>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => handleDownload(item.title)}>
                          <Download className="h-5 w-5 text-blue-600" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Social Feed Sidebar */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-slate-900 text-white rounded-t-xl">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Share2 className="h-5 w-5 text-blue-400" />
                    #RaidersNation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {[
                      { user: "@hockeyfan99", text: "Just got my season tickets! Can't wait for puck drop! 🏒🔥", time: "2h ago" },
                      { user: "@raiders_news", text: "Practice was intense today. The boys are looking sharp for Saturday.", time: "4h ago" },
                      { user: "@ice_queen", text: "Who's going to the game on Saturday? Let's make some noise! 📣", time: "6h ago" },
                    ].map((post, i) => (
                      <div key={i} className="p-4 hover:bg-slate-50 transition-colors">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-bold text-sm text-blue-600">{post.user}</span>
                          <span className="text-[10px] text-muted-foreground">{post.time}</span>
                        </div>
                        <p className="text-sm text-slate-700">{post.text}</p>
                        <div className="flex gap-4 mt-3">
                          <button className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-red-500">
                            <Heart className="h-3 w-3" /> Like
                          </button>
                          <button className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-blue-500">
                            <Share2 className="h-3 w-3" /> Share
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-slate-50 text-center">
                    <Button variant="link" className="text-xs font-bold text-blue-600">View More on Social Media</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FanZone;