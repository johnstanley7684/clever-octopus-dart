"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScoreTicker from '@/components/ScoreTicker';
import InstagramFeed from '@/components/InstagramFeed';
import { Button } from '@/components/ui/button';
import { Calendar, Trophy, Users, Shield, Smartphone, Apple, PlayCircle } from 'lucide-react';
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
              <div className="relative group">
                <div className="absolute -inset-12 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-all duration-500" />
                <div className="relative flex flex-col items-center">
                  <div className="mb-8 transform group-hover:scale-105 transition-transform duration-500 bg-white p-6 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                    <img 
                      src={logoUrl} 
                      alt="Georgetown Raiders Official Logo" 
                      className="h-40 md:h-56 w-auto"
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
                The Legacy continues, Join us in the Raid at Alcott Arena for the 2025/26 season!
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
                <h2 className="text-3xl font-bold">Raiders vs. Milton Menace</h2>
                <div className="flex items-center justify-center md:justify-start gap-4 mt-4 text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Saturday, Sep 13</span>
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
                  <span className="font-bold">MENACE</span>
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

        {/* Mobile App Section */}
        <section className="py-24 bg-slate-50 overflow-hidden">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">
                  <Smartphone className="h-4 w-4" />
                  <span>Mobile Experience</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
                  THE RAIDERS IN YOUR POCKET
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Access live scores, digital tickets, and exclusive content anywhere. Our web app is optimized for your mobile device—no download required.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <Smartphone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Add to Home Screen</h4>
                      <p className="text-slate-500 text-sm">Open this site in Safari or Chrome and select "Add to Home Screen" for an app-like experience.</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button variant="outline" className="rounded-xl h-14 px-6 gap-3 border-slate-200 hover:bg-slate-100">
                    <Apple className="h-6 w-6" />
                    <div className="text-left">
                      <p className="text-[10px] uppercase font-bold leading-none">Coming soon to</p>
                      <p className="text-sm font-bold">App Store</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="rounded-xl h-14 px-6 gap-3 border-slate-200 hover:bg-slate-100">
                    <PlayCircle className="h-6 w-6" />
                    <div className="text-left">
                      <p className="text-[10px] uppercase font-bold leading-none">Coming soon to</p>
                      <p className="text-sm font-bold">Google Play</p>
                    </div>
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute -inset-4 bg-blue-600/10 rounded-full blur-3xl" />
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" 
                  alt="Mobile App Mockup" 
                  className="relative rounded-[3rem] shadow-2xl border-[8px] border-slate-900 w-full max-w-[320px] mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <InstagramFeed />

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
              <Button size="lg" className="rounded-full px-10 font-bold bg-red-600 hover:bg-red-700 text-white border-none">
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