import { useState, useEffect } from "react";
import { Phone, Mail, Clock, Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // href = in-page anchor (starts with #) → plain <a>, browser handles smooth scroll
  // href = page/cross-page route (starts with /) → <Link>, client-side navigation
  const navLinks = [
    { label: "Accueil",        href: isHome ? "#accueil" : "/" },
    { label: "Services",       href: isHome ? "#services" : "/#services" },
    { label: "Notre Approche", href: "/notre-approche" },
    { label: "À propos",       href: isHome ? "#apropos" : "/#apropos" },
    { label: "Contact",        href: isHome ? "#contact" : "/#contact" },
  ];

  const ctaHref = isHome ? "#contact" : "/#contact";

  const linkStyle: React.CSSProperties = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontWeight: 500,
    transition: "color 0.2s",
    padding: "4px 0",
    borderBottom: "2px solid transparent",
  };

  const hoverOn = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.color = "#00d4ff";
    (e.currentTarget as HTMLElement).style.borderBottomColor = "#00d4ff";
  };
  const hoverOff = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.color = "#fff";
    (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent";
  };

  const renderNavLink = (link: { label: string; href: string }, onClick?: () => void) => {
    const isPageRoute = link.href.startsWith("/");
    if (isPageRoute) {
      return (
        <Link
          to={link.href}
          style={linkStyle}
          onClick={onClick}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
        >
          {link.label}
        </Link>
      );
    }
    return (
      <a
        href={link.href}
        style={linkStyle}
        onClick={onClick}
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
      >
        {link.label}
      </a>
    );
  };

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
        <Link to={isHome ? "/" : "/"} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
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
        </Link>

        {/* Desktop nav */}
        <ul
          style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, gap: "32px", alignItems: "center" }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <li key={link.label}>{renderNavLink(link)}</li>
          ))}
          <li>
            {ctaHref.startsWith("/") ? (
              <Link
                to={ctaHref}
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
                  (e.currentTarget as HTMLElement).style.background = "#0099cc";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#00d4ff";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Demander un devis
              </Link>
            ) : (
              <a
                href={ctaHref}
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
            )}
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none", padding: "4px" }}
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
            <div key={link.label}>
              {renderNavLink(link, () => setMobileOpen(false))}
            </div>
          ))}
          {ctaHref.startsWith("/") ? (
            <Link
              to={ctaHref}
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
                display: "block",
              }}
            >
              Demander un devis
            </Link>
          ) : (
            <a
              href={ctaHref}
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
          )}
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
