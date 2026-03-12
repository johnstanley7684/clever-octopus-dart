"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const standings = [
  { rank: 1, team: "Titans", gp: 50, w: 35, l: 12, otl: 3, pts: 73, gf: 164, ga: 112, diff: "+52", streak: "W4" },
  { rank: 2, team: "Wolves", gp: 50, w: 32, l: 15, otl: 3, pts: 67, gf: 158, ga: 130, diff: "+28", streak: "L1" },
  { rank: 3, team: "Kings", gp: 49, w: 28, l: 18, otl: 3, pts: 59, gf: 142, ga: 138, diff: "+4", streak: "W2" },
  { rank: 4, team: "Blizzards", gp: 50, w: 25, l: 20, otl: 5, pts: 55, gf: 135, ga: 142, diff: "-7", streak: "L2" },
  { rank: 5, team: "Ravens", gp: 50, w: 22, l: 24, otl: 4, pts: 48, gf: 128, ga: 145, diff: "-17", streak: "W1" },
  { rank: 6, team: "Bears", gp: 50, w: 18, l: 28, otl: 4, pts: 40, gf: 115, ga: 158, diff: "-43", streak: "L3" },
  { rank: 7, team: "Sharks", gp: 49, w: 15, l: 30, otl: 4, pts: 34, gf: 108, ga: 165, diff: "-57", streak: "L1" },
];

const Standings = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">League Standings</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The race for the championship. Titans are currently leading the Northern Division.
          </p>
        </div>

        <Card className="border-none shadow-lg overflow-hidden">
          <CardHeader className="bg-slate-900 text-white">
            <CardTitle className="flex items-center justify-between">
              <span>Northern Division</span>
              <Badge variant="secondary" className="bg-blue-600 text-white border-none">Season 2024/25</Badge>
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
                  <TableRow key={row.team} className={row.team === "Titans" ? "bg-blue-50/50 font-medium" : ""}>
                    <TableCell className="text-center font-bold">{row.rank}</TableCell>
                    <TableCell className="flex items-center gap-3">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        row.rank <= 4 ? "bg-green-500" : "bg-slate-300"
                      )} />
                      {row.team}
                      {row.team === "Titans" && <Badge variant="outline" className="ml-2 text-[10px] uppercase py-0">CLINCHED</Badge>}
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