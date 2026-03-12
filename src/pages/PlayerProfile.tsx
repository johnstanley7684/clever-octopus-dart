"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Zap, Target, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

const playersData = {
  "44": { name: "Erik Johansson", number: "44", position: "Defense", height: "6'4\"", weight: "220 lbs", shot: "Right", image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&q=80&w=800", bio: "Known for his physical presence and booming slap shot, Johansson has been a cornerstone of the Titans defense for 4 seasons.", stats: { gp: 42, g: 8, a: 28, pts: 36, pim: 42, plusMinus: 22 } },
  "97": { name: "Connor Reed", number: "97", position: "Left Wing", height: "6'1\"", weight: "190 lbs", shot: "Left", image: "https://images.unsplash.com/photo-1526232759583-26f173565548?auto=format&fit=crop&q=80&w=800", bio: "A dynamic offensive threat with elite skating ability. Reed leads the team in scoring and is a perennial All-Star candidate.", stats: { gp: 42, g: 28, a: 34, pts: 62, pim: 12, plusMinus: 18 } },
};

const PlayerProfile = () => {
  const { id } = useParams();
  const player = playersData[id as keyof typeof playersData] || playersData["97"];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-slate-900 text-white py-12">
          <div className="container">
            <Link to="/roster" className="inline-flex items-center text-sm text-slate-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Roster
            </Link>
            
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-end">
              <div className="w-64 h-80 rounded-2xl overflow-hidden border-4 border-blue-600 shadow-2xl flex-shrink-0">
                <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <Badge className="bg-blue-600 text-white px-4 py-1 text-lg font-bold">#{player.number}</Badge>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter">{player.name.toUpperCase()}</h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-slate-400 font-bold uppercase tracking-widest text-sm">
                  <span>{player.position}</span>
                  <span>{player.height} / {player.weight}</span>
                  <span>Shoots: {player.shot}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6">Biography</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {player.bio} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Season Performance</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: "Goals", value: player.stats.g, icon: Target, color: "text-red-500" },
                    { label: "Assists", value: player.stats.a, icon: Zap, color: "text-yellow-500" },
                    { label: "Points", value: player.stats.pts, icon: Activity, color: "text-blue-500" },
                    { label: "+/-", value: player.stats.plusMinus, icon: Shield, color: "text-green-500" },
                  ].map((stat) => (
                    <Card key={stat.label} className="border-none shadow-md text-center">
                      <CardContent className="pt-6">
                        <stat.icon className={cn("h-6 w-6 mx-auto mb-2", stat.color)} />
                        <p className="text-3xl font-black">{stat.value}</p>
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">{stat.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <Card className="border-none shadow-lg bg-white">
                <CardHeader>
                  <CardTitle>Career Highlights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "2023 All-Star Selection",
                    "Team MVP (2022)",
                    "League Leading Scorer (Oct 2024)",
                    "100th Career Goal (Sep 2024)"
                  ].map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="bg-slate-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Fan Gear</h3>
                <p className="text-sm text-slate-400 mb-6">Get your official {player.name} jersey today.</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-full">Shop Jersey</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PlayerProfile;