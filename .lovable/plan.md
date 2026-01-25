

## Merge Services and Procedure Pages - Implementation Plan

### Overview
Consolidate the **Services** and **Procedure** pages into a single, comprehensive **Services** page that combines the visual hero elements from the current service pages with the roadmap-style procedure system.

---

### Phase 1: Page Structure Design

**New Unified Layout per Service:**

```
+----------------------------------------------------------+
|  HERO SECTION (from Service pages)                       |
|  - Full-width background image (medical-devices.jpg, etc)|
|  - Service title + tagline + description                 |
|  - Gradient overlay (current primary/accent style)       |
+----------------------------------------------------------+
|                                                          |
|  ROLE SELECTION (Manufacturer / Importer toggle)         |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  ROADMAP TIMELINE (current Procedure design)             |
|  [Step 1]---[Step 2]---[Step 3]---[Step 4]...           |
|                                                          |
|  +----------------------------------------------------+  |
|  |  STEP DETAIL CARD                                  |  |
|  |  - Step title + description + icon                 |  |
|  |  - Key Documents placeholder                       |  |
|  |  - Timeline placeholder                            |  |
|  |  - Deliverables + Pro Tips                         |  |
|  +----------------------------------------------------+  |
|                                                          |
+----------------------------------------------------------+
|  CTA: Get Started with This Service                      |
+----------------------------------------------------------+
```

---

### Phase 2: Data Structure Enhancement

**Extend `ProcedureCategory` type to include service content:**

```typescript
type ServiceProcedure = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string; // Import from assets
  badge?: string;
  manufacturerSteps: ProcedureStep[];
  importerSteps: ProcedureStep[];
};
```

**Merge data from all 6 services:**

| Service | Image Asset | Tagline | Badge |
|---------|-------------|---------|-------|
| Medical Devices | medical-devices.jpg | "Smooth CDSCO registration for manufacturers and importers" | CDSCO |
| IVD | ivd.jpg | "Expert IVD compliance and regulatory support" | ISO 13485 |
| Cosmetics | cosmetics.jpg | "Fast-track cosmetic product registration" | BIS |
| LMPC | lmpc.jpg | "LMPC compliance made simple" | State-Level |
| IEC | iec.jpg | "IEC registration and comprehensive support" | Lifetime Valid |
| EPR | epr.jpg | "EPR compliance and sustainability solutions" | CPCB |

---

### Phase 3: Component Updates

**3.1 Update `Procedure.tsx` (rename conceptually to Services+Procedure)**

- Add hero section with dynamic image based on selected service
- Add role toggle (Manufacturer/Importer) that switches the roadmap steps
- Keep the existing `RoadmapTimeline` and `StepDetailCard` components
- Dynamic content changes based on both service AND role selection

**3.2 Modify Hero to be Dynamic:**

```tsx
{/* Dynamic Hero based on selected service */}
<section className="relative py-20 lg:py-32 overflow-hidden">
  <div className="absolute inset-0">
    <img
      src={activeService.image}
      alt={activeService.title}
      className="w-full h-full object-cover brightness-[0.85]"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-accent/70 mix-blend-multiply" />
  </div>
  <div className="container relative z-10">
    <h1>{activeService.title}</h1>
    <p>{activeService.tagline}</p>
    <p>{activeService.description}</p>
  </div>
</section>
```

---

### Phase 4: Navigation Changes

**4.1 Update Navbar dropdown to link to the new unified page:**

| Current Path | New Path |
|--------------|----------|
| `/services/medical-devices` | `/services#medical-devices` |
| `/services/ivd` | `/services#ivd` |
| `/services/cosmetics` | `/services#cosmetics` |
| `/services/lmpc` | `/services#lmpc` |
| `/services/iec` | `/services#iec` |
| `/services/epr` | `/services#epr` |

**4.2 Update main nav items:**
- Remove "Procedure" from navigation (merged into Services)
- Keep "Services" dropdown with all 6 services

**4.3 URL State Management:**
- Use URL hash (`#medical-devices`) to auto-select service on page load
- Update URL when user switches services for shareability

---

### Phase 5: Route Cleanup

**5.1 Remove individual service page routes from `App.tsx`:**

```diff
- <Route path="/services/medical-devices" element={<MedicalDevices />} />
- <Route path="/services/ivd" element={<IVD />} />
- <Route path="/services/cosmetics" element={<Cosmetics />} />
- <Route path="/services/lmpc" element={<LMPC />} />
- <Route path="/services/iec" element={<IEC />} />
- <Route path="/services/epr" element={<EPR />} />
- <Route path="/procedure" element={<Procedure />} />
+ <Route path="/services" element={<Services />} />
```

**5.2 Keep old routes as redirects (optional) for backward compatibility**

---

### Phase 6: Feature Additions

**6.1 Service Selector Pills (above roadmap):**
- Keep the current pill-style service tabs from Procedure page
- Animate hero background change when switching services

**6.2 Role Toggle Integration:**
- Place Manufacturer/Importer toggle between hero and roadmap
- Different steps shown based on role selection
- Reset to step 1 when role changes

**6.3 Smooth Transitions:**
- Fade transition when switching services (hero image crossfade)
- Slide animation for roadmap content change
- Scale-in for step cards

---

### Phase 7: Files to Modify/Delete

| File | Action |
|------|--------|
| `src/pages/Services.tsx` | **Major Rewrite** - Merge with Procedure logic |
| `src/pages/Procedure.tsx` | **Delete** - Merged into Services |
| `src/pages/services/MedicalDevices.tsx` | **Delete** - Content merged |
| `src/pages/services/IVD.tsx` | **Delete** - Content merged |
| `src/pages/services/Cosmetics.tsx` | **Delete** - Content merged |
| `src/pages/services/LMPC.tsx` | **Delete** - Content merged |
| `src/pages/services/IEC.tsx` | **Delete** - Content merged |
| `src/pages/services/EPR.tsx` | **Delete** - Content merged |
| `src/components/Navbar.tsx` | **Update** - Change dropdown links |
| `src/App.tsx` | **Update** - Simplify routes |
| `src/components/RoadmapTimeline.tsx` | **Keep** - Reuse as-is |
| `src/components/StepDetailCard.tsx` | **Keep** - Reuse as-is |

---

### Phase 8: Mobile Considerations

- Service selector becomes horizontal scrollable on mobile (current behavior)
- Role toggle stacks vertically on small screens
- Roadmap stays vertical on mobile (current behavior)
- Hero image aspect ratio maintained with `object-cover`

---

### Implementation Order

1. Create new unified data structure with all service + procedure content
2. Rewrite `Services.tsx` with dynamic hero + role toggle + roadmap
3. Add URL hash handling for direct service linking
4. Update `Navbar.tsx` dropdown links
5. Update `App.tsx` routes (remove old, simplify new)
6. Delete old service pages and Procedure page
7. Add smooth transitions between services
8. Test all links and mobile responsiveness

---

### Expected Outcome

A single, powerful **Services** page that:
- Shows rich visual hero with service-specific imagery
- Allows role-based (Manufacturer/Importer) process viewing
- Displays professional roadmap with placeholder content sections
- Supports direct linking via URL hash
- Eliminates redundant pages and navigation complexity
- Matches the polished design of the improved About page

