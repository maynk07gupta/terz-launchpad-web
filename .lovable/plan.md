

# Hero & Sub-Hero Section Complete Redesign

## Overview
A striking, modern hero section inspired by cliniexperts.com's dynamic layout, featuring floating service cards, animated graphical elements, and a clear visual hierarchy that prioritizes Medical Devices and In-Vitro Diagnostics as primary expertise areas.

---

## Design Concept

### Visual Inspiration from CliniExperts
- **Floating service cards** arranged around the hero content (not just a carousel)
- **Rich graphical illustrations** representing each service category
- **Interactive quick-links** to key service areas
- **Bold typography** with clear value proposition
- **Animated elements** that respond to user interaction

---

## Hero Section Redesign

### Layout Structure

```text
┌──────────────────────────────────────────────────────────────────────────┐
│  HERO SECTION - Full Viewport Height                                      │
│                                                                           │
│  ┌─────────────────────────────┐    ┌────────────────────────────────┐   │
│  │                             │    │  FLOATING SERVICE CARDS        │   │
│  │  HEADLINE AREA              │    │  ┌─────────┐ ┌─────────┐       │   │
│  │  • Animated badge           │    │  │ Medical │ │   IVD   │       │   │
│  │  • Main headline            │    │  │ Devices │ │         │       │   │
│  │  • Sub-headline             │    │  │ (LARGE) │ │ (LARGE) │       │   │
│  │  • CTA buttons              │    │  └─────────┘ └─────────┘       │   │
│  │                             │    │  ┌────────┐ ┌────────┐         │   │
│  │  QUICK LINKS (4 pills)      │    │  │Cosmetic│ │  LMPC  │         │   │
│  │  [India Reg] [IAA] [Global] │    │  └────────┘ └────────┘         │   │
│  │  [All Services]             │    │  ┌────────┐ ┌────────┐         │   │
│  │                             │    │  │  IEC   │ │  EPR   │         │   │
│  └─────────────────────────────┘    │  └────────┘ └────────┘         │   │
│                                     └────────────────────────────────┘   │
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │ TRUST BADGES BAR - ISO 13485 | CDSCO Compliant | Pan-India | 24hr │   │
│  └───────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────┘
```

### Left Column (55% width)

**Content Hierarchy:**
1. **Animated Badge** - "Your Regulatory Partner" with pulse animation
2. **Main Headline** - "Comprehensive Regulatory & Compliance Solutions in India"
   - Gradient text effect on key words
   - Staggered letter/word animation on load
3. **Sub-headline** - "End-to-End Solutions for Medical Devices, IVDs, Cosmetics, and Beyond"
4. **CTA Buttons** - Primary "Book Consultation" + Ghost "Explore Services"

**Quick-Link Pills (New Element):**
- 4 clickable pills with icons (similar to cliniexperts)
- India Regulatory Services
- Indian Authorized Agent (IAA)
- Global Regulatory Services
- All Services

**Design:**
- Pills have icons + text
- Hover: slight lift + primary border glow
- Stagger entrance animation (100ms delay each)

### Right Column (45% width) - Floating Service Cards

**Card Layout:**
- 6 service cards arranged in a 2x3 asymmetric grid
- Top 2 cards (Medical Devices, IVD) are **larger and more prominent**
- Bottom 4 cards (Cosmetics, LMPC, IEC, EPR) are smaller

**Card Design:**
- Each card has:
  - Relevant illustration/image (from existing assets)
  - Service category label (e.g., "For Importer" or "CDSCO")
  - Service name in bold
  - One-line description
  - Subtle gradient overlay
- Hover: card lifts, image zooms slightly, border glows

**Animations:**
- Cards float in from right with stagger (150ms delay)
- Continuous subtle float animation (different delays per card)
- Mouse parallax effect on desktop (cards move slightly with cursor)

### Background Elements

- **Gradient mesh** - subtle blue-to-teal radial gradients
- **Floating icons** - use existing FloatingElements component
- **Decorative dots/circles** - positioned around the hero
- **Vignette overlay** on left side for text contrast

---

## Sub-Hero Section (New)

### Purpose
Expand on the hero with a dedicated services overview that clearly shows the expertise hierarchy.

### Layout Structure

```text
┌──────────────────────────────────────────────────────────────────────────┐
│  SUB-HERO - Regulatory Services Overview                                  │
│                                                                           │
│  SECTION HEADER                                                           │
│  "Our Regulatory and Compliance Services in India"                        │
│                                                                           │
│  ┌────────────────────────────────┐  ┌─────────────────────────────────┐ │
│  │  TEXT BLOCK                    │  │  CIRCULAR INFOGRAPHIC           │ │
│  │                                │  │                                  │ │
│  │  Terz specializes in providing │  │      ┌─────┐                    │ │
│  │  comprehensive 360-degree      │  │  ┌───┤ MD  ├───┐                │ │
│  │  regulatory and compliance     │  │  │   └─────┘   │                │ │
│  │  services in India...          │  │  │     ▲       │                │ │
│  │                                │  │  │   TERZ      │                │ │
│  │  [Read More →]                 │  │  │   LOGO      │                │ │
│  │                                │  │  └─────────────┘                │ │
│  └────────────────────────────────┘  │  (Icons orbit around center)    │ │
│                                      └─────────────────────────────────┘ │
│                                                                           │
│  REGULATORY AUTHORITIES BAR                                               │
│  [CDSCO] [FSSAI] [BIS] [WPC] [LEGAL METROLOGY] [CPCB]                    │
│                                                                           │
└──────────────────────────────────────────────────────────────────────────┘
```

### Left Column (50%) - Text Content

**Content:**
- Section headline with accent color
- 2-3 paragraph description of Terz's expertise
- Emphasis on deep experience in Medical Devices and IVDs
- "Read More" link to About page

**Animations:**
- Fade up on scroll into view
- Staggered paragraph reveals

### Right Column (50%) - Circular Infographic

**Design:**
- Center: Terz logo or India map graphic
- Orbiting icons: 6 service categories arranged in a circle
- Medical Devices and IVD icons are larger/highlighted
- Connecting lines/paths between icons and center
- Optional: subtle rotation animation

**Animations:**
- Draw-in effect for connecting lines
- Icons fade in sequentially (MD first, then IVD, then others)
- Gentle continuous rotation on desktop

### Regulatory Authorities Bar

**Design:**
- Full-width bar with authority logos/badges
- CDSCO | BIS | WPC | LEGAL METROLOGY | CPCB | FSSAI
- Grayscale by default, color on hover
- Subtle slide-in animation

---

## Technical Implementation

### New Components to Create

| Component | Purpose |
|-----------|---------|
| `HeroSection.tsx` | Complete hero section with floating cards |
| `HeroServiceCard.tsx` | Individual floating service card |
| `QuickLinkPills.tsx` | Quick navigation pills |
| `SubHeroSection.tsx` | Sub-hero with text + infographic |
| `CircularInfographic.tsx` | Animated circular service diagram |
| `AuthoritiesBar.tsx` | Regulatory authorities logo bar |

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Home.tsx` | Replace current hero with new components |
| `src/index.css` | Add new keyframes for orbit animation, etc. |

### Components to Remove/Replace

- Current hero section in Home.tsx (lines 87-221)
- HeroServiceCarousel can be kept as an alternative mobile view

### Animation Details

**Hero Load Sequence:**
1. Background gradient fades in (0-0.3s)
2. Badge pulses in (0.2s)
3. Headline slides in from left (0.3-0.6s)
4. Sub-headline fades up (0.5-0.8s)
5. CTAs scale in with spring (0.6-0.9s)
6. Quick-link pills stagger in (0.7-1.1s)
7. Service cards float in from right (0.5-1.5s staggered)
8. Trust badges fade in (1.0-1.3s)

**Sub-Hero Scroll Animations:**
1. Section fades up when 10% visible
2. Text paragraphs stagger in
3. Infographic lines draw themselves
4. Service icons pop in sequentially
5. Authorities bar slides in from bottom

### Responsive Behavior

**Desktop (1024px+):**
- Two-column layout for hero
- Floating cards in grid
- Full circular infographic

**Tablet (768px - 1023px):**
- Stacked layout (text above, cards below)
- Cards in 2x3 grid
- Simplified infographic (no orbit animation)

**Mobile (< 768px):**
- Single column
- Keep existing HeroServiceCarousel for card display
- Replace infographic with simple icon grid
- Quick-links become scrollable row

---

## Service Priority Visualization

### Hero Card Sizing (Priority Order)

| Service | Card Size | Position | Visual Treatment |
|---------|-----------|----------|------------------|
| Medical Devices | Large (200px h) | Top-left | Gold border accent, "Primary" badge |
| In-Vitro Diagnostics | Large (200px h) | Top-right | Gold border accent, "Primary" badge |
| Cosmetics | Medium (160px h) | Middle-left | Standard treatment |
| Legal Metrology | Medium (160px h) | Middle-right | Standard treatment |
| IEC | Standard (140px h) | Bottom-left | Standard treatment |
| EPR Compliance | Standard (140px h) | Bottom-right | Standard treatment |

### Visual Cues for Expertise Hierarchy
- Top 2 cards have subtle gold/amber border
- "Primary Expertise" badge on MD and IVD cards
- Slightly larger images and bolder typography
- More prominent hover effects

---

## Assets Required

### Existing Assets to Use
- `medical-devices.jpg` - Hero card background
- `ivd.jpg` - Hero card background
- `cosmetics.jpg` - Hero card background
- `lmpc.jpg` - Hero card background (Legal Metrology)
- `iec.jpg` - Hero card background
- `epr.jpg` - Hero card background
- `logo.png` - Center of infographic

### New Assets to Consider (Optional)
- Custom illustrations for each service (similar to cliniexperts)
- Regulatory authority logos (CDSCO, BIS, etc.)
- India map silhouette for infographic center

---

## Expected Outcome

**Before:**
- Standard two-column hero with carousel
- Services hidden in a carousel that auto-rotates
- No clear visual hierarchy of expertise
- Missing sub-hero context section

**After:**
- Dynamic, cliniexperts-inspired hero with floating cards
- All 6 services visible immediately with clear hierarchy
- Medical Devices and IVD prominently featured as primary expertise
- Interactive quick-links for navigation
- Rich sub-hero section with circular infographic
- Regulatory authorities bar for credibility
- Smooth, choreographed animations throughout
- Mobile-optimized with carousel fallback

