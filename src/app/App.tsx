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

export default function App() {
  return (
    <div
      style={{
        background: "#0a0a0a",
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
