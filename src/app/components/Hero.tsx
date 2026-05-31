import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const TYPING_WORDS = ["Je répare", "Je configure", "Je sécurise", "Je déploie", "Je protège"];

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
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "erasing">("typing");

  useEffect(() => {
    const word = TYPING_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 1800);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("erasing"), 400);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
      } else {
        setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, wordIndex]);

  return (
    <section
      id="accueil"
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "120px",
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

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "900px",
          width: "100%",
          padding: "0 24px",
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
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#e63946", animation: "pulse-dot 1.5s infinite" }} />
          <span style={{ color: "#e63946", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600 }}>
            Support Informatique Professionnel
          </span>
        </div>

        {/* Typing animation */}
        <div
          style={{
            height: "52px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              color: "#e63946",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            {displayed}
            <span style={{ borderRight: "3px solid #e63946", marginLeft: "2px", animation: "blink 0.8s step-end infinite" }} />
          </span>
        </div>

        {/* Logo strip — défilant */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            marginBottom: "28px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            padding: "12px 0",
          }}
        >
          {/* Fade left */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "80px",
            background: "linear-gradient(to right, rgba(10,10,10,0.9), transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />
          {/* Fade right */}
          <div style={{
            position: "absolute", right: 0, top: 0, bottom: 0, width: "80px",
            background: "linear-gradient(to left, rgba(10,10,10,0.9), transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />

          <div style={{ display: "flex", gap: "36px", animation: "hero-marquee 28s linear infinite", width: "max-content" }}>
            {DOUBLED.map((logo, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  whiteSpace: "nowrap",
                  opacity: 0.6,
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

        {/* Main title */}
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

        {/* Subtitle */}
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

        {/* CTA buttons */}
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
              const el = e.target as HTMLAnchorElement;
              el.style.background = "#c0392b";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 0 40px rgba(230,57,70,0.6)";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLAnchorElement;
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
              const el = e.target as HTMLAnchorElement;
              el.style.borderColor = "#e63946";
              el.style.color = "#e63946";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLAnchorElement;
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
          bottom: "32px",
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
          animation: "bounce-arrow 2s infinite",
        }}
      >
        <span>Défiler</span>
        <ChevronDown size={16} />
      </a>

      <style>{`
        @keyframes hero-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        @keyframes bounce-arrow {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
