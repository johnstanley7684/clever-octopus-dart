"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Clock, Zap, Shield } from 'lucide-react';

const MatchCenter = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Live Score Header */}
        <div className="bg-slate-950 text-white py-12 border-b border-slate-800">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 shadow-xl">
                  <img src="https://www.georgetownraiders.com/pics/georgetown logo.png" alt="Raiders" className="w-full h-auto" />
                </div>
                <div>
                  <h2 className="text-2xl font-black tracking-tighter">GEORGETOWN RAIDERS</h2>
                  <p className="text-red-500 font-bold">HOME</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <Badge className="bg-red-600 text-white animate-pulse px-4 py-1">LIVE - 3RD PERIOD</Badge>
                <div className="flex items-center gap-8">
                  <span className="text-7xl md:text-9xl font-black italic">4</span>
                  <span className="text-4xl font-black text-slate-700 italic">VS</span>
                  <span className="text-7xl md:text-9xl font-black italic">2</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 font-mono">
                  <Clock className="h-4 w-4" />
                  <span>12:45 REMAINING</span>
                </div>
              </div>

              <div className="flex flex-col items-center text-center md:items-end md:text-right gap-4">
                <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center p-6 shadow-xl">
                  <Shield className="h-full w-full text-slate-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-black tracking-tighter">MILTON MENACE</h2>
                  <p className="text-slate-400 font-bold">AWAY</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Tabs defaultValue="summary" className="w-full">
                <TabsList className="grid w-full grid-cols-3 rounded-xl h-12 bg-slate-100">
                  <TabsTrigger value="summary" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Game Summary</TabsTrigger>
                  <TabsTrigger value="stats" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Team Stats</TabsTrigger>
                  <TabsTrigger value="lineups" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Lineups</TabsTrigger>
                </TabsList>

                <TabsContent value="summary" className="mt-6 space-y-6">
                  <Card className="border-none shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Zap className="h-5 w-5 text-red-600" />
                        Scoring Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { period: "1st", time: "04:22", team: "RAIDERS", player: "B. Lauwaert (12)", assist: "K. Beitz, A. Rak", score: "1-0" },
                        { period: "1st", time: "18:45", team: "MENACE", player: "J. Smith (8)", assist: "Unassisted", score: "1-1" },
                        { period: "2nd", time: "02:10", team: "RAIDERS", player: "V. Albanese (15)", assist: "O. Meli", score: "2-1" },
                        { period: "2nd", time: "15:30", team: "RAIDERS", player: "K. Beitz (10)", assist: "B. Lauwaert", score: "3-1" },
                        { period: "3rd", time: "05:12", team: "MENACE", player: "T. Brown (5)", assist: "M. Wilson", score: "3-2" },
                        { period: "3rd", time: "07:45", team: "RAIDERS", player: "B. Lauwaert (13)", assist: "A. Rak", score: "4-2" },
                      ].map((goal, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
                          <div className="flex items-center gap-4">
                            <span className="text-xs font-bold text-muted-foreground w-8">{goal.period}</span>
                            <span className="text-xs font-mono bg-slate-100 px-2 py-0.5 rounded">{goal.time}</span>
                            <div>
                              <p className="text-sm font-bold">{goal.player}</p>
                              <p className="text-[10px] text-muted-foreground">AST: {goal.assist}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className={goal.team === "RAIDERS" ? "text-red-600 border-red-200" : "text-slate-400"}>{goal.team}</Badge>
                            <p className="text-sm font-black">{goal.score}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="stats" className="mt-6">
                  <Card className="border-none shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">Team Comparison</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {[
                        { label: "Shots on Goal", home: 32, away: 24 },
                        { label: "Faceoff Win %", home: 58, away: 42 },
                        { label: "Power Play", home: "1/3", away: "0/4" },
                        { label: "Penalty Minutes", home: 8, away: 6 },
                        { label: "Hits", home: 14, away: 18 },
                      ].map((stat, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between text-sm font-bold">
                            <span className="text-red-600">{stat.home}</span>
                            <span className="text-muted-foreground uppercase tracking-widest text-[10px]">{stat.label}</span>
                            <span>{stat.away}</span>
                          </div>
                          <div className="flex h-2 w-full rounded-full overflow-hidden bg-slate-100">
                            <div 
                              className="bg-red-600 h-full" 
                              style={{ width: typeof stat.home === 'number' ? `${(stat.home / (stat.home + (stat.away as number))) * 100}%` : '50%' }} 
                            />
                            <div 
                              className="bg-slate-400 h-full" 
                              style={{ width: typeof stat.away === 'number' ? `${(stat.away / ((stat.home as number) + stat.away)) * 100}%` : '50%' }} 
                            />
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="lineups" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-none shadow-sm">
                      <CardHeader>
                        <CardTitle className="text-sm font-bold text-red-600">RAIDERS LINEUP</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-xs font-bold text-muted-foreground border-b pb-1">FORWARDS</p>
                        <p className="text-sm">Lauwaert - Beitz - Albanese</p>
                        <p className="text-sm">Meli - Bell - Kirkland</p>
                        <p className="text-xs font-bold text-muted-foreground border-b pb-1 pt-4">DEFENCE</p>
                        <p className="text-sm">Rak - Ilkay</p>
                        <p className="text-sm">Yin - Agius</p>
                        <p className="text-xs font-bold text-muted-foreground border-b pb-1 pt-4">GOALIE</p>
                        <p className="text-sm">Quinn</p>
                      </CardContent>
                    </Card>
                    <Card className="border-none shadow-sm">
                      <CardHeader>
                        <CardTitle className="text-sm font-bold text-slate-600">MENACE LINEUP</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-xs font-bold text-muted-foreground border-b pb-1">FORWARDS</p>
                        <p className="text-sm">Smith - Brown - Wilson</p>
                        <p className="text-sm">Davis - Miller - Johnson</p>
                        <p className="text-xs font-bold text-muted-foreground border-b pb-1 pt-4">DEFENCE</p>
                        <p className="text-sm">White - Taylor</p>
                        <p className="text-sm">Anderson - Moore</p>
                        <p className="text-xs font-bold text-muted-foreground border-b pb-1 pt-4">GOALIE</p>
                        <p className="text-sm">Stevens</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="border-none shadow-md bg-red-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    Player of the Game
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto p-2 shadow-xl">
                    <img src="https://www.georgetownraiders.com/pics/georgetown logo.png" alt="Player" className="w-full h-auto" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">BRADEN LAUWAERT</h3>
                    <p className="text-red-100 font-bold">2 GOALS, 1 ASSIST</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Game Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Venue</span>
                    <span className="font-bold">Alcott Arena</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Attendance</span>
                    <span className="font-bold">1,042</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Officials</span>
                    <span className="font-bold">R. Smith, J. Doe</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MatchCenter;