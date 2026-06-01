import { useEffect } from "react";
import { Link } from "react-router";
import { ExternalLink } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const SITE_MAP = [
  {
    category: "Page principale",
    items: [
      { label: "Accueil", href: "/", internal: true },
      { label: "Chiffres clés", href: "/#chiffres", internal: false },
      { label: "Galerie matériel", href: "/#materiel", internal: false },
    ],
  },
  {
    category: "Services",
    items: [
      { label: "Tous les services", href: "/#services", internal: false },
      { label: "Support & Dépannage", href: "/#services", internal: false },
      { label: "Architecture Réseau", href: "/#services", internal: false },
      { label: "Infogérance MSP", href: "/#services", internal: false },
      { label: "Cybersécurité", href: "/#services", internal: false },
      { label: "Conception Web", href: "/#services", internal: false },
      { label: "Solutions IA Locales", href: "/#services", internal: false },
    ],
  },
  {
    category: "À propos",
    items: [
      { label: "À propos d'ISN Group", href: "/#apropos", internal: false },
      { label: "Notre Approche", href: "/notre-approche", internal: true },
      { label: "Témoignages clients", href: "/#temoignages", internal: false },
    ],
  },
  {
    category: "Contact",
    items: [
      { label: "Formulaire de contact", href: "/#contact", internal: false },
      {
        label: "Téléphone : 07 67 80 42 47",
        href: "tel:0767804247",
        internal: false,
      },
      {
        label: "Email : contact@isngroup.fr",
        href: "mailto:contact@isngroup.fr",
        internal: false,
      },
    ],
  },
  {
    category: "Informations légales",
    items: [
      { label: "Mentions légales", href: "/mentions-legales", internal: true },
      {
        label: "Conditions Générales de Vente (CGV)",
        href: "/cgv",
        internal: true,
      },
      {
        label: "Politique de confidentialité",
        href: "/politique-confidentialite",
        internal: true,
      },
      { label: "Plan du site", href: "/plan-du-site", internal: true },
    ],
  },
];

export function PlanDuSite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: "#0a0f1e", minHeight: "100vh" }}>
      <Header />

      {/* Page Banner */}
      <div
        style={{
          paddingTop: "130px",
          paddingBottom: "64px",
          paddingLeft: "24px",
          paddingRight: "24px",
          background: "linear-gradient(180deg, #0a0f1e 60%, #0d1526 100%)",
          borderBottom: "1px solid rgba(0,212,255,0.15)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#00d4ff",
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "16px",
          }}
        >
          — Navigation —
        </div>
        <h1
          style={{
            color: "#ffffff",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "16px",
          }}
        >
          Plan du <span style={{ color: "#00d4ff" }}>Site</span>
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "15px",
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          Retrouvez l'ensemble des pages et sections du site ISN Group.
        </p>
      </div>

      {/* Sitemap grid */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "72px 24px 96px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {SITE_MAP.map((group) => (
          <div
            key={group.category}
            style={{
              background: "#0d1526",
              border: "1px solid rgba(0,212,255,0.12)",
              borderRadius: "8px",
              padding: "28px",
            }}
          >
            <h2
              style={{
                color: "#00d4ff",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(0,212,255,0.15)",
              }}
            >
              {group.category}
            </h2>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {group.items.map((item) => (
                <li key={item.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#00d4ff", fontSize: "12px", flexShrink: 0 }}>▶</span>
                  {item.internal ? (
                    <Link
                      to={item.href}
                      style={{
                        color: "rgba(255,255,255,0.65)",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#00d4ff";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "rgba(255,255,255,0.65)";
                      }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      style={{
                        color: "rgba(255,255,255,0.65)",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.2s",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#00d4ff";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "rgba(255,255,255,0.65)";
                      }}
                    >
                      {item.label}
                      {item.href.startsWith("tel:") ||
                      item.href.startsWith("mailto:") ? (
                        <ExternalLink size={11} style={{ opacity: 0.6 }} />
                      ) : null}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
