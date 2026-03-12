"use client";

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { CreditCard, ShieldCheck, ArrowLeft, CheckCircle2, ShoppingBag } from 'lucide-react';
import { showSuccess } from '@/utils/toast';
import { siteConfig } from '@/config/site';
import { useCart } from '@/context/CartContext';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Fallback for direct ticket purchases not in the main cart
  const directItem = location.state?.item;
  const displayItems = directItem ? [{ name: directItem.name, price: directItem.price, quantity: 1 }] : items;
  const displayTotal = directItem ? parseFloat(directItem.price.replace(/[^0-9.]/g, '')) : totalPrice;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      showSuccess("Payment successful! Your order is confirmed.");
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-grow container py-20 flex items-center justify-center">
          <Card className="max-w-md w-full text-center p-8 border-none shadow-xl bg-zinc-900">
            <div className="mb-6 flex justify-center">
              <div className="bg-green-900/20 p-4 rounded-full">
                <CheckCircle2 className="h-12 w-12 text-green-500" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-white">Thank You!</h1>
            <p className="text-slate-400 mb-8">
              Your order has been confirmed. A confirmation email with your digital tickets/receipt has been sent to your inbox.
            </p>
            <Button onClick={() => navigate('/')} className="w-full rounded-full bg-red-600 hover:bg-red-700 text-white font-bold">
              Return to Home
            </Button>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-sm text-slate-400 hover:text-red-500 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-none shadow-md bg-zinc-900">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-slate-300">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-black border-zinc-800 text-white" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-slate-300">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-black border-zinc-800 text-white" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-black border-zinc-800 text-white" required />
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-zinc-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <CreditCard className="h-5 w-5 text-red-600" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber" className="text-slate-300">Card Number</Label>
                    <Input id="cardNumber" placeholder="0000 0000 0000 0000" className="bg-black border-zinc-800 text-white" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry" className="text-slate-300">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" className="bg-black border-zinc-800 text-white" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv" className="text-slate-300">CVV</Label>
                      <Input id="cvv" placeholder="123" className="bg-black border-zinc-800 text-white" required />
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      disabled={isProcessing || displayTotal === 0}
                      className="w-full rounded-full bg-red-600 hover:bg-red-700 h-12 text-lg font-bold text-white"
                    >
                      {isProcessing ? "Processing..." : `Pay $${(displayTotal + siteConfig.payment.processingFee).toFixed(2)}`}
                    </Button>
                  </div>
                  <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1 mt-4">
                    <ShieldCheck className="h-3 w-3" /> Secure SSL Encrypted Payment
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg sticky top-24 bg-zinc-900">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-red-600" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="max-h-[300px] overflow-y-auto space-y-4 pr-2">
                  {displayItems.length > 0 ? (
                    displayItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-white text-sm">{item.name}</p>
                          <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                        </div>
                        <span className="font-bold text-white text-sm">
                          {typeof item.price === 'string' ? item.price : `$${item.price.toFixed(2)}`}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-slate-500 italic">No items in cart</p>
                  )}
                </div>
                
                <Separator className="bg-zinc-800" />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Subtotal</span>
                    <span className="text-white">${displayTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Processing Fee</span>
                    <span className="text-white">${siteConfig.payment.processingFee.toFixed(2)}</span>
                  </div>
                  <Separator className="bg-zinc-800" />
                  <div className="flex justify-between text-lg font-black">
                    <span className="text-white">Total</span>
                    <span className="text-red-600">${(displayTotal + siteConfig.payment.processingFee).toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-black/40 p-6 rounded-b-xl">
                <p className="text-xs text-slate-500 text-center w-full">
                  By completing your purchase, you agree to our Terms of Service and Refund Policy.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;