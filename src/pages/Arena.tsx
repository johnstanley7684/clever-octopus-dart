"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Utensils, Info, ShieldCheck, Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Arena = () => {
  const logoUrl = "https://www.georgetownraiders.com/pics/georgetown logo.png";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.323456789012!2d-79.91234567890123!3d43.65432109876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6e1234567890%3A0x1234567890abcdef!2s221%20Guelph%20St%2C%20Halton%20Hills%2C%20ON%20L7G%204A8!5e0!3m2!1sen!2sca!4v1710000000000!5m2!1sen!2sca";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Header */}
        <div className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-zinc-950 border-b border-zinc-800">
          <div className="absolute inset-0 opacity-10 blur-3xl bg-red-600/20 rounded-full" />
          <div className="relative z-10 text-center text-white container flex flex-col items-center">
            <div className="mb-8 bg-white p-6 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              <img 
                src={logoUrl} 
                alt="Georgetown Raiders Logo" 
                className="h-40 md:h-56 w-auto object-contain"
              />
            </div>
            <h1 className="text-5xl font-black tracking-tighter mb-4">ALCOTT ARENA</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">The loudest house in the league. Home of the Raiders since 1975.</p>
          </div>
        </div>

        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
                  <Info className="text-red-600" />
                  About the Venue
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                  Alcott Arena is a state-of-the-art facility located in the heart of Georgetown. With a seating capacity of 1,156 for hockey games, it offers an intimate yet electric atmosphere that has become legendary among fans and players alike.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Capacity", value: "1,156" },
                    { label: "Opened", value: "1975" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 text-center">
                      <p className="text-xs text-slate-500 uppercase font-bold mb-1">{stat.label}</p>
                      <p className="text-2xl font-black text-red-600">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
                  <Utensils className="text-red-600" />
                  Dining & Concessions
                </h2>
                <Card className="border-zinc-800 bg-zinc-900 shadow-md">
                  <CardContent className="p-8 text-center">
                    <p className="text-lg font-medium text-slate-300">
                      Arena snack bar available for your food needs.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
                  <ShieldCheck className="text-red-600" />
                  Arena Policies
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                    <span>Alcott Arena is a 100% smoke-free facility.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                    <span>No outside food or beverages are permitted inside the arena.</span>
                  </li>
                </ul>
              </section>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg bg-red-600 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-white" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/90 font-medium">221 Guelph St.<br />Halton Hills, ON L7G 4A8</p>
                  <div className="aspect-video bg-black/20 rounded-xl overflow-hidden border border-white/10">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.323456789012!2d-79.91234567890123!3d43.65432109876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6e1234567890%3A0x1234567890abcdef!2s221%20Guelph%20St%2C%20Halton%20Hills%2C%20ON%20L7G%204A8!5e0!3m2!1sen!2sca!4v1710000000000!5m2!1sen!2sca"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <Button 
                    className="w-full bg-black text-white hover:bg-zinc-900 rounded-full font-bold"
                    onClick={() => window.open("https://www.google.com/maps/dir/?api=1&destination=221+Guelph+St,+Halton+Hills,+ON+L7G+4A8", "_blank")}
                  >
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-zinc-800 bg-zinc-900 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Accessibility className="h-5 w-5 text-red-600" />
                    Accessibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400 leading-relaxed">
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