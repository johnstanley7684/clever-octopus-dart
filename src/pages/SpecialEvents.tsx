"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Star, Users, Gift, PartyPopper } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Fan Appreciation Night",
    date: "November 15, 2025",
    time: "7:00 PM",
    location: "Alcott Arena",
    description: "A special night dedicated to the best fans in the league. Prizes, giveaways, and a post-game meet and greet with the players.",
    category: "Fan Experience",
    image: "https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&q=80&w=800",
    icon: Heart
  },
  {
    id: 2,
    title: "Annual Teddy Bear Toss",
    date: "December 06, 2025",
    time: "7:30 PM",
    location: "Alcott Arena",
    description: "Bring a new, unwrapped teddy bear to the game! When the Raiders score their first goal, toss them onto the ice to support local children's charities.",
    category: "Charity",
    image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&q=80&w=800",
    icon: Gift
  },
  {
    id: 3,
    title: "Skate with the Raiders",
    date: "January 12, 2026",
    time: "2:00 PM - 4:00 PM",
    location: "Alcott Arena",
    description: "Lace up your skates and join the team on the ice for an afternoon of fun, photos, and autographs.",
    category: "Community",
    image: "https://images.unsplash.com/photo-1518611012118-296072bb58c4?auto=format&fit=crop&q=80&w=800",
    icon: Users
  },
  {
    id: 4,
    title: "Alumni Heritage Game",
    date: "February 20, 2026",
    time: "6:00 PM",
    location: "Alcott Arena",
    description: "Watch Raiders legends from the past three decades return to the ice for a special exhibition game celebrating our history.",
    category: "Heritage",
    image: "https://images.unsplash.com/photo-1526232759583-26f173565548?auto=format&fit=crop&q=80&w=800",
    icon: Star
  }
];

import { Heart } from 'lucide-react';

const SpecialEvents = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 text-red-500 font-bold text-sm mb-4">
            <PartyPopper className="h-4 w-4" />
            <span>Mark Your Calendars</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white">SPECIAL EVENTS</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Beyond the game. Join us for these exclusive community events and themed nights throughout the season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden border-none bg-zinc-900 group hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-600 text-white border-none px-3 py-1 font-bold">
                    {event.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="relative -mt-12 pt-0">
                <div className="bg-red-600 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl mb-4">
                  <event.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                  {event.title}
                </CardTitle>
                <CardDescription className="flex flex-col gap-2 mt-2">
                  <div className="flex items-center gap-2 text-slate-300 font-medium">
                    <Calendar className="h-4 w-4 text-red-500" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span>{event.location}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 leading-relaxed">
                  {event.description}
                </p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full rounded-full bg-zinc-800 hover:bg-red-600 text-white font-bold transition-all">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <section className="mt-24 bg-red-600 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 animate-bounce">
              <Star className="w-20 h-20" />
            </div>
            <div className="absolute bottom-10 right-10 animate-pulse">
              <PartyPopper className="w-32 h-32" />
            </div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">HOST YOUR OWN EVENT</h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Looking for a unique venue for a birthday party, corporate outing, or community gathering? Alcott Arena and the Raiders offer custom event packages.
            </p>
            <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold bg-black text-white hover:bg-zinc-900">
              Inquire About Bookings
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SpecialEvents;