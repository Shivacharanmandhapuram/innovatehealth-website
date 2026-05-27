# InnovateHealth Azure Architecture & Scribe Cost Analysis

## Current Azure Architecture (as of May 22, 2026)

### AI Stack (Scribe Infrastructure)
- **LLM Layer:** Azure OpenAI `gpt-4.1-mini` (Deployment: `scribe-gpt-4-1-mini` in `voiceai-prod-foundry`, `eastus`)
- **Transcription/ASR:** Azure OpenAI `whisper` (Deployment: `scribe-whisper` in `voiceai-prod-foundry-asr`, `eastus2`)
- *Note:* No standard Azure Speech service is deployed; all audio processing goes through the Whisper deployment.

### Hosting & Compute
- **AKS (Kubernetes):** `voiceai-prod-aks` (v1.34.7, `eastus`) - likely hosting the core backend services.
- **Container Apps:** `voiceai-frontend` and `voiceai-admin` running in managed environment `voiceai-prod-env` (`eastus`).
- **Static Web App:** `voiceai-frontend` (`eastus2`, default hostname: `lively-pond-05555650f.2.azurestaticapps.net`).
- *Note:* It appears to be a hybrid hosting model (AKS + Container Apps + Static Web Apps).

### Data & Storage
- **Primary Database:** Azure Database for PostgreSQL Flexible Server (`voiceai-prod-db`, `centralus`).
- *Note:* No Cosmos DB or standard Azure Storage Accounts are currently deployed.

### Platform Services
- **Secrets Management:** Azure Key Vault (`voiceai-prod-kv`).
- **Container Registries:** `voiceaiprodacr`, `ca07cff13ba1acr`.
- **Observability:** Log Analytics Workspace (`voiceai-prod-logs`).
- **Networking/Ops:** Azure Container Instance (`voiceai-tunnel`).

---

## AI Scribe Monthly Cost Estimation (Self-Hosted vs. Nabla)

### Assumptions
- **Usage:** 2 days/week × 4.3 weeks = 8.6 days/month.
- **Volume:** ~240 patient visits/month (15-min slots, 9am to 4pm).
- **Audio:** 15 mins per patient = ~60 hours of audio per month.
- **Model Usage:** You are using `whisper` for transcription and `gpt-4.1-mini` for generating SOAP notes.

### 1. Azure OpenAI Whisper Cost
- Azure Whisper is priced at **$0.36 per hour** of audio.
- 60 hours × $0.36 = **~$21.60 / month**

### 2. Azure OpenAI GPT-4.1-Mini Cost
*(Note: GPT-4.1-mini is significantly cheaper than GPT-4o. Azure pricing is roughly $0.15 per 1M input tokens and $0.60 per 1M output tokens).*
- **Input Tokens (Transcript + Prompt):** ~3,500 tokens/visit × 240 visits = 840,000 input tokens.
  - 0.84M × $0.15 = **~$0.13 / month**
- **Output Tokens (SOAP Note):** ~700 tokens/visit × 240 visits = 168,000 output tokens.
  - 0.168M × $0.60 = **~$0.10 / month**
- **Total LLM Cost:** **~$0.23 / month**

### 3. Total Estimated AI Cost
| Service | Estimated Monthly Cost |
| :--- | :--- |
| **Azure Whisper (ASR)** | $21.60 |
| **Azure GPT-4.1-mini** | $0.23 |
| **Total AI Cost** | **~$21.83 / month** |

### Business Takeaway
- Nikhil is currently paying Nabla **$120.00 / month**.
- InnovateHealth's raw Azure AI cost to provide the exact same service (using your deployed `whisper` and `gpt-4.1-mini` models) is only **~$21.83 / month**.
- **Margin:** If you build this internally and sell it at $99/mo, you make an **~78% gross margin** per doctor. You can easily replace Nabla and bring this revenue in-house.