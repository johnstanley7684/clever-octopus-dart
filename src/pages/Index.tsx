"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScoreTicker from '@/components/ScoreTicker';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Trophy, Users, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const logoUrl = "https://www.georgetownraiders.com/pics/georgetown logo.png";

  return (
    <div className="min-h-screen flex flex-col">
      <ScoreTicker />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-slate-950">
            <img 
              src={logoUrl} 
              alt="Raiders Background" 
              className="w-full h-full object-contain opacity-20 scale-150 blur-sm"
            />
          </div>
          
          <div className="container relative z-10 text-white">
            <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-1000">
              {/* Official Logo Overlay */}
              <div className="relative group">
                <div className="absolute -inset-12 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-all duration-500" />
                <div className="relative flex flex-col items-center">
                  <div className="mb-8 transform group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={logoUrl} 
                      alt="Georgetown Raiders Official Logo" 
                      className="h-48 md:h-64 w-auto drop-shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-black tracking-[0.3em] text-blue-400 uppercase">Georgetown</h2>
                    <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none italic">
                      RAIDERS
                    </h1>
                    <div className="flex items-center justify-center gap-4 pt-2">
                      <div className="h-px w-12 bg-blue-600" />
                      <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Hockey Club</span>
                      <div className="h-px w-12 bg-blue-600" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-medium">
                The Legacy continues, Join us in the Raid at Alcott Arena for the 2026/27 season!
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link to="/tickets">
                  <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20">
                    Get Tickets Now
                  </Button>
                </Link>
                <Link to="/schedule">
                  <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20">
                    Full Schedule
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Next Game Section */}
        <section className="py-12 bg-slate-950 text-white">
          <div className="container">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
              <div className="text-center md:text-left">
                <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2">Next Home Game</p>
                <h2 className="text-3xl font-bold">Raiders vs. Wolves</h2>
                <div className="flex items-center justify-center md:justify-start gap-4 mt-4 text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Saturday, Oct 12</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4" />
                    <span>7:30 PM EST</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-2">
                    <Shield className="h-10 w-10 text-blue-500" />
                  </div>
                  <span className="font-bold">RAIDERS</span>
                </div>
                <div className="text-4xl font-black text-slate-700 italic">VS</div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-2">
                    <Users className="h-10 w-10 text-red-500" />
                  </div>
                  <span className="font-bold">WOLVES</span>
                </div>
              </div>
              <Link to="/tickets">
                <Button className="rounded-full px-8 bg-white text-black hover:bg-slate-200">
                  Get Tickets
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-24 bg-slate-50">
          <div className="container">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-bold tracking-tight">Latest News</h2>
                <p className="text-muted-foreground mt-2">Stay updated with everything Raiders.</p>
              </div>
              <Link to="/news">
                <Button variant="ghost" className="group">
                  View All News <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Raiders Clinch Playoff Spot", date: "Oct 5, 2024", image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=600" },
                { title: "New Training Facility Opens", date: "Oct 2, 2024", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=600" },
                { title: "Community Outreach Program", date: "Sep 28, 2024", image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600" },
              ].map((news, i) => (
                <Card key={i} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-blue-600 font-bold mb-2">{news.date}</p>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{news.title}</h3>
                    <Button variant="link" className="p-0 h-auto text-slate-900 font-bold">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-blue-600 text-white">
          <div className="container text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">READY TO JOIN THE ROAR?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Don't miss a single moment of the action. Season tickets and individual game passes are now available.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/tickets">
                <Button size="lg" variant="secondary" className="rounded-full px-10 font-bold">
                  Season Tickets
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="rounded-full px-10 font-bold border-white text-white hover:bg-white hover:text-blue-600">
                Group Bookings
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;