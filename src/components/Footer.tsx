"use client";

import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const logoUrl = "https://www.georgetownraiders.com/pics/georgetown logo.png";

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-800">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1.5 rounded-lg">
                <img 
                  src={logoUrl} 
                  alt="Georgetown Raiders Logo" 
                  className="h-10 w-auto object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">RAIDERS</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Celebrating over 50 years as the Georgetown Raiders Hockey Club.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-blue-400 transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-blue-400 transition-colors" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-blue-400 transition-colors" />
              <Youtube className="h-5 w-5 cursor-pointer hover:text-blue-400 transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/roster" className="hover:text-white transition-colors">Team Roster</a></li>
              <li><a href="/stats" className="hover:text-white transition-colors">Game Stats</a></li>
              <li><a href="/gallery" className="hover:text-white transition-colors">Photo Gallery</a></li>
              <li><a href="/sponsors" className="hover:text-white transition-colors">Our Sponsors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Arena Info</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Alcott Arena</li>
              <li>221 Guelph St.</li>
              <li>Halton Hills, ON L7G 4A8</li>
              <li>(905) 877-8488</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Get the latest scores and news delivered to your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-900 border-slate-800 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Georgetown Raiders Hockey Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;