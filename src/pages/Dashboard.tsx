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
  { id: 1, type: 'Game Result', desc: 'Won 4-2 vs Wolves', time: '2 hours ago', status: 'success' },
  { id: 2, type: 'Roster Update', desc: 'Connor Reed added to Active List', time: '5 hours ago', status: 'info' },
  { id: 3, type: 'Injury Report', desc: 'Marcus Vane (Day-to-Day)', time: '1 day ago', status: 'warning' },
  { id: 4, type: 'Ticket Sales', desc: 'Home game vs Ravens Sold Out', time: '2 days ago', status: 'success' },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Team Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Coach. Here's what's happening with the Raiders.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" /> Export Report
            </Button>
            <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4" /> New Game Entry
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Season Points', value: '73', icon: Trophy, trend: '+12%', color: 'text-blue-600' },
            { label: 'Active Roster', value: '24', icon: Users, trend: 'Full', color: 'text-green-600' },
            { label: 'Win Rate', value: '74.5%', icon: Activity, trend: '+2.4%', color: 'text-purple-600' },
            { label: 'Goals/Game', value: '3.28', icon: Target, trend: '-0.1', color: 'text-orange-600' },
          ].map((stat, i) => (
            <Card key={i} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className={`p-2 rounded-lg bg-slate-100 ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="secondary" className="text-[10px] font-bold">
                    {stat.trend}
                  </Badge>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Performance Chart */}
          <Card className="lg:col-span-2 border-none shadow-sm">
            <CardHeader>
              <CardTitle>Scoring Performance</CardTitle>
              <CardDescription>Goals scored vs goals allowed over the last 7 games.</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorGoals" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Area type="monotone" dataKey="goals" stroke="#3b82f6" fillOpacity={1} fill="url(#colorGoals)" strokeWidth={3} />
                  <Area type="monotone" dataKey="allowed" stroke="#ef4444" fill="transparent" strokeWidth={2} strokeDasharray="5 5" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from the club.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex gap-4">
                    <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                      activity.status === 'success' ? 'bg-green-500' : 
                      activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`} />
                    <div>
                      <p className="text-sm font-bold leading-none mb-1">{activity.type}</p>
                      <p className="text-sm text-muted-foreground mb-1">{activity.desc}</p>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-6 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                View All Activity
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Roster Quick View */}
        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Roster Performance</CardTitle>
              <CardDescription>Top performers from the current active roster.</CardDescription>
            </div>
            <Button variant="outline" size="sm">Manage Roster</Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Player</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead className="text-center">GP</TableHead>
                  <TableHead className="text-center">G</TableHead>
                  <TableHead className="text-center">A</TableHead>
                  <TableHead className="text-center">PTS</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: 'Connor Reed', pos: 'LW', gp: 42, g: 28, a: 34, pts: 62, status: 'Active' },
                  { name: 'Marcus Vane', pos: 'C', gp: 42, g: 22, a: 38, pts: 60, status: 'Injured' },
                  { name: 'Erik Johansson', pos: 'D', gp: 42, g: 8, a: 28, pts: 36, status: 'Active' },
                  { name: 'Tyler Stone', pos: 'RW', gp: 40, g: 18, a: 22, pts: 40, status: 'Active' },
                ].map((player) => (
                  <TableRow key={player.name}>
                    <TableCell className="font-bold">{player.name}</TableCell>
                    <TableCell>{player.pos}</TableCell>
                    <TableCell className="text-center">{player.gp}</TableCell>
                    <TableCell className="text-center">{player.g}</TableCell>
                    <TableCell className="text-center">{player.a}</TableCell>
                    <TableCell className="text-center font-bold text-blue-600">{player.pts}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={player.status === 'Active' ? 'default' : 'destructive'} className="text-[10px]">
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