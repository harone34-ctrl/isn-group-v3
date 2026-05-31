import { ChevronDown } from "lucide-react";

const TICKER_WORDS = [
  "JE RÉPARE",
  "JE CONFIGURE",
  "JE SÉCURISE",
  "JE PROTÈGE",
  "JE DÉPANNE",
  "JE CONNECTE",
];

const TICKER_ITEMS = [...TICKER_WORDS, ...TICKER_WORDS, ...TICKER_WORDS];

const LOGOS = [
  { name: "Microsoft", color: "#00a4ef" },
  { name: "Linux", color: "#fcc624" },
  { name: "Cisco", color: "#1ba0d7" },
  { name: "VMware", color: "#607078" },
  { name: "Veeam", color: "#00b336" },
  { name: "Kaspersky", color: "#006d5c" },
  { name: "Proxmox", color: "#e57000" },
  { name: "Debian", color: "#d70a53" },
  { name: "Ubuntu", color: "#e95420" },
  { name: "OVHcloud", color: "#123f6d" },
  { name: "Acronis", color: "#ef4923" },
  { name: "Citrix", color: "#452170" },
];

const DOUBLED = [...LOGOS, ...LOGOS];

export function Hero() {
  return (
    <section
      id="accueil"
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        paddingTop: "92px",
      }}
    >
      {/* Background — datacenter */}
      <img
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        alt="Data center server cables"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.22,
          filter: "saturate(0.4) brightness(0.6)",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.40) 50%, rgba(10,10,10,0.55) 100%)",
        }}
      />

      {/* Radial red glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(230,57,70,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Strip logos pleine largeur ── */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          background: "rgba(10,10,10,0.85)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          overflow: "hidden",
          padding: "12px 0",
          flexShrink: 0,
        }}
      >
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: "80px",
          background: "linear-gradient(to right, #0a0a0a, transparent)",
          zIndex: 2, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "80px",
          background: "linear-gradient(to left, #0a0a0a, transparent)",
          zIndex: 2, pointerEvents: "none",
        }} />
        <div
          style={{
            display: "flex",
            gap: "52px",
            animation: "hero-marquee 28s linear infinite",
            width: "max-content",
          }}
        >
          {DOUBLED.map((logo, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                whiteSpace: "nowrap",
                opacity: 0.7,
              }}
            >
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: logo.color, flexShrink: 0 }} />
              <span style={{ color: "#ffffff", fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase" }}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Contenu centré ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px 24px 80px",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(230,57,70,0.12)",
            border: "1px solid rgba(230,57,70,0.3)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#e63946",
              animation: "pulse-dot 1.5s infinite",
            }}
          />
          <span
            style={{
              color: "#e63946",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Support Informatique Professionnel
          </span>
        </div>

        {/* Ticker texte rouge */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            marginBottom: "32px",
            borderTop: "1px solid rgba(230,57,70,0.2)",
            borderBottom: "1px solid rgba(230,57,70,0.2)",
            padding: "12px 0",
            width: "60%",
          }}
        >
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "60px",
            background: "linear-gradient(to right, rgba(10,10,10,0.9), transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", right: 0, top: 0, bottom: 0, width: "60px",
            background: "linear-gradient(to left, rgba(10,10,10,0.9), transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />
          <div
            style={{
              display: "flex",
              animation: "ticker-scroll 22s linear infinite",
              width: "max-content",
            }}
          >
            {TICKER_ITEMS.map((word, i) => (
              <span
                key={i}
                style={{
                  color: "#e63946",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  paddingRight: "36px",
                }}
              >
                {word}
                <span style={{ marginLeft: "36px", opacity: 0.5 }}>•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Titre principal */}
        <h1
          style={{
            color: "#ffffff",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.1,
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "24px",
          }}
        >
          Un Technicien de Terrain
          <br />
          <span style={{ color: "#e63946" }}>à Votre Service</span>
        </h1>

        {/* Sous-titre */}
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "clamp(15px, 2vw, 18px)",
            lineHeight: 1.7,
            maxWidth: "680px",
            margin: "0 auto 40px",
            fontWeight: 300,
          }}
        >
          Support informatique, infogérance MSP et architecture réseau
          <br />
          pour entreprises et professionnels
        </p>

        {/* CTA */}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              background: "#e63946",
              color: "#fff",
              textDecoration: "none",
              padding: "16px 32px",
              fontSize: "14px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontWeight: 700,
              borderRadius: "3px",
              transition: "all 0.2s",
              display: "inline-block",
              boxShadow: "0 0 30px rgba(230,57,70,0.4)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#c0392b";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 0 40px rgba(230,57,70,0.6)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "#e63946";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 0 30px rgba(230,57,70,0.4)";
            }}
          >
            Demander un devis gratuit
          </a>
          <a
            href="#services"
            style={{
              background: "transparent",
              color: "#fff",
              textDecoration: "none",
              padding: "16px 32px",
              fontSize: "14px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontWeight: 700,
              borderRadius: "3px",
              border: "2px solid rgba(255,255,255,0.4)",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "#e63946";
              el.style.color = "#e63946";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(255,255,255,0.4)";
              el.style.color = "#fff";
              el.style.transform = "translateY(0)";
            }}
          >
            Découvrir nos services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        style={{
          position: "absolute",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.3)",
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          fontSize: "11px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          zIndex: 3,
          animation: "bounce-arrow 2s infinite",
        }}
      >
        <span>Défiler</span>
        <ChevronDown size={16} />
      </a>

      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes hero-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.3); }
        }
        @keyframes bounce-arrow {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
