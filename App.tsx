
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceRequest from "./pages/ServiceRequest";
import Professionals from "./pages/Professionals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PlumbingService from "./pages/PlumbingService";
import ElectricityService from "./pages/ElectricityService";
import HeatingService from "./pages/HeatingService";
import MaintenanceService from "./pages/MaintenanceService";
import HighSecurity from "./pages/HighSecurity";
import QualityGuarantee from "./pages/QualityGuarantee";
import Support247 from "./pages/Support247";
import TransparentPricing from "./pages/TransparentPricing";
import HowItWorksDetailed from "./pages/HowItWorksDetailed";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/plumbing" element={<PlumbingService />} />
            <Route path="/services/electricity" element={<ElectricityService />} />
            <Route path="/services/heating" element={<HeatingService />} />
            <Route path="/services/maintenance" element={<MaintenanceService />} />
            <Route path="/service-request" element={<ServiceRequest />} />
            <Route path="/professionals" element={<Professionals />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/high-security" element={<HighSecurity />} />
            <Route path="/quality-guarantee" element={<QualityGuarantee />} />
            <Route path="/support-247" element={<Support247 />} />
            <Route path="/transparent-pricing" element={<TransparentPricing />} />
            <Route path="/how-it-works" element={<HowItWorksDetailed />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
