import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Demande de contact – ${form.company || form.name}`
    );
    const body = encodeURIComponent(
      `Nom : ${form.name}\nSociété : ${form.company}\nEmail : ${form.email}\nTéléphone : ${form.phone}\n\nMessage :\n${form.message}`
    );
    window.open(`mailto:contact@isngroup.fr?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", company: "", email: "", phone: "", message: "" });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#0d1526",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "4px",
    padding: "12px 16px",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    color: "rgba(255,255,255,0.6)",
    fontSize: "12px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    marginBottom: "6px",
    display: "block",
  };

  return (
    <section
      id="contact"
      style={{
        background: "#0a0f1e",
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
            — Contact —
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
            Démarrons votre <span style={{ color: "#00d4ff" }}>projet</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Form */}
          <div>
            {submitted ? (
              <div
                style={{
                  background: "rgba(0,212,255,0.08)",
                  border: "1px solid rgba(0,212,255,0.3)",
                  borderRadius: "6px",
                  padding: "48px 32px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <CheckCircle size={48} color="#00d4ff" />
                <div>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "18px", margin: "0 0 8px" }}>
                    Message envoyé !
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", margin: 0 }}>
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={labelStyle}>Nom *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jean Martin"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#00d4ff")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Société</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Votre entreprise"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#00d4ff")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="contact@entreprise.fr"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#00d4ff")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="07 67 80 42 47"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#00d4ff")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Décrivez votre besoin ou problématique..."
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#00d4ff")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "#00d4ff",
                    color: "#0a0f1e",
                    border: "none",
                    padding: "15px 28px",
                    fontSize: "13px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    borderRadius: "3px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#0099cc";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#00d4ff";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  }}
                >
                  <Send size={14} />
                  Envoyer ma demande
                </button>
              </form>
            )}
          </div>

          {/* Info column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div
              style={{
                background: "#0d1526",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "6px",
                padding: "32px",
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid rgba(0,212,255,0.2)",
                }}
              >
                Informations de contact
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  {
                    icon: <Phone size={16} />,
                    label: "Téléphone",
                    value: "07 67 80 42 47",
                    href: "tel:0767804247",
                  },
                  {
                    icon: <Mail size={16} />,
                    label: "Email",
                    value: "contact@isngroup.fr",
                    href: "mailto:contact@isngroup.fr",
                  },
                  {
                    icon: <MapPin size={16} />,
                    label: "Zone d'intervention",
                    value: "Gironde (33) et départements limitrophes",
                    href: null,
                  },
                ].map((info) => (
                  <div key={info.label} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        background: "rgba(0,212,255,0.1)",
                        border: "1px solid rgba(0,212,255,0.2)",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#00d4ff",
                        flexShrink: 0,
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "3px" }}>
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          style={{ color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}
                          onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#00d4ff")}
                          onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#fff")}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span style={{ color: "#fff", fontSize: "14px" }}>{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div
              style={{
                background: "#0d1526",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "6px",
                padding: "28px 32px",
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Horaires
              </h3>
              {[
                { day: "Lundi – Vendredi", hours: "9h00 – 18h00" },
                { day: "Samedi", hours: "Sur rendez-vous" },
                { day: "Dimanche", hours: "Urgences uniquement" },
              ].map((h) => (
                <div
                  key={h.day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    fontSize: "13px",
                  }}
                >
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>{h.day}</span>
                  <span style={{ color: "#00d4ff", fontWeight: 600 }}>{h.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
