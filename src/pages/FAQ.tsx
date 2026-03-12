"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from '@/components/ui/card';
import { Search, HelpCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    category: "Tickets & Entry",
    questions: [
      { q: "How do I access my digital tickets?", a: "Digital tickets can be accessed through the Raiders Mobile App or by logging into your account on our website. We recommend adding them to your Apple Wallet or Google Pay before arriving at the arena." },
      { q: "What is the bag policy at Alcott Arena?", a: "To ensure fan safety, only clear bags smaller than 12x6x12 inches are permitted. Small clutch purses (no larger than 4.5x6.5 inches) are also allowed." },
      { q: "Do children need a ticket?", a: "Children under the age of 2 do not require a ticket, provided they sit on an adult's lap." }
    ]
  },
  {
    category: "Arena Experience",
    questions: [
      { q: "When do doors open for games?", a: "Doors typically open 90 minutes prior to the scheduled puck drop. We encourage fans to arrive early to enjoy pre-game festivities." },
      { q: "Is there Wi-Fi available in the arena?", a: "Yes, free high-speed Wi-Fi is available throughout the arena. Connect to the 'Raiders-Fan-WiFi' network." },
      { q: "Are there vegetarian or gluten-free food options?", a: "Yes, the arena snack bar offers a variety of dietary-friendly options. Check the arena map for specific locations." }
    ]
  },
  {
    category: "Team & Roster",
    questions: [
      { q: "How can I get an autograph from a player?", a: "Players often sign autographs near the tunnel after morning skates or during designated Fan Appreciation events. Check the News section for upcoming event dates." },
      { q: "Where can I find the most up-to-date team stats?", a: "Live stats are available on our Stats page and are updated in real-time during every game." }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <HelpCircle className="h-12 w-12 text-red-600 mx-auto mb-6" />
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-white">Frequently Asked Questions</h1>
          <p className="text-slate-400">Everything you need to know about the Raiders experience.</p>
          
          <div className="relative mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search for a question..." 
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-none bg-zinc-900 text-white shadow-lg focus:ring-2 focus:ring-red-600 text-lg"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {faqs.map((section, i) => (
            <section key={i}>
              <h2 className="text-2xl font-bold mb-6 text-red-600">{section.category}</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {section.questions.map((faq, j) => (
                  <AccordionItem key={j} value={`item-${i}-${j}`} className="bg-zinc-900 rounded-xl border-none shadow-sm px-6">
                    <AccordionTrigger className="text-left font-bold text-white hover:no-underline py-4">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 pb-4 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-20">
          <Card className="bg-red-600 text-white border-none shadow-xl overflow-hidden">
            <CardContent className="p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="bg-black p-4 rounded-2xl">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
                <p className="text-white/70">Our support team is ready to help you with anything you need.</p>
              </div>
              <Button className="bg-white text-black hover:bg-slate-200 rounded-full px-8 font-bold">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;