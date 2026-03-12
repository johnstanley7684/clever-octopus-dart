"use client";

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { LogIn, Mail, Lock, ArrowRight } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      showSuccess("Welcome back to the Raid!");
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <img 
              src="https://www.georgetownraiders.com/pics/georgetown logo.png" 
              alt="Raiders Logo" 
              className="h-24 w-auto mx-auto mb-6"
            />
            <h1 className="text-3xl font-black tracking-tighter text-white">MEMBER LOGIN</h1>
            <p className="text-slate-400 mt-2">Access your exclusive Raiders content and tickets.</p>
          </div>

          <Card className="border-none shadow-2xl bg-red-600 text-white">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <LogIn className="h-5 w-5" />
                Sign In
              </CardTitle>
              <CardDescription className="text-white/70">
                Enter your credentials to access your account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-bold">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@example.com" 
                      className="pl-10 bg-black/10 border-black/20 text-white placeholder:text-white/50"
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-white font-bold">Password</Label>
                    <button type="button" className="text-xs text-white/70 hover:text-white underline">
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••" 
                      className="pl-10 bg-black/10 border-black/20 text-white placeholder:text-white/50"
                      required 
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full rounded-full bg-black text-white hover:bg-zinc-900 h-12 font-bold mt-4"
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 border-t border-black/10 pt-6">
              <div className="text-center text-sm text-white/70">
                Don't have an account?{" "}
                <Link to="/contact" className="text-white font-bold hover:underline">
                  Contact us to join
                </Link>
              </div>
            </CardFooter>
          </Card>

          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-white transition-colors"
          >
            <span>Back to Home</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;