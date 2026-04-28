import { useState, useEffect, useRef } from "react";

const PHOTO = "https://base44.app/api/apps/69e9e364459ecbf538b7c62f/files/mp/public/69e9e364459ecbf538b7c62f/7c22df058_inon_profile_selected.jpg";

const DESIGNS = [
  {
    id: "FUSION",
    badge: "⭐ RECOMMENDED",
    label: "THE FUSION",
    tagline: "Silent House + Studio X + Jasmine Gunarto — synthesized",
    description: "All three previous directions merged into one: minimal dark authority (Silent House), editorial bold accent (Studio X), and warm human storytelling (Jasmine). The best of every world.",
    palette: ["#050c1a","#0ea5e9","#f59e0b","#fff"],
  },
  {
    id: "D",
    badge: "OPTION D",
    label: "DARK TERMINAL",
    tagline: "Hacker-meets-executive. Code aesthetic, data density, zero fluff.",
    description: "Monospace font, green-on-dark terminal feel, but elevated to C-suite. Inspired by Linear, Vercel, Stripe Docs. Signals: technical depth, precision, trust.",
    palette: ["#000","#00ff88","#1a1a1a","#fff"],
  },
  {
    id: "E",
    badge: "OPTION E",
    label: "MAGAZINE COVER",
    tagline: "Editorial spreads. Like a Forbes/Fast Company profile page.",
    description: "Full-bleed photography, editorial grid, pull quotes, feature-article layout. Signals: authority, press-worthy, executive presence. Inspired by Bloomberg, NYT Style.",
    palette: ["#f9f6f0","#111","#d4a017","#e8e0d0"],
  },
  {
    id: "F",
    badge: "OPTION F",
    label: "GLASSMORPHISM PREMIUM",
    tagline: "Frosted glass cards, depth layers, ambient light. Apple-meets-SaaS.",
    description: "Dark navy base, glowing glass cards, smooth gradients. Signals: premium SaaS product thinking, modern UI sensibility, attention to detail. Inspired by Raycast, Linear, Notion.",
    palette: ["#050c1a","#1e3a5f","rgba(255,255,255,0.1)","#0ea5e9"],
  },
  {
    id: "PRODUCT",
    badge: "🚀 ORIGINAL",
    label: "THE PRODUCT",
    tagline: "Your website IS a product. Structured as one.",
    description: "The entire homepage is a product case study: Problem (why hiring managers miss PMs like you) → Discovery → Solution (Inon) → My Role → Impact. Meta and powerful.",
    palette: ["#0a0f1e","#ff6b35","#0ea5e9","#fff"],
  },
  {
    id: "ORIGINAL",
    badge: "🎨 ORIGINAL",
    label: "THE TIMELINE",
    tagline: "Your career as an interactive scrollable story.",
    description: "A horizontal scrolling timeline. Each career chapter is a full-screen chapter with visuals, metrics, and story. Like a movie — you're the protagonist. Unlike anything a PM has done.",
    palette: ["#050c1a","#a855f7","#0ea5e9","#f59e0b"],
  },
];

export default function DesignOptions() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{
      minHeight:"100vh", background:"#050c1a", color:"#fff",
      fontFamily:"'Inter','Segoe UI',system-ui,sans-serif",
    }}>
      {/* PAGE HEADER */}
      <div style={{
        padding:"56px 5% 40px",
        background:"linear-gradient(135deg,#0f2040 0%,#050c1a 100%)",
        borderBottom:"1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
            <div style={{width:8,height:8,borderRadius:"50%",background:"#0ea5e9",boxShadow:"0 0 10px #0ea5e9"}}/>
            <span style={{color:"#0ea5e9",fontSize:11,fontWeight:700,letterSpacing:3}}>
              [PIXEL] + [IRIS] + [FELIX] — DESIGN SYSTEM REVIEW
            </span>
          </div>
          <h1 style={{fontSize:"clamp(28px,4vw,48px)",fontWeight:900,letterSpacing:-1.5,margin:"0 0 12px",lineHeight:1.1}}>
            6 Website Directions for Inon Baasov
          </h1>
          <p style={{color:"#64748b",fontSize:15,maxWidth:640,lineHeight:1.7,margin:0}}>
            Researched from Awwwards 2026 SOTD winners, Muzli top 100 portfolios, PM portfolio best practices.
            One is the Fusion of your 3 previous options. Two are original concepts. Pick one — Felix builds it.
          </p>
        </div>
      </div>

      {/* ALL 6 DESIGNS */}
      <div style={{padding:"48px 5%",maxWidth:1100,margin:"0 auto",display:"flex",flexDirection:"column",gap:64}}>

        {/* ═══ 1. FUSION ═══ */}
        <DesignBlock design={DESIGNS[0]} selected={selected} onSelect={setSelected}>
          <FusionPreview />
        </DesignBlock>

        {/* ═══ 2. DARK TERMINAL ═══ */}
        <DesignBlock design={DESIGNS[1]} selected={selected} onSelect={setSelected}>
          <TerminalPreview />
        </DesignBlock>

        {/* ═══ 3. MAGAZINE COVER ═══ */}
        <DesignBlock design={DESIGNS[2]} selected={selected} onSelect={setSelected}>
          <MagazinePreview />
        </DesignBlock>

        {/* ═══ 4. GLASSMORPHISM ═══ */}
        <DesignBlock design={DESIGNS[3]} selected={selected} onSelect={setSelected}>
          <GlassPreview />
        </DesignBlock>

        {/* ═══ 5. THE PRODUCT (narrative) ═══ */}
        <DesignBlock design={DESIGNS[4]} selected={selected} onSelect={setSelected}>
          <ProductNarrativePreview />
        </DesignBlock>

        {/* ═══ 6. THE TIMELINE ═══ */}
        <DesignBlock design={DESIGNS[5]} selected={selected} onSelect={setSelected}>
          <TimelinePreview />
        </DesignBlock>

      </div>

      {/* STICKY SELECTION BAR */}
      {selected && (
        <div style={{
          position:"fixed",bottom:0,left:0,right:0,zIndex:2000,
          background:"rgba(5,12,26,0.97)",backdropFilter:"blur(20px)",
          borderTop:"1px solid rgba(14,165,233,0.3)",
          padding:"16px 5%",display:"flex",alignItems:"center",justifyContent:"space-between",
          flexWrap:"wrap",gap:12,
        }}>
          <div>
            <span style={{color:"#64748b",fontSize:13}}>Selected: </span>
            <span style={{color:"#0ea5e9",fontWeight:800,fontSize:15}}>
              {DESIGNS.find(d=>d.id===selected)?.label}
            </span>
          </div>
          <div style={{display:"flex",gap:12}}>
            <button onClick={()=>setSelected(null)} style={{
              background:"transparent",border:"1px solid rgba(255,255,255,0.1)",
              color:"#64748b",borderRadius:8,padding:"10px 20px",fontSize:13,cursor:"pointer",
            }}>Change</button>
            <div style={{
              background:"#0ea5e9",borderRadius:8,padding:"10px 28px",
              fontSize:13,fontWeight:800,color:"#fff",
              boxShadow:"0 4px 20px rgba(14,165,233,0.4)",
            }}>✅ Tell Andy to build this →</div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── WRAPPER ─── */
function DesignBlock({design:d, selected, onSelect, children}){
  const isSelected = selected===d.id;
  const isFusion = d.id==="FUSION";
  const isOriginal = d.id==="PRODUCT"||d.id==="ORIGINAL";
  return (
    <div style={{
      border:`2px solid ${isSelected?"#0ea5e9":isFusion?"rgba(14,165,233,0.3)":isOriginal?"rgba(168,85,247,0.3)":"rgba(255,255,255,0.07)"}`,
      borderRadius:20,overflow:"hidden",
      boxShadow:isSelected?"0 0 60px rgba(14,165,233,0.2)":isFusion?"0 0 30px rgba(14,165,233,0.08)":"none",
      transition:"all 0.3s",
    }}>
      {/* Block header */}
      <div style={{
        padding:"20px 28px",
        background:isSelected?"rgba(14,165,233,0.08)":isFusion?"rgba(14,165,233,0.04)":isOriginal?"rgba(168,85,247,0.04)":"rgba(255,255,255,0.02)",
        display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,
        borderBottom:"1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{flex:1,minWidth:240}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
            <span style={{
              fontSize:10,fontWeight:900,letterSpacing:1.5,
              color:isFusion?"#f59e0b":isOriginal?"#a855f7":"#0ea5e9",
              background:isFusion?"rgba(245,158,11,0.12)":isOriginal?"rgba(168,85,247,0.12)":"rgba(14,165,233,0.12)",
              border:`1px solid ${isFusion?"rgba(245,158,11,0.3)":isOriginal?"rgba(168,85,247,0.3)":"rgba(14,165,233,0.3)"}`,
              borderRadius:100,padding:"3px 10px",
            }}>{d.badge}</span>
            {isSelected&&<span style={{fontSize:11,color:"#0ea5e9",fontWeight:700}}>✓ SELECTED</span>}
          </div>
          <div style={{fontWeight:900,fontSize:22,color:"#fff",letterSpacing:-0.5,marginBottom:6}}>{d.label}</div>
          <div style={{color:"#94a3b8",fontSize:14,fontStyle:"italic",marginBottom:8}}>{d.tagline}</div>
          <div style={{color:"#64748b",fontSize:13,lineHeight:1.6,maxWidth:500}}>{d.description}</div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:10,alignItems:"flex-end"}}>
          <div style={{display:"flex",gap:6}}>
            {d.palette.map((c,i)=>(
              <div key={i} style={{width:20,height:20,borderRadius:"50%",background:c,border:"1px solid rgba(255,255,255,0.15)",flexShrink:0}}/>
            ))}
          </div>
          <button onClick={()=>onSelect(d.id)} style={{
            background:isSelected?"#0ea5e9":"rgba(255,255,255,0.06)",
            border:`1px solid ${isSelected?"#0ea5e9":"rgba(255,255,255,0.12)"}`,
            color:"#fff",borderRadius:8,padding:"10px 24px",
            fontSize:13,fontWeight:700,cursor:"pointer",transition:"all 0.2s",whiteSpace:"nowrap",
          }}>
            {isSelected?"✓ Chosen":"Select This →"}
          </button>
        </div>
      </div>
      {/* Preview */}
      <div>{children}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PREVIEW 1 — FUSION (Silent House + Studio X + Jasmine)
═══════════════════════════════════════════════════════ */
function FusionPreview(){
  return (
    <div style={{background:"#050c1a",fontFamily:"'Inter',sans-serif"}}>
      {/* Nav — clean minimal (Silent House) with teal accent (Jasmine) */}
      <div style={{
        padding:"18px 36px",display:"flex",justifyContent:"space-between",alignItems:"center",
        borderBottom:"1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{fontWeight:900,fontSize:14,letterSpacing:3,color:"#fff"}}>
          <span style={{color:"#0ea5e9"}}>I</span>B
        </div>
        <div style={{display:"flex",gap:28,alignItems:"center"}}>
          {["Work","About","Contact"].map(l=>(
            <span key={l} style={{color:"rgba(255,255,255,0.35)",fontSize:12,letterSpacing:0.5}}>{l}</span>
          ))}
          <div style={{
            background:"#0ea5e9",borderRadius:8,padding:"7px 18px",
            fontSize:12,fontWeight:700,color:"#fff",
          }}>Hire Me</div>
        </div>
      </div>

      {/* Hero — massive type (Silent House) + photo right (Studio X) + gradient tag (Jasmine) */}
      <div style={{display:"flex",gap:0,minHeight:280,padding:"48px 36px 32px",position:"relative",overflow:"hidden"}}>
        {/* bg glow */}
        <div style={{
          position:"absolute",top:"-20%",right:"10%",width:400,height:400,borderRadius:"50%",
          background:"radial-gradient(circle,rgba(14,165,233,0.12) 0%,transparent 70%)",pointerEvents:"none",
        }}/>
        {/* Left text */}
        <div style={{flex:1,position:"relative",zIndex:1}}>
          {/* Status badge — Jasmine-style */}
          <div style={{
            display:"inline-flex",alignItems:"center",gap:6,
            background:"rgba(14,165,233,0.1)",border:"1px solid rgba(14,165,233,0.3)",
            borderRadius:100,padding:"5px 14px",marginBottom:24,
          }}>
            <span style={{width:6,height:6,borderRadius:"50%",background:"#0ea5e9",display:"inline-block"}}/>
            <span style={{fontSize:10,color:"#0ea5e9",fontWeight:700,letterSpacing:1.5}}>OPEN TO SENIOR PM / CPO ROLES</span>
          </div>
          {/* Giant name — Silent House */}
          <div style={{
            fontSize:"clamp(52px,7vw,80px)",fontWeight:900,lineHeight:0.9,
            letterSpacing:-4,color:"#fff",marginBottom:20,
          }}>
            Inon<br/>Baasov
          </div>
          {/* Orange accent line — Studio X influence */}
          <div style={{width:48,height:3,background:"#f59e0b",borderRadius:2,marginBottom:20}}/>
          <div style={{color:"rgba(255,255,255,0.45)",fontSize:14,lineHeight:1.8,maxWidth:360,marginBottom:28}}>
            Product Leader · Co-Founder · CPO<br/>
            $2.5M raised · 38% efficiency · 99.99% uptime
          </div>
          {/* CTAs */}
          <div style={{display:"flex",gap:12}}>
            <div style={{
              background:"#0ea5e9",color:"#fff",borderRadius:10,
              padding:"12px 28px",fontSize:13,fontWeight:700,
              boxShadow:"0 6px 24px rgba(14,165,233,0.35)",
            }}>View Portfolio →</div>
            <div style={{
              border:"1px solid rgba(255,255,255,0.1)",color:"#fff",
              borderRadius:10,padding:"12px 24px",fontSize:13,fontWeight:500,
            }}>Let's Talk</div>
          </div>
        </div>
        {/* Photo — Studio X placement, Jasmine gradient ring */}
        <div style={{flexShrink:0,alignSelf:"center",position:"relative",zIndex:1}}>
          <div style={{
            width:180,height:180,borderRadius:"50%",
            background:"conic-gradient(#0ea5e9 0%,#f59e0b 50%,#0ea5e9 100%)",
            padding:2,
          }}>
            <div style={{width:"100%",height:"100%",borderRadius:"50%",overflow:"hidden"}}>
              <img src={PHOTO} alt="Inon" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top"}}/>
            </div>
          </div>
        </div>
      </div>

      {/* Stats row — Studio X metrics + Silent House restraint */}
      <div style={{
        display:"flex",gap:0,padding:"0 36px",
        borderTop:"1px solid rgba(255,255,255,0.05)",
        borderBottom:"1px solid rgba(255,255,255,0.05)",
      }}>
        {[["$2.5M","Raised"],["38%","Efficiency"],["99.99%","Uptime"],["6","Products"]].map(([n,l],i)=>(
          <div key={l} style={{
            flex:1,padding:"20px 0",textAlign:"center",
            borderLeft:i>0?"1px solid rgba(255,255,255,0.05)":"none",
          }}>
            <div style={{fontSize:22,fontWeight:900,color:"#0ea5e9"}}>{n}</div>
            <div style={{fontSize:10,color:"rgba(255,255,255,0.25)",letterSpacing:1,marginTop:4}}>{l.toUpperCase()}</div>
          </div>
        ))}
      </div>

      {/* Products — numbered cards, editorial feel */}
      <div style={{padding:"28px 36px 36px"}}>
        <div style={{
          display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,
        }}>
          <span style={{color:"rgba(255,255,255,0.2)",fontSize:10,letterSpacing:3,fontWeight:700}}>SELECTED PRODUCTS</span>
          <span style={{color:"#0ea5e9",fontSize:11,fontWeight:700}}>VIEW ALL →</span>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
          {[
            {n:"01",t:"TouchE",sub:"AI Interactive Video",m:"$2.5M · CPO",color:"#0ea5e9"},
            {n:"02",t:"TradePulse",sub:"FinTech Journal",m:"Live Product",color:"#f59e0b"},
            {n:"03",t:"Family Flow",sub:"Consumer App",m:"Live · Hebrew",color:"#10b981"},
          ].map(p=>(
            <div key={p.n} style={{
              background:"rgba(255,255,255,0.03)",border:`1px solid rgba(255,255,255,0.07)`,
              borderRadius:12,padding:"18px 16px",
              borderTop:`3px solid ${p.color}`,
            }}>
              <div style={{color:"rgba(255,255,255,0.15)",fontSize:10,fontWeight:700,marginBottom:8}}>{p.n}</div>
              <div style={{color:"#fff",fontWeight:800,fontSize:16,marginBottom:4}}>{p.t}</div>
              <div style={{color:"rgba(255,255,255,0.35)",fontSize:12,marginBottom:10}}>{p.sub}</div>
              <div style={{color:p.color,fontSize:11,fontWeight:700}}>{p.m}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PREVIEW 2 — DARK TERMINAL
═══════════════════════════════════════════════════════ */
function TerminalPreview(){
  const [tick, setTick] = useState(true);
  useEffect(()=>{
    const t = setInterval(()=>setTick(p=>!p),600);
    return()=>clearInterval(t);
  },[]);
  return (
    <div style={{background:"#000",fontFamily:"'Courier New',monospace"}}>
      {/* Terminal top bar */}
      <div style={{
        background:"#111",padding:"10px 24px",display:"flex",alignItems:"center",gap:8,
        borderBottom:"1px solid #1a1a1a",
      }}>
        {["#ff5f56","#ffbd2e","#27c93f"].map(c=>(
          <div key={c} style={{width:12,height:12,borderRadius:"50%",background:c}}/>
        ))}
        <span style={{color:"rgba(255,255,255,0.2)",fontSize:11,marginLeft:12,letterSpacing:1}}>inon-baasov.sh</span>
      </div>

      <div style={{padding:"32px 36px"}}>
        {/* Terminal output */}
        <div style={{marginBottom:24}}>
          <div style={{color:"rgba(0,255,136,0.4)",fontSize:12,marginBottom:4}}>$ whoami</div>
          <div style={{color:"#00ff88",fontSize:18,fontWeight:700,letterSpacing:-0.5,marginBottom:12}}>
            Inon Baasov{tick?<span style={{background:"#00ff88",color:"#000",marginLeft:4}}>█</span>:null}
          </div>
          <div style={{color:"rgba(0,255,136,0.4)",fontSize:12,marginBottom:4}}>$ cat profile.json</div>
          <div style={{
            background:"#0a0a0a",border:"1px solid #1a1a1a",borderRadius:8,
            padding:"16px 20px",fontSize:12,lineHeight:1.9,color:"rgba(255,255,255,0.7)",
          }}>
            <span style={{color:"#888"}}>{"{"}</span><br/>
            <span style={{color:"rgba(255,255,255,0.3)",marginLeft:16}}>"role":</span>
            <span style={{color:"#00ff88"}}> "Co-Founder & CPO"</span>,<br/>
            <span style={{color:"rgba(255,255,255,0.3)",marginLeft:16}}>"raised":</span>
            <span style={{color:"#f59e0b"}}> "$2.5M"</span>,<br/>
            <span style={{color:"rgba(255,255,255,0.3)",marginLeft:16}}>"efficiency_gain":</span>
            <span style={{color:"#f59e0b"}}> "38%"</span>,<br/>
            <span style={{color:"rgba(255,255,255,0.3)",marginLeft:16}}>"status":</span>
            <span style={{color:"#00ff88"}}> "open_to_hire"</span><br/>
            <span style={{color:"#888"}}>{"}"}</span>
          </div>
        </div>
        {/* Products as directory listing */}
        <div>
          <div style={{color:"rgba(0,255,136,0.4)",fontSize:12,marginBottom:8}}>$ ls products/</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
            {[
              {name:"touche/",desc:"AI video · $2.5M · CPO",color:"#00ff88"},
              {name:"tradepulse/",desc:"FinTech · Live · Analytics",color:"#00ccff"},
              {name:"family-flow/",desc:"Consumer · Hebrew · Live",color:"#ff9500"},
            ].map(p=>(
              <div key={p.name} style={{
                background:"#0a0a0a",border:"1px solid #1a1a1a",
                borderRadius:6,padding:"12px 14px",
              }}>
                <div style={{color:p.color,fontSize:13,fontWeight:700,marginBottom:4}}>{p.name}</div>
                <div style={{color:"rgba(255,255,255,0.3)",fontSize:11}}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PREVIEW 3 — MAGAZINE COVER (light)
═══════════════════════════════════════════════════════ */
function MagazinePreview(){
  return (
    <div style={{background:"#f4f1eb",fontFamily:"'Georgia',serif",color:"#111"}}>
      {/* Masthead */}
      <div style={{
        background:"#111",padding:"14px 36px",
        display:"flex",justifyContent:"space-between",alignItems:"center",
      }}>
        <span style={{color:"#f4f1eb",fontWeight:900,fontSize:18,letterSpacing:3}}>PORTFOLIO</span>
        <span style={{color:"rgba(255,255,255,0.4)",fontSize:11,letterSpacing:2}}>ISSUE 2026 · INON BAASOV</span>
        <span style={{color:"#d4a017",fontSize:11,fontWeight:700,letterSpacing:1}}>CPO · PRODUCT LEADER</span>
      </div>
      {/* Feature spread */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",minHeight:300}}>
        {/* Left — photo */}
        <div style={{position:"relative",overflow:"hidden",background:"#222",minHeight:260}}>
          <img src={PHOTO} alt="Inon" style={{
            width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top",
            filter:"sepia(15%) contrast(1.05)",
          }}/>
          {/* Caption */}
          <div style={{
            position:"absolute",bottom:0,left:0,right:0,
            background:"linear-gradient(to top,rgba(0,0,0,0.9),transparent)",
            padding:"28px 20px 16px",
          }}>
            <div style={{color:"rgba(255,255,255,0.5)",fontSize:10,letterSpacing:2,marginBottom:4}}>PHOTOGRAPHED SEPT 2025</div>
            <div style={{color:"#fff",fontWeight:700,fontSize:14}}>Inon Baasov</div>
          </div>
        </div>
        {/* Right — editorial copy */}
        <div style={{padding:"32px 28px",background:"#f4f1eb"}}>
          <div style={{
            fontSize:10,fontWeight:900,letterSpacing:3,color:"#d4a017",
            borderBottom:"2px solid #d4a017",paddingBottom:8,marginBottom:20,display:"inline-block",
          }}>EXECUTIVE PROFILE</div>
          <div style={{
            fontSize:"clamp(26px,3vw,38px)",fontWeight:900,lineHeight:1.05,
            letterSpacing:-1,color:"#111",marginBottom:16,fontFamily:"'Georgia',serif",
          }}>
            "The PM<br/>Who Ships,<br/>Scales & Leads."
          </div>
          <div style={{
            color:"#555",fontSize:13,lineHeight:1.9,borderLeft:"3px solid #d4a017",
            paddingLeft:14,marginBottom:20,fontStyle:"italic",
          }}>
            From Technion labs to raising $2.5M in AI venture capital — Inon Baasov has spent a decade turning product vision into enterprise reality.
          </div>
          {/* Stats in editorial style */}
          <div style={{display:"flex",gap:24,marginTop:16}}>
            {[["$2.5M","RAISED"],["38%","EFFICIENCY"],["10+","YEARS"]].map(([n,l])=>(
              <div key={l}>
                <div style={{fontSize:22,fontWeight:900,color:"#111",fontFamily:"'Georgia',serif"}}>{n}</div>
                <div style={{fontSize:9,color:"#999",letterSpacing:2,marginTop:2}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Product strip */}
      <div style={{
        background:"#111",padding:"16px 36px",
        display:"flex",gap:0,
      }}>
        {[
          {t:"TouchE",sub:"AI Video Platform"},
          {t:"TradePulse",sub:"FinTech Analytics"},
          {t:"Family Flow",sub:"Consumer App"},
          {t:"AiRakoon",sub:"Enterprise AI"},
        ].map((p,i)=>(
          <div key={p.t} style={{
            flex:1,padding:"0 20px",
            borderLeft:i>0?"1px solid rgba(255,255,255,0.1)":"none",
          }}>
            <div style={{color:"#d4a017",fontSize:11,fontWeight:700,marginBottom:2}}>{p.t}</div>
            <div style={{color:"rgba(255,255,255,0.35)",fontSize:11}}>{p.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PREVIEW 4 — GLASSMORPHISM PREMIUM
═══════════════════════════════════════════════════════ */
function GlassPreview(){
  return (
    <div style={{
      background:"linear-gradient(135deg,#050c1a 0%,#0a1f3d 50%,#061525 100%)",
      fontFamily:"'Inter',sans-serif",padding:"28px 32px",
      position:"relative",overflow:"hidden",
    }}>
      {/* Ambient blobs */}
      {[
        {top:"-10%",left:"20%",w:300,h:300,c:"rgba(14,165,233,0.12)"},
        {top:"40%",right:"5%",w:200,h:200,c:"rgba(99,102,241,0.1)"},
        {bottom:"-5%",left:"40%",w:250,h:250,c:"rgba(245,158,11,0.07)"},
      ].map((b,i)=>(
        <div key={i} style={{
          position:"absolute",width:b.w,height:b.h,borderRadius:"50%",
          background:`radial-gradient(circle,${b.c},transparent 70%)`,
          top:b.top,left:b.left,right:b.right,bottom:b.bottom,pointerEvents:"none",
        }}/>
      ))}

      {/* Glass nav */}
      <div style={{
        background:"rgba(255,255,255,0.04)",backdropFilter:"blur(20px)",
        border:"1px solid rgba(255,255,255,0.08)",borderRadius:14,
        padding:"12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",
        marginBottom:28,position:"relative",zIndex:1,
      }}>
        <span style={{fontWeight:900,fontSize:14,color:"#fff",letterSpacing:1}}>
          <span style={{color:"#0ea5e9"}}>I</span>NON BAASOV
        </span>
        <div style={{display:"flex",gap:20}}>
          {["Work","About","Contact"].map(l=>(
            <span key={l} style={{color:"rgba(255,255,255,0.4)",fontSize:12}}>{l}</span>
          ))}
        </div>
      </div>

      {/* Hero glass card */}
      <div style={{
        background:"rgba(255,255,255,0.05)",backdropFilter:"blur(30px)",
        border:"1px solid rgba(255,255,255,0.1)",borderRadius:20,
        padding:"32px",marginBottom:20,position:"relative",zIndex:1,
        display:"flex",gap:28,alignItems:"center",
      }}>
        <div style={{
          width:90,height:90,borderRadius:"50%",overflow:"hidden",flexShrink:0,
          border:"2px solid rgba(14,165,233,0.5)",
          boxShadow:"0 0 30px rgba(14,165,233,0.3)",
        }}>
          <img src={PHOTO} alt="Inon" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top"}}/>
        </div>
        <div style={{flex:1}}>
          <div style={{
            display:"inline-flex",alignItems:"center",gap:6,
            background:"rgba(14,165,233,0.15)",border:"1px solid rgba(14,165,233,0.3)",
            borderRadius:100,padding:"4px 12px",marginBottom:12,
          }}>
            <span style={{width:5,height:5,borderRadius:"50%",background:"#0ea5e9",display:"inline-block"}}/>
            <span style={{color:"#0ea5e9",fontSize:10,fontWeight:700,letterSpacing:1}}>OPEN TO HIRE</span>
          </div>
          <div style={{fontSize:28,fontWeight:900,color:"#fff",letterSpacing:-1,marginBottom:6}}>Inon Baasov</div>
          <div style={{color:"rgba(255,255,255,0.4)",fontSize:13}}>Co-Founder · CPO · Product Leader · $2.5M raised</div>
        </div>
        <div style={{
          background:"linear-gradient(135deg,#0ea5e9,#6366f1)",
          borderRadius:10,padding:"10px 20px",fontSize:12,fontWeight:700,color:"#fff",flexShrink:0,
        }}>Hire Me</div>
      </div>

      {/* Glass product cards */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,position:"relative",zIndex:1}}>
        {[
          {t:"TouchE",sub:"AI Video",m:"$2.5M",glow:"rgba(14,165,233,0.2)"},
          {t:"TradePulse",sub:"FinTech",m:"Live",glow:"rgba(245,158,11,0.15)"},
          {t:"Family Flow",sub:"Consumer",m:"Live",glow:"rgba(16,185,129,0.15)"},
        ].map(p=>(
          <div key={p.t} style={{
            background:"rgba(255,255,255,0.04)",backdropFilter:"blur(20px)",
            border:"1px solid rgba(255,255,255,0.08)",borderRadius:14,
            padding:"18px 16px",boxShadow:`0 8px 32px ${p.glow}`,
            transition:"transform 0.2s",
          }}>
            <div style={{fontWeight:800,fontSize:16,color:"#fff",marginBottom:4}}>{p.t}</div>
            <div style={{color:"rgba(255,255,255,0.3)",fontSize:12,marginBottom:10}}>{p.sub}</div>
            <div style={{
              display:"inline-block",background:"rgba(14,165,233,0.15)",
              color:"#0ea5e9",fontSize:10,fontWeight:700,borderRadius:100,padding:"3px 10px",
            }}>{p.m}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PREVIEW 5 — THE PRODUCT (narrative case study)
═══════════════════════════════════════════════════════ */
function ProductNarrativePreview(){
  const steps = [
    {id:"01",label:"PROBLEM",title:"Hiring managers can't evaluate PMs from a resume.",desc:"A CV shows titles. It doesn't show judgment, taste, or what a person actually built. Senior PMs are invisible in a document-first process.",color:"#ff6b35"},
    {id:"02",label:"DISCOVERY",title:"What do hiring managers actually want to see?",desc:"Shipped products. Quantified impact. End-to-end thinking. A person who can own a problem from 0 to scale.",color:"#0ea5e9"},
    {id:"03",label:"SOLUTION",title:"Meet Inon Baasov.",desc:"10+ years of shipped, scaled, and led. $2.5M raised. 6 live products. The PM who doesn't just plan — he builds.",color:"#10b981"},
    {id:"04",label:"MY ROLE",title:"Co-Founder / CPO / Senior PM / Consultant.",desc:"Owned product vision, roadmap, team, and delivery — simultaneously, at scale, in regulated, enterprise, and consumer markets.",color:"#f59e0b"},
    {id:"05",label:"IMPACT",title:"38% efficiency. $2.5M. 99.99% uptime. 6 products.",desc:"Not projected. Delivered. Every number on this page is something that happened in the real world.",color:"#a855f7"},
  ];
  return (
    <div style={{background:"#0a0f1e",fontFamily:"'Inter',sans-serif"}}>
      {/* Top bar */}
      <div style={{
        background:"#ff6b35",padding:"12px 32px",
        display:"flex",justifyContent:"space-between",alignItems:"center",
      }}>
        <span style={{color:"#fff",fontWeight:900,fontSize:13,letterSpacing:2}}>PRODUCT CASE STUDY: INON BAASOV</span>
        <span style={{color:"rgba(255,255,255,0.7)",fontSize:11}}>v2026.1 · Status: OPEN TO HIRE</span>
      </div>

      {/* Steps */}
      <div style={{padding:"28px 32px"}}>
        {steps.map((s,i)=>(
          <div key={s.id} style={{
            display:"flex",gap:20,paddingBottom:i<steps.length-1?24:0,
            position:"relative",
          }}>
            {i<steps.length-1&&(
              <div style={{
                position:"absolute",left:19,top:40,bottom:0,width:1,
                background:"rgba(255,255,255,0.06)",
              }}/>
            )}
            <div style={{
              width:38,height:38,borderRadius:"50%",flexShrink:0,
              background:`${s.color}20`,border:`2px solid ${s.color}`,
              display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:10,fontWeight:900,color:s.color,
            }}>{s.id}</div>
            <div style={{flex:1}}>
              <div style={{
                fontSize:9,fontWeight:900,color:s.color,letterSpacing:2,marginBottom:4,
              }}>{s.label}</div>
              <div style={{fontWeight:800,fontSize:15,color:"#fff",marginBottom:4}}>{s.title}</div>
              <div style={{color:"rgba(255,255,255,0.4)",fontSize:13,lineHeight:1.65}}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{
        margin:"0 32px 32px",background:"rgba(255,107,53,0.1)",
        border:"1px solid rgba(255,107,53,0.3)",borderRadius:12,
        padding:"18px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",
      }}>
        <div style={{color:"rgba(255,255,255,0.6)",fontSize:13}}>
          Ready to add Inon to your roadmap?
        </div>
        <div style={{
          background:"#ff6b35",color:"#fff",borderRadius:8,
          padding:"10px 24px",fontSize:13,fontWeight:700,
        }}>Get in Touch →</div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PREVIEW 6 — THE TIMELINE (horizontal chapters)
═══════════════════════════════════════════════════════ */
function TimelinePreview(){
  const [active, setActive] = useState(2);
  const chapters = [
    {y:"2005–09",ch:"01",title:"The Engineer",co:"Technion + McGill",desc:"B.Sc. Biotechnology & Engineering. Built a foundation in systems thinking, data, and precision.",color:"#a855f7",emoji:"🔬"},
    {y:"2009–13",ch:"02",title:"The Regulator",co:"Blau Pharma",desc:"Israeli MoH. Pharmacovigilance dept head. Learned to operate in zero-tolerance environments.",color:"#6366f1",emoji:"⚗️"},
    {y:"2013–18",ch:"03",title:"The PM",co:"Arena Plus",desc:"FinTech PM → Senior PM. +22% adoption. +15% revenue. First experience owning a product at scale.",color:"#0ea5e9",emoji:"📊"},
    {y:"2018–24",ch:"04",title:"The Founder",co:"TouchE TV",desc:"Co-Founder & CPO. Raised $2.5M. Built AI video platform from 0. 99.99% uptime. JVP, Paramount, Lion's Gate.",color:"#f59e0b",emoji:"🚀"},
    {y:"2024–Now",ch:"05",title:"The Architect",co:"Consulting",desc:"Advising startups on AI product strategy. AiRakoon, Smash+, Medicrowd. Building in public.",color:"#10b981",emoji:"🎯"},
  ];
  return (
    <div style={{background:"#050c1a",fontFamily:"'Inter',sans-serif"}}>
      {/* Chapter nav dots */}
      <div style={{
        padding:"20px 32px",borderBottom:"1px solid rgba(255,255,255,0.05)",
        display:"flex",alignItems:"center",gap:0,overflowX:"auto",
      }}>
        {chapters.map((c,i)=>(
          <div key={i} onClick={()=>setActive(i)} style={{
            flex:"0 0 auto",display:"flex",alignItems:"center",gap:0,cursor:"pointer",
          }}>
            <div style={{
              width:36,height:36,borderRadius:"50%",
              background:active===i?c.color:`${c.color}20`,
              border:`2px solid ${active===i?c.color:`${c.color}40`}`,
              display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:12,fontWeight:700,color:active===i?"#000":"rgba(255,255,255,0.4)",
              transition:"all 0.25s",flexShrink:0,
            }}>{c.ch}</div>
            {i<chapters.length-1&&(
              <div style={{
                width:48,height:1,
                background:`linear-gradient(to right,${c.color}60,${chapters[i+1].color}60)`,
                flexShrink:0,
              }}/>
            )}
          </div>
        ))}
        <div style={{color:"rgba(255,255,255,0.2)",fontSize:11,marginLeft:16,letterSpacing:1,flexShrink:0}}>
          TAP TO EXPLORE
        </div>
      </div>

      {/* Active chapter */}
      {chapters[active] && (() => {
        const c = chapters[active];
        return (
          <div style={{padding:"28px 32px",display:"flex",gap:24,alignItems:"flex-start"}}>
            <div style={{
              width:56,height:56,borderRadius:16,
              background:`${c.color}20`,border:`2px solid ${c.color}40`,
              display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:24,flexShrink:0,
            }}>{c.emoji}</div>
            <div style={{flex:1}}>
              <div style={{color:c.color,fontSize:10,fontWeight:700,letterSpacing:2,marginBottom:6}}>{c.y} · CHAPTER {c.ch}</div>
              <div style={{fontWeight:900,fontSize:22,color:"#fff",letterSpacing:-0.5,marginBottom:4}}>{c.title}</div>
              <div style={{color:"rgba(255,255,255,0.35)",fontSize:12,fontWeight:600,marginBottom:10}}>{c.co}</div>
              <div style={{color:"rgba(255,255,255,0.55)",fontSize:14,lineHeight:1.7}}>{c.desc}</div>
            </div>
            {/* Progress bar */}
            <div style={{display:"flex",flexDirection:"column",gap:6,flexShrink:0}}>
              {chapters.map((_,i)=>(
                <div key={i} style={{
                  width:3,height:i===active?32:16,borderRadius:2,
                  background:i===active?c.color:"rgba(255,255,255,0.1)",
                  transition:"height 0.3s",cursor:"pointer",
                }} onClick={()=>setActive(i)}/>
              ))}
            </div>
          </div>
        );
      })()}

      {/* Bottom strip */}
      <div style={{
        background:"rgba(255,255,255,0.02)",
        borderTop:"1px solid rgba(255,255,255,0.05)",
        padding:"14px 32px",
        display:"flex",gap:32,
      }}>
        {[["$2.5M","Raised"],["10+","Years"],["6","Products"],["99.99%","Uptime"]].map(([n,l])=>(
          <div key={l}>
            <span style={{fontWeight:900,fontSize:16,color:chapters[active].color}}>{n} </span>
            <span style={{color:"rgba(255,255,255,0.2)",fontSize:11}}>{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
