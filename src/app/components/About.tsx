import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

const HIGHLIGHTS = [
  "20 années d'expérience terrain en entreprise",
  "Certifié TAI (Technicien en Assistance Informatique)",
  "Intervention sur site ou à distance sous 4h",
  "Zone Gironde et départements limitrophes",
  "Approche personnalisée selon vos besoins",
];

export function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="apropos"
      style={{
        backgroundImage: "url('/imgfd3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#0d1526",
        padding: "100px 24px",
        borderTop: "1px solid rgba(0,212,255,0.1)",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(5, 8, 20, 0.70)", pointerEvents: "none" }} />
      <div
        ref={ref}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Text column */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.7s cubic-bezier(0.4,0,0.2,1)",
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
            — À propos —
          </div>

          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(26px, 3.5vw, 38px)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "2px",
              lineHeight: 1.2,
              marginBottom: "24px",
            }}
          >
            Un technicien{" "}
            <span style={{ color: "#00d4ff" }}>passionné</span>,
            <br />à votre service
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "15px",
              lineHeight: 1.8,
              fontWeight: 300,
              marginBottom: "32px",
            }}
          >
            Fort de 20 années d'expérience dans le domaine de l'informatique professionnelle,
            ISN Group (Innovative Systems & Networks) propose des solutions IT sur-mesure
            pour les entreprises et professionnels. De la simple intervention de dépannage
            à la mise en place d'infrastructures complexes, notre approche terrain garantit
            des résultats concrets et durables.
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {HIGHLIGHTS.map((point) => (
              <li
                key={point}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "14px",
                  lineHeight: 1.5,
                }}
              >
                <CheckCircle size={16} color="#00d4ff" style={{ marginTop: "2px", flexShrink: 0 }} />
                {point}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            style={{
              background: "#00d4ff",
              color: "#fff",
              textDecoration: "none",
              padding: "14px 28px",
              fontSize: "13px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontWeight: 700,
              borderRadius: "3px",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#0099cc";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#00d4ff";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Prendre contact
          </a>
        </div>

      </div>
    </section>
  );
}
