import { BrowserRouter, Routes, Route } from "react-router";
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notre-approche" element={<NotreApproche />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/plan-du-site" element={<PlanDuSite />} />
      </Routes>
    </BrowserRouter>
  );
}
