

# New Hero Section Plan for Terz Compliance

## Overview

A complete redesign of the hero section that creates an immediate, professional first impression for Terz Compliance - a regulatory consulting firm helping manufacturers and importers enter the Indian market. The new design will be clean, modern, and effectively communicate the value proposition while showcasing services visually.

---

## Design Concept: "Split Hero with Service Showcase"

A two-column layout on desktop that stacks elegantly on mobile, featuring compelling headline copy on one side and a dynamic service card carousel on the other. Clean, light background with subtle brand accents - no dark space theme.

---

## Section Structure

### Layout

```text
+----------------------------------------------------------+
|  DESKTOP (lg+)                                            |
|  +------------------------+  +-------------------------+  |
|  |                        |  |                         |  |
|  |  Badge                 |  |    +--------------+     |  |
|  |  Headline              |  |    | Service Card |     |  |
|  |  Subheadline           |  |    | (rotating)   |     |  |
|  |                        |  |    +--------------+     |  |
|  |  [CTA Button] [Link]   |  |                         |  |
|  |                        |  |   Dots for navigation   |  |
|  +------------------------+  +-------------------------+  |
+----------------------------------------------------------+

+----------------------------------------------------------+
|  MOBILE (< lg)                                            |
|  +------------------------------------------------------+ |
|  |  Badge                                               | |
|  |  Headline                                            | |
|  |  Subheadline                                         | |
|  +------------------------------------------------------+ |
|  |  Service Card Carousel (swipeable)                   | |
|  +------------------------------------------------------+ |
|  |  [CTA Button]                                        | |
+----------------------------------------------------------+
```

### 1. Background Layer
- Clean gradient from `background` to `secondary/30`
- Subtle decorative blobs using `primary/10` and `accent/10` with blur
- Optional: floating micro-dots for visual interest

### 2. Left Column - Text Content
- **Badge**: "India's Trusted Regulatory Partner" (pill-shaped, primary accent)
- **Headline**: "Navigate India's Regulatory Landscape with Confidence"
- **Subheadline**: "End-to-end compliance support for Medical Devices, IVDs, Cosmetics, and more. First-time approval, every time."
- **CTAs**: 
  - Primary: "Book a Consultation" (links to /contact)
  - Secondary: "Explore Services" (links to /services)

### 3. Right Column - Service Card Showcase
An auto-rotating carousel of 6 service cards using the existing service images:
- Medical Devices (`medical-devices.jpg`)
- In-Vitro Diagnostics (`ivd.jpg`)
- Cosmetics (`cosmetics.jpg`)
- Legal Metrology (`lmpc.jpg`)
- Import Export Code (`iec.jpg`)
- EPR Compliance (`epr.jpg`)

Each card displays:
- Service image as background
- Gradient overlay for text readability
- Service title
- Short tagline
- Badge (e.g., "CDSCO", "Central-Level")
- Click navigates to /services#{service-id}

---

## Animation Strategy

| Element | Animation | Timing |
|---------|-----------|--------|
| Badge | Fade up | 0ms delay |
| Headline | Fade up | 100ms delay |
| Subheadline | Fade up | 200ms delay |
| CTAs | Fade up | 300ms delay |
| Service Cards | Scale in + fade | 400ms delay |
| Card rotation | Auto-advance every 4s | Continuous |
| Card hover | Subtle lift + shadow | On interaction |

---

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (lg+) | Two-column grid, larger cards, all animations |
| Tablet (md-lg) | Two-column with smaller cards, reduced spacing |
| Mobile (< md) | Single column stack, swipeable card carousel |

---

## Technical Implementation

### Files to Create/Modify

1. **`src/components/hero/HeroSection.tsx`** - Complete rewrite
   - Remove Earth globe and orbit system
   - Implement new two-column layout
   - Add Framer Motion animations

2. **`src/components/hero/ServiceCardCarousel.tsx`** - New component
   - Auto-rotating carousel of service cards
   - Touch-friendly swipe on mobile
   - Dot navigation indicators
   - Uses existing service images

3. **Clean up unused files** (optional):
   - `ArcOrbitSystem.tsx`
   - `OrbitingPlanet.tsx`
   - `PlanetaryOrbitHero.tsx`
   - Earth-related image assets

### Dependencies Used
- Framer Motion (already installed)
- Embla Carousel (already installed - `embla-carousel-react`)
- Existing UI components (Button, etc.)

---

## Content Copy

**Badge**: `India's Trusted Regulatory Partner`

**Headline**: `Navigate India's Regulatory Landscape with Confidence`

**Subheadline**: `End-to-end compliance support for Medical Devices, IVDs, Cosmetics, and more. From documentation to approval - we handle the complexity so you can focus on your product.`

**Primary CTA**: `Book a Consultation`

**Secondary CTA**: `Explore Services`

---

## Service Cards Data

| Service | Tagline | Badge | Image |
|---------|---------|-------|-------|
| Medical Devices | CDSCO registration for manufacturers & importers | CDSCO | medical-devices.jpg |
| In-Vitro Diagnostics | Performance evaluation & IVD import licensing | CDSCO | ivd.jpg |
| Cosmetics | Product registration & safety compliance | CDSCO | cosmetics.jpg |
| Legal Metrology | Model approval & packaging validation | Central-Level | lmpc.jpg |
| Import Export Code | IEC registration with lifetime validity | Lifetime Valid | iec.jpg |
| EPR Compliance | Extended producer responsibility & recycling | CPCB | epr.jpg |

---

## Visual Style

- **Background**: Light gradient (no dark space theme)
- **Typography**: Bold heading, clean body text
- **Cards**: Rounded corners (xl), subtle shadow, image-based with overlay
- **Colors**: Primary blues/teals, accent colors per service
- **Spacing**: Generous padding, breathing room around elements

---

## Implementation Order

1. Create `ServiceCardCarousel.tsx` component with auto-rotation
2. Rewrite `HeroSection.tsx` with new layout and content
3. Add Framer Motion entrance animations
4. Test responsive behavior across breakpoints
5. Verify card links work correctly
6. Optional: Remove unused orbit/planet components

