

# Hero Section - Earth Globe with Orbiting Service Planets

## Design Concept

A stunning 3D Earth globe in brand colors (blue/teal) at the center, with 6 service "planets" orbiting around it in true planetary motion. Services coming to the **front** appear **larger** (perspective depth), and each planet contains a relevant service image with text overlay.

---

## Visual Structure

```text
┌────────────────────────────────────────────────────────────────────────────────┐
│                              HERO SECTION                                       │
│                                                                                 │
│   ┌──────────────────────┐        ┌─────────────────────────────────────────┐  │
│   │                      │        │                                          │  │
│   │  [Badge] Partner     │        │              PLANETARY ORBIT             │  │
│   │                      │        │                                          │  │
│   │  Comprehensive       │        │         ○ IEC (back, smaller)            │  │
│   │  Regulatory &        │        │      ↗                    ↖              │  │
│   │  Compliance          │        │    ○ LMPC              Cosmetics ○       │  │
│   │  Solutions           │        │   (side)    ┌──────────┐   (side)        │  │
│   │                      │        │            ╱ ╲  EARTH  ╱ ╲               │  │
│   │  [Book Consultation] │        │           │   ╲ GLOBE ╱   │              │  │
│   │  [Explore Services]  │        │           │    ╲────╱    │               │  │
│   │                      │        │            ╲   BRAND   ╱                 │  │
│   │  [Quick Links]       │        │             ╲ COLORS ╱                   │  │
│   │                      │        │    ● MD                     IVD ●        │  │
│   │  [Trust Badges]      │        │  (FRONT)                   (FRONT)       │  │
│   │                      │        │  LARGER!     ○ EPR          LARGER!      │  │
│   │                      │        │          (back, smaller)                 │  │
│   └──────────────────────┘        └─────────────────────────────────────────┘  │
│                                                                                 │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## Core Components

### 1. Central Earth Globe (Brand Colored)

The central globe uses the brand's **primary blue (#3B82F6)** and **accent teal (#1C8864)** colors:

```text
┌────────────────────────────────────────┐
│            EARTH GLOBE ANATOMY          │
│                                         │
│           ╭─── Outer glow (blue)        │
│          ╱                              │
│         ╱   ╭── Continent lines         │
│        ╱   ╱   (teal accents)           │
│       ◉───┼────( ● GLOBE )              │
│            \    │                       │
│             \   └── Latitude/longitude  │
│              \      grid lines          │
│               └── Slow rotation         │
│                                         │
│   Colors:                               │
│   • Ocean: #3B82F6 (brand blue)         │
│   • Land: #1C8864 (accent teal)         │
│   • Grid: rgba(255,255,255,0.3)         │
│   • Glow: blue gradient blur            │
└────────────────────────────────────────┘
```

**Features:**
- Gradient from deep blue to teal (ocean/land effect)
- SVG latitude/longitude grid lines for 3D depth
- Slow continuous rotation (60s per revolution)
- Pulsing outer glow in brand blue
- "Terz Compliance" badge in center (optional)

### 2. Orbiting Service Planets

Each service is a **circular planet** with a **real image background** and **text overlay**:

```text
┌────────────────────────────────────────┐
│        SERVICE PLANET ANATOMY           │
│                                         │
│          ╭──── Outer glow (service color)
│         ╱                               │
│        ╱   ╭── Planet border            │
│       ╱   ╱                             │
│      ◉───┼───(  ┌───────────┐  )        │
│           \    │   IMAGE    │           │
│            \   │ BACKGROUND │           │
│             \  │            │           │
│              \ │   "MD"     │           │
│               \│  Medical   │           │
│                │  Devices   │           │
│                └───────────┘            │
│                                         │
│   Structure:                            │
│   • Circular clip-path for image        │
│   • Dark gradient overlay for text      │
│   • Service name + short label          │
│   • Border color matches service        │
└────────────────────────────────────────┘
```

### 3. Perspective Depth Effect (Key Feature)

As planets orbit, their size changes based on their position:

| Position | Scale | Z-Index | Effect |
|----------|-------|---------|--------|
| **Front** (bottom) | 1.3x | 50 | Largest, most prominent |
| **Sides** (left/right) | 1.0x | 30 | Normal size |
| **Back** (top) | 0.7x | 10 | Smallest, faded |

**Implementation Logic:**
```typescript
// Calculate scale based on Y position in orbit
// Front (positive Y) = larger, Back (negative Y) = smaller
const getScale = (angle: number) => {
  const yPos = Math.sin((angle * Math.PI) / 180);
  // yPos ranges from -1 (back) to 1 (front)
  const scale = 0.7 + (yPos + 1) * 0.3; // Range: 0.7 to 1.3
  return scale;
};
```

---

## Service Planet Configuration

| Service | Image | Colors | Orbit Position |
|---------|-------|--------|----------------|
| Medical Devices | `medical-devices.jpg` | Blue → Cyan | Primary orbit (front-right start) |
| In-Vitro Diagnostics | `ivd.jpg` | Teal → Emerald | Primary orbit (front-left start) |
| Cosmetics | `cosmetics.jpg` | Pink → Purple | Secondary orbit |
| Legal Metrology | `lmpc.jpg` | Amber → Orange | Secondary orbit |
| IEC | `iec.jpg` | Green → Lime | Tertiary orbit |
| EPR Compliance | `epr.jpg` | Indigo → Violet | Tertiary orbit |

---

## Orbit Configuration

### Single Elliptical Orbit (Recommended)

All 6 planets on ONE elliptical orbit path, equally spaced at 60° intervals:

```text
                    ○ (back - small)
                  ╱     ╲
               ╱           ╲
            ○                 ○
         (side)             (side)
           │                   │
           │    ┌───────┐     │
           │    │ EARTH │     │
           │    │ GLOBE │     │
           │    └───────┘     │
           │                   │
            ●                 ●
         (FRONT)           (FRONT)
          LARGE              LARGE
                  ╲     ╱
                    ○ (back - small)
```

**Orbit Parameters:**
```typescript
const orbitConfig = {
  radiusX: 280,  // Horizontal radius (wider)
  radiusY: 160,  // Vertical radius (elliptical depth)
  duration: 24,  // Seconds for full revolution
  direction: 1,  // 1 = clockwise, -1 = counter-clockwise
};

// Planet starting positions (degrees)
const planetAngles = [
  { service: "medical-devices", startAngle: 270 },  // Front-right
  { service: "ivd", startAngle: 90 },               // Front-left
  { service: "cosmetics", startAngle: 330 },        // Back-right
  { service: "lmpc", startAngle: 150 },             // Back-left
  { service: "iec", startAngle: 30 },               // Side-right
  { service: "epr", startAngle: 210 },              // Side-left
];
```

---

## Animation Specifications

### Globe Rotation
```css
@keyframes globe-rotate {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}
.earth-globe {
  animation: globe-rotate 60s linear infinite;
}
```

### Planet Orbit (Framer Motion)
```typescript
// Calculate position on elliptical orbit
const calculatePosition = (angle: number, time: number) => {
  const currentAngle = angle + (time / duration) * 360;
  const x = Math.cos((currentAngle * Math.PI) / 180) * radiusX;
  const y = Math.sin((currentAngle * Math.PI) / 180) * radiusY;
  
  // Scale based on Y position (front = larger)
  const scale = 0.7 + ((y / radiusY) + 1) * 0.3;
  
  // Z-index based on Y position
  const zIndex = Math.round(50 + (y / radiusY) * 40);
  
  return { x, y, scale, zIndex };
};
```

### Perspective Scaling Effect
```typescript
// Inside useFrame or animation loop
animate={{
  x: calculateX(currentAngle),
  y: calculateY(currentAngle),
  scale: getScale(currentAngle),
}}
transition={{
  duration: 24,
  repeat: Infinity,
  ease: "linear",
}}
```

---

## Technical Implementation

### New Component: `EarthGlobe.tsx`

```typescript
interface EarthGlobeProps {
  size?: number;
  showGrid?: boolean;
  rotationSpeed?: number;
}
```

**Features:**
- SVG-based globe with gradient fill
- Latitude/longitude grid lines
- Continent-like pattern using bezier curves
- Continuous slow rotation
- Pulsing glow effect

### Modified Component: `GlobeAnimation.tsx` → `PlanetaryOrbitHero.tsx`

**Changes:**
- Replace current icon-only planets with image-based planet cards
- Implement single elliptical orbit for all 6 services
- Add perspective scaling (front = larger, back = smaller)
- Update z-index dynamically based on position
- Add labels visible on hover or when front-facing

---

## Planet Card Design

Each orbiting planet has:

```text
┌──────────────────────────────────────┐
│         PLANET CARD (90px-130px)      │
│                                       │
│   ┌─────────────────────────────┐    │
│   │  ╭─────────────────────╮    │    │
│   │  │                     │    │    │
│   │  │   SERVICE IMAGE     │    │    │
│   │  │   (circular clip)   │    │    │
│   │  │                     │    │    │
│   │  ├─────────────────────┤    │    │
│   │  │  ┌─ Gradient overlay │    │    │
│   │  │  │  (bottom 40%)    │    │    │
│   │  │  │                  │    │    │
│   │  │  │ "Medical"        │    │    │
│   │  │  │ "Devices"        │    │    │
│   │  ╰──┴─────────────────╯    │    │
│   └─────────────────────────────┘    │
│                                       │
│   • Colored border matching service   │
│   • Box-shadow glow effect            │
│   • Scale/opacity based on position   │
└──────────────────────────────────────┘
```

---

## Responsive Behavior

| Breakpoint | Globe Size | Planet Size | Orbit Radius |
|------------|------------|-------------|--------------|
| Desktop (1024px+) | 200px | 90-130px | 280×160 |
| Tablet (768px-1023px) | 160px | 70-100px | 220×120 |
| Mobile (<768px) | 120px | 50-75px | 160×90 |

**Mobile Adjustments:**
- Orbit animation speed reduced (less motion sickness)
- Labels always visible (no hover state on touch)
- Slightly reduced perspective scaling range (0.8-1.2)

---

## Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `src/components/hero/EarthGlobe.tsx` | Create | Central brand-colored Earth globe |
| `src/components/hero/OrbitingPlanet.tsx` | Create | Individual service planet card |
| `src/components/hero/PlanetaryOrbitHero.tsx` | Create | Container orchestrating globe + planets |
| `src/components/hero/HeroSection.tsx` | Modify | Replace GlobeAnimation with PlanetaryOrbitHero |
| `src/index.css` | Modify | Add globe rotation and orbit keyframes |

---

## Animation Keyframes to Add

```css
/* Globe slow rotation */
@keyframes globe-spin {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}

/* Globe glow pulse */
@keyframes globe-glow {
  0%, 100% { 
    box-shadow: 
      0 0 60px rgba(59, 130, 246, 0.4),
      0 0 120px rgba(59, 130, 246, 0.2);
  }
  50% { 
    box-shadow: 
      0 0 80px rgba(59, 130, 246, 0.5),
      0 0 150px rgba(59, 130, 246, 0.3);
  }
}

/* Planet orbit path highlight */
@keyframes orbit-dash {
  from { stroke-dashoffset: 100; }
  to { stroke-dashoffset: 0; }
}
```

---

## Expected Visual Outcome

**Current State:**
- Globe with icon-only service indicators
- Icons orbit but don't change size
- No service images or descriptive text

**After Implementation:**
- Stunning Earth globe in brand blue/teal colors
- 6 service planets with real images + text
- True planetary motion with perspective depth
- **Front planets appear 1.3x larger**
- **Back planets appear 0.7x smaller with reduced opacity**
- Smooth, mesmerizing orbital animation
- Professional, space-themed hero section
- Fully responsive across all devices

