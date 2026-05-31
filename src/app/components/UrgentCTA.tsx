import { Zap, ArrowRight } from "lucide-react";

export function UrgentCTA() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #c0392b 0%, #e63946 50%, #c0392b 100%)",
        padding: "64px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(0,0,0,0.05) 0px,
            rgba(0,0,0,0.05) 1px,
            transparent 1px,
            transparent 8px
          )`,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <Zap size={28} color="#fff" fill="#fff" />
          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(26px, 5vw, 44px)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "3px",
              margin: 0,
            }}
          >
            Vous avez un besoin urgent ?
          </h2>
          <Zap size={28} color="#fff" fill="#fff" />
        </div>

        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "17px",
            marginBottom: "36px",
            fontWeight: 300,
            letterSpacing: "1px",
          }}
        >
          Contactez notre support informatique — Réponse rapide garantie
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="tel:0767804247"
            style={{
              background: "#fff",
              color: "#c0392b",
              textDecoration: "none",
              padding: "14px 28px",
              fontSize: "14px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontWeight: 700,
              borderRadius: "3px",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            07 67 80 42 47
          </a>
          <a
            href="#contact"
            style={{
              background: "transparent",
              color: "#fff",
              textDecoration: "none",
              padding: "14px 28px",
              fontSize: "14px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontWeight: 700,
              borderRadius: "3px",
              border: "2px solid rgba(255,255,255,0.6)",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#fff";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.6)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Nous contacter
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
