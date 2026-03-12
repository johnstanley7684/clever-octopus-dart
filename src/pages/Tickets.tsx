"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Ticket, Star, Users, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

const ticketTypes = [
  {
    name: "Single Game",
    price: "$15",
    description: "Perfect for a night out with friends or family.",
    icon: Ticket,
    features: ["Standard Seating", "Digital Ticket", "Arena Access"],
    color: "bg-zinc-900",
    buttonText: "Select Game",
    path: "/schedule"
  },
  {
    name: "Season Pass",
    price: "$400",
    description: "The ultimate commitment to the Raiders Fan.",
    icon: Star,
    features: ["All Home Games", "VIP Entrance", "Merchandise Discount"],
    color: "bg-red-900/20 border-red-600/50",
    popular: true,
    buttonText: "Buy Season Pass",
    path: "/checkout"
  }
];

const Tickets = () => {
  const navigate = useNavigate();

  const handleAction = (ticket: typeof ticketTypes[0]) => {
    if (ticket.name === "Season Pass") {
      navigate('/checkout', { state: { item: { name: "Season Pass", price: "$400.00" } } });
    } else {
      navigate(ticket.path);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-white">Tickets & Memberships</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Choose your experience and join the roar at Alcott Arena.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {ticketTypes.map((ticket) => (
            <Card key={ticket.name} className={cn("relative flex flex-col border-none shadow-lg overflow-hidden", ticket.color)}>
              {ticket.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-none rounded-bl-lg bg-red-600 px-4 py-1 border-none text-white">MOST POPULAR</Badge>
                </div>
              )}
              <CardHeader className="pb-8">
                <div className="mb-4 bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center">
                  <ticket.icon className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-2xl text-white">{ticket.name}</CardTitle>
                <CardDescription className="text-slate-400">
                  {ticket.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-6">
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-4xl font-black">{ticket.price}</span>
                  <span className="text-sm opacity-70">{ticket.name === "Single Game" ? "/ticket" : "/season"}</span>
                </div>
                <ul className="space-y-3">
                  {ticket.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                      <Check className="h-4 w-4 text-red-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleAction(ticket)}
                  className="w-full rounded-full font-bold bg-red-600 hover:bg-red-700 text-white"
                >
                  {ticket.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-800 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-white">Group Bookings</h2>
            <p className="text-slate-400 leading-relaxed">
              Bringing a group of 15 or more? Enjoy special discounted rates, scoreboard recognition, and the chance to participate in on-ice activities during intermission.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <Users className="h-5 w-5 text-red-600" />
                <span>15+ People</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <Trophy className="h-5 w-5 text-red-600" />
                <span>On-Ice Access</span>
              </div>
            </div>
            <Button className="rounded-full px-8 bg-red-600 hover:bg-red-700 text-white">Contact Group Sales</Button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&q=80&w=800" 
              alt="Fans cheering" 
              className="rounded-2xl shadow-xl grayscale-[0.5] hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tickets;