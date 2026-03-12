"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { players } from '@/data/roster';

// Sort players by points for the leaderboard
const playerStats = [...players]
  .sort((a, b) => b.stats.pts - a.stats.pts)
  .slice(0, 15);

const seasonTrend = [
  { game: '1-10', goalsFor: 3.4, goalsAgainst: 2.6 },
  { game: '11-20', goalsFor: 3.7, goalsAgainst: 2.3 },
  { game: '21-30', goalsFor: 4.0, goalsAgainst: 2.1 },
  { game: '31-40', goalsFor: 3.6, goalsAgainst: 2.5 },
  { game: '41-50', goalsFor: 4.2, goalsAgainst: 1.9 },
  { game: '51-54', goalsFor: 3.8, goalsAgainst: 2.2 },
];

const Stats = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-white">Official OJHL Statistics</h1>
          <p className="text-slate-400">
            Performance data for the Georgetown Raiders sourced from the official OJHL network.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 border-none bg-zinc-900 shadow-md">
            <CardHeader>
              <CardTitle className="text-white">Scoring Trends (Goals Per Game)</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={seasonTrend}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#18181b" />
                  <XAxis dataKey="game" axisLine={false} tickLine={false} tick={{fill: '#71717a'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#71717a'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)', color: '#fff' }}
                  />
                  <Line type="monotone" dataKey="goalsFor" stroke="#ef4444" strokeWidth={3} dot={{ r: 4, fill: '#ef4444' }} name="Goals For" />
                  <Line type="monotone" dataKey="goalsAgainst" stroke="#71717a" strokeWidth={3} dot={{ r: 4, fill: '#71717a' }} name="Goals Against" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-none bg-zinc-950 text-white border border-zinc-800">
            <CardHeader>
              <CardTitle>Season Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <span className="text-slate-500">Record (W-L-OTL-SOL)</span>
                <span className="font-bold text-xl">34-16-1-3</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <span className="text-slate-500">Points</span>
                <span className="font-bold text-xl">72</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <span className="text-slate-500">West Division Rank</span>
                <span className="font-bold text-xl text-red-600">2nd</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <span className="text-slate-500">Power Play %</span>
                <span className="font-bold text-xl">23.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Penalty Kill %</span>
                <span className="font-bold text-xl">85.2%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-none bg-zinc-900 shadow-md overflow-hidden">
          <CardHeader className="bg-zinc-950 border-b border-zinc-800">
            <CardTitle className="text-white">Player Leaderboard</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-zinc-950">
                <TableRow className="border-zinc-800">
                  <TableHead className="pl-6 text-slate-400">Player</TableHead>
                  <TableHead className="text-center text-slate-400">GP</TableHead>
                  <TableHead className="text-center text-slate-400">G</TableHead>
                  <TableHead className="text-center text-slate-400">A</TableHead>
                  <TableHead className="text-center font-bold text-slate-400">PTS</TableHead>
                  <TableHead className="text-center text-slate-400">+/-</TableHead>
                  <TableHead className="text-center pr-6 text-slate-400">PIM</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {playerStats.map((player) => (
                  <TableRow key={player.id} className="hover:bg-zinc-800/50 transition-colors border-zinc-800">
                    <TableCell className="font-bold pl-6 text-white">{player.name}</TableCell>
                    <TableCell className="text-center text-slate-400">{player.stats.gp}</TableCell>
                    <TableCell className="text-center text-slate-400">{player.stats.g}</TableCell>
                    <TableCell className="text-center text-slate-400">{player.stats.a}</TableCell>
                    <TableCell className="text-center font-black text-red-600">{player.stats.pts}</TableCell>
                    <TableCell className="text-center">
                      <span className={player.stats.plusMinus > 0 ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
                        {player.stats.plusMinus > 0 ? `+${player.stats.plusMinus}` : player.stats.plusMinus}
                      </span>
                    </TableCell>
                    <TableCell className="text-center pr-6 text-slate-400">{player.stats.pim}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Stats;