"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const players = [
  { id: "31", name: "Alex 'The Wall' Miller", number: "31", position: "Goalie", height: "6'2\"", weight: "195 lbs", shot: "Left", image: "https://images.unsplash.com/photo-1580748141549-71748d60bdc9?auto=format&fit=crop&q=80&w=400" },
  { id: "44", name: "Erik Johansson", number: "44", position: "Defense", height: "6'4\"", weight: "220 lbs", shot: "Right", image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&q=80&w=400" },
  { id: "19", name: "Marcus Vane", number: "19", position: "Center", height: "6'0\"", weight: "185 lbs", shot: "Left", image: "https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&q=80&w=400" },
  { id: "97", name: "Connor Reed", number: "97", position: "Left Wing", height: "6'1\"", weight: "190 lbs", shot: "Left", image: "https://images.unsplash.com/photo-1526232759583-26f173565548?auto=format&fit=crop&q=80&w=400" },
  { id: "8", name: "Tyler Stone", number: "8", position: "Right Wing", height: "5'11\"", weight: "180 lbs", shot: "Right", image: "https://images.unsplash.com/photo-1518611012118-296072bb58c4?auto=format&fit=crop&q=80&w=400" },
  { id: "27", name: "David Chen", number: "27", position: "Defense", height: "6'3\"", weight: "210 lbs", shot: "Left", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
];

const staff = [
  { id: 1, name: "Robert 'Buck' Wilson", role: "Head Coach", experience: "15 Seasons", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Sarah Jenkins", role: "Assistant Coach", experience: "8 Seasons", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Mike Thompson", role: "General Manager", experience: "20 Seasons", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
];

const Roster = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Team Roster</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the athletes and staff who drive the Titans towards victory every single night.
          </p>
        </div>

        <Tabs defaultValue="players" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="players">Players</TabsTrigger>
              <TabsTrigger value="staff">Staff</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="players" className="animate-in fade-in-50 duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {players.map((player) => (
                <Link key={player.id} to={`/roster/${player.id}`}>
                  <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none bg-white cursor-pointer">
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={player.image} 
                        alt={player.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="text-2xl font-bold px-3 py-1 bg-primary/90 backdrop-blur-sm">
                          #{player.number}
                        </Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-2xl font-bold text-white">{player.name}</h3>
                        <p className="text-blue-300 font-medium">{player.position}</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                          <p className="text-muted-foreground">Height</p>
                          <p className="font-semibold">{player.height}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-muted-foreground">Weight</p>
                          <p className="font-semibold">{player.weight}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-muted-foreground">Shot</p>
                          <p className="font-semibold">{player.shot}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-muted-foreground">Profile</p>
                          <span className="text-blue-600 font-bold">View Stats →</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="staff" className="animate-in fade-in-50 duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {staff.map((member) => (
                <Card key={member.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none bg-white">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                      <p className="text-blue-300 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-1">
                      <p className="text-muted-foreground text-sm">Experience</p>
                      <p className="font-semibold">{member.experience}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Roster;