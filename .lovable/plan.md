# Project Plan: Terz Compliance Website

## Completed Features

### Unified Services System (Implemented)
- **Services Overview Page** (`/services` without hash): Landing page with hero section and 2x3 grid of service cards
- **Service Detail View** (`/services#service-id`): Dynamic hero + role toggle (Manufacturer/Importer) + roadmap timeline
- **Enhanced Navigation**: 
  - Desktop: "Services" text links to overview, hover opens dropdown for specific services
  - Mobile: "Services" text links to overview, arrow icon toggles accordion menu

### Components
- `ServicesOverview.tsx`: Landing page with service cards grid and "Why Choose Us" section
- `Services.tsx`: Conditional rendering for overview vs detail based on URL hash
- `RoadmapTimeline.tsx` & `StepDetailCard.tsx`: Reusable procedure display components

### URL Structure
- `/services` → Services Overview (6 service cards)
- `/services#medical-devices` → Medical Devices detail with roadmap
- `/services#ivd` → IVD detail with roadmap
- `/services#cosmetics` → Cosmetics detail with roadmap
- `/services#lmpc` → LMPC detail with roadmap
- `/services#iec` → IEC detail with roadmap
- `/services#epr` → EPR detail with roadmap
