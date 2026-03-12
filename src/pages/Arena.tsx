"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Car, Utensils, Info, ShieldCheck, Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Arena = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Header */}
        <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1920" 
            alt="Raiders Memorial Arena" 
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="relative z-10 text-center text-white container">
            <h1 className="text-5xl font-black tracking-tighter mb-4">RAIDERS MEMORIAL ARENA</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">The loudest house in the league. Home of the Raiders since 1995.</p>
          </div>
        </div>

        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Info className="text-blue-600" />
                  About the Venue
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Raiders Memorial Arena is a state-of-the-art multi-purpose facility located in the heart of Georgetown. With a seating capacity of 15,000 for hockey games, it offers an intimate yet electric atmosphere that has become legendary among fans and players alike.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Capacity", value: "15,000" },
                    { label: "Opened", value: "1995" },
                    { label: "Renovated", value: "2022" },
                    { label: "Ice Surface", value: "NHL Standard" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white p-4 rounded-xl shadow-sm border text-center">
                      <p className="text-xs text-muted-foreground uppercase font-bold mb-1">{stat.label}</p>
                      <p className="text-xl font-bold text-blue-600">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Utensils className="text-blue-600" />
                  Dining & Concessions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg">The Blue Line Grill</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Premium burgers, artisanal pizzas, and local craft beers. Located near Section 104.</p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg">Raider Treats</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Classic arena snacks: popcorn, nachos, and our famous "Raider Pretzel". Available at all levels.</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-blue-600" />
                  Arena Policies
                </h2>
                <ul className="space-y-4">
                  {[
                    "Bag Policy: Only clear bags smaller than 12x6x12 are permitted.",
                    "No outside food or beverages allowed inside the venue.",
                    "Doors open 90 minutes prior to puck drop.",
                    "Raiders Memorial Arena is a 100% smoke-free facility."
                  ].map((policy, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <span>{policy}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg bg-slate-900 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">123 Ice Rink Way<br />Georgetown, ST 54321</p>
                  <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center">
                    <span className="text-slate-500 text-sm italic">Interactive Map Placeholder</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Directions</Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-blue-600" />
                    Parking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>North Lot (VIP)</span>
                      <span className="font-bold">$40</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>East Garage</span>
                      <span className="font-bold">$25</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>West Surface Lot</span>
                      <span className="font-bold">$15</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Pre-book parking to save 20% and guarantee your spot.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Accessibility className="h-5 w-5 text-blue-600" />
                    Accessibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We are committed to providing an inclusive experience. Accessible seating, elevators, and sensory kits are available upon request at Guest Services.
                  </p>
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

export default Arena;