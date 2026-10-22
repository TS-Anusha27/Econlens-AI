# EconLens AI — Discovering Hidden Economic Opportunities & Bottlenecks

> **An Explainable AI Economic Intelligence Platform for Regional Policy, Development, and Investment**
> 
> Live Production URL: [https://econlens-ai-five.vercel.app/](https://econlens-ai-five.vercel.app/)

---

## 🌟 The Core Purpose

**EconLens AI** helps policymakers, district administrators, investors, and researchers understand the economic condition of any selected geographical area, discover why it may not be reaching its full potential, and explore how practical interventions could reshape its future.

The platform answers three foundational questions for every locality:
1. **WHERE ARE WE NOW?** — What drives this economy, how do people earn their livelihoods, and what are its core strengths and gaps?
2. **WHAT SHOULD WE DO?** — What ranked structural bottlenecks are holding it back, and what actionable, costed interventions should be implemented?
3. **WHAT COULD HAPPEN NEXT?** — How will output, employment, and growth evolve over 1, 3, 5, and 10 years if action is taken versus status quo?

---

## 🗺️ 4-Tier Geographical Selection System

The user journey is structured around an authoritative 4-tier dependent hierarchy:
```
Country → State / Province / Region → City / District → Local Area / Taluk
```

### Showcase Pilot Demonstration
- **Selection**: `India → Tamil Nadu → Coimbatore District → Pollachi`
- **Economic Profile**:
  - **Primary Drivers**: Coconut & Plantation Agriculture (42.5% GVA), Coir Fiber & Agro-Processing (26.2% GVA), Mandi Trading (16.8% GVA), Eco-Tourism & Hospitality (14.5% GVA).
  - **Key Bottlenecks**: 28.5% post-harvest cold chain loss in coconuts and spices; monsoon open-air coir drying shutdowns; lack of a dedicated air-cargo feeder link to Coimbatore Airport.
  - **Action Plan**:
    - ⚡ **Quick Wins (0–12m)**: Decentralized 50T Solar Packhouses (₹14.5 Cr), ONDC Digital Mandi Integration (₹4.8 Cr).
    - 🛠️ **Medium-Term (1–3y)**: Pollachi Coir Pith Value-Addition Cluster (₹32 Cr), Farm-to-Flight Air Cargo Shuttle (₹22 Cr).
    - 🏛️ **Long-Term (3–10y)**: Pollachi Agro-Eco Tourism Corridor & Certified Brand Consortium (₹48 Cr).
  - **What-If Simulations**: 1-year, 3-year, 5-year, and 10-year projection horizons comparing Current Trajectory vs Improvement Plan vs Accelerated Development.

Other covered benchmark regions include **Coimbatore Urban**, **Chennai (OMR & Ambattur)**, **Tiruppur (Knitwear)**, **Salem (Sago & Steel)**, **Bengaluru Urban (Whitefield)**, **Pune (Chakan Auto Hub)**, **Varanasi (Ganga River Port)**, and **Santa Clara County (Silicon Valley)**.

---

## 🎨 Mandatory Light Theme Design System

The application strictly implements a clean, premium **Light Theme**:
- **Main page background**: `#F7F9FC`
- **Cards & panels**: `#FFFFFF` with subtle border `#E2E8F0` and soft elevation
- **Typography**: Deep navy `#14213D` for headings, `#64748B` for secondary text
- **Primary action blue**: `#2563EB`
- **Teal growth & positive indicators**: `#0D9488` (bg: `#F0FDFA`, border: `#99F6E4`)
- **Orange bottleneck warnings**: `#F97316` (bg: `#FFF7ED`, border: `#FED7AA`)
- **Error & critical indicators**: `#DC2626` (bg: `#FEF2F2`)

---

## 🏗️ Architecture & Sections

1. **Executive Summary & Breadcrumb**: Clear plain-English briefing dynamically synthesized from underlying data.
2. **Section A — Economic Health at a Glance**: Strictly 5 key indicators (Economic Output, Livelihood & LFPR, MSME Density, Freight Logistics Friction, Opportunity Gap Points).
3. **Section B — What Drives This Economy?**: Visual sector breakdown bar chart, livelihoods description, key products, and comparative advantages.
4. **Section C — Strengths and Challenges**: 3 top strengths and 3 top challenges with concrete empirical evidence and benchmarks.
5. **Section D — Root Bottlenecks**: Ranked problems with severity, Shapley attribution weight, affected industries, and root causes.
6. **Section E — Actionable Improvement Plan**: Categorized by planning horizon (Quick Wins, Medium-Term, Long-Term) with costs, timelines, stakeholders, and success KPIs.
7. **Section F — What-If Economic Simulator**: Multi-equation policy sandbox modeling 1y, 3y, 5y, and 10y horizons with transparent elasticities and an *"Explain This Scenario"* breakdown.
8. **Section G — Ask EconLens AI**: Contextual assistant grounded in real data with explicit tags separating measured facts from AI diagnostic hypotheses.

---

## 🚀 Development & Build

```bash
# Install dependencies
npm install

# Run dev server locally
npm run dev

# Run Oxlint
npm run lint

# Compile and build for production
npm run build
```

---

## 📊 Data Provenance & Methodology

Harmonized from official national and international open data repositories:
- **MoSPI PLFS & National Accounts**: District GVA, LFPR, youth unemployment, industrial enterprise registrations.
- **NASA / NOAA Black Marble VIIRS**: Calibrated nocturnal satellite radiance proxying electrification and commercial density.
- **OpenStreetMap GIS Route Topology**: Highway commercial transit speeds, impedance friction, and port distances.
- **State Agricultural Marketing Boards & APEDA**: Post-harvest losses, mandi arrivals, and cold-chain capacity deficits.
