import { useEffect, useRef, useState } from "react";
import {
  Wrench,
  Network,
  MonitorCog,
  ShieldCheck,
  Code2,
  Brain,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: <Wrench size={28} />,
    title: "Support & Dépannage",
    description:
      "Maintenance préventive, dépannage sur site ou à distance, gestion de parc informatique. Intervention rapide pour minimiser vos interruptions d'activité.",
  },
  {
    icon: <Network size={28} />,
    title: "Architecture Réseau",
    description:
      "Installation de switchs, routeurs, VLANs, WiFi entreprise, câblage structuré. Conception et déploiement d'infrastructures réseau robustes.",
  },
  {
    icon: <MonitorCog size={28} />,
    title: "Infogérance MSP",
    description:
      "Supervision, monitoring 24/7, gestion complète de l'infrastructure IT. Votre DSI externalisé pour plus de sérénité et de performance.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Cybersécurité",
    description:
      "Audit sécurité, antivirus entreprise, pare-feu, protection des données. Sécurisez votre système d'information contre les menaces actuelles.",
  },
  {
    icon: <Code2 size={28} />,
    title: "Conception Web",
    description:
      "Création de sites React/Vite, déploiement CI/CD, SEO technique, audit sécurité. Des solutions web performantes et optimisées.",
  },
  {
    icon: <Brain size={28} />,
    title: "Solutions IA Locales",
    description:
      "Déploiement d'agents IA on-premise. Données privées, sans cloud. Exploitez la puissance de l'IA en gardant le contrôle total de vos données.",
  },
];

function ServiceCard({ service, index }: { service: (typeof SERVICES)[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#0d1526",
        border: hovered ? "1px solid #00d4ff" : "1px solid rgba(255,255,255,0.06)",
        borderRadius: "6px",
        padding: "36px 28px",
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        cursor: "default",
        boxShadow: hovered ? "0 0 28px rgba(0,212,255,0.18), inset 0 0 0 1px rgba(0,212,255,0.1)" : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${index * 80}ms`,
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 56,
          height: 56,
          background: hovered ? "rgba(0,212,255,0.15)" : "rgba(0,212,255,0.08)",
          border: "1px solid rgba(0,212,255,0.25)",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#00d4ff",
          transition: "all 0.3s",
        }}
      >
        {service.icon}
      </div>

      <div>
        <h3
          style={{
            color: "#ffffff",
            fontSize: "17px",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "14px",
            lineHeight: 1.7,
            fontWeight: 300,
            margin: 0,
          }}
        >
          {service.description}
        </p>
      </div>

      <a
        href="#contact"
        style={{
          color: "#00d4ff",
          textDecoration: "none",
          fontSize: "13px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginTop: "auto",
          transition: "gap 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.gap = "10px";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.gap = "6px";
        }}
      >
        En savoir plus
        <ArrowRight size={14} />
      </a>
    </div>
  );
}

export function Services() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.3 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      style={{
        backgroundImage: "url('/imgfd2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#111d35",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0, 20, 50, 0.70)", pointerEvents: "none" }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <div
          ref={titleRef}
          style={{
            textAlign: "center",
            marginBottom: "64px",
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)",
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
            — Nos expertises —
          </div>
          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "2px",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Ce que nous faisons,{" "}
            <span style={{ color: "#00d4ff" }}>nous le faisons bien</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
