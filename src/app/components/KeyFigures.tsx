import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  suffix: string;
  label: string;
  duration?: number;
}

function useCounter(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function Counter({ target, suffix, label, duration = 2000 }: CounterProps) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCounter(target, duration, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        padding: "40px 24px",
        flex: 1,
        position: "relative",
      }}
    >
      <div
        style={{
          fontSize: "clamp(56px, 8vw, 80px)",
          fontWeight: 900,
          color: "#00d4ff",
          lineHeight: 1,
          marginBottom: "12px",
          letterSpacing: "-2px",
        }}
      >
        {count}{suffix}
      </div>
      <div
        style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: "15px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontWeight: 400,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function KeyFigures() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0d1526 0%, #0a2a4a 50%, #0d1526 100%)",
        borderTop: "1px solid rgba(0, 212, 255, 0.3)",
        borderBottom: "1px solid rgba(0, 212, 255, 0.3)",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0,
            position: "relative",
          }}
        >
          <Counter target={20} suffix="+" label="Années d'expérience" />

          {/* Divider */}
          <div
            style={{
              width: "1px",
              background: "rgba(0,212,255,0.2)",
              alignSelf: "stretch",
              margin: "40px 0",
            }}
          />

          <Counter target={500} suffix="+" label="Interventions réalisées" duration={2400} />

          {/* Divider */}
          <div
            style={{
              width: "1px",
              background: "rgba(0,212,255,0.2)",
              alignSelf: "stretch",
              margin: "40px 0",
            }}
          />

          <Counter target={100} suffix="%" label="Satisfaction client" duration={1800} />
        </div>
      </div>
    </section>
  );
}
