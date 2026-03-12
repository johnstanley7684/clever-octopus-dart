"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const playerStats = [
  { name: "Connor Reed", gp: 42, g: 28, a: 34, pts: 62, pim: 12, plusMinus: 18 },
  { name: "Marcus Vane", gp: 42, g: 22, a: 38, pts: 60, pim: 24, plusMinus: 14 },
  { name: "Tyler Stone", gp: 40, g: 18, a: 22, pts: 40, pim: 8, plusMinus: 10 },
  { name: "Erik Johansson", gp: 42, g: 8, a: 28, pts: 36, pim: 42, plusMinus: 22 },
  { name: "David Chen", gp: 38, g: 5, a: 15, pts: 20, pim: 36, plusMinus: 12 },
];

const teamPerformance = [
  { month: 'Oct', wins: 8, losses: 2 },
  { month: 'Nov', wins: 6, losses: 4 },
  { month: 'Dec', wins: 9, losses: 1 },
  { month: 'Jan', wins: 7, losses: 3 },
  { month: 'Feb', wins: 5, losses: 5 },
];

const Stats = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Team Statistics</h1>
          <p className="text-muted-foreground">Comprehensive performance data for the current season.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Monthly Performance</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={teamPerformance}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Bar dataKey="wins" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Wins" />
                  <Bar dataKey="losses" fill="#ef4444" radius={[4, 4, 0, 0]} name="Losses" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Season Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-muted-foreground">Record</span>
                <span className="font-bold text-xl">35-12-3</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-muted-foreground">Points</span>
                <span className="font-bold text-xl">73</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-muted-foreground">Division Rank</span>
                <span className="font-bold text-xl text-blue-600">1st</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-muted-foreground">Goals For</span>
                <span className="font-bold text-xl">164</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Goals Against</span>
                <span className="font-bold text-xl">112</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Player Leaderboard</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Player</TableHead>
                  <TableHead className="text-center">GP</TableHead>
                  <TableHead className="text-center">G</TableHead>
                  <TableHead className="text-center">A</TableHead>
                  <TableHead className="text-center">PTS</TableHead>
                  <TableHead className="text-center">+/-</TableHead>
                  <TableHead className="text-center">PIM</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {playerStats.map((player) => (
                  <TableRow key={player.name}>
                    <TableCell className="font-medium">{player.name}</TableCell>
                    <TableCell className="text-center">{player.gp}</TableCell>
                    <TableCell className="text-center">{player.g}</TableCell>
                    <TableCell className="text-center">{player.a}</TableCell>
                    <TableCell className="text-center font-bold">{player.pts}</TableCell>
                    <TableCell className="text-center">
                      <span className={player.plusMinus > 0 ? "text-green-600" : "text-red-600"}>
                        {player.plusMinus > 0 ? `+${player.plusMinus}` : player.plusMinus}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">{player.pim}</TableCell>
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