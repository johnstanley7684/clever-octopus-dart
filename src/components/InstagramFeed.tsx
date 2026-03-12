"use client";

import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const instagramPosts = [
  { id: 1, likes: "1.2k", comments: "45", image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=600" },
  { id: 2, likes: "850", comments: "22", image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&q=80&w=600" },
  { id: 3, likes: "2.1k", comments: "89", image: "https://images.unsplash.com/photo-1580748141549-71748d60bdc9?auto=format&fit=crop&q=80&w=600" },
  { id: 4, likes: "940", comments: "31", image: "https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&q=80&w=600" },
  { id: 5, likes: "1.5k", comments: "56", image: "https://images.unsplash.com/photo-1518611012118-296072bb58c4?auto=format&fit=crop&q=80&w=600" },
  { id: 6, likes: "1.1k", comments: "38", image: "https://images.unsplash.com/photo-1526232759583-26f173565548?auto=format&fit=crop&q=80&w=600" },
];

const InstagramFeed = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-1 rounded-xl">
                <div className="bg-white p-1 rounded-lg">
                  <Instagram className="h-6 w-6 text-slate-900" />
                </div>
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Follow the Raid</h2>
            </div>
            <p className="text-muted-foreground">Get exclusive behind-the-scenes content @ojhlraiders</p>
          </div>
          <a 
            href="https://www.instagram.com/ojhlraiders/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="rounded-full gap-2 border-slate-200 hover:bg-slate-50">
              View on Instagram <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <motion.div 
              key={post.id}
              whileHover={{ y: -5 }}
              className="relative aspect-square group overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={post.image} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-1.5">
                  <Heart className="h-5 w-5 fill-white" />
                  <span className="font-bold text-sm">{post.likes}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="h-5 w-5 fill-white" />
                  <span className="font-bold text-sm">{post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;