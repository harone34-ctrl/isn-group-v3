import { useState, useEffect } from "react";
import { Phone, Mail, Clock, Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#apropos" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
      {/* Top strip */}
      <div
        style={{
          background: "#00d4ff",
          padding: "6px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="tel:0767804247"
          style={{ color: "#0a0f1e", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", fontSize: "18px" }}
        >
          <Phone size={13} />
          07 67 80 42 47
        </a>
        <a
          href="mailto:contact@isngroup.fr"
          style={{ color: "#0a0f1e", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", fontSize: "18px" }}
        >
          <Mail size={13} />
          contact@isngroup.fr
        </a>
        <span style={{ color: "#0a0f1e", display: "flex", alignItems: "center", gap: "6px", fontSize: "18px" }}>
          <Clock size={13} />
          Lun–Ven 9h–18h
        </span>
      </div>

      {/* Main nav */}
      <nav
        style={{
          background: scrolled ? "rgba(10,15,30,0.98)" : "#0a0f1e",
          borderBottom: "1px solid rgba(0,212,255,0.2)",
          backdropFilter: "blur(12px)",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
          transition: "background 0.3s",
        }}
      >
        {/* Logo */}
        <a href="#accueil" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: 36,
              height: 36,
              background: "#00d4ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              fontWeight: 900,
              color: "#fff",
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            ISN
          </div>
          <div>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "18px", letterSpacing: "2px" }}>ISN</span>
            <span style={{ color: "#00d4ff", fontWeight: 800, fontSize: "18px", letterSpacing: "2px" }}>GROUP</span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "32px",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "14px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  transition: "color 0.2s",
                  padding: "4px 0",
                  borderBottom: "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "#00d4ff";
                  (e.target as HTMLAnchorElement).style.borderBottomColor = "#00d4ff";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "#fff";
                  (e.target as HTMLAnchorElement).style.borderBottomColor = "transparent";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              style={{
                background: "#00d4ff",
                color: "#0a0f1e",
                textDecoration: "none",
                padding: "10px 20px",
                fontSize: "13px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontWeight: 700,
                borderRadius: "3px",
                transition: "background 0.2s, transform 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.background = "#0099cc";
                (e.target as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.background = "#00d4ff";
                (e.target as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              Demander un devis
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            display: "none",
            padding: "4px",
          }}
          className="show-mobile"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "#0d1526",
            borderTop: "1px solid rgba(0,212,255,0.3)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "15px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontWeight: 500,
                padding: "8px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            style={{
              background: "#00d4ff",
              color: "#0a0f1e",
              textDecoration: "none",
              padding: "12px 20px",
              fontSize: "13px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontWeight: 700,
              borderRadius: "3px",
              textAlign: "center",
              marginTop: "8px",
            }}
          >
            Demander un devis
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
