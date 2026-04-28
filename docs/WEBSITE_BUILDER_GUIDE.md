# Guide: Build Inon's Full Website in Base44 App Builder
## Created by Calvin | 2026-04-28

---

## Why a full app vs. mini-app?

The current website (inonbaasov-website.base44.app) is a **mini-app** — it lives inside Calvin (this Superagent). 
It's powerful but has limitations:
- Can't have multiple routes / pages with different URLs
- Can't have user authentication
- Can't connect custom domain easily
- No full Base44 2-way GitHub sync

A **full Base44 App** gives you:
- Multiple pages (Home, Portfolio, Contact, Blog, etc.)
- Your own domain (inonbaasov.com or similar)
- Real-time 2-way GitHub sync → edit in GitHub → auto-deploys
- Entity-backed dynamic content (pull from MasterExperienceDatabase)
- Full analytics dashboard
- Contact form that stores leads in a database

---

## Step 1: Go to app.base44.com

Open: https://app.base44.com
Click **"New App"** → Choose **"Start from scratch"** (blank canvas)
Name it: `Inon Baasov Portfolio`

---

## Step 2: Connect GitHub immediately

Once inside the app editor:
1. Click **Dashboard** (top left)
2. Click **Integrations**
3. Find **GitHub** → click **Connect**
4. Authorize → select repo: `InonB2/inon-baasov-website`
5. This enables 2-way sync: Base44 ↔ GitHub

---

## Step 3: Paste this master prompt into the AI chat

Copy-paste this EXACTLY into the Base44 AI chat:

```
Build me a professional portfolio website for Inon Baasov — Product Leader and Co-Founder.

IDENTITY:
Name: Inon Baasov
Title: Product Manager | Co-Founder | AI Product Strategist
Photo: https://base44.app/api/apps/69e9e364459ecbf538b7c62f/files/mp/public/69e9e364459ecbf538b7c62f/7c22df058_inon_profile_selected.jpg
LinkedIn: linkedin.com/in/inonbaasov
Email: Inonbaasov@gmail.com

DESIGN SYSTEM:
- Dark theme. Background: #050c1a (near-black navy)
- Primary accent: #0ea5e9 (teal/sky blue)
- Secondary accent: #f59e0b (amber)
- White text on dark backgrounds
- Font: Inter or system-ui, clean sans-serif
- Typography hierarchy: H1 very large and bold, H2 medium bold, body 15px
- Micro-animations: fade-in on scroll for each section
- Custom cursor: small dot + ring that follows mouse
- Animated number counters on metrics when scrolled into view
- Mobile responsive, mobile-first
- All content in FIRST PERSON ("I built", "I raised", "I led")

PAGES (create all of these):
1. Home / Hero
2. About
3. Portfolio / Products
4. Career Timeline
5. Contact

PAGE 1 — HOME / HERO:
- Large headline: "I Build Products That Scale."
- Subheadline: "Product Manager · Co-Founder · AI Strategist · 10+ Years · Technion MBA"
- Profile photo (centered, with glowing teal ring)
- 4 animated metric counters: $2.5M Raised | 99.99% Uptime | 38% Efficiency ↑ | Millions of Users
- CTA buttons: "See My Work →" and "Download CV →"
- Subtle floating background blobs (teal and amber, very low opacity)

PAGE 2 — ABOUT:
- Headline: "I build the products I wish existed."
- 3 paragraphs in first person describing Inon's journey
- Chapter cards (5 chapters): Engineering (Technion) → Pharma/QA → FinTech PM (Arena Plus) → Founder (TouchE) → Consultant
- Skills grid: Product Strategy | Agile/Scrum | System Architecture | AI/ML Products | FinTech | Team Leadership | B2B Enterprise | Fundraising

PAGE 3 — PORTFOLIO:
4 product cards. Each card expands into a full case study modal.

Product 1: TouchE TV
- Tag: FLAGSHIP · 2018–2024
- Subtitle: AI-Powered Interactive Video Platform
- Role: Co-Founder & CPO
- Metrics: $2.5M Raised | 99.99% Uptime | 38% Efficiency ↑ | 24% Engagement ↑
- Case study (Nancy Li framework): Problem → Process → Solution → My Role → Impact → Learnings
- Problem: Streaming platforms losing revenue from passive viewing — 96% ad skip rates, zero commerce conversion
- Solution: AI interactive video layer with Creator CMS, Viewer SDK, AI Recommendation Engine, Analytics
- Impact: $2.5M raised, millions concurrent users, clients: HOT, Ozon, Paramount, JVP, Lion's Gate

Product 2: TradePulse Journal Pro
- Tag: LIVE · 2024
- Link: https://trade-pulse-journal-pro.base44.app
- Metrics: Live | FinTech | 3 weeks 0→Live
- Problem: Retail traders lose capital from emotional decisions — no tool tracked psychology alongside P&L

Product 3: Family Flow
- Tag: LIVE · 2024
- Link: https://family-flow-he.lovable.app/
- Hebrew-first RTL family task app
- Metrics: Live | Hebrew RTL | 2 weeks build

Product 4: AiRakoon (Consulting)
- Tag: CONSULTING · 2024–NOW
- GenAI enterprise strategy
- First pilot closed

PAGE 4 — CAREER TIMELINE:
Vertical timeline with 5 chapters:
2000–2003: Israeli Air Force, Planning & Control Department
2005–2008: Technion B.Sc. Engineering
2009–2013: Pharma & QA (Blau, Pharmabest, Protalix)
2013–2018: FinTech PM at Arena Plus (Senior PM)
2018–2024: Co-Founder & CPO at TouchE ($2.5M raised)
2024–Now: Consultant & Builder (Inon Baasov Ltd)
Also: 2018 Executive MBA, Technion

PAGE 5 — CONTACT:
- Headline: "Let's build something great."
- Contact form: Name, Email, Message, "What are you looking for?" dropdown (Job Opportunity / Consulting / Partnership / Other)
- Save form submissions to a Contact entity in the database
- Social links: LinkedIn, Email, GitHub
- CTA: "Download my CV →" (link to latest CV PDF)
- Location: Israel (open to remote & relocation)

ENTITIES TO CREATE:
1. Contact — fields: name, email, message, inquiry_type, status
2. CVDownload — track who downloaded CV: email, timestamp, source

TAB TITLE: "Inon Baasov — Product Leader & Co-Founder"
FAVICON: Use a "IB" text favicon in teal color

Make every section scroll-reveal animated. Add a sticky header with nav links. Add a footer with copyright 2025 Inon Baasov.
```

---

## Step 4: After the app is created

1. **Connect your domain** (if you have inonbaasov.com or similar):
   - App Settings → Custom Domain → add your domain
   
2. **Enable GitHub 2-way sync**:
   - Dashboard → Integrations → GitHub → Enable sync with `InonB2/inon-baasov-website`
   - From this point: edit `pages/Home.jsx` on GitHub → Base44 auto-deploys

3. **Share the URL** with Calvin — I'll update all CVs and LinkedIn to point to the new domain

---

## Step 5: Tell Calvin the new URL

Once live, tell me: "Calvin, the website is live at [URL]"
I will:
- Update all CV PDFs with the new URL
- Update the website auto-sync automation target
- Update USER.md and memory with the new link

---

## What you'll have after:
✅ Full multi-page website
✅ Custom domain support
✅ Real-time GitHub 2-way sync (edit in GitHub → auto-deploys)
✅ Contact form saving leads to database
✅ Full analytics (Base44 built-in)
✅ Mobile responsive
✅ All the Fusion design work already done (just migrate Home.jsx)
