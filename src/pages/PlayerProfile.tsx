"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Zap, Target, Activity, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { players } from '@/data/roster';

const PlayerProfile = () => {
  const { id } = useParams();
  const player = players.find(p => p.id === id) || players[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-zinc-950 text-white py-12 border-b border-zinc-800">
          <div className="container">
            <Link to="/roster" className="inline-flex items-center text-sm text-slate-400 hover:text-red-500 mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Roster
            </Link>
            
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-end">
              <div className="w-64 h-80 rounded-2xl overflow-hidden border-4 border-red-600 shadow-2xl flex-shrink-0 bg-zinc-900 p-4">
                <img src={player.image} alt={player.name} className="w-full h-full object-contain" />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <Badge className="bg-red-600 text-white px-4 py-1 text-lg font-bold border-none">#{player.number}</Badge>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter">{player.name.toUpperCase()}</h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-slate-400 font-bold uppercase tracking-widest text-sm">
                  <span className="text-red-500">{player.position}</span>
                  <span>{player.height} / {player.weight}</span>
                  <span>Shoots: {player.shot}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-red-500" /> {player.hometown}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 text-white">Biography</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {player.bio}
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-white">Season Performance</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: "Goals", value: player.stats.g, icon: Target, color: "text-red-500" },
                    { label: "Assists", value: player.stats.a, icon: Zap, color: "text-yellow-500" },
                    { label: "Points", value: player.stats.pts, icon: Activity, color: "text-blue-500" },
                    { label: "+/-", value: player.stats.plusMinus, icon: Shield, color: "text-green-500" },
                  ].map((stat) => (
                    <Card key={stat.label} className="border-none shadow-md text-center bg-zinc-900">
                      <CardContent className="pt-6">
                        <stat.icon className={cn("h-6 w-6 mx-auto mb-2", stat.color)} />
                        <p className="text-3xl font-black text-white">{stat.value}</p>
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">{stat.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <Card className="border-none shadow-lg bg-black border border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Player Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm border-b border-zinc-800 pb-2">
                    <span className="text-muted-foreground">Hometown</span>
                    <span className="font-bold text-white">{player.hometown}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-zinc-800 pb-2">
                    <span className="text-muted-foreground">Position</span>
                    <span className="font-bold text-white">{player.position}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-zinc-800 pb-2">
                    <span className="text-muted-foreground">Shoots</span>
                    <span className="font-bold text-white">{player.shot}</span>
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

export default PlayerProfile;