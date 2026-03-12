"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Star, History as HistoryIcon, Award } from 'lucide-react';

const milestones = [
  { year: "1975", event: "Georgetown Raiders Hockey Club Founded", description: "The club was established as an expansion team in the OJHL." },
  { year: "2002", event: "First Division Title", description: "After a grueling season, the Raiders clinched their first ever division trophy." },
  { year: "2010", event: "The Golden Era Begins", description: "A string of consecutive playoff appearances solidified the Raiders as a powerhouse." },
  { year: "2018", event: "Championship Glory", description: "The Raiders defeated their rivals in a 7-game series to lift the Cup." },
  { year: "2022", event: "Arena Renovation", description: "Alcott Arena underwent significant upgrades to become a world-class facility." },
];

const legends = [
  { name: "Rick 'The Rocket' Rossi", years: "1998-2012", role: "Forward", achievement: "All-time leading scorer (412 goals)" },
  { name: "Sven Lindstrom", years: "2005-2020", role: "Defense", achievement: "Longest serving captain (10 seasons)" },
  { name: "Davey 'Gloves' Miller", years: "1975-1988", role: "Goalie", achievement: "Inaugural season starter, 300+ wins" },
];

const History = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-zinc-950 text-white py-20 border-b border-zinc-800">
          <div className="container text-center">
            <HistoryIcon className="h-12 w-12 text-red-600 mx-auto mb-6" />
            <h1 className="text-5xl font-black tracking-tighter mb-4">OUR LEGACY</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Decades of grit, passion, and championship hockey.</p>
          </div>
        </section>

        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Timeline */}
            <section>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white">
                <Trophy className="text-red-600" />
                Timeline of Excellence
              </h2>
              <div className="space-y-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-800">
                {milestones.map((m, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 top-1 w-10 h-10 bg-zinc-900 border-4 border-red-600 rounded-full flex items-center justify-center z-10">
                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                    </div>
                    <span className="text-red-600 font-black text-xl">{m.year}</span>
                    <h3 className="text-xl font-bold mt-1 text-white">{m.event}</h3>
                    <p className="text-slate-400 mt-2">{m.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Wall of Fame */}
            <section>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white">
                <Star className="text-yellow-500" />
                Wall of Fame
              </h2>
              <div className="space-y-6">
                {legends.map((legend, i) => (
                  <Card key={i} className="border-none bg-zinc-900 shadow-md overflow-hidden group">
                    <CardContent className="p-6 flex items-center gap-6">
                      <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors">
                        <Award className="h-8 w-8 text-slate-500 group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{legend.name}</h3>
                        <p className="text-sm text-red-600 font-medium">{legend.role} • {legend.years}</p>
                        <p className="text-sm text-slate-400 mt-1">{legend.achievement}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 bg-red-600 rounded-2xl p-8 text-white text-center">
                <Trophy className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-2xl font-bold mb-2">Championships</h3>
                <div className="flex justify-center gap-8 mt-6">
                  <div className="text-center">
                    <p className="text-4xl font-black">1</p>
                    <p className="text-xs uppercase tracking-widest opacity-70">League Cup</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-black">4</p>
                    <p className="text-xs uppercase tracking-widest opacity-70">Division Titles</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-black">12</p>
                    <p className="text-xs uppercase tracking-widest opacity-70">Playoff Berths</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default History;