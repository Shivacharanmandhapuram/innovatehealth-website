# InnovateHealth: Current Context & Vision (May 2026)

## Company Identity
- **Legal Entity:** InnovateCare LLC d/b/a InnovateHealth
- **HQ:** Texas, United States
- **Website:** innovatehealth.ai (Cloudflare Pages)
- **Pilot Clinic:** Blessings Medical (Dr. Nikhil Gohokar) — operates Tuesday & Thursday, 9am-4pm
- **Microsoft for Startups:** Active partner

## Azure Infrastructure (Verified May 22, 2026)
- **Subscription:** Azure subscription 1 (`0ecfb65a-cddb-4aa8-882c-a7a1e33963af`)
- **Tenant:** nikhilgohokarinnovatehealth.onmicrosoft.com
- **AI Models:**
  - `scribe-gpt-4-1-mini` (GPT-4.1-mini, eastus) — LLM for SOAP note generation
  - `scribe-whisper` (Whisper, eastus2) — Speech-to-text for AI Scribe
- **Compute:** AKS cluster (`voiceai-prod-aks`, K8s v1.34.7), Container Apps (`voiceai-frontend`, `voiceai-admin`), Static Web App (`voiceai-frontend`)
- **Database:** PostgreSQL Flexible Server (`voiceai-prod-db`, centralus)
- **Supporting:** Key Vault, Log Analytics, 2x ACR registries, Container Instance tunnel

## Timeline and Next Steps
1. **Athenahealth Integration:** Submission imminent. Sandbox access expected Aug-Sep 2026. Production by Q4 2026 at best.
2. **V1 Dashboard Strategy:** Lock V1 *without* EMR integration. The bot acts as a call-picking agent, takes patient requests, displays them on the dashboard. Staff review, approve, and take follow-up actions manually.
3. **Zocdoc Integration:** Read-access requested. 95-98% of Blessings Medical patients come from Zocdoc. Zocdoc is unlikely to grant open API access (they protect their marketplace). Human-in-the-loop is the V1 workaround.

## Cost Optimization: Scribe vs. Nabla
- **Nikhil's current cost:** $120/month for Nabla
- **Our Azure cost to replicate:** ~$22/month (Whisper $21.60 + GPT-4.1-mini $0.23)
- **Cost per patient visit:** ~$0.27 (for 240 visits/month)
- **Strategy:** Bundle Scribe for free inside the Clinic OS tier to replace Nabla and justify platform pricing

## Voice Agent & Cost Considerations
1. **Primary Incumbent — Phreesia (NYSE: PHR):** Publicly traded healthcare SaaS platform. Offers VoiceAI (24/7 call automation with scheduling, Rx refills, billing, triage, after-hours on-call), patient intake, check-in, scheduling, eligibility, revenue cycle, digital consents, analytics, and growth tools. Deep EMR integrations via HL7/FHIR. Enterprise pricing (est. $500-1,500+/mo). Long contracts. Serves thousands of organizations. ~$400M+ ARR.
2. **Our Edge vs. Phreesia:** (a) We bundle AI Scribe — Phreesia does not have one, (b) next-gen LLM-powered voice vs. their traditional IVR-style automation, (c) patient memory across calls — Phreesia doesn't do this, (d) month-to-month contracts vs. their long-term lock-ins, (e) built for solo/small practices — Phreesia targets enterprise.
3. **Voice commoditization risk:** Voice AI is becoming trivially easy to build. Our moat is workflow depth (dashboard + scribe + memory), not the voice itself.
4. **Contract Models:** Month-to-month SaaS. No long-term lock-ins.
5. **Marketing Tone:** Study and adopt Phreesia's marketing language style — clear, benefit-driven, effective.

## Pricing Tiers (Proposed)
| Tier | Price | Includes |
|:-----|:------|:---------|
| Automated Attendant | $99/mo + $0.50/call | Basic routing, hours, SMS dispatch |
| InnovateHealth Operator | $299/mo + $1.00/call | Premium voice, dashboard, call queue |
| Clinic OS | $499/mo flat | Premium voice + Scribe + Dashboard + SMS + Memory |

## Key Strategic Insight: Patient Memory
- No competitor offers "memory-as-a-service" — AI that remembers patients across calls.
- Technically achievable on our existing stack (PostgreSQL + caller ID matching + GPT context injection).
- This is our deepest potential moat. Should be prioritized for V2.

## Broader Vision: Doctor Independence ("Shopify for Doctors")
- **Status:** Exploratory only. No pivot initiated.
- **The Core Concept:** A "Shopify for doctors" platform helping doctors start independent practices with bundled technology (hardware + software + business support).
- **Market Analogues:** Alma and Headway proved this model for therapists ($2B+ valuations). No equivalent exists for primary care physicians.
- **Market Opportunity:** In the U.S., ~70% of physicians now work as employees. Burnout is at all-time highs. DPC practices growing from ~1,000 (2015) to 3,000+ (2026).
- **Timeline:** Backburnered until 2027. We must conquer software first before adding hardware logistics.

## Compliance Status
- **HIPAA:** Azure BAA in place. Internal policies needed for Scribe (clinical encounter data).
- **A2P 10DLC SMS:** Campaign submission ready. Website compliance issues resolved. Cloudflare Browser Integrity Check disabled for bot verification.
- **FDA/MDDS:** Not applicable until hardware integration. AI Scribe is a "documentation tool," not a clinical decision support system.
- **Twilio:** Email updated to nikhil.gohokar@innovatehealth.ai across all legal pages.

## Action Points
* **Ship V1:** Human-in-the-loop dashboard for Blessings Medical. No EMR automation.
* **Figma First:** Map all dashboard screens before writing more code.
* **Build Scribe Prototype:** Prove Nabla-quality SOAP notes at $0.27/visit.
* **Build Patient Memory:** Caller ID -> patient profile -> context across calls.
* **Parallel Dev:** Scribe, Memory, compliance (Xyla). Keep dashboard features in mind.
* **Marketing Tone:** Study and adopt Phreesia's marketing language style.
* **Do Not Raise Yet:** Prove product with 3-5 clinics first. Target pre-seed of $500K-$1M when metrics exist.
* **Long-term Vision:** Research further into "Shopify for Doctors" enablement model.