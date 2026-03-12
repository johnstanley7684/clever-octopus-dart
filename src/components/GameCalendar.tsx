"use client";

import React from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Trophy } from 'lucide-react';
import { format, parse } from 'date-fns';

interface Game {
  id: number;
  opponent: string;
  date: string;
  time: string;
  venue: string;
  type: string;
  status: string;
  result?: string;
}

interface GameCalendarProps {
  games: Game[];
}

const GameCalendar = ({ games }: GameCalendarProps) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 8, 13)); // Default to a game month

  const gameDates = games.map(game => parse(game.date, 'MMM d, yyyy', new Date()));
  
  const selectedGame = games.find(game => {
    if (!date) return false;
    const gameDate = parse(game.date, 'MMM d, yyyy', new Date());
    return format(gameDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd');
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <Card className="border-none shadow-lg bg-zinc-900 p-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border-none text-white"
          modifiers={{
            gameDay: gameDates
          }}
          modifiersStyles={{
            gameDay: { fontWeight: 'bold', color: '#ef4444', textDecoration: 'underline' }
          }}
        />
        <div className="mt-4 flex items-center gap-4 text-xs text-slate-400 px-4">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span>Game Day</span>
          </div>
        </div>
      </Card>

      <div className="space-y-6">
        {selectedGame ? (
          <Card className="border-none shadow-xl bg-red-600 text-white animate-in fade-in slide-in-from-right-5 duration-500">
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge className="bg-black text-white border-none">
                  {selectedGame.type} Game
                </Badge>
                <span className="text-sm font-bold opacity-80">{selectedGame.date}</span>
              </div>
              <CardTitle className="text-3xl font-black mt-4">
                RAIDERS VS. {selectedGame.opponent.toUpperCase()}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-black/20 p-2 rounded-lg">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold opacity-70">Puck Drop</p>
                    <p className="font-bold">{selectedGame.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-black/20 p-2 rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold opacity-70">Venue</p>
                    <p className="font-bold">{selectedGame.venue}</p>
                  </div>
                </div>
              </div>

              {selectedGame.status === "Completed" && (
                <div className="bg-black/20 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-400" />
                    <span className="font-bold">Final Result</span>
                  </div>
                  <span className="text-2xl font-black italic">{selectedGame.result}</span>
                </div>
              )}

              <div className="pt-4">
                <button className="w-full bg-white text-red-600 hover:bg-slate-100 py-3 rounded-full font-black transition-colors">
                  {selectedGame.status === "Upcoming" ? "GET TICKETS" : "VIEW RECAP"}
                </button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-none shadow-md bg-zinc-900 h-full flex flex-col items-center justify-center p-12 text-center space-y-4">
            <div className="bg-zinc-800 p-6 rounded-full">
              <Calendar className="h-12 w-12 text-slate-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">No Game Scheduled</h3>
              <p className="text-slate-400">Select a highlighted date on the calendar to see game details.</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default GameCalendar;