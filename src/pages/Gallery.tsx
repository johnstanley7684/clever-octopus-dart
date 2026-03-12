"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const photos = [
  { id: 1, title: "Game Winning Goal", category: "Action", url: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Team Celebration", category: "Team", url: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Pre-game Ritual", category: "Behind the Scenes", url: "https://images.unsplash.com/photo-1580748141549-71748d60bdc9?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Fans in the Stands", category: "Fans", url: "https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Morning Practice", category: "Action", url: "https://images.unsplash.com/photo-1518611012118-296072bb58c4?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Victory Parade", category: "Team", url: "https://images.unsplash.com/photo-1526232759583-26f173565548?auto=format&fit=crop&q=80&w=800" },
  { id: 7, title: "Locker Room Talk", category: "Behind the Scenes", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
  { id: 8, title: "The Arena at Night", category: "Venue", url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800" },
  { id: 9, title: "Youth Clinic", category: "Community", url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-white">Photo Gallery</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Capturing the intensity, the passion, and the moments that define Raiders Hockey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Dialog key={photo.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer group border-none bg-zinc-900 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[4/3]">
                    <img 
                      src={photo.url} 
                      alt={photo.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-red-500 text-xs font-bold uppercase tracking-wider mb-1">{photo.category}</span>
                      <h3 className="text-white font-bold text-lg">{photo.title}</h3>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
                <img src={photo.url} alt={photo.title} className="w-full h-auto rounded-lg" />
                <div className="p-4 bg-zinc-900/90 backdrop-blur-sm rounded-b-lg">
                  <h3 className="text-xl font-bold text-white">{photo.title}</h3>
                  <p className="text-slate-400">{photo.category}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;