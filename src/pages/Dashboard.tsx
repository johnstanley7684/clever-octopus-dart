"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Trophy, 
  Users, 
  Calendar, 
  TrendingUp, 
  Plus, 
  Settings, 
  Download,
  Activity,
  Target,
  Shield
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const performanceData = [
  { name: 'Game 1', goals: 3, allowed: 1 },
  { name: 'Game 2', goals: 4, allowed: 2 },
  { name: 'Game 3', goals: 2, allowed: 3 },
  { name: 'Game 4', goals: 5, allowed: 0 },
  { name: 'Game 5', goals: 3, allowed: 2 },
  { name: 'Game 6', goals: 4, allowed: 1 },
  { name: 'Game 7', goals: 6, allowed: 2 },
];

const recentActivities = [
  { id: 1, type: 'Game Result', desc: 'Won 4-2 vs Milton Menace', time: '2 hours ago', status: 'success' },
  { id: 2, type: 'Roster Update', desc: 'Braden Lauwaert added to Active List', time: '5 hours ago', status: 'info' },
  { id: 3, type: 'Injury Report', desc: 'Kasen Beitz (Day-to-Day)', time: '1 day ago', status: 'warning' },
  { id: 4, type: 'Ticket Sales', desc: 'Home game vs Oakville Blades Sold Out', time: '2 days ago', status: 'success' },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Team Dashboard</h1>
            <p className="text-slate-400">Welcome back, Coach. Here's what's happening with the Raiders.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2 border-zinc-800 text-white hover:bg-zinc-900">
              <Download className="h-4 w-4" /> Export Report
            </Button>
            <Button className="gap-2 bg-red-600 hover:bg-red-700 text-white">
              <Plus className="h-4 w-4" /> New Game Entry
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Season Points', value: '73', icon: Trophy, trend: '+12%', color: 'text-red-600' },
            { label: 'Active Roster', value: '24', icon: Users, trend: 'Full', color: 'text-green-600' },
            { label: 'Win Rate', value: '74.5%', icon: Activity, trend: '+2.4%', color: 'text-purple-600' },
            { label: 'Goals/Game', value: '3.28', icon: Target, trend: '-0.1', color: 'text-orange-600' },
          ].map((stat, i) => (
            <Card key={i} className="border-none bg-zinc-900 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className={`p-2 rounded-lg bg-black ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="secondary" className="text-[10px] font-bold bg-zinc-800 text-white border-none">
                    {stat.trend}
                  </Badge>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Performance Chart */}
          <Card className="lg:col-span-2 border-none bg-zinc-900 shadow-sm">
            <CardHeader>
              <CardTitle className="text-white">Scoring Performance</CardTitle>
              <CardDescription className="text-slate-400">Goals scored vs goals allowed over the last 7 games.</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorGoals" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#18181b" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#71717a'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#71717a'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.5)', color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="goals" stroke="#ef4444" fillOpacity={1} fill="url(#colorGoals)" strokeWidth={3} />
                  <Area type="monotone" dataKey="allowed" stroke="#71717a" fill="transparent" strokeWidth={2} strokeDasharray="5 5" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-none bg-zinc-900 shadow-sm">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
              <CardDescription className="text-slate-400">Latest updates from the club.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex gap-4">
                    <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                      activity.status === 'success' ? 'bg-green-500' : 
                      activity.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                    }`} />
                    <div>
                      <p className="text-sm font-bold leading-none mb-1 text-white">{activity.type}</p>
                      <p className="text-sm text-slate-400 mb-1">{activity.desc}</p>
                      <p className="text-[10px] text-slate-500 uppercase font-bold">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-6 text-red-600 hover:text-red-500 hover:bg-red-900/10">
                View All Activity
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Roster Quick View */}
        <Card className="border-none bg-zinc-900 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-white">Roster Performance</CardTitle>
              <CardDescription className="text-slate-400">Top performers from the current active roster.</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="border-zinc-800 text-white hover:bg-zinc-800">Manage Roster</Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-zinc-800">
                  <TableHead className="text-slate-400">Player</TableHead>
                  <TableHead className="text-slate-400">Position</TableHead>
                  <TableHead className="text-center text-slate-400">GP</TableHead>
                  <TableHead className="text-center text-slate-400">G</TableHead>
                  <TableHead className="text-center text-slate-400">A</TableHead>
                  <TableHead className="text-center text-slate-400">PTS</TableHead>
                  <TableHead className="text-right text-slate-400">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: 'Braden Lauwaert', pos: 'LW', gp: 42, g: 28, a: 34, pts: 62, status: 'Active' },
                  { name: 'Kasen Beitz', pos: 'C', gp: 42, g: 22, a: 38, pts: 60, status: 'Injured' },
                  { name: 'Alexander Rak', pos: 'D', gp: 42, g: 8, a: 28, pts: 36, status: 'Active' },
                  { name: 'Vince Albanese', pos: 'RW', gp: 40, g: 18, a: 22, pts: 40, status: 'Active' },
                ].map((player) => (
                  <TableRow key={player.name} className="border-zinc-800">
                    <TableCell className="font-bold text-white">{player.name}</TableCell>
                    <TableCell className="text-slate-400">{player.pos}</TableCell>
                    <TableCell className="text-center text-slate-400">{player.gp}</TableCell>
                    <TableCell className="text-center text-slate-400">{player.g}</TableCell>
                    <TableCell className="text-center text-slate-400">{player.a}</TableCell>
                    <TableCell className="text-center font-bold text-red-600">{player.pts}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={player.status === 'Active' ? 'default' : 'destructive'} className="text-[10px] border-none">
                        {player.status}
                      </Badge>
                    </TableCell>
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

export default Dashboard;