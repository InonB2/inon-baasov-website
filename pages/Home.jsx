import { useState, useEffect, useRef } from "react";

// ─── Page title fix ───────────────────────────────────────────────
if (typeof document !== "undefined") {
  document.title = "Inon Baasov — Product Leader & Co-Founder";
}

const PHOTO = "https://base44.app/api/apps/69e9e364459ecbf538b7c62f/files/mp/public/69e9e364459ecbf538b7c62f/7c22df058_inon_profile_selected.jpg";

// ─── Data ─────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: "touche", num: "01", emoji: "🎬",
    tag: "FLAGSHIP · 2018–2024", title: "TouchE",
    subtitle: "AI-Powered Interactive Video Platform",
    role: "Co-Founder & Chief Product Officer",
    tagline: "I turned passive video into interactive, shoppable, data-rich experiences — and built the platform from zero.",
    metrics: [{ v: "$2.5M", l: "Raised" }, { v: "99.99%", l: "Uptime" }, { v: "38%", l: "Efficiency ↑" }, { v: "24%", l: "Engagement ↑" }],
    color: "#0ea5e9", bg: "rgba(14,165,233,0.06)",
    problem: "Streaming platforms were hemorrhaging revenue from passive viewing — 96%+ ad skip rates, zero commerce conversion, no interaction layer. I saw a $10B gap in interactive video infrastructure.",
    process: "I ran 200+ user interviews across 3 continents. Mapped the full viewer journey from content discovery to purchase. Analyzed 40+ tools and ran 2 discovery sprints before writing a single spec.",
    solution: "An AI-powered interactive video layer deployable on any platform (Web/Mobile/Smart TV): Creator CMS for content teams, Viewer SDK for consumers, AI Recommendation Engine, Analytics Dashboard, Monetization Engine.",
    myRole: "I owned everything — product vision, roadmap, team hiring ($2.5M budget), and closed partnerships with HOT, Ozon, Eros Now, Paramount, JVP, and Lion's Gate across 4 countries.",
    impact: "Raised $2.5M seed. 99.99% uptime. Millions of concurrent users. 38% team efficiency gain. 24% viewer engagement increase. 22% adoption growth. Active clients in 4 countries.",
    learning: "Ship a concierge MVP to 3 enterprise clients in month 1. The biggest mistake I made: over-engineering before we had product-market fit.",
    link: null, linkLabel: "Request Case Study →",
    tech: ["AWS", "AI/ML", "Android/iOS/SmartTV", "Creator CMS", "Agile/Scrum"],
  },
  {
    id: "tradepulse", num: "02", emoji: "📈",
    tag: "LIVE · 2024", title: "TradePulse Journal Pro",
    subtitle: "Professional Trading Journal & Analytics",
    role: "Product Owner & Builder",
    tagline: "I built a FinTech analytics platform from scratch because no existing tool tracked psychology alongside P&L.",
    metrics: [{ v: "Live", l: "Status" }, { v: "20", l: "Interviews" }, { v: "FinTech", l: "Domain" }, { v: "3 wks", l: "0→Live" }],
    color: "#f59e0b", bg: "rgba(245,158,11,0.06)",
    problem: "Retail traders lose 70% of capital not from bad strategy — but emotional, undisciplined decisions. No tool existed that tracked psychological state alongside trade data.",
    process: "I interviewed 20 active retail traders. Analyzed Edgewonk, TraderSync. Found the gap: nobody tracked emotional triggers alongside P&L. Designed a 'Trade DNA' framework from scratch.",
    solution: "Full journal with P&L analytics, emotion tagging per trade, weekly performance review, pattern recognition, strategy breakdown, exportable reports.",
    myRole: "End-to-end: concept → UX research → feature definition → build → beta with 5 traders → live deployment. Solo.",
    impact: "Live product demonstrating my FinTech depth, data architecture thinking, and UX ability. Core portfolio asset.",
    learning: "Trader UX requires extreme data density without cognitive overload — much harder than consumer apps.",
    link: "https://trade-pulse-journal-pro.base44.app", linkLabel: "View Live App →",
    tech: ["Base44", "React", "FinTech UX", "Analytics", "Behavioral Design"],
  },
  {
    id: "familyflow", num: "03", emoji: "👨‍👩‍👧",
    tag: "LIVE · 2024", title: "Family Flow",
    subtitle: "Family Task & Chore Management App",
    role: "Product Owner & Builder",
    tagline: "I built a Hebrew-first family coordination app in 2 weeks — because Israeli families deserved better.",
    metrics: [{ v: "Live", l: "Status" }, { v: "2 wks", l: "Build Time" }, { v: "Hebrew", l: "RTL First" }, { v: "Families", l: "Active Users" }],
    color: "#10b981", bg: "rgba(16,185,129,0.06)",
    problem: "Israeli families had no Hebrew-first household management tool. Every existing app was English-only, Western-designed, and too complex for kids to use daily.",
    process: "I interviewed 15 Israeli parents. Identified 3 jobs-to-be-done: task assignment, accountability visibility, reward motivation. Validated lo-fi wireframes with 5 families before writing a line of code.",
    solution: "Hebrew-first RTL app with task assignment, progress rings, family leaderboard, reward mechanics. Mobile-first, emoji-driven for kid-friendly UX.",
    myRole: "Concept → Figma → TypeScript/React → Lovable deployment → ongoing iteration. Entirely solo. Under 2 weeks.",
    impact: "Live product with active family users. Proof that I can ship fast, solo, with quality — not just manage teams.",
    learning: "Hebrew RTL design is significantly harder than LTR. Kids need zero-learning-curve UI — no onboarding, immediate value.",
    link: "https://family-flow-he.lovable.app/", linkLabel: "View Live App →",
    tech: ["TypeScript", "React", "Lovable", "Hebrew RTL", "Figma", "Mobile-first"],
  },
  {
    id: "airakoon", num: "04", emoji: "🤖",
    tag: "CONSULTING · 2024–NOW", title: "AiRakoon",
    subtitle: "Enterprise AI Platform Strategy",
    role: "Product Strategy Consultant",
    tagline: "I helped an enterprise AI team find product-market fit — by building the strategy they didn't have.",
    metrics: [{ v: "GenAI", l: "Domain" }, { v: "12mo", l: "Roadmap" }, { v: "Pilot", l: "Closed" }, { v: "B2B", l: "Market" }],
    color: "#a855f7", bg: "rgba(168,85,247,0.06)",
    problem: "The team had strong AI capabilities but no product strategy — unclear ROI models, no evaluation framework, and a roadmap that non-technical executives couldn't own.",
    process: "I ran stakeholder interviews across 3 departments, analyzed 15 enterprise AI tools, and ran a 2-day product strategy sprint to define MVP scope and success metrics.",
    solution: "Full product strategy: model selection matrix, API usage patterns, data eval loops, pricing (per-token + seat licensing), phased roadmap 0→1→scale.",
    myRole: "Lead product strategist. I owned discovery, roadmap, GTM, and drove closure of the first enterprise pilot.",
    impact: "First enterprise pilot closed. 12-month roadmap locked. Pricing model validated with first paying client.",
    learning: "Enterprise AI adoption is 80% change management, 20% technology. My job was to make executives feel in control.",
    link: null, linkLabel: "Contact for Details →",
    tech: ["GenAI Strategy", "LLM", "Enterprise B2B", "GTM", "Roadmapping"],
  },
];

const CAREER = [
  { year: "2005–08", ch: "01", emoji: "🔬", title: "The Engineer", org: "Technion + McGill", color: "#a855f7",
    desc: "I studied Biotechnology & Engineering at the Technion. Built my foundation in systems thinking, data precision, and structured problem-solving. Did a year at McGill, Montreal." },
  { year: "2009–13", ch: "02", emoji: "⚗️", title: "The Regulator", org: "Blau Pharma + QA", color: "#6366f1",
    desc: "Led regulatory affairs and QA in the Israeli pharmaceutical industry. Learned to operate in zero-tolerance, high-stakes environments — a discipline that made me a better PM." },
  { year: "2013–18", ch: "03", emoji: "📊", title: "The PM", org: "Arena Plus FinTech", color: "#0ea5e9",
    desc: "Became a Senior PM at Arena Plus, an enterprise FinTech platform. Delivered +22% adoption, +15% revenue, -20% time-to-market. My first experience owning a product at real scale." },
  { year: "2018–24", ch: "04", emoji: "🚀", title: "The Founder", org: "TouchE TV", color: "#f59e0b",
    desc: "Co-founded TouchE — raised $2.5M, built an AI video platform used by millions, partnered with Paramount, JVP, and Lion's Gate. The chapter where I learned what it really means to build." },
  { year: "2024–Now", ch: "05", emoji: "🎯", title: "The Architect", org: "Consulting + Building", color: "#10b981",
    desc: "Now I advise AI startups on product strategy and build products in public. AiRakoon, Medicrowd, Smash+. And I'm looking for the next big thing to lead." },
];

// ─── Hooks ────────────────────────────────────────────────────────
function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

// ─── Components ───────────────────────────────────────────────────
function Reveal({ children, delay = 0, dir = "up" }) {
  const [ref, vis] = useScrollReveal();
  const map = { up: "translateY(36px)", left: "translateX(-36px)", right: "translateX(36px)" };
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : map[dir],
      transition: `opacity .7s ${delay}s cubic-bezier(.16,1,.3,1), transform .7s ${delay}s cubic-bezier(.16,1,.3,1)`,
    }}>{children}</div>
  );
}

function Counter({ val, label, color, delay = 0 }) {
  const [ref, vis] = useScrollReveal(.3);
  const [disp, setDisp] = useState("0");
  useEffect(() => {
    if (!vis) return;
    const m = val.match(/[\d.]+/);
    if (!m) { setTimeout(() => setDisp(val), delay * 1000 + 200); return; }
    const num = parseFloat(m[0]);
    const pre = val.slice(0, val.indexOf(m[0]));
    const suf = val.slice(val.indexOf(m[0]) + m[0].length);
    const dur = 1100, steps = 38;
    let i = 0;
    setTimeout(() => {
      const t = setInterval(() => {
        i++;
        const v = num * (i / steps);
        setDisp(pre + (Number.isInteger(num) ? Math.round(v) : v.toFixed(2)) + suf);
        if (i >= steps) clearInterval(t);
      }, dur / steps);
    }, delay * 1000);
  }, [vis]);
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{ fontSize: "clamp(20px,2.8vw,32px)", fontWeight: 900, color, letterSpacing: -1 }}>{disp}</div>
      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.28)", letterSpacing: 2, marginTop: 5, textTransform: "uppercase" }}>{label}</div>
    </div>
  );
}

function SkillBar({ label, level, color }) {
  const [ref, vis] = useScrollReveal(.2);
  return (
    <div ref={ref}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{label}</span>
        <span style={{ fontSize: 11, color, fontWeight: 700 }}>{level}%</span>
      </div>
      <div style={{ height: 2, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{
          height: "100%", background: `linear-gradient(90deg,${color},${color}70)`,
          width: vis ? `${level}%` : "0%",
          transition: "width 1.1s cubic-bezier(.16,1,.3,1) .2s",
          boxShadow: `0 0 8px ${color}50`,
        }} />
      </div>
    </div>
  );
}

function Tag({ text, color }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      background: color + "15", border: `1px solid ${color}35`,
      borderRadius: 100, padding: "3px 11px", fontSize: 9, fontWeight: 800,
      color, letterSpacing: 1.5,
    }}>
      <span style={{ width: 4, height: 4, borderRadius: "50%", background: color }} />
      {text}
    </span>
  );
}

// ─── Product Card ─────────────────────────────────────────────────
function Card({ p, onOpen }) {
  const [ref, vis] = useScrollReveal(.08);
  const [hov, setHov] = useState(false);
  return (
    <div ref={ref} onClick={() => onOpen(p)} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(44px)",
        transition: "opacity .75s cubic-bezier(.16,1,.3,1), transform .75s cubic-bezier(.16,1,.3,1), box-shadow .25s, border-color .25s",
        cursor: "pointer", borderRadius: 18,
        border: `1px solid ${hov ? p.color + "50" : "rgba(255,255,255,0.07)"}`,
        background: hov ? p.bg : "rgba(255,255,255,0.02)",
        boxShadow: hov ? `0 16px 48px ${p.color}18` : "none",
        position: "relative", overflow: "hidden",
      }}>
      {/* Watermark number */}
      <div style={{
        position: "absolute", top: 12, right: 16, fontSize: 60, fontWeight: 900,
        color: hov ? p.color + "12" : "rgba(255,255,255,0.03)",
        lineHeight: 1, userSelect: "none", transition: "color .3s",
      }}>{p.num}</div>
      <div style={{ padding: "24px 22px 20px" }}>
        <div style={{ marginBottom: 14 }}><Tag text={p.tag} color={p.color} /></div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <span style={{
            fontSize: 26, transition: "transform .3s cubic-bezier(.34,1.56,.64,1)",
            transform: hov ? "scale(1.18) rotate(-4deg)" : "scale(1)", display: "inline-block",
          }}>{p.emoji}</span>
          <div>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#fff", letterSpacing: -.5 }}>{p.title}</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 1 }}>{p.subtitle}</div>
          </div>
        </div>
        <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, marginBottom: 18 }}>{p.tagline}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7, marginBottom: 18 }}>
          {p.metrics.map((m, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "7px 4px",
              textAlign: "center", border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: p.color }}>{m.v}</div>
              <div style={{ fontSize: 8.5, color: "rgba(255,255,255,0.22)", letterSpacing: .8 }}>{m.l}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
          {p.tech.slice(0, 4).map(t => (
            <span key={t} style={{
              fontSize: 9.5, padding: "2px 8px", borderRadius: 100,
              background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}>{t}</span>
          ))}
        </div>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 14,
        }}>
          <span style={{ fontSize: 11.5, color: p.color, fontWeight: 700 }}>
            {p.link ? "View Live →" : "Read Case Study →"}
          </span>
          <div style={{
            width: 30, height: 30, borderRadius: "50%",
            background: p.color + "20", border: `1px solid ${p.color}35`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, transition: "transform .2s",
            transform: hov ? "translateX(4px)" : "none",
          }}>→</div>
        </div>
      </div>
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────
function Modal({ p, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const esc = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", esc); };
  }, []);
  const steps = [
    { label: "THE PROBLEM", icon: "⚡", content: p.problem, color: "#ff6b35" },
    { label: "MY PROCESS", icon: "🔍", content: p.process, color: "#0ea5e9" },
    { label: "THE SOLUTION", icon: "💡", content: p.solution, color: p.color },
    { label: "MY ROLE", icon: "👤", content: p.myRole, color: "#a855f7" },
    { label: "IMPACT", icon: "📊", content: p.impact, color: "#10b981" },
    { label: "WHAT I LEARNED", icon: "🎓", content: p.learning, color: "#f59e0b" },
  ];
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(5,12,26,0.97)", backdropFilter: "blur(24px)",
      overflowY: "auto", padding: "0 0 80px",
    }} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "28px 20px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
          <button onClick={onClose} style={{
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8, padding: "7px 16px", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: 13,
          }}>✕ Close</button>
        </div>
        <div style={{ marginBottom: 28, borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: 24 }}>
          <div style={{ fontSize: 30, marginBottom: 8 }}>{p.emoji}</div>
          <div style={{ marginBottom: 8 }}><Tag text={p.tag} color={p.color} /></div>
          <div style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 900, color: "#fff", letterSpacing: -1, marginBottom: 4 }}>{p.title}</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>{p.subtitle}</div>
          <div style={{ fontSize: 11, color: p.color, fontWeight: 700, letterSpacing: .8 }}>MY ROLE: {p.role}</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 32 }}>
          {p.metrics.map((m, i) => (
            <div key={i} style={{
              background: p.bg, borderRadius: 10, padding: "14px 8px",
              textAlign: "center", border: `1px solid ${p.color}25`,
            }}>
              <div style={{ fontSize: 18, fontWeight: 900, color: p.color }}>{m.v}</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.28)", letterSpacing: .8, marginTop: 3 }}>{m.l}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              display: "flex", gap: 16, padding: "18px 20px",
              borderRadius: 14, background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)", position: "relative",
            }}>
              {i < steps.length - 1 && (
                <div style={{ position: "absolute", left: 32, bottom: -3, width: 1, height: 6, background: `linear-gradient(to bottom,${s.color}50,transparent)` }} />
              )}
              <div style={{
                width: 32, height: 32, borderRadius: 9, flexShrink: 0,
                background: s.color + "15", border: `1px solid ${s.color}35`,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15,
              }}>{s.icon}</div>
              <div>
                <div style={{ fontSize: 9, fontWeight: 900, color: s.color, letterSpacing: 2, marginBottom: 5 }}>
                  {String(i + 1).padStart(2, "0")} · {s.label}
                </div>
                <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>{s.content}</div>
              </div>
            </div>
          ))}
        </div>
        {p.link && (
          <div style={{ marginTop: 28, textAlign: "center" }}>
            <a href={p.link} target="_blank" rel="noopener" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: p.color, color: "#fff", borderRadius: 10,
              padding: "13px 32px", fontSize: 14, fontWeight: 800,
              textDecoration: "none", boxShadow: `0 8px 28px ${p.color}40`,
            }}>{p.linkLabel}</a>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────
export default function Home() {
  const scrollY = useScrollY();
  const [modal, setModal] = useState(null);
  const [chapter, setChapter] = useState(3); // start on Founder
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => { setNavSolid(scrollY > 50); }, [scrollY]);

  // Fix page title
  useEffect(() => { document.title = "Inon Baasov — Product Leader & Co-Founder"; }, []);

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{
      minHeight: "100vh", background: "#050c1a", color: "#fff",
      fontFamily: "'Inter','Segoe UI',system-ui,sans-serif", overflowX: "hidden",
    }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 900,
        padding: navSolid ? "10px 5%" : "18px 5%",
        background: navSolid ? "rgba(5,12,26,0.94)" : "transparent",
        backdropFilter: navSolid ? "blur(20px)" : "none",
        borderBottom: navSolid ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all .3s cubic-bezier(.16,1,.3,1)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <button onClick={() => go("hero")} style={{
          background: "none", border: "none", cursor: "pointer",
          fontWeight: 900, fontSize: 15, letterSpacing: 2, color: "#fff",
        }}>
          <span style={{ color: "#0ea5e9" }}>I</span>B
        </button>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {[["About", "about"], ["Work", "products"], ["Story", "timeline"], ["Contact", "contact"]].map(([l, id]) => (
            <button key={id} onClick={() => go(id)} style={{
              background: "none", border: "none", cursor: "pointer",
              color: "rgba(255,255,255,0.4)", fontSize: 13, letterSpacing: .3,
              transition: "color .2s",
            }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}
            >{l}</button>
          ))}
          <button onClick={() => go("contact")} style={{
            background: "#0ea5e9", border: "none", cursor: "pointer",
            borderRadius: 8, padding: "8px 20px", fontSize: 13, fontWeight: 700,
            color: "#fff", boxShadow: "0 4px 16px rgba(14,165,233,0.35)",
          }}>Hire Me</button>
        </div>
      </nav>

      {/* ── HERO — The Fusion ── */}
      <section id="hero" style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "120px 5% 80px", position: "relative", overflow: "hidden",
      }}>
        {/* Background blobs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{
            position: "absolute", top: "8%", right: "8%",
            width: "38vw", height: "38vw", borderRadius: "50%",
            background: "radial-gradient(circle,rgba(14,165,233,0.07) 0%,transparent 70%)",
            transform: `translateY(${scrollY * 0.05}px)`,
          }} />
          <div style={{
            position: "absolute", bottom: "12%", left: "4%",
            width: "22vw", height: "22vw", borderRadius: "50%",
            background: "radial-gradient(circle,rgba(245,158,11,0.05) 0%,transparent 70%)",
            transform: `translateY(${-scrollY * 0.03}px)`,
          }} />
          {/* Subtle grid */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
            opacity: Math.max(0, 1 - scrollY / 500),
          }} />
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "8%", alignItems: "center" }}>

            {/* LEFT — text */}
            <div>
              <Reveal delay={0}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.28)",
                  borderRadius: 100, padding: "5px 16px", marginBottom: 28,
                }}>
                  <span style={{
                    width: 7, height: 7, borderRadius: "50%", background: "#0ea5e9",
                    display: "inline-block", animation: "pulse 2s infinite",
                  }} />
                  <span style={{ fontSize: 11, color: "#0ea5e9", fontWeight: 700, letterSpacing: 1.5 }}>
                    OPEN TO SENIOR PM / CPO ROLES — TEL AVIV
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 style={{
                  fontSize: "clamp(48px,6.5vw,80px)", fontWeight: 900,
                  lineHeight: 0.93, letterSpacing: -3, color: "#fff", margin: "0 0 18px",
                }}>
                  Inon<br />
                  <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.2)", color: "transparent" }}>Baasov</span>
                </h1>
              </Reveal>

              <Reveal delay={0.18}>
                <div style={{ width: 44, height: 3, background: "linear-gradient(90deg,#0ea5e9,#f59e0b)", borderRadius: 2, marginBottom: 18 }} />
              </Reveal>

              <Reveal delay={0.22}>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.85, maxWidth: 430, marginBottom: 10 }}>
                  I build products that scale. Co-Founder & CPO of TouchE — raised $2.5M, shipped to millions of users, partnered with Paramount & Lion's Gate.
                </p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.22)", lineHeight: 1.7, maxWidth: 400, marginBottom: 32 }}>
                  B.Sc. Engineering + Executive MBA · Technion · 10+ years PM
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button onClick={() => go("products")} style={{
                    background: "#0ea5e9", border: "none", borderRadius: 10,
                    padding: "13px 28px", fontSize: 14, fontWeight: 700, color: "#fff",
                    cursor: "pointer", boxShadow: "0 6px 24px rgba(14,165,233,0.4)",
                  }}>View My Work →</button>
                  <a href="mailto:Inonbaasov@gmail.com" style={{
                    border: "1px solid rgba(255,255,255,0.11)", borderRadius: 10,
                    padding: "13px 24px", fontSize: 14, fontWeight: 500,
                    color: "rgba(255,255,255,0.65)", textDecoration: "none",
                  }}>Let's Talk</a>
                </div>
              </Reveal>
            </div>

            {/* RIGHT — Photo, static (no rotation) */}
            <Reveal delay={0.15} dir="right">
              <div style={{ position: "relative", flexShrink: 0 }}>
                {/* Glow ring — static */}
                <div style={{
                  width: 210, height: 210, borderRadius: "50%",
                  background: "linear-gradient(135deg,#0ea5e9,#a855f7,#f59e0b)",
                  padding: "2px",
                }}>
                  <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", background: "#0a1628" }}>
                    <img src={PHOTO} alt="Inon Baasov"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
                  </div>
                </div>
                {/* Floating badges */}
                <div style={{
                  position: "absolute", bottom: -8, left: -24,
                  background: "#0d1f3c", border: "1px solid rgba(14,165,233,0.28)",
                  borderRadius: 10, padding: "7px 13px",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.5)",
                  animation: "float 3.2s ease-in-out infinite",
                }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#0ea5e9" }}>$2.5M</div>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,0.28)" }}>Raised</div>
                </div>
                <div style={{
                  position: "absolute", top: 4, right: -28,
                  background: "#0d1f3c", border: "1px solid rgba(245,158,11,0.28)",
                  borderRadius: 10, padding: "7px 13px",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.5)",
                  animation: "float 3.8s ease-in-out infinite .6s",
                }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#f59e0b" }}>10+ yrs</div>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,0.28)" }}>PM</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Stats bar */}
          <Reveal delay={0.4}>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1,
              marginTop: 60,
              borderTop: "1px solid rgba(255,255,255,0.06)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
              {[
                { v: "$2.5M", l: "Raised", c: "#0ea5e9" },
                { v: "38%", l: "Efficiency ↑", c: "#f59e0b" },
                { v: "99.99%", l: "Uptime", c: "#10b981" },
                { v: "10+", l: "Years PM", c: "#a855f7" },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: "22px 0", textAlign: "center",
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}>
                  <Counter val={s.v} label={s.l} color={s.c} delay={i * 0.1} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "96px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 44 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#0ea5e9" }} />
              <span style={{ fontSize: 10, color: "#0ea5e9", fontWeight: 700, letterSpacing: 3 }}>ABOUT ME</span>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
            <Reveal dir="left">
              <h2 style={{ fontSize: "clamp(26px,3.8vw,40px)", fontWeight: 900, letterSpacing: -1.5, lineHeight: 1.1, margin: "0 0 18px" }}>
                I build products that<br /><span style={{ color: "#0ea5e9" }}>ship, scale, and lead.</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14.5, lineHeight: 1.9, marginBottom: 14 }}>
                I don't just define roadmaps — I build products. From raising $2.5M and shipping an AI video platform (TouchE) to live FinTech tools (TradePulse) to consulting enterprise AI teams (AiRakoon) — my fingerprint is on every line.
              </p>
              <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 13.5, lineHeight: 1.85, marginBottom: 28 }}>
                My career has a clear thread: Engineering (Technion B.Sc.) → Regulated industry (Israeli MoH, Pharma) → FinTech PM (Arena Plus) → Co-Founder/CPO (TouchE) → Strategic Consultant. Every chapter compounds on the last.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <a href="https://linkedin.com/in/inonbaasov" target="_blank" rel="noopener" style={{
                  display: "flex", alignItems: "center", gap: 7,
                  background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.22)",
                  borderRadius: 8, padding: "8px 16px", color: "#0ea5e9", fontSize: 12.5, fontWeight: 600, textDecoration: "none",
                }}>LinkedIn ↗</a>
                <a href="mailto:Inonbaasov@gmail.com" style={{
                  display: "flex", alignItems: "center", gap: 7,
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: 8, padding: "8px 16px", color: "rgba(255,255,255,0.55)", fontSize: 12.5, fontWeight: 600, textDecoration: "none",
                }}>Email →</a>
              </div>
            </Reveal>
            <Reveal dir="right" delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "AI / GenAI Product", level: 95, color: "#0ea5e9" },
                  { label: "FinTech & Payments", level: 90, color: "#f59e0b" },
                  { label: "0→1 Startup Execution", level: 95, color: "#10b981" },
                  { label: "Enterprise B2B SaaS", level: 88, color: "#a855f7" },
                  { label: "Technical PM (Cloud/API)", level: 82, color: "#ff6b35" },
                ].map(s => <SkillBar key={s.label} {...s} />)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" style={{
        padding: "96px 5%",
        background: "rgba(255,255,255,0.012)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 12 }}>
              <div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#0ea5e9" }} />
                  <span style={{ fontSize: 10, color: "#0ea5e9", fontWeight: 700, letterSpacing: 3 }}>MY WORK</span>
                </div>
                <h2 style={{ fontSize: "clamp(22px,3.2vw,36px)", fontWeight: 900, letterSpacing: -1.5, margin: 0 }}>
                  Products I've built & shipped
                </h2>
              </div>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>Click any card for full case study</span>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(272px,1fr))", gap: 18 }}>
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.07}>
                <Card p={p} onOpen={setModal} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section id="timeline" style={{ padding: "96px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#0ea5e9" }} />
              <span style={{ fontSize: 10, color: "#0ea5e9", fontWeight: 700, letterSpacing: 3 }}>MY STORY</span>
            </div>
            <h2 style={{ fontSize: "clamp(22px,3.2vw,36px)", fontWeight: 900, letterSpacing: -1.5, marginBottom: 44 }}>
              Five chapters. One thread.
            </h2>
          </Reveal>
          {/* Chapter tabs */}
          <div style={{ display: "flex", overflowX: "auto", paddingBottom: 1 }}>
            {CAREER.map((c, i) => (
              <button key={i} onClick={() => setChapter(i)} style={{
                flex: "1 1 0", minWidth: 72, padding: "14px 10px",
                background: chapter === i ? c.color + "12" : "transparent",
                border: "none",
                borderBottom: `3px solid ${chapter === i ? c.color : "rgba(255,255,255,0.06)"}`,
                cursor: "pointer", transition: "all .22s", textAlign: "center",
              }}>
                <div style={{ fontSize: 20, marginBottom: 3 }}>{c.emoji}</div>
                <div style={{ fontSize: 9.5, fontWeight: 800, letterSpacing: .8, color: chapter === i ? c.color : "rgba(255,255,255,0.25)" }}>
                  {c.ch}
                </div>
              </button>
            ))}
          </div>
          {/* Active chapter */}
          {(() => {
            const c = CAREER[chapter];
            return (
              <div style={{
                background: c.color + "08", border: `1px solid ${c.color}22`,
                borderTop: "none", borderRadius: "0 0 14px 14px",
                padding: "28px 32px", transition: "all .28s",
              }}>
                <div style={{ fontSize: 9.5, fontWeight: 800, color: c.color, letterSpacing: 2, marginBottom: 7 }}>
                  {c.year} · CHAPTER {c.ch}
                </div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#fff", letterSpacing: -.5, marginBottom: 3 }}>{c.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontWeight: 600, marginBottom: 14 }}>{c.org}</div>
                <div style={{ fontSize: 14.5, color: "rgba(255,255,255,0.58)", lineHeight: 1.8 }}>{c.desc}</div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{
        padding: "96px 5%",
        background: "linear-gradient(135deg,rgba(14,165,233,0.05) 0%,rgba(5,12,26,1) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#0ea5e9" }} />
              <span style={{ fontSize: 10, color: "#0ea5e9", fontWeight: 700, letterSpacing: 3 }}>GET IN TOUCH</span>
            </div>
            <h2 style={{ fontSize: "clamp(26px,3.8vw,44px)", fontWeight: 900, letterSpacing: -2, marginBottom: 14 }}>
              Let's build something<br />great together.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 14.5, lineHeight: 1.85, marginBottom: 36 }}>
              I'm open to Senior PM, Head of Product, and CPO roles — and select consulting engagements where I can make a real difference.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:Inonbaasov@gmail.com" style={{
                background: "#0ea5e9", color: "#fff", borderRadius: 10,
                padding: "14px 32px", fontSize: 14, fontWeight: 700,
                textDecoration: "none", boxShadow: "0 8px 28px rgba(14,165,233,0.4)",
              }}>✉️ Inonbaasov@gmail.com</a>
              <a href="https://linkedin.com/in/inonbaasov" target="_blank" rel="noopener" style={{
                border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.65)",
                borderRadius: 10, padding: "14px 26px", fontSize: 14, fontWeight: 600,
                textDecoration: "none",
              }}>LinkedIn ↗</a>
            </div>
            <div style={{ marginTop: 20, color: "rgba(255,255,255,0.18)", fontSize: 12.5 }}>
              +972-54-444-5856 · Tel Aviv, Israel
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: "22px 5%", borderTop: "1px solid rgba(255,255,255,0.05)",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10,
      }}>
        <span style={{ fontWeight: 900, fontSize: 13, letterSpacing: 1 }}><span style={{ color: "#0ea5e9" }}>I</span>NON BAASOV</span>
        <span style={{ color: "rgba(255,255,255,0.18)", fontSize: 11.5 }}>© 2026 · inonbaasov-website.base44.app</span>
        <div style={{ display: "flex", gap: 14 }}>
          {[["Family Flow ↗", "https://family-flow-he.lovable.app/"], ["TradePulse ↗", "https://trade-pulse-journal-pro.base44.app"]].map(([l, h]) => (
            <a key={l} href={h} target="_blank" rel="noopener"
              style={{ fontSize: 11.5, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      </footer>

      {modal && <Modal p={modal} onClose={() => setModal(null)} />}

      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-track{background:#050c1a}
        ::-webkit-scrollbar-thumb{background:rgba(14,165,233,0.35);border-radius:2px}
      `}</style>
    </div>
  );
}
