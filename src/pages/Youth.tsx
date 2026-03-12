"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Star, Calendar, MapPin, GraduationCap, Users } from 'lucide-react';

const Youth = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="relative h-[50vh] flex items-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1920" 
            alt="Youth Hockey" 
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="container relative z-10 text-white text-center">
            <Badge className="mb-4 bg-blue-600">BUILDING THE FUTURE</Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">YOUTH PROGRAMS</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">Developing the next generation of Raiders through world-class coaching and community support.</p>
          </div>
        </div>

        <div className="container py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight">Raiders Hockey School</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our flagship development program offers year-round training for players aged 5-16. Led by former Raiders players and certified coaches, we focus on skill development, sportsmanship, and a love for the game.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Star, text: "Elite Coaching" },
                  { icon: Trophy, text: "Skill Development" },
                  { icon: Calendar, text: "Year-round Access" },
                  { icon: GraduationCap, text: "Leadership Training" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border">
                    <item.icon className="h-5 w-5 text-blue-600" />
                    <span className="font-bold text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="rounded-full px-10 bg-blue-600 hover:bg-blue-700">Register Now</Button>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-296072bb58c4?auto=format&fit=crop&q=80&w=800" 
                alt="Hockey Training" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-10 text-center">Upcoming Clinics & Camps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Holiday Skills Camp", date: "Dec 27-30", age: "7-12", price: "$299", status: "Open" },
              { title: "Goalie Masterclass", date: "Jan 15", age: "10-16", price: "$150", status: "Limited" },
              { title: "Little Raiders Intro", date: "Saturdays", age: "4-6", price: "$199/mo", status: "Open" },
            ].map((camp, i) => (
              <Card key={i} className="border-none shadow-lg hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={camp.status === "Open" ? "default" : "secondary"}>{camp.status}</Badge>
                    <span className="font-black text-blue-600">{camp.price}</span>
                  </div>
                  <CardTitle>{camp.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{camp.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Ages {camp.age}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Raiders Memorial Arena</span>
                  </div>
                  <Button variant="outline" className="w-full rounded-full mt-4">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <section className="bg-slate-900 text-white py-20">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">Community Outreach</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
              We believe hockey should be accessible to everyone. Through our "Raiders for All" initiative, we provide equipment and ice time to underserved communities in Georgetown.
            </p>
            <div className="flex justify-center gap-6">
              <Button variant="secondary" className="rounded-full px-8">Learn More</Button>
              <Button variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-black">Donate Equipment</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Youth;