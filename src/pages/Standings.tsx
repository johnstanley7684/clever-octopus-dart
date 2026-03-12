"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const standings = [
  { rank: 1, team: "Georgetown Raiders", gp: 54, w: 38, l: 12, otl: 2, sol: 2, pts: 80, gf: 212, ga: 145, diff: "+67", streak: "W5" },
  { rank: 2, team: "Collingwood Blues", gp: 54, w: 36, l: 14, otl: 3, sol: 1, pts: 76, gf: 198, ga: 132, diff: "+66", streak: "W2" },
  { rank: 3, team: "Milton Menace", gp: 54, w: 33, l: 16, otl: 4, sol: 1, pts: 71, gf: 185, ga: 154, diff: "+31", streak: "L1" },
  { rank: 4, team: "Burlington Cougars", gp: 54, w: 30, l: 19, otl: 3, sol: 2, pts: 65, gf: 174, ga: 162, diff: "+12", streak: "W1" },
  { rank: 5, team: "Oakville Blades", gp: 54, w: 27, l: 22, otl: 4, sol: 1, pts: 59, gf: 168, ga: 175, diff: "-7", streak: "L2" },
  { rank: 6, team: "Buffalo Jr. Sabres", gp: 54, w: 22, l: 28, otl: 3, sol: 1, pts: 48, gf: 152, ga: 188, diff: "-36", streak: "W1" },
  { rank: 7, team: "King City Royals", gp: 54, w: 15, l: 34, otl: 3, sol: 2, pts: 35, gf: 134, ga: 210, diff: "-76", streak: "L4" },
];

const Standings = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">OJHL League Standings</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The 2025/26 Regular Season race. The Raiders are currently leading the West Division.
          </p>
        </div>

        <Card className="border-none shadow-lg overflow-hidden">
          <CardHeader className="bg-slate-900 text-white">
            <CardTitle className="flex items-center justify-between">
              <span>West Division</span>
              <Badge variant="secondary" className="bg-blue-600 text-white border-none">Season 2025/26</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-slate-100">
                <TableRow>
                  <TableHead className="w-16 text-center">Rank</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead className="text-center">GP</TableHead>
                  <TableHead className="text-center">W</TableHead>
                  <TableHead className="text-center">L</TableHead>
                  <TableHead className="text-center">OTL</TableHead>
                  <TableHead className="text-center font-bold">PTS</TableHead>
                  <TableHead className="text-center hidden md:table-cell">GF</TableHead>
                  <TableHead className="text-center hidden md:table-cell">GA</TableHead>
                  <TableHead className="text-center hidden md:table-cell">DIFF</TableHead>
                  <TableHead className="text-center">STREAK</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {standings.map((row) => (
                  <TableRow key={row.team} className={row.team === "Georgetown Raiders" ? "bg-blue-50/50 font-medium" : ""}>
                    <TableCell className="text-center font-bold">{row.rank}</TableCell>
                    <TableCell className="flex items-center gap-3">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        row.rank <= 4 ? "bg-green-500" : "bg-slate-300"
                      )} />
                      {row.team}
                      {row.team === "Georgetown Raiders" && <Badge variant="outline" className="ml-2 text-[10px] uppercase py-0">CLINCHED</Badge>}
                    </TableCell>
                    <TableCell className="text-center">{row.gp}</TableCell>
                    <TableCell className="text-center">{row.w}</TableCell>
                    <TableCell className="text-center">{row.l}</TableCell>
                    <TableCell className="text-center">{row.otl}</TableCell>
                    <TableCell className="text-center font-bold text-blue-600">{row.pts}</TableCell>
                    <TableCell className="text-center hidden md:table-cell">{row.gf}</TableCell>
                    <TableCell className="text-center hidden md:table-cell">{row.ga}</TableCell>
                    <TableCell className="text-center hidden md:table-cell">
                      <span className={row.diff.startsWith('+') ? "text-green-600" : "text-red-600"}>
                        {row.diff}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className={cn(
                        "font-mono",
                        row.streak.startsWith('W') ? "border-green-200 text-green-700 bg-green-50" : "border-red-200 text-red-700 bg-red-50"
                      )}>
                        {row.streak}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span>Playoff Position</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-300" />
            <span>In Contention</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Standings;