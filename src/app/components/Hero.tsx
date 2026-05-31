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
  {
    name: "Microsoft",
    svg: <svg viewBox="0 0 21 21" width="24" height="24" fill="none"><rect x="0" y="0" width="10" height="10" fill="#f25022"/><rect x="11" y="0" width="10" height="10" fill="#7fba00"/><rect x="0" y="11" width="10" height="10" fill="#00a4ef"/><rect x="11" y="11" width="10" height="10" fill="#ffb900"/></svg>,
  },
  {
    name: "Linux",
    svg: <svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="10" fill="none" stroke="#fcc624" strokeWidth="2"/><path d="M8 9h8M8 12h5" stroke="#fcc624" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="15" r="1.5" fill="#fcc624"/><circle cx="15" cy="15" r="1.5" fill="#fcc624"/></svg>,
  },
  {
    name: "Cisco",
    svg: <svg viewBox="0 0 32 16" width="32" height="24" fill="none"><rect x="0" y="4" width="4" height="8" rx="2" fill="#1ba0d7"/><rect x="6" y="2" width="4" height="12" rx="2" fill="#1ba0d7"/><rect x="12" y="0" width="4" height="16" rx="2" fill="#1ba0d7"/><rect x="18" y="2" width="4" height="12" rx="2" fill="#1ba0d7"/><rect x="24" y="4" width="4" height="8" rx="2" fill="#1ba0d7"/></svg>,
  },
  {
    name: "VMware",
    svg: <svg viewBox="0 0 28 16" width="28" height="24" fill="none"><path d="M2 2L7 14L12 2H10L7 10L4 2H2Z" fill="#607078"/><path d="M13 2L18 14L23 2H21L18 10L15 2H13Z" fill="#607078"/><rect x="24" y="2" width="3" height="12" rx="1.5" fill="#607078"/></svg>,
  },
  {
    name: "Veeam",
    svg: <svg viewBox="0 0 20 20" width="24" height="24" fill="none"><polygon points="10,2 18,10 10,18 2,10" fill="none" stroke="#00b336" strokeWidth="2"/><polygon points="10,5 15,10 10,15 5,10" fill="#00b336"/></svg>,
  },
  {
    name: "Kaspersky",
    svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="none" stroke="#006d5c" strokeWidth="2"/><path d="M8 7L12 12L8 17" stroke="#006d5c" strokeWidth="2.5" strokeLinecap="round"/><path d="M12 12L17 12" stroke="#006d5c" strokeWidth="2.5" strokeLinecap="round"/></svg>,
  },
  {
    name: "Proxmox",
    svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M12 2L22 7V17L12 22L2 17V7L12 2Z" fill="none" stroke="#e57000" strokeWidth="2"/><path d="M12 6L18 9.5V16.5L12 20L6 16.5V9.5L12 6Z" fill="#e57000"/></svg>,
  },
  {
    name: "Debian",
    svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.5 0 2.93-.33 4.2-.92C13.93 20.36 11 17.44 11 14c0-3.31 2.69-6 6-6 .34 0 .68.03 1 .08C17.5 4.5 14.97 2 12 2z" fill="#d70a53"/><circle cx="17" cy="14" r="4" fill="none" stroke="#d70a53" strokeWidth="2"/></svg>,
  },
  {
    name: "Ubuntu",
    svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="none" stroke="#e95420" strokeWidth="2"/><circle cx="12" cy="5" r="2.5" fill="#e95420"/><circle cx="4.9" cy="16.5" r="2.5" fill="#e95420"/><circle cx="19.1" cy="16.5" r="2.5" fill="#e95420"/><path d="M12 7.5L5.5 15M12 7.5L18.5 15" stroke="#e95420" strokeWidth="1.5"/></svg>,
  },
  {
    name: "OVHcloud",
    svg: <svg viewBox="0 0 30 20" width="30" height="24" fill="none"><path d="M5 10C5 6.69 7.69 4 11 4s6 2.69 6 6-2.69 6-6 6S5 13.31 5 10Z" fill="none" stroke="#123f6d" strokeWidth="2"/><path d="M14 10C14 6.69 16.69 4 20 4s6 2.69 6 6-2.69 6-6 6" stroke="#123f6d" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    name: "Acronis",
    svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M12 2L22 20H2L12 2Z" fill="none" stroke="#ef4923" strokeWidth="2"/><path d="M12 8L17 18H7L12 8Z" fill="#ef4923"/></svg>,
  },
  {
    name: "Citrix",
    svg: <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="none" stroke="#452170" strokeWidth="2"/><path d="M8 9h8M8 12h8M8 15h8" stroke="#452170" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
];

const DOUBLED = [...LOGOS, ...LOGOS];

export function Hero() {
  return (
    <section
      id="accueil"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/image-fond-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "#0a0f1e",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        paddingTop: "92px",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10,15,30,0.5)",
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
          background: "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Strip logos pleine largeur ── */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          background: "rgba(10,15,30,0.85)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(8px)",
          overflow: "hidden",
          marginTop: "56px",
          marginBottom: "56px",
          paddingTop: "12px",
          paddingBottom: "12px",
          flexShrink: 0,
        }}
      >
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: "80px",
          background: "linear-gradient(to right, #0a0f1e, transparent)",
          zIndex: 2, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "80px",
          background: "linear-gradient(to left, #0a0f1e, transparent)",
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
                gap: "10px",
                whiteSpace: "nowrap",
                opacity: 0.75,
                flexShrink: 0,
              }}
            >
              {logo.svg}
              <span style={{ color: "#ffffff", fontSize: "16px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase" }}>
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
            background: "rgba(0,212,255,0.12)",
            border: "1px solid rgba(0,212,255,0.3)",
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
              background: "#00d4ff",
              animation: "pulse-dot 1.5s infinite",
            }}
          />
          <span
            style={{
              color: "#00d4ff",
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
            borderTop: "1px solid rgba(0,212,255,0.2)",
            borderBottom: "1px solid rgba(0,212,255,0.2)",
            padding: "12px 0",
            width: "25%",
          }}
        >
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "60px",
            background: "linear-gradient(to right, rgba(10,15,30,0.9), transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", right: 0, top: 0, bottom: 0, width: "60px",
            background: "linear-gradient(to left, rgba(10,15,30,0.9), transparent)",
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
                  color: "#00d4ff",
                  fontSize: "15px",
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
          <span style={{ color: "#00d4ff" }}>à Votre Service</span>
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
              background: "#00d4ff",
              color: "#0a0f1e",
              textDecoration: "none",
              padding: "16px 32px",
              fontSize: "14px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontWeight: 700,
              borderRadius: "3px",
              transition: "all 0.2s",
              display: "inline-block",
              boxShadow: "0 0 30px rgba(0,212,255,0.4)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#0099cc";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 0 40px rgba(0,212,255,0.6)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "#00d4ff";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 0 30px rgba(0,212,255,0.4)";
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
              el.style.borderColor = "#00d4ff";
              el.style.color = "#00d4ff";
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
