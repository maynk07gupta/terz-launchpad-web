import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import ResourceDetail from "./pages/ResourceDetail";
import Procedure from "./pages/Procedure";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import MedicalDevices from "./pages/services/MedicalDevices";
import IVD from "./pages/services/IVD";
import Cosmetics from "./pages/services/Cosmetics";
import LMPC from "./pages/services/LMPC";
import IEC from "./pages/services/IEC";
import EPR from "./pages/services/EPR";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/medical-devices" element={<MedicalDevices />} />
              <Route path="/services/ivd" element={<IVD />} />
              <Route path="/services/cosmetics" element={<Cosmetics />} />
              <Route path="/services/lmpc" element={<LMPC />} />
              <Route path="/services/iec" element={<IEC />} />
              <Route path="/services/epr" element={<EPR />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/:type/:slug" element={<ResourceDetail />} />
              <Route path="/procedure" element={<Procedure />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
