"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Trophy, Users, BarChart3, Image, Handshake, Mail, Menu, X, Calendar, Ticket, Newspaper, Map, ShoppingBag, ListOrdered, Heart, GraduationCap, HelpCircle, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Trophy },
    { name: 'Schedule', path: '/schedule', icon: Calendar },
    { name: 'Roster', path: '/roster', icon: Users },
    { name: 'Stats', path: '/stats', icon: BarChart3 },
    { name: 'Standings', path: '/standings', icon: ListOrdered },
    { name: 'News', path: '/news', icon: Newspaper },
    { name: 'Fan Zone', path: '/fan-zone', icon: Heart },
    { name: 'Youth', path: '/youth', icon: GraduationCap },
    { name: 'Arena', path: '/arena', icon: Map },
    { name: 'Shop', path: '/shop', icon: ShoppingBag },
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <Trophy className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">GEORGETOWN RAIDERS</span>
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
          <Link to="/tickets">
            <Button variant="default" size="sm" className="rounded-full px-4 h-8 text-xs ml-2">
              Tickets
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="xl:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
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
                location.pathname === item.path ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          ))}
          <Link to="/tickets" onClick={() => setIsOpen(false)}>
            <Button className="w-full rounded-full mt-2">Tickets</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;