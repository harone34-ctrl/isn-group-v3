import { useEffect, useRef, useState } from "react";

const PHOTOS = [
  {
    url: "https://images.unsplash.com/photo-1675602487652-3a4d8cdada94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Circuit board closeup with electronic components",
    label: "Électronique & Composants",
  },
  {
    url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Blue UTP network cables in a server room",
    label: "Infrastructure Réseau",
  },
  {
    url: "https://images.unsplash.com/photo-1675602488512-bdd631490fcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Computer chip on a printed circuit board",
    label: "Matériel Informatique",
  },
  {
    url: "https://images.unsplash.com/photo-1569615313731-7407da4f4594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Green circuit board hardware",
    label: "Maintenance Technique",
  },
];

export function HardwareGallery() {
  const [visible, setVisible] = useState(false);
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
    <section
      style={{
        background: "#111d35",
        padding: "0",
        overflow: "hidden",
      }}
    >
      <div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
        className="gallery-grid"
      >
        {PHOTOS.map((photo, i) => (
          <div
            key={photo.label}
            style={{
              position: "relative",
              overflow: "hidden",
              aspectRatio: "1 / 1",
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(1.04)",
              transition: `all 0.7s cubic-bezier(0.4,0,0.2,1) ${i * 100}ms`,
              cursor: "default",
            }}
            className="gallery-item"
          >
            <img
              src={photo.url}
              alt={photo.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                filter: "brightness(0.55) saturate(0.5)",
                transition: "filter 0.4s, transform 0.4s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLImageElement).style.filter = "brightness(0.75) saturate(0.8)";
                (e.target as HTMLImageElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLImageElement).style.filter = "brightness(0.55) saturate(0.5)";
                (e.target as HTMLImageElement).style.transform = "scale(1)";
              }}
            />

            {/* Red border on hover via overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 40%, rgba(10,15,30,0.8) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Right border separator */}
            {i < PHOTOS.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: "1px",
                  background: "rgba(0,212,255,0.2)",
                }}
              />
            )}

            {/* Label */}
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                right: "16px",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "2px",
                  background: "#00d4ff",
                  marginBottom: "8px",
                }}
              />
              <span
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "12px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {photo.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
