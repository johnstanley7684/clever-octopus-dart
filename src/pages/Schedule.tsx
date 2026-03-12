"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Trophy, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const games = [
  { id: 1, opponent: "Milton Menace", date: "Sep 13, 2025", time: "7:30 PM", venue: "Alcott Arena", type: "Home", status: "Upcoming" },
  { id: 2, opponent: "Oakville Blades", date: "Sep 20, 2025", time: "7:30 PM", venue: "Alcott Arena", type: "Home", status: "Upcoming" },
  { id: 3, opponent: "Burlington Cougars", date: "Sep 27, 2025", time: "7:30 PM", venue: "Alcott Arena", type: "Home", status: "Upcoming" },
  { id: 4, opponent: "Collingwood Blues", date: "Oct 4, 2025", time: "7:30 PM", venue: "Alcott Arena", type: "Home", status: "Upcoming" },
  { id: 5, opponent: "Buffalo Jr. Sabres", date: "Oct 11, 2025", time: "7:30 PM", venue: "Alcott Arena", type: "Home", status: "Upcoming" },
  { id: 6, opponent: "King City Royals", date: "Sep 6, 2025", time: "7:30 PM", venue: "Alcott Arena", type: "Completed", result: "W 4-2" },
  { id: 7, opponent: "North York Rangers", date: "Aug 30, 2025", time: "7:30 PM", venue: "Vic Johnston CC", type: "Away", status: "Completed", result: "W 3-1" },
  { id: 8, opponent: "Toronto Jr. Canadiens", date: "Aug 23, 2025", time: "7:30 PM", venue: "Alcott Arena", type: "Home", status: "Completed", result: "L 2-4" },
];

const Schedule = () => {
  const upcomingGames = games.filter(g => g.status === "Upcoming");
  const pastGames = games.filter(g => g.status === "Completed");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Season Schedule</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            OJHL 2025-26 Regular Season. Join us at Alcott Arena for the Raid!
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming Games</TabsTrigger>
              <TabsTrigger value="past">Past Results</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="upcoming" className="space-y-4 animate-in fade-in duration-500">
            {upcomingGames.map((game) => (
              <Card key={game.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="bg-blue-600 text-white p-6 flex flex-col items-center justify-center min-w-[140px]">
                      <span className="text-sm font-bold uppercase opacity-70">{game.date.split(',')[0]}</span>
                      <span className="text-2xl font-black">{game.date.split(' ')[1].replace(',', '')}</span>
                    </div>
                    <div className="flex-grow p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-6">
                        <div className="text-center md:text-left">
                          <Badge variant={game.type === "Home" ? "default" : "outline"} className="mb-2">
                            {game.type} Game
                          </Badge>
                          <h3 className="text-xl font-bold">Raiders vs. {game.opponent}</h3>
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{game.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{game.venue}</span>
                        </div>
                      </div>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-colors">
                        Tickets
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="past" className="space-y-4 animate-in fade-in duration-500">
            {pastGames.map((game) => (
              <Card key={game.id} className="overflow-hidden border-none shadow-sm opacity-80 grayscale-[0.5] hover:grayscale-0 transition-all">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="bg-slate-200 text-slate-600 p-6 flex flex-col items-center justify-center min-w-[140px]">
                      <span className="text-sm font-bold uppercase">{game.date.split(',')[0]}</span>
                      <span className="text-2xl font-black">{game.date.split(' ')[1].replace(',', '')}</span>
                    </div>
                    <div className="flex-grow p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div>
                        <h3 className="text-xl font-bold">Raiders vs. {game.opponent}</h3>
                        <p className="text-sm text-muted-foreground">{game.venue}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "text-2xl font-black px-4 py-1 rounded-lg",
                          game.result?.startsWith('W') ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        )}>
                          {game.result}
                        </div>
                        <button className="text-blue-600 hover:underline text-sm font-bold">
                          Recap
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Schedule;