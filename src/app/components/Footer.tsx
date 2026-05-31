import { Phone, Mail, MapPin, Linkedin, Github } from "lucide-react";

const SERVICES_LINKS = [
  "Support & Dépannage",
  "Architecture Réseau",
  "Infogérance MSP",
  "Cybersécurité",
  "Conception Web",
  "Solutions IA Locales",
];

const LEGAL_LINKS = [
  "Mentions légales",
  "CGV",
  "Politique de confidentialité",
  "Plan du site",
];

export function Footer() {
  return (
    <footer style={{ background: "#0a0f1e" }}>
      {/* Red accent line */}
      <div
        style={{
          height: "3px",
          background: "linear-gradient(90deg, transparent, #00d4ff, transparent)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "64px 24px 40px",
        }}
      >
        {/* 3-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px",
            marginBottom: "56px",
          }}
        >
          {/* Column 1 – Brand & contact */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  background: "#00d4ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                  fontWeight: 900,
                  color: "#fff",
                  fontSize: "16px",
                  letterSpacing: "1px",
                }}
              >
                ISN
              </div>
              <div>
                <span style={{ color: "#fff", fontWeight: 800, fontSize: "21px", letterSpacing: "2px" }}>ISN</span>
                <span style={{ color: "#00d4ff", fontWeight: 800, fontSize: "21px", letterSpacing: "2px" }}>GROUP</span>
              </div>
            </div>

            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "18px",
                lineHeight: 1.7,
                marginBottom: "24px",
                fontWeight: 300,
              }}
            >
              Innovative Systems & Networks — Votre partenaire IT en Gironde depuis 20 ans.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { icon: <Phone size={13} />, text: "07 67 80 42 47", href: "tel:0767804247" },
                { icon: <Mail size={13} />, text: "contact@isngroup.fr", href: "mailto:contact@isngroup.fr" },
                { icon: <MapPin size={13} />, text: "Gironde (33), France", href: null },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#00d4ff" }}>{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "18px" }}
                      onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#00d4ff")}
                      onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "18px" }}>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 – Services */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontSize: "17px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(0,212,255,0.2)",
              }}
            >
              Nos services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      textDecoration: "none",
                      fontSize: "18px",
                      transition: "color 0.2s",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "#00d4ff";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "rgba(255,255,255,0.45)";
                    }}
                  >
                    <span style={{ color: "#00d4ff", fontSize: "15px" }}>▶</span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Legal & Social */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontSize: "17px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(0,212,255,0.2)",
              }}
            >
              Informations légales
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {LEGAL_LINKS.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      textDecoration: "none",
                      fontSize: "18px",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#00d4ff")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)")}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <h4
              style={{
                color: "#fff",
                fontSize: "17px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Suivez-nous
            </h4>
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { icon: <Linkedin size={16} />, label: "LinkedIn", href: "#" },
                { icon: <Github size={16} />, label: "GitHub", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  style={{
                    width: 38,
                    height: 38,
                    background: "#0d1526",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "#00d4ff";
                    el.style.borderColor = "#00d4ff";
                    el.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "#0d1526";
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "17px", margin: 0 }}>
            © 2026 ISN Group — Tous droits réservés
          </p>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "17px", margin: 0 }}>
            Innovative Systems & Networks — SIRET : 000 000 000 00000
          </p>
        </div>
      </div>
    </footer>
  );
}
