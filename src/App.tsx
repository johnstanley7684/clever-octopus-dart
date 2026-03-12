import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Roster from "./pages/Roster";
import PlayerProfile from "./pages/PlayerProfile";
import Stats from "./pages/Stats";
import Gallery from "./pages/Gallery";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import Tickets from "./pages/Tickets";
import News from "./pages/News";
import Standings from "./pages/Standings";
import Arena from "./pages/Arena";
import Shop from "./pages/Shop";
import History from "./pages/History";
import FAQ from "./pages/FAQ";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/roster/:id" element={<PlayerProfile />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/arena" element={<Arena />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/history" element={<History />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;