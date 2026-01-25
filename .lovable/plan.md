

## Independent Services Landing Page + Enhanced Navigation

### Overview
Create a dedicated Services overview/landing page that users reach by clicking "Services" directly, while preserving the dropdown functionality for quick access to specific services. The current unified Services page becomes the detail view for individual services.

---

### Phase 1: Create Services Landing Page Structure

**New Page: Services Overview (`/services` without hash)**

**Layout:**
```
+----------------------------------------------------------+
|  HERO SECTION                                            |
|  "Our Services" - Overview of regulatory expertise       |
+----------------------------------------------------------+
|                                                          |
|  SERVICE CARDS GRID (2x3 on desktop, 1 column mobile)   |
|                                                          |
|  +------------------+  +------------------+              |
|  | Medical Devices  |  | In-Vitro         |              |
|  | [Image]          |  | Diagnostics      |              |
|  | Brief desc       |  | [Image]          |              |
|  | [Learn More →]   |  | Brief desc       |              |
|  +------------------+  | [Learn More →]   |              |
|                        +------------------+              |
|  +------------------+  +------------------+              |
|  | Cosmetics        |  | LMPC             |              |
|  | ...              |  | ...              |              |
|  +------------------+  +------------------+              |
|                                                          |
|  +------------------+  +------------------+              |
|  | IEC              |  | EPR              |              |
|  | ...              |  | ...              |              |
|  +------------------+  +------------------+              |
|                                                          |
+----------------------------------------------------------+
|  WHY CHOOSE US / VALUE PROPOSITION SECTION               |
+----------------------------------------------------------+
|  CTA: Schedule a Consultation                            |
+----------------------------------------------------------+
```

**Service Card Features:**
- Background image with gradient overlay (reuse existing images)
- Service title + badge (CDSCO, BIS, etc.)
- 2-line description
- "Learn More" button linking to `/services#service-id`
- Hover animation: slight scale + shadow increase

---

### Phase 2: Page and Route Structure

**Route Configuration:**
- `/services` (no hash) → Services Overview/Landing page
- `/services#medical-devices` → Unified Services page with Medical Devices selected
- `/services#ivd` → Unified Services page with IVD selected
- ... and so on

**Implementation Options:**

**Option A: Single Component with Conditional Rendering**
- Keep one `Services.tsx` file
- If no hash present, show overview layout
- If hash present, show current detail view with roadmap

**Option B: Separate Components (Recommended)**
- Create `ServicesOverview.tsx` for the landing page
- Keep `Services.tsx` as `ServiceDetail.tsx` for individual service views
- Update routing logic

---

### Phase 3: Navbar Enhancement

**Desktop Behavior:**
```
+----------------------------------+
|  [Services ▼] ← Clickable text   |
|        ↓                         |
|  +----------------------------+  |
|  | Medical Devices    →       |  |
|  | In-Vitro Diagnostics →     |  |
|  | Cosmetics          →       |  |
|  | LMPC               →       |  |
|  | IEC                →       |  |
|  | EPR                →       |  |
|  +----------------------------+  |
+----------------------------------+
```

**Changes:**
- "Services" text becomes a `Link` to `/services`
- ChevronDown icon remains for visual indication
- Hover still opens dropdown (existing behavior works)
- Clicking on "Services" text navigates to overview page
- Clicking dropdown items navigates to specific service

**Mobile Behavior:**
```
+--------------------------------------+
|  Services          [→]               |
|  ↑ Clickable       ↑ Expands dropdown|
+--------------------------------------+
```

**Changes:**
- Split into two elements:
  1. "Services" text → Links to `/services` overview
  2. ChevronRight/ChevronDown arrow → Toggles accordion
- Tapping text navigates to Services landing page
- Tapping arrow expands/collapses service list

---

### Phase 4: Navbar Code Changes

**Desktop Navigation Update:**
```tsx
{/* Services with Dropdown */}
<div
  className="group relative"
  onMouseEnter={() => setServicesOpen(true)}
  onMouseLeave={() => setServicesOpen(false)}
>
  {/* Split: Link + Dropdown Trigger */}
  <div className="flex items-center">
    <Link
      to="/services"
      className="px-4 py-2 text-sm font-semibold..."
      onClick={() => setServicesOpen(false)}
    >
      Services
    </Link>
    <button
      onClick={() => setServicesOpen(!servicesOpen)}
      className="p-1 hover:text-primary"
    >
      <ChevronDown className="h-4 w-4" />
    </button>
  </div>
  
  {/* Dropdown menu (unchanged) */}
  {servicesOpen && (
    <div className="absolute...">
      {services.map(...)}
    </div>
  )}
</div>
```

**Mobile Navigation Update:**
```tsx
{/* Mobile Services - Split layout */}
<div className="flex items-center justify-between">
  <Link
    to="/services"
    onClick={() => setIsOpen(false)}
    className="text-base font-semibold..."
  >
    Services
  </Link>
  <button
    onClick={() => setServicesOpen(!servicesOpen)}
    className="p-2 rounded-lg hover:bg-primary/10"
  >
    <ChevronRight 
      className={cn(
        "h-4 w-4 transition-transform",
        servicesOpen && "rotate-90"
      )}
    />
  </button>
</div>
{servicesOpen && (
  <div className="ml-4 mt-2 space-y-2 border-l...">
    {services.map(...)}
  </div>
)}
```

---

### Phase 5: Services Overview Content

**Hero Section:**
- Title: "Our Regulatory Services"
- Subtitle: "Comprehensive compliance solutions for medical devices, diagnostics, cosmetics, and more"
- Background: A professional hero image or gradient

**Service Cards Grid:**
For each of the 6 services, display:
- Service image (already have these)
- Service title
- Badge (CDSCO, BIS, etc.)
- Short description (can use existing taglines)
- "Explore Process" CTA button

**Why Choose Us Section (optional):**
- 3-4 value propositions
- Icons + short text
- Reuse content from other pages if available

---

### Phase 6: URL Hash Detection Logic

**In Services component:**
```tsx
const Services = () => {
  const location = useLocation();
  const hash = location.hash.replace("#", "");
  
  // If no hash, show overview
  if (!hash) {
    return <ServicesOverview />;
  }
  
  // If hash present, show detail view
  return <ServiceDetail serviceId={hash} />;
};
```

Or use separate routes:
```tsx
// App.tsx
<Route path="/services" element={<ServicesOverview />} />
<Route path="/services/:serviceId" element={<ServiceDetail />} />
```

---

### Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `src/pages/Services.tsx` | **Modify** | Add conditional rendering for overview vs detail |
| `src/components/ServicesOverview.tsx` | **Create** | New overview component with service cards |
| `src/components/Navbar.tsx` | **Modify** | Split Services into link + dropdown trigger |
| `src/App.tsx` | **Minor Update** | Ensure routing works with hash |

---

### Implementation Order

1. Create `ServicesOverview` component with hero + service cards grid
2. Update `Services.tsx` to conditionally render overview vs detail
3. Modify Navbar desktop: make "Services" text a link while keeping hover dropdown
4. Modify Navbar mobile: separate text link from arrow toggle
5. Add smooth scroll animations to overview page
6. Test all navigation paths

---

### Expected Outcome

**Navigation Flow:**
- Click "Services" → Goes to Services Overview page
- Hover over "Services" (desktop) → Shows dropdown
- Click dropdown item → Goes to `/services#service-id` with roadmap
- Mobile: Tap "Services" → Goes to overview
- Mobile: Tap arrow → Expands service list

**Visual Result:**
- Professional overview page showcasing all 6 services
- Each service card links to its detailed roadmap view
- Consistent hover/tap behavior between desktop and mobile
- Seamless integration with existing design system

