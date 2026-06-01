import { useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function CGV() {
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
          — Conditions contractuelles —
        </div>
        <h1
          style={{
            color: "#ffffff",
            fontSize: "clamp(24px, 5vw, 48px)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "16px",
          }}
        >
          Conditions Générales{" "}
          <span style={{ color: "#00d4ff" }}>de Vente</span>
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
        <CGVSection title="1. Objet">
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations
            contractuelles entre ISN Group (ci-après « le Prestataire »), micro-entreprise
            basée en Gironde (33), et toute personne physique ou morale (ci-après « le
            Client ») souhaitant bénéficier des prestations de services informatiques
            proposées.
          </p>
          <p>
            Toute commande de prestations implique l'acceptation pleine et entière des
            présentes CGV. ISN Group se réserve le droit de modifier les présentes CGV à
            tout moment ; les conditions applicables sont celles en vigueur à la date de
            la commande.
          </p>
        </CGVSection>

        <CGVSection title="2. Prestations proposées">
          <p>ISN Group propose notamment les prestations suivantes :</p>
          <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Support technique et dépannage informatique (sur site ou à distance)",
              "Conception et administration d'infrastructures réseau",
              "Infogérance et contrats de maintenance (MSP)",
              "Audit et mise en conformité cybersécurité",
              "Création et maintenance de sites web",
              "Déploiement de solutions IA locales on-premise",
            ].map((item) => (
              <li key={item} style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px" }}>
                {item}
              </li>
            ))}
          </ul>
          <p>
            Cette liste est non exhaustive. Toute prestation spécifique fait l'objet d'un
            devis détaillé préalable.
          </p>
        </CGVSection>

        <CGVSection title="3. Devis et commande">
          <p>
            Toute demande de prestation donne lieu à l'établissement d'un devis gratuit,
            valable 30 jours à compter de sa date d'émission. Le devis précise la nature
            des prestations, le délai d'exécution et le montant total TTC (ISN Group étant
            micro-entreprise non assujettie à la TVA, le prix est indiqué hors TVA avec la
            mention « TVA non applicable, art. 293B du CGI »).
          </p>
          <p>
            La commande est ferme et définitive dès acceptation du devis par le Client,
            par signature manuscrite ou par retour de courriel avec accord exprès.
          </p>
        </CGVSection>

        <CGVSection title="4. Tarifs et conditions de paiement">
          <p>
            Les tarifs sont exprimés en euros hors taxes. En tant que micro-entreprise
            bénéficiant de la franchise en base de TVA (art. 293B du CGI), ISN Group ne
            facture pas de TVA.
          </p>
          <p>
            Sauf stipulation contraire dans le devis, les conditions de paiement sont les
            suivantes :
          </p>
          <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Prestations ponctuelles : paiement à réception de facture, délai de règlement 30 jours",
              "Contrats de maintenance mensuels : prélèvement ou virement en début de mois",
              "Projets supérieurs à 500 € : acompte de 30 % à la commande, solde à la livraison",
            ].map((item) => (
              <li key={item} style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px" }}>
                {item}
              </li>
            ))}
          </ul>
          <p>
            En cas de retard de paiement, des pénalités de retard seront appliquées au
            taux légal en vigueur, ainsi qu'une indemnité forfaitaire de recouvrement de
            40 € conformément à l'article L.441-10 du Code de Commerce.
          </p>
        </CGVSection>

        <CGVSection title="5. Délais d'intervention et exécution">
          <p>
            ISN Group s'engage à intervenir dans les délais convenus dans le devis. Pour
            les interventions urgentes (panne critique bloquante), ISN Group s'efforce
            d'intervenir dans un délai de 4 heures ouvrées sur le secteur de la Gironde
            et des départements limitrophes.
          </p>
          <p>
            Les délais d'exécution sont donnés à titre indicatif. Tout retard dû à des
            causes extérieures au contrôle d'ISN Group (pénurie de composants, délais
            fournisseur, cas de force majeure) ne pourra engager la responsabilité du
            Prestataire. Le Client en sera informé dans les meilleurs délais.
          </p>
        </CGVSection>

        <CGVSection title="6. Obligation du client">
          <p>
            Le Client s'engage à fournir à ISN Group toutes les informations, accès et
            ressources nécessaires à la bonne exécution des prestations (accès aux locaux,
            identifiants systèmes, contacts internes). Le Client s'assure d'avoir effectué
            une sauvegarde de ses données avant toute intervention. ISN Group ne saurait
            être tenu responsable d'une perte de données survenue en l'absence de sauvegarde
            préalable.
          </p>
        </CGVSection>

        <CGVSection title="7. Responsabilité">
          <p>
            ISN Group est soumis à une obligation de moyens. La responsabilité du Prestataire
            ne pourra être engagée qu'en cas de faute prouvée dans l'exécution de la prestation.
            En tout état de cause, la responsabilité d'ISN Group est plafonnée au montant
            total des sommes versées par le Client au titre de la prestation concernée.
          </p>
          <p>
            ISN Group est couvert par une assurance responsabilité civile professionnelle.
          </p>
        </CGVSection>

        <CGVSection title="8. Propriété intellectuelle">
          <p>
            Les livrables produits par ISN Group (scripts, configurations, développements
            spécifiques) restent la propriété exclusive d'ISN Group jusqu'au paiement
            intégral des sommes dues. À compter du règlement complet, le Client bénéficie
            d'une licence d'utilisation non exclusive sur ces livrables.
          </p>
          <p>
            ISN Group se réserve le droit de mentionner le Client parmi ses références
            commerciales, sauf opposition expresse du Client.
          </p>
        </CGVSection>

        <CGVSection title="9. Résiliation">
          <p>
            Les contrats de maintenance peuvent être résiliés par l'une ou l'autre des
            parties moyennant un préavis d'un mois par courrier recommandé avec accusé
            de réception. En cas de manquement grave par l'une des parties à ses
            obligations, l'autre partie peut résilier le contrat de plein droit, sans
            préavis, après mise en demeure restée sans effet pendant 15 jours.
          </p>
        </CGVSection>

        <CGVSection title="10. Confidentialité" last>
          <p>
            ISN Group s'engage à traiter confidentiellement toutes les informations
            auxquelles il aurait accès dans le cadre de ses interventions. Cette obligation
            de confidentialité perdure pendant une durée de 3 ans après la fin de la
            relation contractuelle.
          </p>
          <p>
            En cas de litige et après tentative de règlement amiable, les tribunaux du
            ressort de la Cour d'Appel de Bordeaux seront seuls compétents. Le droit
            français est seul applicable.
          </p>
        </CGVSection>
      </div>

      <Footer />
    </div>
  );
}

function CGVSection({
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
