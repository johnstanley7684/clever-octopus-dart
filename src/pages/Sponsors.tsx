"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const sponsors = [
  { id: 1, name: "Global Bank", tier: "Platinum", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200", description: "Official banking partner of the Raiders." },
  { id: 2, name: "Ice Gear Pro", tier: "Platinum", logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=200", description: "Providing world-class equipment for our athletes." },
  { id: 3, name: "City Energy", tier: "Gold", logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200", description: "Powering the arena and our community." },
  { id: 4, name: "HealthFirst", tier: "Gold", logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=200", description: "Official medical and wellness provider." },
  { id: 5, name: "TechStream", tier: "Silver", logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=200", description: "Digital solutions for the modern fan." },
  { id: 6, name: "Local Eats", tier: "Silver", logo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=200", description: "Official catering and concessions partner." },
];

const Sponsors = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-white">Our Partners</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We are proud to partner with these industry leaders who share our commitment to excellence and community.
          </p>
        </div>

        <div className="space-y-16">
          {/* Platinum Sponsors */}
          <section>
            <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-4 text-white">
              <span className="h-px w-12 bg-zinc-800"></span>
              Platinum Partners
              <span className="h-px w-12 bg-zinc-800"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sponsors.filter(s => s.tier === "Platinum").map(sponsor => (
                <Card key={sponsor.id} className="overflow-hidden border-none bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 flex-shrink-0 bg-white rounded-xl flex items-center justify-center p-4">
                      <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full grayscale hover:grayscale-0 transition-all" />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2 text-white">{sponsor.name}</h3>
                      <p className="text-slate-400 mb-4">{sponsor.description}</p>
                      <Button variant="outline" size="sm" className="gap-2 border-zinc-700 text-white hover:bg-zinc-800">
                        Visit Website <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Gold & Silver Sponsors */}
          <section>
            <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-4 text-white">
              <span className="h-px w-12 bg-zinc-800"></span>
              Official Sponsors
              <span className="h-px w-12 bg-zinc-800"></span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sponsors.filter(s => s.tier !== "Platinum").map(sponsor => (
                <Card key={sponsor.id} className="border-none bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center p-3 mb-4">
                      <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full grayscale hover:grayscale-0 transition-all" />
                    </div>
                    <h4 className="font-bold text-sm mb-1 text-white">{sponsor.name}</h4>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500">{sponsor.tier}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-20 bg-red-600 text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Join the Raiders family and connect your brand with thousands of passionate hockey fans.
          </p>
          <Button variant="secondary" size="lg" className="rounded-full px-8 bg-black text-white hover:bg-zinc-900">
            Download Partnership Deck
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsors;