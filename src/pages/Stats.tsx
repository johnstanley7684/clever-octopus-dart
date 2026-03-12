"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { players } from '@/data/roster';

// Simulating realistic OJHL stats for the current roster
const playerStats = [
  { name: "BRADEN LAUWAERT", gp: 48, g: 24, a: 32, pts: 56, pim: 28, plusMinus: 12 },
  { name: "KASEN BEITZ", gp: 50, g: 18, a: 35, pts: 53, pim: 14, plusMinus: 15 },
  { name: "VINCE ALBANESE", gp: 45, g: 22, a: 28, pts: 50, pim: 32, plusMinus: 8 },
  { name: "OWEN MELI", gp: 52, g: 15, a: 30, pts: 45, pim: 18, plusMinus: 10 },
  { name: "JACKSON BELL", gp: 49, g: 19, a: 21, pts: 40, pim: 44, plusMinus: 5 },
  { name: "THOMAS KIRKLAND", gp: 51, g: 12, a: 25, pts: 37, pim: 22, plusMinus: 7 },
  { name: "ALEXANDER RAK", gp: 52, g: 5, a: 28, pts: 33, pim: 56, plusMinus: 18 },
  { name: "CALVIN ILKAY", gp: 48, g: 4, a: 22, pts: 26, pim: 38, plusMinus: 14 },
];

const teamPerformance = [
  { month: 'Sep', wins: 7, losses: 2 },
  { month: 'Oct', wins: 6, losses: 4 },
  { month: 'Nov', wins: 8, losses: 1 },
  { month: 'Dec', wins: 5, losses: 3 },
  { month: 'Jan', wins: 9, losses: 2 },
  { month: 'Feb', wins: 7, losses: 3 },
];

const Stats = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Team Statistics</h1>
          <p className="text-muted-foreground">Comprehensive performance data for the 2024-25 OJHL Season.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 border-none shadow-md">
            <CardHeader>
              <CardTitle>Monthly Performance</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={teamPerformance}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                    cursor={{ fill: '#f1f5f9' }}
                  />
                  <Bar dataKey="wins" fill="#2563eb" radius={[4, 4, 0, 0]} name="Wins" />
                  <Bar dataKey="losses" fill="#ef4444" radius={[4, 4, 0, 0]} name="Losses" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-slate-900 text-white">
            <CardHeader>
              <CardTitle>Season Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-slate-400">Record</span>
                <span className="font-bold text-xl">42-15-0-3</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-slate-400">Points</span>
                <span className="font-bold text-xl">87</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-slate-400">Division Rank</span>
                <span className="font-bold text-xl text-blue-400">2nd</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-slate-400">Goals For</span>
                <span className="font-bold text-xl">184</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Goals Against</span>
                <span className="font-bold text-xl">132</span>
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