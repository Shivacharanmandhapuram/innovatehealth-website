# CEO Strategy Memo: Scenario Planning & Wide Research
**Date:** May 2026
**Subject:** Exploration of "Shopify for Doctors", Scribe Economics, and Market Scenarios
**Status:** DRAFT / EXPLORATORY (No Pivot Initiated)
**Last Updated:** May 22, 2026

---

## 1. Executive Summary
We are at a strategic crossroads. Currently, we are building an AI Voice Agent (Front Desk). We have identified an opportunity to bundle an AI Scribe (Azure Whisper) at a massive cost advantage. Ultimately, we are exploring a grand vision: a "Shopify for Doctors" (Practice-in-a-Box) to help burnt-out doctors launch independent clinics with bundled software and hardware.

This document explores all scenarios, risks, and operational realities if we go down these paths.

---

# PART I: CORE SCENARIOS

## SCENARIO 1: Stay the Course (Pure AI Voice Agent)
*Focusing only on the automated front desk and call answering.*

### The Bull Case
We perfect the human-in-the-loop dashboard. The AI answers calls, drops transcripts into our dashboard, and clinic staff click "Approve." It solves immediate staffing shortages.

### The Bear Case (Risks)
*   **Commoditization:** Phreesia (NYSE: PHR) already offers VoiceAI as part of their comprehensive platform. Meanwhile, smaller AI wrapper startups are emerging weekly. If we only offer voice, we get squeezed from above (Phreesia) and below (cheap commodity bots).
*   **Integration Dependency:** If Athena or Zocdoc refuse API access forever, we remain a "dumb" answering machine rather than an intelligent booking engine.

### The Unit Economics (Voice Only)
*   **Revenue per clinic:** $199-$299/month.
*   **Cost to serve:** Retell/voice infra at ~$0.10-0.15/min. A busy clinic with 40 calls/day, avg 3 min each = 120 min/day. At $0.12/min = $14.40/day. For a 5-day clinic = ~$310/month in voice costs alone.
*   **The Problem:** At 5-day/week clinics, voice costs can *exceed* the subscription revenue. Margin only works for low-volume or part-time clinics like Blessings Medical (2 days/week). At scale with busy clinics, voice-only is a margin trap.

### CEO Verdict
Voice alone is not a defensible moat in 2026. It is a feature, not a platform. And the unit economics are dangerous at high volume unless we negotiate bulk voice infrastructure pricing or build our own.

---

## SCENARIO 2: "The Wedge" (Voice Agent + Free AI Scribe)
*Using our cost advantage in Scribe to win Voice Agent deals.*

### The Reality
Nikhil pays $120/mo for Nabla. Our Azure setup (GPT-4.1-mini + Whisper) costs ~$25/mo.

### The Strategy
We do not sell a Scribe. We sell our Voice Agent Platform for $299/month, and we say: *"Cancel your $120/mo Nabla subscription. Our platform includes an enterprise-grade AI Scribe for free."*

### The Bull Case
We instantly overcome price objections. By replacing an existing line-item on the clinic's P&L, our effective cost to the clinic drops dramatically.

### The Bear Case
Building a UI that doctors trust for Scribe is hard. Nabla's UX is highly refined. If our Scribe UX is clunky, they will churn back to Nabla, and we lose the wedge.

### Deep Dive: The AI Scribe Competitive Landscape

| Company | Pricing | Model | Key Differentiator |
|:--------|:--------|:------|:-------------------|
| **Nabla** | ~$120/mo per provider | Proprietary + GPT | Beautiful UX, ambient listening, fast note generation. Popular with solo practices. |
| **Abridge** | Enterprise contracts (est. $200-300/mo) | Proprietary models | Deep Epic integration. Raised $250M+ in funding. Targets large health systems, not independent docs. |
| **DeepScribe** | ~$350/mo per provider | Proprietary | Built for specialists (ortho, cardiology). Heavy customization per specialty. |
| **Suki** | ~$199-299/mo per provider | Proprietary + GPT | Voice-first UX. Strong Epic/Cerner integration. Targets mid-size practices. |
| **Freed** | ~$99/mo per provider | GPT-based | Cheapest major player. Minimal features. Popular with cost-conscious solo docs. |
| **InnovateHealth (Ours)** | ~$22/mo in Azure costs | GPT-4.1-mini + Whisper | No standalone product yet. Potential to undercut everyone by bundling. |

### The Key Insight
Every scribe company sells scribe-as-a-standalone. None of them offer voice + scribe + dashboard as one product. If we bundle, we are the only company in the market where a single subscription replaces TWO existing vendor contracts (answering service + scribe). That is extremely powerful in sales conversations.

### CEO Verdict
This is the most logical immediate step. It doesn't require a full pivot, it solves a real problem, and it vastly increases our product's stickiness. **Recommended path for Q3 2026.**

---

## SCENARIO 3: The Grand Vision ("Shopify for Doctors")
*Providing Software (Dashboard, Voice, Scribe, EMR) + Hardware (Checkme Pro, P303) + Business Setup.*

### The Bull Case (The Blue Ocean)
Doctors want out of corporate hospitals. If we can hand them a literal "box" that contains an iPad (our software), a Checkme Pro (vitals hardware), and an automated front desk, we lower the barrier to entry for DPC (Direct Primary Care) clinics. We charge a $1,500/mo SaaS fee or take a percentage of revenue. Churn becomes mathematically zero.

### The Bear Case (The Operational Nightmare)
*   **Hardware Logistics:** Sourcing, shipping, and providing IT support for physical devices (Checkme Pro) is entirely different from shipping code. If a Bluetooth sensor breaks in the clinic, the doctor blames *us*.
*   **Regulatory:** The moment our software ingests clinical vital signs from a Checkme Pro, we become a medical device data system (MDDS). Compliance (HIPAA, FDA, SOC2) becomes 10x more expensive and rigorous.
*   **Capital Intensity:** "Business-in-a-box" startups burn massive amounts of cash because acquiring a new doctor requires upfront hardware and onboarding costs.

### Deep Dive: The DPC / Independent Practice Market

**The Macro Trend:**
*   ~70% of U.S. physicians now work as employees of hospitals or corporate groups, up from ~40% a decade ago.
*   Physician burnout is at all-time highs. The AMA reports >50% of physicians experience at least one symptom of burnout.
*   DPC practices have grown from ~1,000 in 2015 to an estimated 2,500-3,000+ in 2026.
*   Average DPC practice charges $50-150/patient/month. A typical DPC doc manages 400-600 patients (vs. 2,000+ in traditional primary care).
*   **The gap:** Doctors who WANT to go independent but DON'T because they fear the business complexity — insurance credentialing, billing, IT, phone systems, marketing, rent negotiation. That is the market we would serve.

**Existing "Enablement" Models (Analogues):**

| Company | Market | Model | Revenue |
|:--------|:-------|:------|:--------|
| **Alma** | Therapists | Handles insurance credentialing, billing, and provides a directory. Takes a % of each session. | ~$100M+ ARR |
| **Headway** | Therapists | Similar to Alma, but focuses on in-network credentialing. | ~$100M+ ARR, valued at $2.3B |
| **Tebra (fka Kareo)** | Small practices | Practice management software (billing, scheduling, EHR). | ~$200M ARR |
| **Hint Health** | DPC practices | Membership management and billing for DPC. | Acquired by Elation Health |
| **SimplePractice** | Therapists/wellness | All-in-one practice management. | ~$100M+ ARR |

**The Observation:** Alma and Headway have proven that "enablement platforms" for independent practitioners are billion-dollar businesses. But nobody has built an Alma/Headway equivalent for primary care physicians and specialists. The regulatory complexity is higher (you deal with labs, prescriptions, referrals — not just talk therapy), but the TAM is 10x larger.

### CEO Verdict
This is a billion-dollar vision, but it will kill the company if attempted too early. We cannot build Shopify for Doctors until our core software (the dashboard) is bulletproof. **Backburner until 2027 at the earliest.**

---

## SCENARIO 4: The Zocdoc / Athena "Black Swan"
*What if Zocdoc denies API access, and Athena leaves us in Sandbox purgatory?*

### The Zocdoc Problem (Deep Analysis)

**Why Zocdoc will likely resist:**
*   Zocdoc is a marketplace. Their business model depends on patients booking THROUGH Zocdoc. If our AI agent can pull availability data and book outside Zocdoc's flow, we disintermediate them.
*   Zocdoc charges clinics $200-300+/month for listing. If we reduce the clinic's dependency on Zocdoc (by helping them build direct patient channels), Zocdoc loses revenue.
*   Zocdoc has historically been very restrictive with API access. They don't have a public developer program. Integration is typically done via embedded widgets, not open APIs.

**The Strategic Options if Zocdoc Says No:**
1.  **Browser Automation / Scraping (Risky):** We could build a bot that logs into Zocdoc as the clinic and scrapes appointment data. This violates Zocdoc's ToS and is legally dangerous. **Not recommended.**
2.  **Human-in-the-Loop (V1 Strategy):** Our AI takes the call, creates a card on our dashboard, and a human manually enters it into Zocdoc. This is the safest path.
3.  **Reduce Zocdoc Dependency Over Time:** If we build the "Shopify for Doctors" vision, we eventually offer clinics their own website, their own booking widget, and their own Google presence. Over 12-24 months, the clinic's Zocdoc dependency drops from 95% to 50%, and eventually to 20%. At that point, Zocdoc's leverage over us evaporates.
4.  **Partner via Zocdoc Premium:** Zocdoc has been rolling out premium tiers for practices. There may be an opportunity to partner as a "Zocdoc-certified" integration rather than fighting them.

### The Athena Problem (Deep Analysis)

**Timeline Reality:**
*   Athena's marketplace partner approval typically takes 3-6 months from initial submission.
*   They require a working demo, HIPAA compliance documentation, and a BAA (Business Associate Agreement).
*   Even after approval, you start with sandbox access. Production access requires additional review.
*   **Realistic timeline:** We submit now (May 2026), sandbox access by Aug-Sep 2026, production by Q4 2026 at best.

**What Athena Integration Actually Unlocks:**
*   Read patient demographics and insurance info.
*   Read/write to the appointment schedule.
*   Post clinical notes (this is where the Scribe becomes truly powerful — auto-filing SOAP notes into Athena).
*   Access the provider's calendar to check real-time availability.
*   **The killer feature:** AI answers phone -> checks Athena availability -> books directly into Athena -> sends patient a confirmation SMS. Zero human involvement.

**What to do while waiting:**
*   Build the dashboard assuming NO Athena. Make every feature work with manual entry.
*   When Athena eventually approves, we "light up" the automation behind the same UI. The clinic staff sees the same dashboard, but now the AI fills in the data instead of them.

### CEO Verdict
Do not pause development waiting for APIs. Build the best manual-approval dashboard in the industry. Once we have 10 clinics using the manual dashboard, we will have the leverage to force Athena/Zocdoc to open their APIs.

---

## SCENARIO 5: The Phreesia Threat (The Incumbent Giant)
*How do we compete against a publicly traded, deeply entrenched healthcare platform?*

### Understanding Phreesia (NYSE: PHR)
Phreesia is NOT a cheap voice bot. It is a **publicly traded healthcare SaaS company** with a comprehensive platform that already does much of what we are building. Key facts:
*   **Products:** Patient intake & check-in, scheduling, eligibility & benefits verification, revenue cycle & payments, VoiceAI (24/7 call automation), digital consents, analytics, patient-reported data, growth & outreach tools.
*   **Phreesia VoiceAI:** Their voice product handles scheduling, prescription refill intake, billing/payments, medical records requests, clinical triage, after-hours on-call routing (PhreesiaOnCall), and two-way HIPAA-compliant texting. It works 24/7 in multiple languages.
*   **EMR Integration:** Bidirectional integrations via HL7, FHIR, CCD, CSV. They are already deeply embedded in clinic workflows in a way we are not.
*   **Pricing:** Enterprise pricing, not publicly disclosed. Estimated $500-1,500+/mo depending on practice size and modules. Long-term contracts typical for enterprise health tech.
*   **Scale:** Serves thousands of healthcare organizations across the U.S. Revenue estimated at $400M+ ARR.
*   **Marketing Language:** Clear, effective, benefit-driven. Worth studying and adopting their tone.

### Why Phreesia Is Both a Threat AND a Validation
*   **The Threat:** Phreesia already has voice AI, intake, scheduling, payments, and EMR integration under one roof. If a clinic is already using Phreesia, they have zero reason to add InnovateHealth.
*   **The Validation:** Phreesia proves that the "unified clinic operations platform" model works and is worth $400M+/year in revenue. We are building the same thing, just from a different entry point (AI-first voice vs. intake-first).

### Where Phreesia is Weak (Our Window)
1.  **No AI Scribe.** Phreesia does NOT have a medical scribe product. They handle operations but not clinical documentation. This is our biggest gap to exploit.
2.  **Enterprise-focused.** Phreesia targets mid-to-large practices and health systems. Solo docs and 1-2 provider clinics often find Phreesia too expensive and too complex. That is our beachhead.
3.  **Legacy voice quality.** Phreesia VoiceAI, while functional, uses traditional IVR-style automation (speak naturally but still menu-driven). Our voice agent uses next-gen LLM-powered conversation that feels like talking to a human.
4.  **No patient memory.** Phreesia's voice system does not maintain conversational context across calls. Every call starts fresh.
5.  **Long contracts.** Phreesia locks clinics into multi-year agreements. We can offer month-to-month SaaS, which is extremely attractive to solo/small practices wary of commitment.

### The Strategic Positioning Against Phreesia
We do NOT position ourselves as "Phreesia but cheaper." We position ourselves as:
> "The AI-native clinic operating system built specifically for independent and small practices. Voice agent + AI scribe + smart dashboard — everything Phreesia offers the big guys, but designed for YOU, at a price that makes sense for a 1-3 provider clinic."

### CEO Verdict
Phreesia is the incumbent to study, not to fight head-on. They validate our market. Our edge is: (1) AI Scribe bundled in, (2) next-gen voice quality, (3) patient memory across calls, (4) no long-term contracts, (5) built for small/independent practices. We win the bottom of the market first, then move up.

---

## SCENARIO 6: The "Memory-as-a-Service" Voice Agent
*Building AI agents that remember patients across calls.*

### The Concept
Today, every call is stateless. If a patient calls Monday about a prescription refill and calls again Wednesday to follow up, the AI has zero context from Monday's call. It asks the same questions again. This is infuriating for patients.

### The Vision
What if each patient has a "memory profile" in our system? The AI greets them by name, knows their last visit was 3 weeks ago, knows they called about a refill on Monday, and can say: *"Hi Sarah, I see you called about your prescription refill on Monday. Dr. Smith approved it — it should be ready at your CVS on Main Street. Is there anything else I can help with?"*

### The Technical Architecture
*   **PostgreSQL (already deployed):** Store patient interaction history — every call transcript, every action taken, every outcome.
*   **GPT-4.1-mini context window:** Before each call, inject the patient's last 3-5 interactions as context. Cost is minimal (a few hundred extra input tokens).
*   **Caller ID matching:** Use the incoming phone number to look up the patient profile. If it's a known number, load their context. If it's unknown, treat it as a new patient intake.

### Why This Is a Game-Changer
*   No competitor does this today. Not Phreesia, not Parakeet Health, not VoiceOC.
*   Patients will feel like the AI "knows them." This creates an emotional moat that no amount of price-cutting can overcome.
*   Clinics will see dramatic reductions in call duration (the AI already knows why they're calling) and increases in patient satisfaction.

### The Risk
*   HIPAA implications of storing patient call history. We need to ensure all data is encrypted at rest and in transit, and that the PostgreSQL instance is covered under a BAA.
*   If memory is wrong (stale or inaccurate), the AI confidently says incorrect things. Worse than no memory at all.

### CEO Verdict
This is a massive differentiator and relatively cheap to build on our existing stack. **Should be prioritized for V2 alongside Scribe.** It transforms us from a commodity voice agent into something no one else offers.

---

## SCENARIO 7: The Compliance & Regulatory Landscape
*What regulatory walls do we hit as we expand?*

### Current Compliance State (Voice Agent Only)
*   **HIPAA:** Required. We handle PHI (patient names, phone numbers, appointment details). Azure BAA is in place. Twilio BAA is needed for SMS.
*   **A2P 10DLC:** We just resolved this. SMS campaign approved via Retell/Twilio.
*   **State Telehealth Laws:** Not applicable yet — we don't provide clinical advice.

### If We Add Scribe
*   **HIPAA (Elevated):** We are now processing clinical encounter data — diagnoses, symptoms, medications. This is the most sensitive category of PHI. Azure BAA covers the infrastructure, but we need internal policies: access controls, audit logs, data retention limits.
*   **FDA/MDDS:** An AI scribe that generates clinical notes is NOT currently classified as a medical device by the FDA, as long as it is positioned as a "documentation tool" and not a "clinical decision support" tool. The moment we add features like "AI-suggested diagnosis" or "drug interaction alerts," we cross into FDA-regulated territory.
*   **Malpractice Liability:** If the scribe hallucinates a medication dose or allergy and the doctor signs the note without catching it, who is liable? The doctor (they signed it), but the clinic will blame us. We need clear Terms of Service stating that the physician is responsible for reviewing and approving all AI-generated notes.

### If We Add Hardware (Checkme Pro)
*   **FDA Class II Device:** The Checkme Pro is an FDA-cleared Class II medical device. We can sell/distribute it without additional clearance as long as we don't modify it.
*   **MDDS Classification:** If our software receives vitals data from the device and displays it to the doctor, our software may be classified as a Medical Device Data System. MDDS is a low-risk FDA classification (Class I, exempt from 510(k)), but it still requires compliance with Quality System Regulation (QSR) and registration.
*   **Cost of Compliance:** Estimated $50K-$150K in legal and regulatory consulting to get MDDS-compliant. Not viable at our current stage.

### CEO Verdict
*   Voice + Dashboard: Current compliance is sufficient.
*   Voice + Scribe: Need internal HIPAA policies and malpractice-protective ToS. Achievable in 30 days.
*   Voice + Scribe + Hardware: Need FDA MDDS registration and QSR compliance. Minimum 6-12 months and $100K+. **Not now.**

---

## SCENARIO 8: The Fundraising Question
*Do we raise money, and if so, when and for what?*

### Current Burn Rate (Estimated)
*   Azure infrastructure: ~$200-500/mo (AKS, PostgreSQL, Container Apps, AI models).
*   Retell/voice costs: Variable per call volume.
*   Cloudflare/domain/hosting: ~$20/mo.
*   Twilio SMS: ~$50-100/mo.
*   Total infrastructure: ~$500-1,000/mo.
*   (Not including founder salaries, which are presumably zero or minimal at this stage.)

### When to Raise
*   **Do NOT raise now.** We have no metrics, no revenue, and one pilot clinic. We would get crushed on valuation.
*   **The trigger to raise:** When Blessings Medical has been live on V1 for 60 days and we can show: (a) X calls handled per week, (b) Y hours saved per week, (c) Z reduction in no-shows, (d) one testimonial from Nikhil.
*   **The ideal raise:** Pre-seed of $500K-$1M. Enough to hire one full-time engineer, one designer, and fund 12 months of operations. Position it as "AI operating layer for independent clinics."
*   **Who to target:** Healthcare-focused angels (doctors who invest), funds like 8VC, a16z Bio, General Catalyst Health. Microsoft for Startups (already a partner) may have follow-on investment programs.

### What the Money Goes Toward
1.  One full-time frontend engineer (the dashboard needs to be perfect).
2.  One part-time designer (Figma -> pixel-perfect components).
3.  Athena/Zocdoc integration engineering.
4.  First 10 clinic onboarding (each clinic needs white-glove setup for the first year).
5.  SOC 2 Type II audit (~$30-50K but required for enterprise health system sales).

### CEO Verdict
Bootstrap through V1 and the first 3-5 clinics. Raise only when we have proof points. Raising too early dilutes us and adds pressure to scale before the product is ready.

---

# PART II: PRODUCT & DEVELOPMENT

## 2. Product Development Restructuring
*Addressing the "Code first, PM second" technical debt.*

### The Problem
We built backend automation before defining the front-end user experience. This leads to features that work in the terminal but fail in front of a clinic manager.

### The Fix
1.  **Stop coding new features immediately.**
2.  Transition completely to Figma.
3.  Map out three distinct user journeys:
    *   *The Front Desk View:* How do they approve an AI-answered call?
    *   *The Doctor View:* How do they trigger the Scribe and read the SOAP note?
    *   *The Admin View:* How do they see ROI (calls answered, money saved)?

### The V1 Dashboard (Minimum Viable Screens)
1.  **Login Screen** — Simple, clean, clinic branding.
2.  **Call Queue / Inbox** — Cards showing each AI-handled call. Status: Pending / Approved / Escalated. Each card shows: Patient Name, Phone, Reason for Call, AI Summary, Timestamp.
3.  **Call Detail View** — Full transcript, AI-recommended action, approve/edit/escalate buttons.
4.  **Patient Lookup** — Search by name or phone. Shows call history (this is the "memory" feature).
5.  **Settings** — Clinic hours, greeting script, escalation rules, staff notifications.
6.  **Analytics (V2)** — Calls handled, average call duration, busiest hours, missed calls saved.

### CEO Verdict
Engineers write code to solve problems. Designers design interfaces for humans. We must lock the Figma screens before we write another line of Python/JS for the dashboard.

---

# PART III: PRICING & GO-TO-MARKET

## 3. Pricing Strategy (Tiered Model)
Based on the Phreesia competitive landscape and our Azure costs:

### Tier 1: "Automated Attendant" ($99/mo + $0.50/call)
*   Uses cheaper, slightly robotic TTS models.
*   Only handles basic routing, hours, and SMS dispatch.
*   Competes with small AI wrapper startups.
*   **Target:** Cost-conscious solo practices that just need phones answered after hours.

### Tier 2: "InnovateHealth Operator" ($299/mo + $1.00/call)
*   Uses ultra-realistic, low-latency voice models.
*   Handles deep scheduling triage, FAQs, and empathetic patient interactions.
*   Includes the dashboard with call queue and approval workflows.
*   **Target:** Growing practices with 1-3 providers who want to reduce front desk headcount.

### Tier 3: "Clinic OS" ($499/mo Flat)
*   Includes Premium Voice + Unlimited AI Scribe + The full Dashboard.
*   The pitch: "Cancel Nabla and your answering service. Move to us."
*   EMR integration when available.
*   Memory-as-a-service (patient context across calls).
*   **Target:** Multi-provider clinics and DPC practices that want one platform to run everything.

### The "Nabla Killer" Sales Script
> "You're paying $120/month for Nabla and $250/month for your answering service. That's $370 in vendor costs. With InnovateHealth Clinic OS at $499, you get both — plus a dashboard that ties them together. Net savings: you consolidate three contracts into one, your staff gets a single inbox, and you save $70 on day one. But the real savings come from the calls we catch that your answering service drops."

### Competitive Pricing Comparison

| Competitor | What They Sell | Monthly Cost | What's Missing |
|:-----------|:--------------|:-------------|:---------------|
| **Nabla** | Scribe only | $120/mo | No voice. No dashboard. No SMS. |
| **Phreesia (NYSE: PHR)** | Voice AI + Intake + Scheduling + Payments + Analytics | Enterprise pricing ($500-1,500+/mo est.) | No AI Scribe. Enterprise-focused. Long contracts. Legacy voice quality. |
| **Parakeet Health** | Voice + basic scheduling | ~$200-300/mo | No scribe. Limited EMR integration. |
| **VoiceOC** | Voice + scheduling | ~$200-300/mo | Dental-focused. No scribe. |
| **Human Answering Service** | Live humans answer phones | $250-500/mo | Expensive. High error rate. No data capture. |
| **InnovateHealth Clinic OS** | Voice + Scribe + Dashboard + SMS + Memory | $499/mo | EMR integration pending. Newest player. |

---

# PART IV: RISK MATRIX

## 4. Comprehensive Risk Matrix

| Risk | Probability | Impact | Mitigation |
|:-----|:-----------|:-------|:-----------|
| Zocdoc denies API access permanently | High (70%) | High | Build human-in-the-loop. Reduce Zocdoc dependency over time. |
| Athena sandbox takes 6+ months | Medium (50%) | Medium | Ship V1 without EMR. Dashboard works standalone. |
| Voice AI becomes fully commoditized in 12 months | High (80%) | High | Differentiate on workflow depth, scribe, memory. Voice is a feature, not the product. |
| Phreesia adds AI Scribe to their platform | Medium (40%) | Critical | They are operations-first. Building a clinical scribe requires different expertise. We have a head start. |
| Doctor adopts our Scribe but stays with their answering service | Medium (40%) | Low | Bundle pricing makes it economically irrational to split vendors. |
| GPT hallucination in SOAP note causes clinical error | Low (10%) | Critical | Mandatory physician review. ToS liability shield. "Draft" watermark on all AI notes until signed. |
| Key person risk (small team) | High (80%) | Critical | Document everything. Hire first engineer as soon as revenue allows. |
| Azure cost spike at scale | Low (15%) | Medium | GPT-4.1-mini is already the cheapest model. Whisper costs are linear and predictable. Negotiate enterprise pricing at 50+ providers. |

---

# PART V: THE 90-DAY ROADMAP

## Phase 1: Weeks 1-4 (Now through mid-June 2026)
*   **Submit Athena application** (happening now).
*   **Lock V1 Figma designs** for the Call Queue Dashboard.
*   **Ship V1 Dashboard** to Blessings Medical. Human-in-the-loop only.
*   **Submit Twilio 10DLC campaign** (done — awaiting approval).
*   Begin collecting metrics: calls handled, call duration, outcomes.

## Phase 2: Weeks 5-8 (Late June through mid-July 2026)
*   **Build Scribe prototype.** Whisper + GPT-4.1-mini pipeline. Simple UI: doctor taps "Start," speaks, taps "Stop," gets a SOAP note.
*   **Deploy Scribe to Nikhil.** He cancels Nabla. We save him $95/month.
*   **Begin patient memory system.** Caller ID -> patient profile -> context injection.
*   **Onboard clinic #2 and #3.** Friends/network of Nikhil. Free or deeply discounted. Goal: prove the dashboard works outside Blessings Medical.

## Phase 3: Weeks 9-12 (Late July through August 2026)
*   **Athena sandbox** should be available by now. Begin integration testing.
*   **Launch Tier 3 "Clinic OS" pricing** for new clinics.
*   **Compile metrics deck:** X calls handled, Y hours saved, Z% reduction in missed calls. This becomes the fundraising deck.
*   **Decision point:** If we have 5+ paying clinics by end of August, begin pre-seed conversations. If not, extend the bootstrap phase and iterate.

---

## Final CEO Directives
1. **Do not pivot yet.** We are still an AI Front Desk company. The "Shopify for Doctors" vision is the North Star, not the next sprint.
2. **Ship V1 Dashboard:** Get the human-in-the-loop dashboard live for Blessings Medical so they can manually handle the AI's call logs.
3. **Figma First:** Spend the next week mapping the Scribe and Dashboard UX.
4. **Build the Scribe Prototype:** Spin up the Azure Whisper + `gpt-4.1-mini` pipeline internally. Prove we can generate a Nabla-quality SOAP note for 20 cents.
5. **Build Patient Memory:** This is our deepest moat. No competitor has it.
6. **Backburner the Hardware:** Keep "Shopify for Doctors" and Checkme Pro on the whiteboard for 2027. We must conquer software first.
7. **Do not raise money yet.** Prove the product works with 3-5 clinics first. Raise from a position of strength, not desperation.