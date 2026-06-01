import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { KeyFigures } from "./components/KeyFigures";
import { HardwareGallery } from "./components/HardwareGallery";
import { Services } from "./components/Services";
import { UrgentCTA } from "./components/UrgentCTA";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { NotreApproche } from "./pages/NotreApproche";
import { MentionsLegales } from "./pages/MentionsLegales";
import { CGV } from "./pages/CGV";
import { PolitiqueConfidentialite } from "./pages/PolitiqueConfidentialite";
import { PlanDuSite } from "./pages/PlanDuSite";

function HomePage() {
  const location = useLocation();

  // Scroll to hash section on client-side navigation (e.g. Link to="/#services")
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [location.hash]);

  return (
    <div
      style={{
        background: "#0a0f1e",
        minHeight: "100vh",
        overflowX: "hidden",
        scrollBehavior: "smooth",
      }}
    >
      <Header />
      <Hero />
      <KeyFigures />
      <HardwareGallery />
      <Services />
      <UrgentCTA />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

// Wraps Routes with a fade-in animation on every pathname change.
// key={pathname} forces a remount of the page tree, triggering the CSS animation.
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <style>{`
        @keyframes isnPageFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
      <div key={location.pathname} style={{ animation: "isnPageFade 0.18s ease-out" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notre-approche" element={<NotreApproche />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/plan-du-site" element={<PlanDuSite />} />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
