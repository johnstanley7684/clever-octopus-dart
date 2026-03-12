"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Ticket, Star, Users, ShieldCheck } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const ticketTypes = [
  {
    name: "Single Game",
    price: "$45",
    description: "Perfect for a night out with friends or family.",
    icon: Ticket,
    features: ["Standard Seating", "Digital Ticket", "Arena Access", "Concession Discounts"],
    color: "bg-slate-100",
    buttonText: "Select Game"
  },
  {
    name: "Season Pass",
    price: "$799",
    description: "The ultimate commitment for the true Titans fan.",
    icon: Star,
    features: ["All Home Games", "Reserved Seating", "Exclusive Merch", "Playoff Priority", "VIP Entrance"],
    color: "bg-blue-50 border-blue-200",
    popular: true,
    buttonText: "Buy Season Pass"
  },
  {
    name: "VIP Box",
    price: "$2,500",
    description: "Premium experience for corporate events or groups.",
    icon: ShieldCheck,
    features: ["Private Suite", "Catering Included", "Parking Passes", "Player Meet & Greet", "Dedicated Server"],
    color: "bg-slate-900 text-white",
    buttonText: "Inquire Now"
  }
];

const Tickets = () => {
  const handlePurchase = (type: string) => {
    showSuccess(`Redirecting to secure checkout for ${type}...`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Tickets & Memberships</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose your experience and join the roar at Titan Memorial Arena.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {ticketTypes.map((ticket) => (
            <Card key={ticket.name} className={cn("relative flex flex-col border-none shadow-lg overflow-hidden", ticket.color)}>
              {ticket.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-none rounded-bl-lg bg-blue-600 px-4 py-1">MOST POPULAR</Badge>
                </div>
              )}
              <CardHeader className="pb-8">
                <div className="mb-4 bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center">
                  <ticket.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">{ticket.name}</CardTitle>
                <CardDescription className={ticket.name === "VIP Box" ? "text-slate-400" : ""}>
                  {ticket.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">{ticket.price}</span>
                  <span className="text-sm opacity-70">{ticket.name === "Single Game" ? "/ticket" : ticket.name === "VIP Box" ? "/game" : "/season"}</span>
                </div>
                <ul className="space-y-3">
                  {ticket.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 text-blue-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handlePurchase(ticket.name)}
                  className={cn(
                    "w-full rounded-full font-bold",
                    ticket.name === "VIP Box" ? "bg-white text-black hover:bg-slate-200" : "bg-blue-600 hover:bg-blue-700"
                  )}
                >
                  {ticket.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">Group Bookings</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bringing a group of 15 or more? Enjoy special discounted rates, scoreboard recognition, and the chance to participate in on-ice activities during intermission.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Users className="h-5 w-5 text-blue-600" />
                <span>15+ People</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <Trophy className="h-5 w-5 text-blue-600" />
                <span>On-Ice Access</span>
              </div>
            </div>
            <Button variant="outline" className="rounded-full px-8">Contact Group Sales</Button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&q=80&w=800" 
              alt="Fans cheering" 
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tickets;