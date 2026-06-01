import { useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function PolitiqueConfidentialite() {
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
          — RGPD & vie privée —
        </div>
        <h1
          style={{
            color: "#ffffff",
            fontSize: "clamp(22px, 4.5vw, 44px)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "16px",
          }}
        >
          Politique de{" "}
          <span style={{ color: "#00d4ff" }}>Confidentialité</span>
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
        <PCSection title="1. Introduction">
          <p>
            ISN Group — Innovative Systems & Networks, micro-entreprise basée en Gironde (33),
            s'engage à protéger la vie privée des visiteurs et clients de son site web. La
            présente politique de confidentialité décrit les données personnelles collectées,
            les finalités de leur traitement, leur durée de conservation et les droits dont
            vous disposez, conformément au Règlement Général sur la Protection des Données
            (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés modifiée.
          </p>
        </PCSection>

        <PCSection title="2. Responsable du traitement">
          <InfoBlock
            lines={[
              ["Responsable", "ISN Group — Innovative Systems & Networks"],
              ["SIRET", "En cours d'immatriculation"],
              ["Adresse", "Gironde (33), France"],
              ["Contact", "contact@isngroup.fr"],
              ["Téléphone", "07 67 80 42 47"],
            ]}
          />
        </PCSection>

        <PCSection title="3. Données collectées">
          <p>
            ISN Group collecte uniquement les données strictement nécessaires à la fourniture
            de ses services. Les données collectées dépendent de la nature de votre interaction :
          </p>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "14px",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    color: "#00d4ff",
                    textAlign: "left",
                    padding: "10px 16px",
                    background: "rgba(0,212,255,0.08)",
                    borderBottom: "1px solid rgba(0,212,255,0.2)",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  Source
                </th>
                <th
                  style={{
                    color: "#00d4ff",
                    textAlign: "left",
                    padding: "10px 16px",
                    background: "rgba(0,212,255,0.08)",
                    borderBottom: "1px solid rgba(0,212,255,0.2)",
                    fontWeight: 600,
                  }}
                >
                  Données collectées
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Formulaire de contact",
                  "Prénom, nom, adresse e-mail, numéro de téléphone (optionnel), message",
                ],
                ["Contrat de prestation", "Coordonnées complètes, données de facturation"],
                [
                  "Navigation (cookies techniques)",
                  "Données de session (aucun cookie publicitaire ou de profilage)",
                ],
              ].map(([src, data], i) => (
                <tr key={src}>
                  <td
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      padding: "12px 16px",
                      borderBottom:
                        i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                      verticalAlign: "top",
                      fontWeight: 500,
                    }}
                  >
                    {src}
                  </td>
                  <td
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      padding: "12px 16px",
                      borderBottom:
                        i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                      verticalAlign: "top",
                    }}
                  >
                    {data}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </PCSection>

        <PCSection title="4. Finalités et base légale du traitement">
          <p>Vos données sont traitées pour les finalités suivantes :</p>
          <ul
            style={{
              margin: 0,
              paddingLeft: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              [
                "Gestion de votre demande de contact",
                "base légale : exécution de mesures précontractuelles (art. 6.1.b RGPD)",
              ],
              [
                "Exécution des prestations contractuelles",
                "base légale : exécution du contrat (art. 6.1.b RGPD)",
              ],
              [
                "Obligations comptables et fiscales",
                "base légale : obligation légale (art. 6.1.c RGPD)",
              ],
              [
                "Amélioration des services et suivi qualité",
                "base légale : intérêt légitime d'ISN Group (art. 6.1.f RGPD)",
              ],
            ].map(([finalite, base]) => (
              <li key={finalite} style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px" }}>
                <strong style={{ color: "#ffffff", fontWeight: 600 }}>{finalite}</strong>{" "}
                — {base}.
              </li>
            ))}
          </ul>
        </PCSection>

        <PCSection title="5. Durée de conservation">
          <p>
            Les données à caractère personnel ne sont conservées que pour la durée
            nécessaire aux finalités pour lesquelles elles ont été collectées :
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {[
              "Données de contact (prospects) : 3 ans à compter du dernier contact",
              "Données clients et facturation : 10 ans (obligation légale comptable)",
              "Données de navigation (cookies techniques) : durée de la session",
            ].map((item) => (
              <li key={item} style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px" }}>
                {item}
              </li>
            ))}
          </ul>
          <p>
            À l'expiration de ces délais, les données sont supprimées ou anonymisées de
            manière irréversible.
          </p>
        </PCSection>

        <PCSection title="6. Destinataires des données">
          <p>
            Vos données personnelles ne sont pas vendues, louées ou cédées à des tiers.
            Elles peuvent être transmises aux sous-traitants techniques d'ISN Group
            strictement nécessaires à l'exécution des prestations (hébergeur Vercel, outil
            de messagerie) dans le cadre de contrats de sous-traitance conformes au RGPD.
            Ces destinataires n'utilisent vos données qu'aux fins convenues.
          </p>
        </PCSection>

        <PCSection title="7. Vos droits">
          <p>
            Conformément au RGPD, vous disposez des droits suivants sur vos données
            personnelles :
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              [
                "Droit d'accès",
                "obtenir confirmation que vos données sont traitées et en recevoir une copie",
              ],
              ["Droit de rectification", "corriger des données inexactes ou incomplètes"],
              [
                "Droit à l'effacement",
                "demander la suppression de vos données dans les cas prévus par le RGPD",
              ],
              [
                "Droit à la limitation",
                "demander la suspension temporaire du traitement de vos données",
              ],
              [
                "Droit à la portabilité",
                "recevoir vos données dans un format structuré et lisible par machine",
              ],
              [
                "Droit d'opposition",
                "vous opposer au traitement fondé sur l'intérêt légitime d'ISN Group",
              ],
            ].map(([droit, desc]) => (
              <li key={droit} style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px" }}>
                <strong style={{ color: "#ffffff", fontWeight: 600 }}>{droit}</strong>{" "}
                : {desc}.
              </li>
            ))}
          </ul>
          <p>
            Pour exercer vos droits, envoyez votre demande par e-mail à{" "}
            <a
              href="mailto:contact@isngroup.fr"
              style={{ color: "#00d4ff", textDecoration: "none" }}
            >
              contact@isngroup.fr
            </a>{" "}
            en précisant votre identité. ISN Group s'engage à répondre dans un délai
            d'un mois à compter de la réception de votre demande.
          </p>
          <p>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire
            une réclamation auprès de la{" "}
            <strong style={{ color: "#ffffff" }}>CNIL</strong> — Commission Nationale de
            l'Informatique et des Libertés (www.cnil.fr).
          </p>
        </PCSection>

        <PCSection title="8. Sécurité" last>
          <p>
            ISN Group met en œuvre les mesures techniques et organisationnelles appropriées
            pour protéger vos données contre tout accès non autorisé, toute perte, altération
            ou divulgation. Ces mesures incluent notamment le chiffrement des communications
            (HTTPS/TLS), la restriction des accès aux seules personnes habilitées et la
            sécurisation des systèmes d'information.
          </p>
          <p>
            En cas de violation de données personnelles susceptible d'engendrer un risque
            élevé pour vos droits et libertés, vous en serez informé dans les meilleurs
            délais conformément à l'article 34 du RGPD.
          </p>
        </PCSection>
      </div>

      <Footer />
    </div>
  );
}

function PCSection({
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
              minWidth: "160px",
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
