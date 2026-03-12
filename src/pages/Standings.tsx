"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const allStandings = {
  West: [
    { rank: 1, team: "Georgetown Raiders", gp: 12, w: 10, l: 1, otl: 1, sol: 0, pts: 21, gf: 52, ga: 28, diff: "+24", streak: "W5" },
    { rank: 2, team: "Milton Menace", gp: 12, w: 8, l: 3, otl: 0, sol: 1, pts: 17, gf: 45, ga: 32, diff: "+13", streak: "W2" },
    { rank: 3, team: "Burlington Cougars", gp: 11, w: 7, l: 3, otl: 1, sol: 0, pts: 15, gf: 41, ga: 35, diff: "+6", streak: "L1" },
    { rank: 4, team: "Oakville Blades", gp: 12, w: 5, l: 6, otl: 1, sol: 0, pts: 11, gf: 38, ga: 42, diff: "-4", streak: "W1" },
    { rank: 5, team: "Brantford 99ers", gp: 12, w: 3, l: 8, otl: 1, sol: 0, pts: 7, gf: 30, ga: 48, diff: "-18", streak: "L3" },
    { rank: 6, team: "Buffalo Jr. Sabres", gp: 11, w: 2, l: 8, otl: 0, sol: 1, pts: 5, gf: 28, ga: 49, diff: "-21", streak: "L2" },
  ],
  North: [
    { rank: 1, team: "Collingwood Blues", gp: 12, w: 11, l: 1, otl: 0, sol: 0, pts: 22, gf: 58, ga: 20, diff: "+38", streak: "W10" },
    { rank: 2, team: "Aurora Tigers", gp: 12, w: 7, l: 4, otl: 1, sol: 0, pts: 15, gf: 42, ga: 38, diff: "+4", streak: "W1" },
    { rank: 3, team: "Markham Royals", gp: 11, w: 6, l: 4, otl: 1, sol: 0, pts: 13, gf: 39, ga: 35, diff: "+4", streak: "L1" },
    { rank: 4, team: "Pickering Panthers", gp: 12, w: 4, l: 7, otl: 1, sol: 0, pts: 9, gf: 33, ga: 45, diff: "-12", streak: "L2" },
    { rank: 5, team: "Stouffville Spirit", gp: 12, w: 2, l: 9, otl: 1, sol: 0, pts: 5, gf: 25, ga: 59, diff: "-34", streak: "L5" },
  ],
  South: [
    { rank: 1, team: "Toronto Jr. Canadiens", gp: 12, w: 9, l: 2, otl: 1, sol: 0, pts: 19, gf: 49, ga: 30, diff: "+19", streak: "W3" },
    { rank: 2, team: "North York Rangers", gp: 12, w: 8, l: 4, otl: 0, sol: 0, pts: 16, gf: 44, ga: 36, diff: "+8", streak: "W2" },
    { rank: 3, team: "Toronto Patriots", gp: 11, w: 5, l: 5, otl: 1, sol: 0, pts: 11, gf: 35, ga: 38, diff: "-3", streak: "L1" },
    { rank: 4, team: "Mississauga Chargers", gp: 12, w: 3, l: 8, otl: 1, sol: 0, pts: 7, gf: 29, ga: 53, diff: "-24", streak: "L4" },
  ],
  East: [
    { rank: 1, team: "Trenton Golden Hawks", gp: 12, w: 10, l: 2, otl: 0, sol: 0, pts: 20, gf: 55, ga: 25, diff: "+30", streak: "W6" },
    { rank: 2, team: "Wellington Dukes", gp: 12, w: 9, l: 3, otl: 0, sol: 0, pts: 18, gf: 50, ga: 31, diff: "+19", streak: "W4" },
    { rank: 3, team: "Cobourg Cougars", gp: 11, w: 6, l: 4, otl: 1, sol: 0, pts: 13, gf: 38, ga: 34, diff: "+4", streak: "L1" },
    { rank: 4, team: "Haliburton County Huskies", gp: 12, w: 5, l: 6, otl: 1, sol: 0, pts: 11, gf: 36, ga: 40, diff: "-4", streak: "W1" },
    { rank: 5, team: "Lindsay Muskies", gp: 12, w: 2, l: 10, otl: 0, sol: 0, pts: 4, gf: 22, ga: 71, diff: "-49", streak: "L8" },
  ]
};

const StandingsTable = ({ data }: { data: any[] }) => (
  <Table>
    <TableHeader className="bg-zinc-950">
      <TableRow className="border-zinc-800">
        <TableHead className="w-16 text-center text-slate-400">Rank</TableHead>
        <TableHead className="text-slate-400">Team</TableHead>
        <TableHead className="text-center text-slate-400">GP</TableHead>
        <TableHead className="text-center text-slate-400">W</TableHead>
        <TableHead className="text-center text-slate-400">L</TableHead>
        <TableHead className="text-center text-slate-400">OTL</TableHead>
        <TableHead className="text-center font-bold text-slate-400">PTS</TableHead>
        <TableHead className="text-center hidden md:table-cell text-slate-400">GF</TableHead>
        <TableHead className="text-center hidden md:table-cell text-slate-400">GA</TableHead>
        <TableHead className="text-center hidden md:table-cell text-slate-400">DIFF</TableHead>
        <TableHead className="text-center text-slate-400">STREAK</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((row) => (
        <TableRow key={row.team} className={cn("border-zinc-800", row.team === "Georgetown Raiders" ? "bg-red-900/10 font-medium" : "")}>
          <TableCell className="text-center font-bold text-white">{row.rank}</TableCell>
          <TableCell className="flex items-center gap-3 text-white">
            <div className={cn(
              "w-2 h-2 rounded-full",
              row.rank <= 4 ? "bg-green-500" : "bg-zinc-700"
            )} />
            {row.team}
            {row.team === "Georgetown Raiders" && <Badge variant="outline" className="ml-2 text-[10px] uppercase py-0 border-red-600 text-red-600">HOME TEAM</Badge>}
          </TableCell>
          <TableCell className="text-center text-slate-400">{row.gp}</TableCell>
          <TableCell className="text-center text-slate-400">{row.w}</TableCell>
          <TableCell className="text-center text-slate-400">{row.l}</TableCell>
          <TableCell className="text-center text-slate-400">{row.otl}</TableCell>
          <TableCell className="text-center font-bold text-red-600">{row.pts}</TableCell>
          <TableCell className="text-center hidden md:table-cell text-slate-400">{row.gf}</TableCell>
          <TableCell className="text-center hidden md:table-cell text-slate-400">{row.ga}</TableCell>
          <TableCell className="text-center hidden md:table-cell">
            <span className={row.diff.startsWith('+') ? "text-green-500" : "text-red-500"}>
              {row.diff}
            </span>
          </TableCell>
          <TableCell className="text-center">
            <Badge variant="outline" className={cn(
              "font-mono border-none",
              row.streak.startsWith('W') ? "text-green-500 bg-green-900/20" : "text-red-500 bg-red-900/20"
            )}>
              {row.streak}
            </Badge>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const Standings = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-white">Official OJHL Standings</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Current 2025/26 Regular Season Standings across all divisions.
          </p>
        </div>

        <Tabs defaultValue="West" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-4 bg-zinc-900">
              <TabsTrigger value="North" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-slate-400">North</TabsTrigger>
              <TabsTrigger value="South" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-slate-400">South</TabsTrigger>
              <TabsTrigger value="East" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-slate-400">East</TabsTrigger>
              <TabsTrigger value="West" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-slate-400">West</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(allStandings).map(([division, data]) => (
            <TabsContent key={division} value={division} className="animate-in fade-in duration-500">
              <Card className="border-none bg-zinc-900 shadow-lg overflow-hidden">
                <CardHeader className="bg-zinc-950 text-white border-b border-zinc-800">
                  <CardTitle className="flex items-center justify-between">
                    <span>{division} Division</span>
                    <Badge variant="secondary" className="bg-red-600 text-white border-none">Season 2025/26</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <StandingsTable data={data} />
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-8 flex items-center gap-6 text-sm text-slate-500 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span>Playoff Position</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
            <span>In Contention</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Standings;