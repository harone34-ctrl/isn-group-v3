import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Marc Dupont",
    company: "Cabinet Dupont Conseil",
    role: "Directeur Général",
    text: "ISN Group a complètement refondu notre infrastructure réseau. Intervention rapide, travail soigné et explications claires. Nous avons gagné en fiabilité et en sécurité. Je recommande vivement.",
    stars: 5,
    initials: "MD",
  },
  {
    name: "Sophie Laurent",
    company: "Laurent & Associés",
    role: "Responsable Informatique",
    text: "Prestataire de confiance depuis 3 ans. Toujours disponible en cas d'urgence, compétent sur tous les sujets IT. La mise en place du monitoring MSP a vraiment changé notre quotidien.",
    stars: 5,
    initials: "SL",
  },
  {
    name: "Thomas Moreau",
    company: "Moreau Industries",
    role: "DSI",
    text: "Excellente prestation pour notre audit de cybersécurité. Rapport détaillé, recommandations concrètes et accompagnement dans la mise en œuvre. Une expertise rare et appréciable.",
    stars: 5,
    initials: "TM",
  },
];

export function Testimonials() {
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
      style={{
        background: "#111d35",
        padding: "100px 24px",
        borderTop: "1px solid rgba(0,212,255,0.1)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
            — Avis clients —
          </div>
          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(26px, 3.5vw, 38px)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "2px",
              margin: 0,
            }}
          >
            Ils nous font <span style={{ color: "#00d4ff" }}>confiance</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              style={{
                background: "#0a0f1e",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "6px",
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 100}ms`,
                position: "relative",
              }}
            >
              {/* Quote icon */}
              <div
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                  color: "rgba(0,212,255,0.12)",
                }}
              >
                <Quote size={40} />
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "4px" }}>
                {[...Array(t.stars)].map((_, si) => (
                  <Star key={si} size={14} fill="#00d4ff" color="#00d4ff" />
                ))}
              </div>

              {/* Text */}
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  fontWeight: 300,
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "auto" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: "rgba(0,212,255,0.15)",
                    border: "1px solid rgba(0,212,255,0.3)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#00d4ff",
                    fontWeight: 700,
                    fontSize: "14px",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 600, fontSize: "14px" }}>{t.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", letterSpacing: "0.5px" }}>
                    {t.role} — {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
