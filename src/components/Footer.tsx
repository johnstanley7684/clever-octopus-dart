"use client";

import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const logoUrl = "https://drive.google.com/uc?export=view&id=1RbZlUTabJ8Gd-Sf3ennN1FnOr8fhxcA7";

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-800">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logoUrl} 
                alt="Georgetown Raiders Logo" 
                className="h-12 w-auto object-contain brightness-110"
              />
              <span className="text-2xl font-bold tracking-tighter text-white">RAIDERS</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              The official home of the Georgetown Raiders Hockey Club. Dedicated to excellence on and off the ice since 1995.
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
              <li><a href="/sponsors" className="hover:text-white transition-colors">Our Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Arena Info</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Raiders Memorial Arena</li>
              <li>123 Ice Rink Way</li>
              <li>Georgetown, ST 54321</li>
              <li>(555) 123-4567</li>
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