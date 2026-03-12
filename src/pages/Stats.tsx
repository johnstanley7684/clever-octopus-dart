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
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Official OJHL Statistics</h1>
          <p className="text-muted-foreground">
            Performance data for the Georgetown Raiders sourced from the official OJHL network.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 border-none shadow-md">
            <CardHeader>
              <CardTitle>Scoring Trends (Goals Per Game)</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={seasonTrend}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="game" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                  <Line type="monotone" dataKey="goalsFor" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} name="Goals For" />
                  <Line type="monotone" dataKey="goalsAgainst" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} name="Goals Against" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-slate-900 text-white">
            <CardHeader>
              <CardTitle>Season Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-slate-400">Record (W-L-OTL-SOL)</span>
                <span className="font-bold text-xl">34-16-1-3</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-slate-400">Points</span>
                <span className="font-bold text-xl">72</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-slate-400">West Division Rank</span>
                <span className="font-bold text-xl text-blue-400">2nd</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-slate-400">Power Play %</span>
                <span className="font-bold text-xl">23.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Penalty Kill %</span>
                <span className="font-bold text-xl">85.2%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-none shadow-md overflow-hidden">
          <CardHeader className="bg-white border-b">
            <CardTitle>Player Leaderboard</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="pl-6">Player</TableHead>
                  <TableHead className="text-center">GP</TableHead>
                  <TableHead className="text-center">G</TableHead>
                  <TableHead className="text-center">A</TableHead>
                  <TableHead className="text-center font-bold">PTS</TableHead>
                  <TableHead className="text-center">+/-</TableHead>
                  <TableHead className="text-center pr-6">PIM</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {playerStats.map((player) => (
                  <TableRow key={player.id} className="hover:bg-slate-50/50 transition-colors">
                    <TableCell className="font-bold pl-6">{player.name}</TableCell>
                    <TableCell className="text-center">{player.stats.gp}</TableCell>
                    <TableCell className="text-center">{player.stats.g}</TableCell>
                    <TableCell className="text-center">{player.stats.a}</TableCell>
                    <TableCell className="text-center font-black text-blue-600">{player.stats.pts}</TableCell>
                    <TableCell className="text-center">
                      <span className={player.stats.plusMinus > 0 ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                        {player.stats.plusMinus > 0 ? `+${player.stats.plusMinus}` : player.stats.plusMinus}
                      </span>
                    </TableCell>
                    <TableCell className="text-center pr-6">{player.stats.pim}</TableCell>
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