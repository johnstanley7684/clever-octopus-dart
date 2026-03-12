"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Trophy, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const games = [
  { id: 1, opponent: "Wolves", date: "Oct 12, 2024", time: "7:30 PM", venue: "Titan Memorial Arena", type: "Home", status: "Upcoming" },
  { id: 2, opponent: "Blizzards", date: "Oct 15, 2024", time: "8:00 PM", venue: "Frost Center", type: "Away", status: "Upcoming" },
  { id: 3, opponent: "Ravens", date: "Oct 19, 2024", time: "7:00 PM", venue: "Titan Memorial Arena", type: "Home", status: "Upcoming" },
  { id: 4, opponent: "Kings", date: "Oct 5, 2024", time: "7:30 PM", venue: "Titan Memorial Arena", type: "Home", status: "Completed", result: "W 4-2" },
  { id: 5, opponent: "Sharks", date: "Oct 1, 2024", time: "7:00 PM", venue: "Oceanic Arena", type: "Away", status: "Completed", result: "L 1-3" },
  { id: 6, opponent: "Bears", date: "Sep 28, 2024", time: "7:30 PM", venue: "Titan Memorial Arena", type: "Home", status: "Completed", result: "W 5-0" },
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
            Don't miss a single hit. Track our journey through the 2024/25 season.
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
                    <div className="bg-primary text-primary-foreground p-6 flex flex-col items-center justify-center min-w-[140px]">
                      <span className="text-sm font-bold uppercase opacity-70">{game.date.split(',')[0]}</span>
                      <span className="text-2xl font-black">{game.date.split(' ')[1].replace(',', '')}</span>
                    </div>
                    <div className="flex-grow p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-6">
                        <div className="text-center md:text-left">
                          <Badge variant={game.type === "Home" ? "default" : "outline"} className="mb-2">
                            {game.type} Game
                          </Badge>
                          <h3 className="text-xl font-bold">Titans vs. {game.opponent}</h3>
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
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-colors">
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
                        <h3 className="text-xl font-bold">Titans vs. {game.opponent}</h3>
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