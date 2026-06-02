import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Shield, Leaf, Cpu, Brain, type LucideIcon } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

interface Section {
  Icon: LucideIcon;
  label: string;
  title: string;
  content: string;
  points: string[];
}

const SECTIONS: Section[] = [
  {
    Icon: Shield,
    label: "Philosophie",
    title: "Maintenance préventive",
    content:
      "Chez ISN Group, nous croyons qu'une panne évitée vaut mieux que dix pannes réparées. La maintenance préventive consiste à anticiper les défaillances avant qu'elles ne surviennent : vérifications régulières du matériel, mises à jour planifiées, nettoyage thermique, tests de batteries et d'alimentations. Notre approche réduit les interruptions d'activité de 70 % par rapport à une maintenance purement corrective.",
    points: [
      "Audit matériel et logiciel annuel inclus",
      "Remplacement proactif des composants à risque",
      "Monitoring réseau en temps réel",
      "Rapports d'état mensuels détaillés",
    ],
  },
  {
    Icon: Leaf,
    label: "Green IT",
    title: "Green IT & Économie circulaire",
    content:
      "L'informatique responsable n'est pas une option, c'est une nécessité. ISN Group s'engage dans une démarche Green IT concrète : prolongation du cycle de vie du matériel, réemploi des composants fonctionnels, diagnostics systématiques avant remplacement, et filière DEEE certifiée pour les équipements hors service. Un PC prolongé de 3 ans, c'est en moyenne 300 kg de CO₂ évités.",
    points: [
      "Diagnostic complet avant tout remplacement",
      "Remise en état plutôt que mise au rebut",
      "Filière DEEE certifiée pour les équipements hors service",
      "Optimisation énergétique des infrastructures en place",
    ],
  },
  {
    Icon: Cpu,
    label: "Contexte marché",
    title: "Pénurie de composants 2024–2026",
    content:
      "Le marché des composants électroniques traverse une crise structurelle. La mémoire DRAM est contrôlée à 92 % par trois acteurs seulement — Samsung (43 %), SK Hynix (27 %) et Micron (22 %) —, un oligopole qui amplifie les effets de pénurie. Les tensions sur les puces NAND Flash, la guerre commerciale sino-américaine sur les semi-conducteurs (TSMC, NVIDIA) et les restrictions à l'export se traduisent par des délais d'approvisionnement de 16 à 28 semaines et des hausses de prix de 30 à 80 %. Conserver son parc existant est devenu une décision économique stratégique.",
    points: [
      "Suivi des cours et disponibilités composants en temps réel",
      "Stock tampon de pièces critiques pour les clients sous contrat",
      "Identification d'alternatives équivalentes en amont",
      "Conseil achat pour contourner les tensions d'approvisionnement",
    ],
  },
  {
    Icon: Brain,
    label: "IA Locale",
    title: "Solutions IA locales on-premise",
    content:
      "L'intelligence artificielle ne doit pas nécessairement passer par le cloud. Les solutions IA locales (Ollama, LM Studio, modèles Llama 3, Mistral 7B, Phi-3) permettent de déployer des LLM directement sur votre infrastructure, sans envoyer vos données vers des serveurs tiers. Pour les PME traitant des données sensibles — juridique, RH, finance, santé — c'est une réponse concrète aux exigences RGPD et à la souveraineté numérique. ISN Group conçoit et déploie ces environnements sur du matériel existant ou reconditionné.",
    points: [
      "Déploiement Ollama / LM Studio sur serveur local",
      "Sélection et configuration du modèle selon votre cas d'usage",
      "Intégration avec vos outils métier existants",
      "100 % des données restent sur site — conformité RGPD garantie",
    ],
  },
];

function SectionRow({
  section,
  isLast,
}: {
  section: Section;
  isLast: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "48px",
        alignItems: "start",
        marginBottom: !isLast ? "80px" : 0,
        paddingBottom: !isLast ? "80px" : 0,
        borderBottom: !isLast ? "1px solid rgba(0,212,255,0.1)" : "none",
      }}
    >
      {/* Text column */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              background: hovered ? "rgba(246,166,35,0.08)" : "rgba(0,212,255,0.08)",
              border: hovered
                ? "1px solid rgba(246,166,35,0.4)"
                : "1px solid rgba(0,212,255,0.25)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            <section.Icon size={28} color={hovered ? "#f6a623" : "#00d4ff"} />
          </div>
          <div
            style={{
              color: "#00d4ff",
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {section.label}
          </div>
        </div>

        <h2
          style={{
            color: "#ffffff",
            fontSize: "clamp(20px, 2.5vw, 28px)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            lineHeight: 1.25,
            marginBottom: "20px",
          }}
        >
          {section.title}
        </h2>

        <p
          style={{
            color: "#ffffff",
            fontSize: "15px",
            lineHeight: 1.8,
            fontWeight: 400,
            textShadow: "0 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          {section.content}
        </p>
      </div>

      {/* Key points card */}
      <div
        style={{
          background: "#0d1526",
          border: hovered ? "1px solid #f6a623" : "1px solid rgba(0,212,255,0.15)",
          borderRadius: "8px",
          padding: "32px",
          transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: hovered
            ? "0 0 28px rgba(246,166,35,0.18), inset 0 0 0 1px rgba(246,166,35,0.1)"
            : "none",
        }}
      >
        <div
          style={{
            color: "#00d4ff",
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "20px",
            paddingBottom: "12px",
            borderBottom: "1px solid rgba(0,212,255,0.15)",
          }}
        >
          Points clés
        </div>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {section.points.map((point) => (
            <li
              key={point}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                color: "#ffffff",
                fontSize: "15px",
                lineHeight: 1.5,
              }}
            >
              <CheckCircle
                size={15}
                color="#00d4ff"
                style={{ marginTop: "2px", flexShrink: 0 }}
              />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function NotreApproche() {
  const SEO_TITLE = "Notre Approche IT — Maintenance Préventive & IA Locale | ISN Group";
  const SEO_DESC =
    "ISN Group adopte une approche IT responsable : maintenance préventive, Green IT, gestion de la pénurie de composants 2024-2026 et solutions IA locales on-premise en Gironde.";
  const SEO_URL = "https://isn-group-v3.vercel.app/notre-approche";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: "#0a0f1e", minHeight: "100vh" }}>
      <Helmet>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESC} />
        <link rel="canonical" href={SEO_URL} />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESC} />
        <meta property="og:url" content={SEO_URL} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />

      {/* Page Banner */}
      <div
        style={{
          paddingTop: "130px",
          paddingBottom: "80px",
          paddingLeft: "24px",
          paddingRight: "24px",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, rgba(5,8,20,0.82) 0%, rgba(5,8,20,0.78) 100%), url('/imgfd4.jpg') center/cover no-repeat",
          backgroundColor: "#0d1526",
          borderBottom: "1px solid rgba(0,212,255,0.15)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
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
          — ISN Group —
        </div>
        <h1
          style={{
            color: "#ffffff",
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "2px",
            lineHeight: 1.15,
            marginBottom: "20px",
          }}
        >
          Notre <span style={{ color: "#00d4ff" }}>Approche</span>
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "16px",
            lineHeight: 1.7,
            maxWidth: "620px",
            margin: "0 auto",
          }}
        >
          Maintenance proactive, Green IT, souveraineté numérique — les principes qui guident chaque intervention ISN Group.
        </p>
      </div>

      {/* Content Sections */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
        {SECTIONS.map((section, i) => (
          <SectionRow
            key={section.title}
            section={section}
            isLast={i === SECTIONS.length - 1}
          />
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          background: "#0d1526",
          borderTop: "1px solid rgba(0,212,255,0.15)",
          borderBottom: "1px solid rgba(0,212,255,0.15)",
          padding: "72px 24px",
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
          — Passons à l'action —
        </div>
        <h2
          style={{
            color: "#ffffff",
            fontSize: "clamp(20px, 3vw, 30px)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "16px",
          }}
        >
          Prêt pour une IT{" "}
          <span style={{ color: "#00d4ff" }}>responsable</span> ?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "15px",
            marginBottom: "36px",
          }}
        >
          Contactez-nous pour un audit gratuit de votre parc informatique.
        </p>
        <a
          href="/#contact"
          style={{
            background: "#00d4ff",
            color: "#0a0f1e",
            textDecoration: "none",
            padding: "14px 32px",
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
          Demander un audit gratuit
        </a>
      </div>

      <Footer />
    </div>
  );
}
