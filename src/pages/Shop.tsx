"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Filter, Search } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const products = [
  { id: 1, name: "Home Authentic Jersey", price: "$180.00", category: "Apparel", image: "https://images.unsplash.com/photo-1580748141549-71748d60bdc9?auto=format&fit=crop&q=80&w=400", tag: "Best Seller" },
  { id: 2, name: "Titans Snapback Hat", price: "$35.00", category: "Headwear", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=400", tag: "New" },
  { id: 3, name: "Team Logo Hoodie", price: "$65.00", category: "Apparel", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Official Game Puck", price: "$15.00", category: "Accessories", image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=400" },
  { id: 5, name: "Titans Scarf", price: "$25.00", category: "Accessories", image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=400" },
  { id: 6, name: "Away Replica Jersey", price: "$120.00", category: "Apparel", image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&q=80&w=400" },
];

const Shop = () => {
  const addToCart = (name: string) => {
    showSuccess(`${name} added to your cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">Titans Fan Shop</h1>
            <p className="text-muted-foreground">Gear up and show your pride for the blue and white.</p>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search gear..." 
                className="pl-10 pr-4 py-2 rounded-full border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
              />
            </div>
            <Button variant="outline" size="icon" className="rounded-full">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.tag && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white border-none">{product.tag}</Badge>
                  </div>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <CardContent className="p-6 flex-grow">
                <p className="text-xs text-muted-foreground font-bold mb-1 uppercase tracking-wider">{product.category}</p>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xl font-black text-slate-900">{product.price}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  onClick={() => addToCart(product.name)}
                  className="w-full rounded-full gap-2 bg-slate-900 hover:bg-blue-600 transition-colors"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 text-white rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Titans Rewards</h2>
            <p className="text-slate-400">Join our loyalty program and earn points on every purchase.</p>
          </div>
          <Button variant="secondary" size="lg" className="rounded-full px-10 font-bold">
            Join Now
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;