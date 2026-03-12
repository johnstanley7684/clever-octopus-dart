"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users, BarChart3, Menu, X, Calendar, Newspaper, Map, ShoppingBag, ListOrdered, Heart, HelpCircle, LayoutDashboard, Image, Zap, PartyPopper, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import CartDrawer from './CartDrawer';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Heart },
    { name: 'Schedule', path: '/schedule', icon: Calendar },
    { name: 'Match Center', path: '/match-center', icon: Zap },
    { name: 'Chatroom', path: '/chatroom', icon: MessageSquare },
    { name: 'Special Events', path: '/special-events', icon: PartyPopper },
    { name: 'Roster', path: '/roster', icon: Users },
    { name: 'Stats', path: '/stats', icon: BarChart3 },
    { name: 'Standings', path: '/standings', icon: ListOrdered },
    { name: 'News', path: '/news', icon: Newspaper },
    { name: 'Gallery', path: '/gallery', icon: Image },
    { name: 'Arena', path: '/arena', icon: Map },
    { name: 'Shop', path: '/shop', icon: ShoppingBag },
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  ];

  const logoUrl = "https://www.georgetownraiders.com/pics/georgetown logo.png";

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src={logoUrl} 
            alt="Georgetown Raiders Logo" 
            className="h-10 w-auto object-contain mix-blend-multiply"
          />
          <span className="text-xl font-bold tracking-tight hidden sm:inline-block">GEORGETOWN RAIDERS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center space-x-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-[12px] font-medium transition-colors hover:text-primary px-1",
                location.pathname === item.path ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 ml-2">
            <CartDrawer />
            <Link to="/login">
              <Button variant="ghost" size="sm" className="rounded-full px-4 h-8 text-xs text-white hover:bg-red-600">
                Login
              </Button>
            </Link>
            <Link to="/tickets">
              <Button variant="default" size="sm" className="rounded-full px-4 h-8 text-xs bg-red-600 hover:bg-red-700 text-white">
                Tickets
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 xl:hidden">
          <CartDrawer />
          <button
            className="p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden border-t bg-background p-4 space-y-1 animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center space-x-3 text-sm font-medium p-2 rounded-md",
                location.pathname === item.path ? "bg-red-50 text-red-600" : "text-muted-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-2 mt-4">
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full rounded-full border-red-600 text-red-600">Login</Button>
            </Link>
            <Link to="/tickets" onClick={() => setIsOpen(false)}>
              <Button className="w-full rounded-full bg-red-600 hover:bg-red-700 text-white">Tickets</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;