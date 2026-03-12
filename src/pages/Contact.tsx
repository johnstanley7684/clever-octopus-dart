"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { showSuccess } from '@/utils/toast';
import { siteConfig } from '@/config/site';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Get In Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about tickets, tryouts, or partnerships? Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg bg-red-600 text-white">
              <CardHeader>
                <CardTitle className="text-white">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white font-bold">Full Name</Label>
                      <Input id="name" placeholder="John Doe" className="bg-black/10 border-black/20 text-white placeholder:text-white/50" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-bold">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="bg-black/10 border-black/20 text-white placeholder:text-white/50" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white font-bold">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" className="bg-black/10 border-black/20 text-white placeholder:text-white/50" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white font-bold">Message</Label>
                    <Textarea id="message" placeholder="Tell us more..." className="min-h-[150px] bg-black/10 border-black/20 text-white placeholder:text-white/50" required />
                  </div>
                  <Button type="submit" className="w-full md:w-auto px-12 rounded-full bg-black text-white hover:bg-zinc-900 font-bold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-none shadow-md bg-red-600 text-white">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-1 text-white/70" />
                  <div>
                    <p className="font-bold">{siteConfig.name} Arena</p>
                    <p className="text-sm text-white/60">{siteConfig.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 mt-1 text-white/70" />
                  <div>
                    <p className="font-bold">Phone</p>
                    <p className="text-sm text-white/60">{siteConfig.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 mt-1 text-white/70" />
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-sm text-white/60">{siteConfig.contact.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-red-600 text-white">
              <CardHeader>
                <CardTitle className="text-white">Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60 font-bold">Mon - Fri</span>
                  <span className="font-bold">{siteConfig.contact.officeHours.monFri}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60 font-bold">Saturday</span>
                  <span className="font-bold">{siteConfig.contact.officeHours.sat}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60 font-bold">Sunday</span>
                  <span className="font-bold text-white">{siteConfig.contact.officeHours.sun}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;