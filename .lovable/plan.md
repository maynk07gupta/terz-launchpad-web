

# Hero Section Redesign - Full-Screen Orbital System with Realistic Earth

## Issues Identified

### 1. Hero Section Layout
- Currently has two-column layout (55% text, 45% orbit)
- User wants **ONLY the orbit animation** in the hero section
- Text content, CTAs, quick links, and trust badges need to be removed or relocated

### 2. Earth Globe Issues
- Current globe is too small and appears 2D (flat gradients)
- Has Terz logo overlaid in the center (needs removal)
- Needs to be the **biggest element** and more **realistic/3D looking**

### 3. Navbar Z-Index Problem
- Current navbar has `z-50` but orbit elements can overlap when scrolling
- Need to ensure header ALWAYS stays on top layer

### 4. Planet Occlusion (Key Feature)
- Currently planets at the back are visible (just scaled down and faded)
- User wants planets to **hide BEHIND the Earth** when they orbit to the back
- This creates a realistic planetary system effect

---

## Proposed Solutions

### A. Hero Section - Orbit Only Layout

**Remove from HeroSection:**
- Badge text ("Your Regulatory Partner")
- Main headline and sub-headline
- CTA buttons (Book Consultation, Explore Services)
- QuickLinkPills component
- Trust badges

**New Layout:**
```text
┌────────────────────────────────────────────────────────────────┐
│  NAVBAR (z-index: 100+)                                        │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│                                                                 │
│                    ○ (hidden behind Earth)                      │
│                 ╱                      ╲                        │
│              ○                            ○                     │
│           (side)    ┌──────────────┐   (side)                  │
│                     │              │                            │
│                     │    EARTH     │                            │
│                     │   (LARGE)    │                            │
│                     │   REALISTIC  │                            │
│                     │              │                            │
│                     └──────────────┘                            │
│              ●                            ●                     │
│           (FRONT)                      (FRONT)                  │
│            LARGE                        LARGE                   │
│                 ╲                      ╱                        │
│                    ○ (hidden behind Earth)                      │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

### B. Realistic 3D Earth Globe

**Current Problems:**
- Simple SVG with flat gradients
- Too small (180px on desktop)
- Terz logo in center disrupts the Earth look

**New Earth Design:**
```text
┌────────────────────────────────────────────────┐
│          REALISTIC 3D EARTH GLOBE              │
│                                                │
│    Size: 300-350px (desktop), 200px (mobile)   │
│                                                │
│   ┌─────────────────────────────────────────┐  │
│   │   ╭────────────────────────────╮        │  │
│   │  ╱   Atmosphere glow (outer)    ╲       │  │
│   │ │  ╭────────────────────────╮    │      │  │
│   │ │ ╱   Ocean base gradient    ╲   │      │  │
│   │ │ │  ╭──────────────────╮    │   │      │  │
│   │ │ │ │   Continent SVG    │   │   │      │  │
│   │ │ │ │   (detailed paths) │   │   │      │  │
│   │ │ │  ╰──────────────────╯    │   │      │  │
│   │ │ │    Lat/Long grid lines   │   │      │  │
│   │ │  ╲   Cloud layer overlay  ╱    │      │  │
│   │ │   ╰────────────────────╯       │      │  │
│   │ │      Specular highlight        │      │  │
│   │  ╲     (top-left shine)         ╱       │  │
│   │   ╰────────────────────────────╯        │  │
│   │        Shadow (bottom-right)            │  │
│   └─────────────────────────────────────────┘  │
│                                                │
│   Layers (inside to outside):                  │
│   1. Ocean gradient (deep blue to cyan)        │
│   2. Continent shapes (teal/green)             │
│   3. Lat/long grid (white, 20% opacity)        │
│   4. Cloud wisps (white, 15% opacity)          │
│   5. Specular highlight (top-left)             │
│   6. Shadow (bottom-right)                     │
│   7. Atmosphere glow (blue halo)               │
│                                                │
│   Animation: Slow continuous rotation          │
│   (CSS transform: rotateY)                     │
└────────────────────────────────────────────────┘
```

### C. Planet Occlusion System

**Current Behavior:**
- All planets visible at all times
- Back planets just scaled down (0.7x) and faded (0.6 opacity)
- Z-index range: 10-90, but Earth is always z-40

**New Behavior:**
```text
FRONT OF ORBIT (Y > 0):
┌─────────────────────────────────────────────┐
│   Planet visible, larger (1.3x), z-index 60+ │
│   Renders IN FRONT of Earth                  │
└─────────────────────────────────────────────┘

BACK OF ORBIT (Y < threshold):
┌─────────────────────────────────────────────┐
│   Planet HIDDEN (opacity: 0 or behind clip)  │
│   OR: z-index < Earth's z-index              │
│   Creates realistic "behind Earth" effect    │
└─────────────────────────────────────────────┘
```

**Implementation Options:**
1. **Z-Index Method**: Earth z-index = 50, back planets z-index < 50, front planets z-index > 50
2. **Opacity Fade**: Planets at Y < -0.3 fade to opacity 0
3. **Clip Path**: Use CSS clip-path on the container to hide back planets

**Recommended: Hybrid Approach**
- Front planets (Y > 0): z-index 60-90, full opacity
- Side planets (Y ~ 0): z-index 40-60, slight fade
- Back planets (Y < -0.3): z-index 10-30, fade to 0 opacity (hidden)

### D. Navbar Z-Index Fix

**Current:** `z-50`
**New:** `z-[100]` or higher

This ensures the navbar stays above all orbital elements.

---

## Technical Implementation

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/hero/HeroSection.tsx` | Remove text content, make orbit full-screen centered |
| `src/components/hero/EarthGlobe.tsx` | Remove logo overlay, increase size, add more realistic layers |
| `src/components/hero/PlanetaryOrbitHero.tsx` | Increase globe size, add occlusion logic |
| `src/components/hero/OrbitingPlanet.tsx` | Update opacity logic for back-planet hiding |
| `src/components/Navbar.tsx` | Increase z-index to 100+ |

### New Earth Globe Specifications

```typescript
// EarthGlobe.tsx - Updated props
interface EarthGlobeProps {
  size?: number; // Default: 320 (was 180)
}

// Layers to add:
// 1. Deeper ocean gradient with multiple color stops
// 2. More detailed continent SVG paths
// 3. Cloud layer (animated subtle drift)
// 4. Stronger atmosphere glow effect
// 5. Enhanced 3D lighting (specular + ambient)

// REMOVE: Center logo overlay (lines 87-100)
```

### Planet Occlusion Logic

```typescript
// PlanetaryOrbitHero.tsx - Updated calculatePlanetProps

const calculatePlanetProps = (startAngle: number) => {
  const { radiusX, radiusY, duration } = config;
  
  const currentAngle = startAngle - (time / duration) * 360;
  const angleRad = (currentAngle * Math.PI) / 180;
  
  const x = Math.cos(angleRad) * radiusX;
  const y = Math.sin(angleRad) * radiusY;
  
  const normalizedY = y / radiusY; // -1 to 1
  
  // Scale: front = larger, back = smaller
  const scale = 0.6 + (normalizedY + 1) * 0.4; // 0.6 to 1.4
  
  // NEW: Occlusion logic
  // Planets in back half (normalizedY < -0.2) should be hidden
  const isBehindEarth = normalizedY < -0.2;
  
  // Opacity: visible in front, hidden in back
  let opacity = 1;
  if (normalizedY < -0.2) {
    // Fade out as it goes behind
    opacity = Math.max(0, (normalizedY + 0.2) / 0.3); // 0 to 0.3
  } else if (normalizedY < 0.2) {
    // Partial visibility on sides
    opacity = 0.7 + (normalizedY + 0.2) * 0.75;
  }
  
  // Z-index: front planets ABOVE Earth (60+), back planets BELOW (10-40)
  // Earth will be at z-index 50
  const zIndex = isBehindEarth 
    ? Math.round(20 + (normalizedY + 1) * 20) // 20-40 when behind
    : Math.round(55 + normalizedY * 35);       // 55-90 when in front
  
  return { x, y, scale, opacity, zIndex, isBehindEarth };
};
```

### Updated Orbit Configuration

```typescript
// Desktop config - LARGER globe and orbit
const getOrbitConfig = (isMobile: boolean, isTablet: boolean): OrbitConfig => {
  if (isMobile) {
    return {
      radiusX: 140,
      radiusY: 80,
      duration: 30,
      globeSize: 180,   // Was 100
      planetSize: 50,
    };
  }
  if (isTablet) {
    return {
      radiusX: 220,
      radiusY: 130,
      duration: 26,
      globeSize: 250,   // Was 150
      planetSize: 65,
    };
  }
  return {
    radiusX: 320,       // Was 260
    radiusY: 180,       // Was 145
    duration: 24,
    globeSize: 320,     // Was 180 - MUCH BIGGER
    planetSize: 85,     // Was 95
  };
};
```

---

## Visual Comparison

### Current State
- Two-column layout with text + small orbit
- 2D flat Earth with logo in center
- All planets visible at all times
- Navbar sometimes hidden by orbit elements

### After Implementation
- Full-screen centered orbital system
- Large, realistic 3D Earth (no logo)
- Planets realistically hide behind Earth when orbiting to the back
- Navbar always on top (z-100)
- Immersive, dynamic hero experience

---

## Expected Outcome

The hero section will feature:
1. A **dominant, realistic 3D Earth** (320px on desktop) as the central focal point
2. **Six service planets** orbiting around the Earth
3. **True planetary motion** where back planets disappear behind Earth
4. **Front planets appear larger** (1.4x) and more prominent
5. **Navbar always visible** above all elements
6. Clean, minimalist hero focused entirely on the orbital animation

