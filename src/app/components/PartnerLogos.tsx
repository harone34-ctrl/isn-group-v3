const PARTNERS = [
  {
    name: "Microsoft",
    color: "#00a4ef",
    svg: (
      <svg viewBox="0 0 21 21" width="22" height="22" fill="none">
        <rect x="0" y="0" width="10" height="10" fill="#f25022" />
        <rect x="11" y="0" width="10" height="10" fill="#7fba00" />
        <rect x="0" y="11" width="10" height="10" fill="#00a4ef" />
        <rect x="11" y="11" width="10" height="10" fill="#ffb900" />
      </svg>
    ),
  },
  {
    name: "Linux",
    color: "#fcc624",
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#fcc624">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
  },
  {
    name: "Cisco",
    color: "#1ba0d7",
    svg: (
      <svg viewBox="0 0 32 16" width="32" height="16" fill="none">
        <rect x="0" y="4" width="4" height="8" rx="2" fill="#1ba0d7" />
        <rect x="6" y="2" width="4" height="12" rx="2" fill="#1ba0d7" />
        <rect x="12" y="0" width="4" height="16" rx="2" fill="#1ba0d7" />
        <rect x="18" y="2" width="4" height="12" rx="2" fill="#1ba0d7" />
        <rect x="24" y="4" width="4" height="8" rx="2" fill="#1ba0d7" />
      </svg>
    ),
  },
  {
    name: "VMware",
    color: "#607078",
    svg: (
      <svg viewBox="0 0 28 16" width="28" height="16" fill="none">
        <path d="M2 2L7 14L12 2H10L7 10L4 2H2Z" fill="#607078" />
        <path d="M13 2L18 14L23 2H21L18 10L15 2H13Z" fill="#607078" />
        <rect x="24" y="2" width="3" height="12" rx="1.5" fill="#607078" />
      </svg>
    ),
  },
  {
    name: "Veeam",
    color: "#00b336",
    svg: (
      <svg viewBox="0 0 20 20" width="22" height="22" fill="none">
        <polygon points="10,2 18,10 10,18 2,10" fill="none" stroke="#00b336" strokeWidth="2" />
        <polygon points="10,5 15,10 10,15 5,10" fill="#00b336" />
      </svg>
    ),
  },
  {
    name: "Kaspersky",
    color: "#006d5c",
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <circle cx="12" cy="12" r="10" fill="none" stroke="#006d5c" strokeWidth="2" />
        <path d="M8 7L12 12L8 17" stroke="#006d5c" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 12L17 12" stroke="#006d5c" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Proxmox",
    color: "#e57000",
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path d="M12 2L22 7V17L12 22L2 17V7L12 2Z" fill="none" stroke="#e57000" strokeWidth="2" />
        <path d="M12 6L18 9.5V16.5L12 20L6 16.5V9.5L12 6Z" fill="#e57000" />
      </svg>
    ),
  },
  {
    name: "Debian",
    color: "#d70a53",
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.5 0 2.93-.33 4.2-.92C13.93 20.36 11 17.44 11 14c0-3.31 2.69-6 6-6 .34 0 .68.03 1 .08C17.5 4.5 14.97 2 12 2z"
          fill="#d70a53"
        />
        <circle cx="17" cy="14" r="4" fill="none" stroke="#d70a53" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Ubuntu",
    color: "#e95420",
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <circle cx="12" cy="12" r="10" fill="none" stroke="#e95420" strokeWidth="2" />
        <circle cx="12" cy="5" r="2.5" fill="#e95420" />
        <circle cx="4.9" cy="16.5" r="2.5" fill="#e95420" />
        <circle cx="19.1" cy="16.5" r="2.5" fill="#e95420" />
        <path d="M12 7.5L5.5 15M12 7.5L18.5 15" stroke="#e95420" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "OVHcloud",
    color: "#123f6d",
    svg: (
      <svg viewBox="0 0 30 20" width="30" height="20" fill="none">
        <path d="M5 10C5 6.69 7.69 4 11 4s6 2.69 6 6-2.69 6-6 6S5 13.31 5 10Z" fill="none" stroke="#123f6d" strokeWidth="2" />
        <path d="M14 10C14 6.69 16.69 4 20 4s6 2.69 6 6-2.69 6-6 6" stroke="#123f6d" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Acronis",
    color: "#ef4923",
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path d="M12 2L22 20H2L12 2Z" fill="none" stroke="#ef4923" strokeWidth="2" />
        <path d="M12 8L17 18H7L12 8Z" fill="#ef4923" />
      </svg>
    ),
  },
  {
    name: "Citrix",
    color: "#452170",
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <circle cx="12" cy="12" r="10" fill="none" stroke="#452170" strokeWidth="2" />
        <path d="M8 9h8M8 12h8M8 15h8" stroke="#452170" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function PartnerLogos() {
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section
      id="partenaires"
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(230,57,70,0.15)",
        borderBottom: "1px solid rgba(230,57,70,0.15)",
        padding: "44px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "28px",
          color: "rgba(255,255,255,0.3)",
          fontSize: "11px",
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        Technologies &amp; Partenaires
      </div>

      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Left fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to right, #0a0a0a, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to left, #0a0a0a, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            gap: "52px",
            animation: "marquee 32s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((partner, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                whiteSpace: "nowrap",
                opacity: 0.45,
                transition: "opacity 0.25s",
                cursor: "default",
                padding: "6px 0",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "1")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "0.45")}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.03)",
                  flexShrink: 0,
                }}
              >
                {partner.svg}
              </div>
              <span
                style={{
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
