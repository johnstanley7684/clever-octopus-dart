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
import { CreditCard, ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Get item details from navigation state or use defaults
  const item = location.state?.item || { name: "Single Game Ticket", price: "$15.00" };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      showSuccess("Payment successful! Your tickets are on their way.");
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow container py-20 flex items-center justify-center">
          <Card className="max-w-md w-full text-center p-8 border-none shadow-xl">
            <div className="mb-6 flex justify-center">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
            <p className="text-muted-foreground mb-8">
              Your order for <strong>{item.name}</strong> has been confirmed. 
              A confirmation email with your digital tickets has been sent to your inbox.
            </p>
            <Button onClick={() => navigate('/')} className="w-full rounded-full bg-blue-600">
              Return to Home
            </Button>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-sm text-muted-foreground hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="0000 0000 0000 0000" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" required />
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      disabled={isProcessing}
                      className="w-full rounded-full bg-blue-600 hover:bg-blue-700 h-12 text-lg font-bold"
                    >
                      {isProcessing ? "Processing..." : `Pay ${item.price}`}
                    </Button>
                  </div>
                  <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1 mt-4">
                    <ShieldCheck className="h-3 w-3" /> Secure SSL Encrypted Payment
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">Digital Delivery</p>
                  </div>
                  <span className="font-bold">{item.price}</span>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{item.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Processing Fee</span>
                    <span>$0.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-black">
                    <span>Total</span>
                    <span className="text-blue-600">{item.price}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-slate-50 p-6 rounded-b-xl">
                <p className="text-xs text-muted-foreground text-center w-full">
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