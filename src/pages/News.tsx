"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

const articles = [
  { id: 1, title: "Raiders Clinch Playoff Spot with Overtime Thriller", date: "Oct 5, 2024", category: "Game Recap", image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=800", excerpt: "In a heart-pounding finish at the Alcott Arena, the Raiders secured their post-season berth..." },
  { id: 2, title: "New State-of-the-Art Training Facility Officially Opens", date: "Oct 2, 2024", category: "Team News", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800", excerpt: "The Raiders organization took a massive leap forward today with the ribbon-cutting ceremony..." },
  { id: 3, title: "Community Outreach: Raiders Visit Local Children's Hospital", date: "Sep 28, 2024", category: "Community", image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800", excerpt: "Players and staff spent the afternoon bringing smiles and hockey gear to young fans..." },
  { id: 4, title: "Player Spotlight: Braden Lauwaert's Incredible Scoring Streak", date: "Sep 25, 2024", category: "Player Profile", image: "https://images.unsplash.com/photo-1526232759583-26f173565548?auto=format&fit=crop&q=80&w=800", excerpt: "With 12 goals in his last 8 games, Lauwaert is proving why he's the league's most dangerous forward..." },
  { id: 5, title: "Raiders Announce Partnership with Global Bank", date: "Sep 20, 2024", category: "Corporate", image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800", excerpt: "A new multi-year deal will see Global Bank become the official banking partner of the club..." },
  { id: 6, title: "Season Ticket Holder Appreciation Night Announced", date: "Sep 15, 2024", category: "Fans", image: "https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&q=80&w=800", excerpt: "We're saying thank you to our most loyal supporters with a special event on October 20th..." },
];

const News = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-white">Raiders Newsroom</h1>
            <p className="text-slate-400">The latest stories, recaps, and announcements from the club.</p>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search news..." 
                className="pl-10 pr-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-600 w-full md:w-64"
              />
            </div>
            <Button variant="outline" size="icon" className="rounded-full border-zinc-800 text-white hover:bg-zinc-900">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden border-none bg-zinc-900 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-600 text-white border-none">{article.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6 flex-grow flex flex-col">
                <p className="text-xs text-slate-500 font-bold mb-2 uppercase tracking-wider">{article.date}</p>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-600 transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-400 mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto">
                  <Button variant="link" className="p-0 h-auto text-red-600 font-bold group-hover:translate-x-1 transition-transform">
                    Read Full Story →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button variant="outline" className="rounded-full px-12 border-zinc-800 text-white hover:bg-zinc-900">Load More Stories</Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;