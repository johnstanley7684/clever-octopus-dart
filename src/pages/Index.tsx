"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScoreTicker from '@/components/ScoreTicker';
import InstagramFeed from '@/components/InstagramFeed';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar, Trophy, Users, Shield, Smartphone, Apple, PlayCircle, Mail, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { showSuccess } from '@/utils/toast';

const Index = () => {
  const logoUrl = "https://www.georgetownraiders.com/pics/georgetown logo.png";

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Thanks for subscribing to the Raid!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScoreTicker />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-black">
            <img 
              src={logoUrl} 
              alt="Raiders Background" 
              className="w-full h-full object-contain opacity-20 scale-150 blur-sm"
            />
          </div>
          
          <div className="container relative z-10 text-white">
            <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-1000">
              <div className="relative group">
                <div className="absolute -inset-12 bg-red-600/20 rounded-full blur-3xl group-hover:bg-red-600/30 transition-all duration-500" />
                <div className="relative flex flex-col items-center">
                  <div className="mb-8 transform group-hover:scale-105 transition-transform duration-500 bg-white p-6 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                    <img 
                      src={logoUrl} 
                      alt="Georgetown Raiders Official Logo" 
                      className="h-40 md:h-56 w-auto"
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-black tracking-[0.3em] text-red-500 uppercase">Georgetown</h2>
                    <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none italic">
                      RAIDERS
                    </h1>
                    <div className="flex items-center justify-center gap-4 pt-2">
                      <div className="h-px w-12 bg-red-600" />
                      <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Hockey Club</span>
                      <div className="h-px w-12 bg-red-600" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-medium">
                The Legacy continues, Join us in the Raid at Alcott Arena for the 2025/26 season!
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link to="/tickets">
                  <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20">
                    Get Tickets Now
                  </Button>
                </Link>
                <Link to="/schedule">
                  <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg font-bold border-white text-white hover:bg-white hover:text-black transition-all">
                    Full Schedule
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Next Game Section */}
        <section className="pt-32 pb-12 bg-black text-white">
          <div className="container">
            <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-zinc-800">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <Badge className="bg-red-600 text-white animate-pulse">LIVE NOW</Badge>
                  <p className="text-red-500 font-bold uppercase tracking-widest text-sm">Match Center</p>
                </div>
                <h2 className="text-3xl font-bold">Raiders vs. Milton Menace</h2>
                <div className="flex items-center justify-center md:justify-start gap-4 mt-4 text-slate-400">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span className="font-bold text-white">4 - 2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>3rd Period - 12:45</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mb-2">
                    <Shield className="h-10 w-10 text-red-600" />
                  </div>
                  <span className="font-bold">RAIDERS</span>
                </div>
                <div className="text-4xl font-black text-zinc-700 italic">VS</div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mb-2">
                    <Users className="h-10 w-10 text-slate-400" />
                  </div>
                  <span className="font-bold">MENACE</span>
                </div>
              </div>
              <Link to="/match-center">
                <Button className="rounded-full px-8 bg-white text-black hover:bg-slate-200 font-bold">
                  Enter Match Center
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-black">
          <div className="container">
            <div className="bg-red-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-10">
                <Mail className="w-96 h-96" />
              </div>
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">STAY IN THE RAID</h2>
                <p className="text-xl text-red-100 mb-10 leading-relaxed">
                  Get exclusive news, ticket alerts, and behind-the-scenes content delivered straight to your inbox.
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="h-14 rounded-full bg-white/10 border-white/20 text-white placeholder:text-red-200 px-8 focus-visible:ring-white"
                    required
                  />
                  <Button type="submit" size="lg" className="h-14 rounded-full px-10 bg-white text-red-600 hover:bg-red-50 font-bold">
                    Subscribe Now
                  </Button>
                </form>
                <p className="mt-6 text-sm text-red-200">
                  By subscribing, you agree to our Privacy Policy and to receive marketing emails.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="py-24 bg-zinc-950 overflow-hidden">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 font-bold text-sm">
                  <Smartphone className="h-4 w-4" />
                  <span>Mobile Experience</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                  THE RAIDERS IN YOUR POCKET
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Access live scores, digital tickets, and exclusive content anywhere. Our web app is optimized for your mobile device—no download required.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-900 p-2 rounded-lg shadow-sm">
                      <Smartphone className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Add to Home Screen</h4>
                      <p className="text-slate-500 text-sm">Open this site in Safari or Chrome and select "Add to Home Screen" for an app-like experience.</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button variant="outline" className="rounded-xl h-14 px-6 gap-3 border-zinc-800 hover:bg-zinc-900 text-white">
                    <Apple className="h-6 w-6" />
                    <div className="text-left">
                      <p className="text-[10px] uppercase font-bold leading-none">Coming soon to</p>
                      <p className="text-sm font-bold">App Store</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="rounded-xl h-14 px-6 gap-3 border-zinc-800 hover:bg-zinc-900 text-white">
                    <PlayCircle className="h-6 w-6" />
                    <div className="text-left">
                      <p className="text-[10px] uppercase font-bold leading-none">Coming soon to</p>
                      <p className="text-sm font-bold">Google Play</p>
                    </div>
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute -inset-4 bg-red-600/10 rounded-full blur-3xl" />
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" 
                  alt="Mobile App Mockup" 
                  className="relative rounded-[3rem] shadow-2xl border-[8px] border-zinc-900 w-full max-w-[320px] mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <InstagramFeed />

        {/* CTA Section */}
        <section className="py-24 bg-red-600 text-white">
          <div className="container text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">READY TO JOIN THE ROAR?</h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Don't miss a single moment of the action. Season tickets and individual game passes are now available.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/tickets">
                <Button size="lg" variant="secondary" className="rounded-full px-10 font-bold bg-white text-red-600 hover:bg-slate-100">
                  Season Tickets
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="rounded-full px-10 font-bold border-white text-white hover:bg-white hover:text-red-600">
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