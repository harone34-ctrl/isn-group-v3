import { useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function MentionsLegales() {
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
          — Informations légales —
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
          Mentions <span style={{ color: "#00d4ff" }}>Légales</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
          Dernière mise à jour : 1er juin 2026
        </p>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "72px 24px 96px",
        }}
      >
        {/* Section 1 */}
        <LegalSection title="1. Éditeur du site">
          <p>Le présent site web est édité par :</p>
          <InfoBlock
            lines={[
              ["Raison sociale", "ISN Group — Innovative Systems & Networks"],
              ["Forme juridique", "Micro-entreprise"],
              ["SIRET", "En cours d'immatriculation"],
              ["Adresse", "Gironde (33), France"],
              ["Téléphone", "07 67 80 42 47"],
              ["Email", "contact@isngroup.fr"],
              ["Directeur de publication", "ISN Group"],
            ]}
          />
        </LegalSection>

        {/* Section 2 */}
        <LegalSection title="2. Hébergement">
          <p>Le site est hébergé par :</p>
          <InfoBlock
            lines={[
              ["Hébergeur", "Vercel Inc."],
              ["Adresse", "340 Pine Street, Suite 701, San Francisco, CA 94104, USA"],
              ["Site web", "https://vercel.com"],
            ]}
          />
        </LegalSection>

        {/* Section 3 */}
        <LegalSection title="3. Propriété intellectuelle">
          <p>
            L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes,
            charte graphique) est la propriété exclusive d'ISN Group, sauf mention contraire.
            Toute reproduction, représentation, modification, publication ou transmission,
            totale ou partielle, du contenu de ce site, par quelque procédé que ce soit,
            est interdite sans l'autorisation préalable et écrite d'ISN Group.
          </p>
          <p>
            Toute exploitation non autorisée du site ou de son contenu pourra faire l'objet
            de poursuites judiciaires conformément aux articles L.335-2 et suivants du Code
            de la Propriété Intellectuelle.
          </p>
        </LegalSection>

        {/* Section 4 */}
        <LegalSection title="4. Limitation de responsabilité">
          <p>
            ISN Group s'efforce de maintenir les informations publiées sur ce site aussi
            exactes et à jour que possible, sans pouvoir en garantir l'exhaustivité ou
            l'exactitude à tout moment. L'utilisateur reconnaît utiliser ces informations
            sous sa responsabilité exclusive.
          </p>
          <p>
            ISN Group se réserve le droit de modifier le contenu du site à tout moment,
            sans préavis. ISN Group ne saurait être tenu responsable des dommages directs
            ou indirects résultant de l'utilisation de ce site ou de l'impossibilité d'y
            accéder.
          </p>
          <p>
            Des liens hypertextes peuvent pointer vers des sites tiers. ISN Group n'exerce
            aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
          </p>
        </LegalSection>

        {/* Section 5 */}
        <LegalSection title="5. Données personnelles">
          <p>
            Les informations recueillies via le formulaire de contact sont destinées
            uniquement à ISN Group, dans le but de traiter votre demande. Conformément au
            Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la
            loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification,
            d'effacement, de portabilité et d'opposition concernant vos données personnelles.
          </p>
          <p>
            Pour exercer ces droits ou pour toute question relative au traitement de vos
            données, contactez&nbsp;:{" "}
            <a
              href="mailto:contact@isngroup.fr"
              style={{ color: "#00d4ff", textDecoration: "none" }}
            >
              contact@isngroup.fr
            </a>
          </p>
          <p>
            Pour plus d'informations, consultez notre{" "}
            <a
              href="/politique-confidentialite"
              style={{ color: "#00d4ff", textDecoration: "none" }}
            >
              Politique de confidentialité
            </a>
            .
          </p>
        </LegalSection>

        {/* Section 6 */}
        <LegalSection title="6. Cookies">
          <p>
            Ce site peut utiliser des cookies techniques strictement nécessaires au
            fonctionnement du service. Aucun cookie à des fins publicitaires, de profilage
            ou de suivi comportemental n'est déposé sans votre consentement.
          </p>
          <p>
            Vous pouvez configurer votre navigateur pour refuser les cookies. Cette
            configuration peut affecter certaines fonctionnalités du site.
          </p>
        </LegalSection>

        {/* Section 7 */}
        <LegalSection title="7. Droit applicable et juridiction" last>
          <p>
            Le présent site est soumis au droit français. En cas de litige et après tentative
            de résolution amiable, les tribunaux compétents seront ceux du ressort de la Cour
            d'Appel de Bordeaux (Gironde).
          </p>
        </LegalSection>
      </div>

      <Footer />
    </div>
  );
}

function LegalSection({
  title,
  children,
  last = false,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      style={{
        marginBottom: last ? 0 : "52px",
        paddingBottom: last ? 0 : "52px",
        borderBottom: last ? "none" : "1px solid rgba(0,212,255,0.08)",
      }}
    >
      <h2
        style={{
          color: "#00d4ff",
          fontSize: "17px",
          fontWeight: 700,
          letterSpacing: "1px",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          color: "rgba(255,255,255,0.72)",
          fontSize: "15px",
          lineHeight: 1.85,
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function InfoBlock({ lines }: { lines: [string, string][] }) {
  return (
    <div
      style={{
        background: "#0d1526",
        border: "1px solid rgba(0,212,255,0.12)",
        borderRadius: "6px",
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {lines.map(([label, value]) => (
        <div key={label} style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <span
            style={{
              color: "#00d4ff",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.5px",
              minWidth: "180px",
              flexShrink: 0,
            }}
          >
            {label}
          </span>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>{value}</span>
        </div>
      ))}
    </div>
  );
}
