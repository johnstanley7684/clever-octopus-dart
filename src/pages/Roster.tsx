"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { players, staff } from '@/data/roster';

const Roster = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Team Roster</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the Raiders and their Staff, who drive the Raiders to victory at every game they play
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