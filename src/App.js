import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import DentalTreatments from "./pages/DentalTreatments";
import TreatmentCharges from "./pages/TreatmentCharges";
import DentalTourism from "./pages/DentalTourism";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";
import { Toaster } from "./components/ui/sonner";
import { Phone } from "lucide-react";

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {

    
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/treatments" element={<DentalTreatments />} />
            <Route path="/charges" element={<TreatmentCharges />} />
            <Route path="/tourism" element={<DentalTourism />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
          <a
            href="tel:9866937777"
            className="w-14 h-14 bg-orange-600 hover:bg-orange-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Call Now"
          >
            <Phone size={28} />
          </a>
        </div>
        
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
