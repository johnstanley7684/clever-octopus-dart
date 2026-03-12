"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

// 2025/26 OJHL Season Stats for Georgetown Raiders
const playerStats = [
  { name: "BRADEN LAUWAERT", gp: 54, g: 32, a: 41, pts: 73, pim: 38, plusMinus: 22 },
  { name: "KASEN BEITZ", gp: 54, g: 24, a: 45, pts: 69, pim: 20, plusMinus: 25 },
  { name: "VINCE ALBANESE", gp: 52, g: 28, a: 34, pts: 62, pim: 44, plusMinus: 18 },
  { name: "OWEN MELI", gp: 54, g: 20, a: 38, pts: 58, pim: 24, plusMinus: 16 },
  { name: "JACKSON BELL", gp: 53, g: 25, a: 28, pts: 53, pim: 58, plusMinus: 12 },
  { name: "THOMAS KIRKLAND", gp: 54, g: 16, a: 32, pts: 48, pim: 28, plusMinus: 14 },
  { name: "ALEXANDER RAK", gp: 54, g: 9, a: 36, pts: 45, pim: 68, plusMinus: 28 },
  { name: "CALVIN ILKAY", gp: 51, g: 6, a: 29, pts: 35, pim: 46, plusMinus: 20 },
];

const seasonTrend = [
  { game: '1-10', goalsFor: 3.8, goalsAgainst: 2.4 },
  { game: '11-20', goalsFor: 4.1, goalsAgainst: 2.1 },
  { game: '21-30', goalsFor: 4.4, goalsAgainst: 1.9 },
  { game: '31-40', goalsFor: 3.9, goalsAgainst: 2.3 },
  { game: '41-50', goalsFor: 4.6, goalsAgainst: 1.8 },
  { game: '51-54', goalsFor: 4.2, goalsAgainst: 2.0 },
];

const Stats = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">2025/26 OJHL Statistics</h1>
          <p className="text-muted-foreground">Official performance data for the Georgetown Raiders - Regular Season.</p>
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
                <span className="font-bold text-xl">38-12-2-2</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-slate-400">Points</span>
                <span className="font-bold text-xl">80</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-slate-400">West Division Rank</span>
                <span className="font-bold text-xl text-blue-400">1st</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-slate-400">Power Play %</span>
                <span className="font-bold text-xl">24.1%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Penalty Kill %</span>
                <span className="font-bold text-xl">86.5%</span>
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
                  <TableRow key={player.name} className="hover:bg-slate-50/50 transition-colors">
                    <TableCell className="font-bold pl-6">{player.name}</TableCell>
                    <TableCell className="text-center">{player.gp}</TableCell>
                    <TableCell className="text-center">{player.g}</TableCell>
                    <TableCell className="text-center">{player.a}</TableCell>
                    <TableCell className="text-center font-black text-blue-600">{player.pts}</TableCell>
                    <TableCell className="text-center">
                      <span className={player.plusMinus > 0 ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                        {player.plusMinus > 0 ? `+${player.plusMinus}` : player.plusMinus}
                      </span>
                    </TableCell>
                    <TableCell className="text-center pr-6">{player.pim}</TableCell>
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