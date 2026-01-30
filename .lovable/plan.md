

# Planet-Style Service Showcase Design

## Inspiration Analysis

Based on the YouTube Shorts video "Spaceedu about earth website design", the key design elements are:

```text
┌────────────────────────────────────────────────────────────────────────────┐
│  SPACEEDU DESIGN ELEMENTS                                                   │
│                                                                             │
│  • Dark space-themed background with starfield                              │
│  • Large 3D glowing planet sphere as central focal point                    │
│  • Gradient glow effects (blue/cyan/white halos)                            │
│  • Text overlays with service/fact information                              │
│  • Smooth orbital/planetary animations                                      │
│  • Tab navigation (Planets, Trailer, Tickets)                               │
│  • Minimalist typography with high contrast                                 │
│                                                                             │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Proposed Design: Planet-Style Service Cards

Transform each of Terz's 6 services into individual "planet" visualizations, creating a solar system of regulatory expertise.

### Visual Concept

```text
┌────────────────────────────────────────────────────────────────────────────┐
│                        SERVICES - PLANET SHOWCASE                          │
│                                                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │                    [Dark Space Background]                           │  │
│  │              ★    ✦         ✧        ★      ✦                       │  │
│  │                                                                      │  │
│  │       ┌─────────────┐              ┌─────────────┐                  │  │
│  │       │   ◉ GLOW    │              │   ◉ GLOW    │                  │  │
│  │       │   /    \    │              │   /    \    │                  │  │
│  │       │  (  MD  )   │              │  ( IVD )    │ ← Larger planets │  │
│  │       │   \    /    │              │   \    /    │                  │  │
│  │       │    ◉        │              │    ◉        │                  │  │
│  │       │             │              │             │                  │  │
│  │       │ Medical     │              │ In-Vitro    │                  │  │
│  │       │ Devices     │              │ Diagnostics │                  │  │
│  │       └─────────────┘              └─────────────┘                  │  │
│  │                                                                      │  │
│  │    ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐                   │  │
│  │    │   ◎    │  │   ◎    │  │   ◎    │  │   ◎    │ ← Smaller planets │  │
│  │    │Cosmetic│  │ LMPC   │  │  IEC   │  │  EPR   │                   │  │
│  │    └────────┘  └────────┘  └────────┘  └────────┘                   │  │
│  │                                                                      │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Component Architecture

### New Component: `PlanetServiceCard.tsx`

Each service rendered as a glowing 3D planet sphere with:

| Feature | Implementation |
|---------|----------------|
| 3D Sphere | CSS `border-radius: 50%` with radial gradients |
| Glow Effect | Multi-layer box-shadows with colored blur |
| Orbit Ring | Thin dashed elliptical border around planet |
| Surface Texture | Dot pattern overlay (like current globe) |
| Hover Animation | Scale up, intensify glow, rotate slightly |
| Click Action | Navigate to service detail page |

### Planet Visual Structure

```text
┌──────────────────────────────────────────┐
│           PLANET ANATOMY                  │
│                                          │
│       ╭──── Outer Glow (blur-3xl)        │
│      ╱                                    │
│     ╱    ╭── Ring/Orbit (dashed)         │
│    ╱    ╱                                 │
│   ◉────┼───( ○ Planet Core )             │
│         \     │                           │
│          \    └── Surface pattern         │
│           \                               │
│            └── Inner glow (blur-xl)       │
│                                          │
│   Below sphere:                           │
│   ┌────────────────────────┐             │
│   │ Service Name (bold)    │             │
│   │ Tagline (muted)        │             │
│   │ [Explore →] button     │             │
│   └────────────────────────┘             │
└──────────────────────────────────────────┘
```

### Color Scheme Per Service (Priority Order)

| Service | Planet Color | Glow Color | Size |
|---------|--------------|------------|------|
| Medical Devices | Blue gradient (brand) | Cyan/Blue | Extra Large |
| In-Vitro Diagnostics | Teal gradient | Emerald/Cyan | Extra Large |
| Cosmetics | Pink/Purple gradient | Magenta | Medium |
| Legal Metrology | Orange/Gold gradient | Amber | Medium |
| IEC | Green gradient | Lime | Standard |
| EPR | Blue-Gray gradient | Slate/Blue | Standard |

---

## Section Layout

### Desktop Layout (3-Column Grid)

```text
┌──────────────────────────────────────────────────────────────────┐
│                 Our Regulatory Universe                           │
│                                                                   │
│    ┌────────────────┐   ┌────────────────┐   ┌────────────────┐  │
│    │                │   │                │   │                │  │
│    │    ◉◉◉◉       │   │     ◉◉◉◉      │   │      ◉◉       │  │
│    │   ◉    ◉      │   │    ◉    ◉     │   │     ◉  ◉      │  │
│    │   ◉ MD  ◉     │   │   ◉ IVD  ◉    │   │    ◉ COS ◉    │  │
│    │   ◉    ◉      │   │    ◉    ◉     │   │     ◉  ◉      │  │
│    │    ◉◉◉◉       │   │     ◉◉◉◉      │   │      ◉◉       │  │
│    │                │   │                │   │                │  │
│    │ Medical        │   │  In-Vitro      │   │  Cosmetics     │  │
│    │ Devices        │   │  Diagnostics   │   │                │  │
│    │ [Explore →]    │   │  [Explore →]   │   │  [Explore →]   │  │
│    └────────────────┘   └────────────────┘   └────────────────┘  │
│                                                                   │
│    ┌────────────────┐   ┌────────────────┐   ┌────────────────┐  │
│    │      ◉◉       │   │      ◉◉       │   │      ◉◉       │  │
│    │     ◉  ◉      │   │     ◉  ◉      │   │     ◉  ◉      │  │
│    │    ◉LMPC◉     │   │    ◉ IEC◉     │   │    ◉ EPR◉     │  │
│    │     ◉  ◉      │   │     ◉  ◉      │   │     ◉  ◉      │  │
│    │      ◉◉       │   │      ◉◉       │   │      ◉◉       │  │
│    │                │   │                │   │                │  │
│    │ Legal          │   │  Import Export │   │  EPR           │  │
│    │ Metrology      │   │  Code          │   │  Compliance    │  │
│    │ [Explore →]    │   │  [Explore →]   │   │  [Explore →]   │  │
│    └────────────────┘   └────────────────┘   └────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

### Mobile Layout (2-Column Grid)

- First row: 2 large primary planets (MD, IVD)
- Second row: 2 medium planets (Cosmetics, LMPC)
- Third row: 2 standard planets (IEC, EPR)

---

## Technical Implementation

### Files to Create

| File | Purpose |
|------|---------|
| `src/components/PlanetServiceCard.tsx` | Individual planet service card component |
| `src/components/PlanetServicesSection.tsx` | Container section with dark space background |

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Home.tsx` | Replace `AnimatedServiceCard` grid with new `PlanetServicesSection` |
| `src/index.css` | Add new keyframes for planet animations |

### Animation Keyframes to Add

```css
/* Planet rotation */
@keyframes planet-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Glow pulse */
@keyframes glow-pulse {
  0%, 100% { 
    box-shadow: 
      0 0 30px rgba(var(--planet-color), 0.4),
      0 0 60px rgba(var(--planet-color), 0.2);
  }
  50% { 
    box-shadow: 
      0 0 50px rgba(var(--planet-color), 0.6),
      0 0 80px rgba(var(--planet-color), 0.3);
  }
}

/* Star twinkle */
@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

/* Orbit line animation */
@keyframes orbit-dash {
  from { stroke-dashoffset: 100; }
  to { stroke-dashoffset: 0; }
}
```

---

## PlanetServiceCard Component Specs

### Props Interface

```typescript
interface PlanetServiceCardProps {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  size: "xl" | "md" | "sm";
  gradientFrom: string;
  gradientTo: string;
  glowColor: string;
  index: number;
}
```

### Visual Layers (Inside to Outside)

1. **Core sphere** - Solid gradient background
2. **Surface texture** - Radial dot pattern overlay
3. **Inner highlight** - Top-left white gradient for 3D effect
4. **Shadow** - Bottom-right darker gradient
5. **Orbit ring** - Dashed ellipse circling planet
6. **Outer glow** - Blurred colored shadow
7. **Floating particles** - Small dots around planet

### Hover Effects

- Scale: `1.08` on hover
- Glow intensity: Increase blur radius and opacity
- Orbit ring: Start subtle rotation animation
- Text: Slide up reveal of tagline

---

## Background Design

### Starfield Background

```css
.space-background {
  background: 
    /* Stars layer 1 - small */
    radial-gradient(1px 1px at 20px 30px, white 50%, transparent),
    radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.8) 50%, transparent),
    radial-gradient(1px 1px at 50px 160px, white 50%, transparent),
    /* ... more star positions ... */
    /* Base gradient - dark blue to near-black */
    linear-gradient(to bottom, #0a0e1a 0%, #060a14 100%);
  background-size: 200px 200px, 200px 200px, 200px 200px, 100% 100%;
}
```

### Nebula Accents

- Subtle purple/blue gradient blobs in corners
- Low opacity (10-20%) for atmosphere without distraction

---

## Service Data Configuration

```typescript
const planetServices = [
  {
    id: "medical-devices",
    title: "Medical Devices",
    tagline: "CDSCO submissions prepared end-to-end",
    badge: "CDSCO",
    size: "xl",
    gradientFrom: "#3B82F6", // Blue
    gradientTo: "#06B6D4",   // Cyan
    glowColor: "59, 130, 246", // RGB for box-shadow
  },
  {
    id: "ivd",
    title: "In-Vitro Diagnostics",
    tagline: "Performance evaluation oversight",
    badge: "CDSCO",
    size: "xl",
    gradientFrom: "#14B8A6", // Teal
    gradientTo: "#10B981",   // Emerald
    glowColor: "20, 184, 166",
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    tagline: "Product registration & safety dossiers",
    badge: "CDSCO",
    size: "md",
    gradientFrom: "#EC4899", // Pink
    gradientTo: "#A855F7",   // Purple
    glowColor: "236, 72, 153",
  },
  {
    id: "legal-metrology",
    title: "Legal Metrology",
    tagline: "Model approval & packaging validation",
    badge: "Central-Level",
    size: "md",
    gradientFrom: "#F59E0B", // Amber
    gradientTo: "#EF4444",   // Orange-red
    glowColor: "245, 158, 11",
  },
  {
    id: "iec",
    title: "Import Export Code",
    tagline: "IEC registration & renewals",
    badge: "Lifetime Valid",
    size: "sm",
    gradientFrom: "#22C55E", // Green
    gradientTo: "#84CC16",   // Lime
    glowColor: "34, 197, 94",
  },
  {
    id: "epr",
    title: "EPR Compliance",
    tagline: "Annual returns & recycling management",
    badge: "CPCB",
    size: "sm",
    gradientFrom: "#6366F1", // Indigo
    gradientTo: "#8B5CF6",   // Violet
    glowColor: "99, 102, 241",
  },
];
```

---

## Responsive Behavior

| Breakpoint | Layout | Planet Sizes |
|------------|--------|--------------|
| Desktop (1024px+) | 3 columns | XL: 200px, MD: 160px, SM: 140px |
| Tablet (768px-1023px) | 2 columns | XL: 180px, MD: 150px, SM: 130px |
| Mobile (<768px) | 2 columns stacked | XL: 140px, MD: 120px, SM: 100px |

---

## Performance Optimizations

1. **CSS Animations**: All planet rotations use pure CSS for GPU acceleration
2. **will-change**: Applied to animated elements
3. **Reduced Motion**: Respect `prefers-reduced-motion` - disable rotations
4. **Lazy Loading**: Only animate planets when in viewport using `whileInView`

---

## Expected Visual Outcome

**Before**: Standard card grid with images, borders, and text - light themed

**After**: Immersive dark space-themed section with:
- 6 glowing planet spheres representing each service
- MD and IVD as large prominent "primary" planets
- Subtle orbital animations and pulsing glow effects
- Starfield background with nebula accents
- Smooth hover interactions with scale and glow intensification
- Clear visual hierarchy showing expertise priorities

