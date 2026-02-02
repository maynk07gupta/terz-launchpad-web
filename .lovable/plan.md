

# Hero Section Redesign - Arc Orbit Above Earth

## Understanding Your Sketch

Your wireframe shows a fundamentally different orbit pattern:

```text
CURRENT ORBIT PATTERN (Ellipse around center):
              ○ (back - hidden)
           ╱              ╲
        ○                    ○
       ╱    [center point]    ╲
      ○                        ○
       ╲                      ╱
        ●                    ●
           ╲              ╱
              ● (front)

YOUR DESIRED ORBIT PATTERN (Arc along Earth's curve):

        ○ Service 1 ──→ ○ Service 2 ──→ ○ Service 3 ──→
       ╱                                                 ╲
      ╱                                                   ╲
     ╱                                                     ╲
    ○                                                       ○
   ↑  ╲                                                   ╱  ↓
   ↑   ╲                                                 ╱   ↓
   ↑    ╭─────────────────────────────────────────────────╮    ↓
   ↑   ╱          EARTH (large, bottom)                    ╲   ↓
      ╱                                                      ╲
     ╱                                                        ╲
────────────────────────────────────────────────────────────────────
                        (viewport bottom)
```

The planets follow the curvature of the Earth's top edge, moving left-to-right (or in a continuous arc) and disappearing behind the Earth on the sides.

---

## Key Differences

| Aspect | Current | New Design |
|--------|---------|------------|
| Orbit Shape | Full ellipse around center | Arc following Earth's top curve |
| Movement | Planets go around center point | Planets slide along Earth's horizon |
| Visibility | Hide when at back (top of ellipse) | Hide when at sides (behind Earth edges) |
| Earth Position | Separate from orbit system | Earth IS the orbit path reference |
| Orbit Anchor | Abstract center point | Top curvature of the Earth sphere |

---

## New Orbit Geometry

The orbit path is now an ARC that follows the visible top portion of the Earth:

```text
                    Arc Orbit Path
                   ╭─────────────────╮
                  ╱                   ╲
                 ╱                     ╲
                ╱   ○ → ○ → ○ → ○ → ○   ╲
               ╱    (planets moving)     ╲
              │                           │
              │                           │
    ╭─────────┤                           ├─────────╮
   ╱          │      VISIBLE EARTH        │          ╲
  ╱           │         PORTION           │           ╲
 ╱            │                           │            ╲
───────────────────────────────────────────────────────────
                    viewport bottom
```

### Arc Path Calculation

Instead of using an ellipse, we use the top portion of a LARGER circle that matches the Earth's curvature:

```typescript
// Arc parameters
const earthRadius = globeSize / 2;  // e.g., 450px for 900px globe
const orbitHeight = 120;            // How high above Earth the arc sits
const arcRadius = earthRadius + orbitHeight;  // Planets orbit at this radius

// Position on arc (only upper portion: 180° to 360° / 0°)
// Angle ranges from ~150° to ~30° (top arc only)
const arcStartAngle = 150;  // degrees (left side)
const arcEndAngle = 30;     // degrees (right side)

// Calculate position for each planet
const calculateArcPosition = (index: number, totalPlanets: number, time: number) => {
  const arcSpan = arcStartAngle - arcEndAngle;  // 120°
  const spacing = arcSpan / (totalPlanets - 1);
  
  // Base angle for this planet (evenly spaced)
  const baseAngle = arcStartAngle - (index * spacing);
  
  // Animate: add time-based offset (all planets move together)
  const animatedAngle = baseAngle - (time * rotationSpeed);
  
  // Convert to radians and calculate position
  const angleRad = (animatedAngle * Math.PI) / 180;
  const x = Math.cos(angleRad) * arcRadius;
  const y = -Math.sin(angleRad) * arcRadius;  // Negative because Y increases downward
  
  return { x, y, angle: animatedAngle };
};
```

---

## Visibility & Occlusion Logic

Planets should hide when they reach the sides of the Earth (going behind it):

```text
VISIBLE ZONE: Angles between ~150° and ~30° (top arc)

         150°    120°    90°     60°     30°
           ╲      ╲      ↑      ╱      ╱
            ╲      ╲     ○     ╱      ╱
             ╲      ○   ○   ○      ╱
              ○                    ○
             ↑                      ↑
    FADE OUT │    FULLY VISIBLE    │ FADE OUT
    ZONE     │       ZONE          │ ZONE
             │                      │
   ╔═════════╬══════════════════════╬═════════╗
   ║         │     EARTH EDGE       │         ║
   ║         │                      │         ║
   ║         └──────────────────────┘         ║
   ║              EARTH BODY                  ║
   ╚══════════════════════════════════════════╝
```

```typescript
const calculateVisibility = (angle: number) => {
  // Visible zone: 150° to 30°
  const visibleStart = 150;
  const visibleEnd = 30;
  const fadeZone = 15;  // 15° fade-in/fade-out zone
  
  let opacity = 1;
  let zIndex = 50;
  
  if (angle > visibleStart) {
    // Fading out on left side
    const fadeProgress = (angle - visibleStart) / fadeZone;
    opacity = Math.max(0, 1 - fadeProgress);
    zIndex = 25;  // Behind Earth
  } else if (angle < visibleEnd) {
    // Fading out on right side
    const fadeProgress = (visibleEnd - angle) / fadeZone;
    opacity = Math.max(0, 1 - fadeProgress);
    zIndex = 25;  // Behind Earth
  }
  
  return { opacity, zIndex };
};
```

---

## Layout Structure

```text
┌────────────────────────────────────────────────────────────────┐
│  NAVBAR (z-index: 100)                                          │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     [Optional: Hero text]                       │
│                                                                 │
│          ○ ──→ ○ ──→ ○ ──→ ○ ──→ ○ ──→ ○ (SERVICE PLANETS)     │
│        ╱                                    ╲                   │
│       ╱                                      ╲                  │
│      ╱                                        ╲                 │
│     ╱          ┌──────────────────────┐        ╲                │
│    ╱           │                      │         ╲               │
│   ╱            │    3D EARTH GLOBE    │          ╲              │
├───────────────┬┤    (React Three)     ├┬────────────────────────┤
│  (fade out)   │└──────────────────────┘│     (fade out)         │
│               │                        │                        │
│               │  (extends below viewport)                       │
└───────────────┴────────────────────────┴────────────────────────┘
```

---

## Files to Modify

### 1. `HeroSection.tsx` - Unified Layout
- Remove separate `PlanetaryOrbitHero` positioning
- Create new `ArcOrbitSystem` component that positions planets relative to Earth
- Pass Earth position/size to orbit system for proper alignment

### 2. `ArcOrbitSystem.tsx` (NEW) - Replace `PlanetaryOrbitHero.tsx`
- Calculate arc path based on Earth's size
- Position planets along the top curve
- Handle occlusion when planets go behind Earth edges
- Animate all planets moving in one direction (left-to-right or continuous loop)

### 3. `OrbitingPlanet.tsx` - Minor Updates
- Keep most styling the same
- Update to work with arc-based positioning

### 4. Keep `Earth3D.tsx` As-Is
- The 3D Earth component is working correctly
- Just need to position it as the anchor for the orbit arc

---

## Technical Details

### Arc Orbit Configuration

```typescript
interface ArcOrbitConfig {
  // Arc geometry (relative to Earth center)
  orbitRadius: number;      // Distance from Earth center to orbit path
  arcStartAngle: number;    // Left edge (degrees, e.g., 160°)
  arcEndAngle: number;      // Right edge (degrees, e.g., 20°)
  
  // Animation
  rotationSpeed: number;    // Degrees per second
  direction: 'clockwise' | 'counterclockwise';
  
  // Planet sizing
  planetSize: number;
  
  // Earth reference
  earthCenterY: number;     // Y position of Earth center (from top)
  earthRadius: number;      // Radius of Earth (for collision)
}

// Desktop config
const desktopConfig: ArcOrbitConfig = {
  orbitRadius: 520,        // 450 (Earth radius) + 70 (orbit height)
  arcStartAngle: 155,      // Left visible edge
  arcEndAngle: 25,         // Right visible edge
  rotationSpeed: 5,        // 5 degrees per second
  direction: 'clockwise',
  planetSize: 85,
  earthCenterY: 450,       // Center of Earth from visible top
  earthRadius: 450,
};
```

### Planet Position Calculation

```typescript
const calculatePlanetPosition = (
  planetIndex: number, 
  totalPlanets: number, 
  time: number,
  config: ArcOrbitConfig
) => {
  // Spread planets evenly across the visible arc
  const arcSpan = config.arcStartAngle - config.arcEndAngle; // ~130°
  const offset = arcSpan / totalPlanets; // ~21° between each planet
  
  // Each planet starts at a different point on the arc
  const baseAngle = config.arcStartAngle - (planetIndex * offset);
  
  // Animate: continuous movement along the arc
  // When a planet goes past arcEndAngle, it wraps to arcStartAngle
  const animatedAngle = ((baseAngle - time * config.rotationSpeed) % 360);
  
  // Convert to screen coordinates
  const angleRad = (animatedAngle * Math.PI) / 180;
  const x = Math.cos(angleRad) * config.orbitRadius;
  const y = config.earthCenterY - Math.sin(angleRad) * config.orbitRadius;
  
  // Calculate visibility based on angle
  const isVisible = animatedAngle <= config.arcStartAngle + 15 
                 && animatedAngle >= config.arcEndAngle - 15;
  
  return { x, y, isVisible, angle: animatedAngle };
};
```

---

## Animation Flow

The planets move in a continuous conveyor-belt style around the Earth's curve:

```text
Frame 0:   [1] [2] [3] [4] [5] [6]
             ↓   ↓   ↓   ↓   ↓   ↓
Frame 1:      [1] [2] [3] [4] [5] [6]
               ↓   ↓   ↓   ↓   ↓   ↓
Frame 2:        [1] [2] [3] [4] [5] [6]
                 ↓   ↓   ↓   ↓   ↓   ↓
                                 ↓   ↓
                              (fade out, go behind Earth)
                                 ↓
                          (reappear on left side)
```

When a planet reaches the right edge, it fades out, goes "behind" the Earth, and reappears on the left side - creating a continuous loop.

---

## Expected Outcome

After implementation:

1. **Earth at bottom** - Large 3D Earth positioned at bottom of viewport (top 60% visible)

2. **Arc orbit above Earth** - Service planets follow the curvature of the Earth's top edge

3. **Smooth animation** - Planets continuously slide along the arc (left to right or looping)

4. **Realistic occlusion** - Planets fade out and go behind the Earth at the edges

5. **Cohesive design** - The orbit path visually aligns with the Earth's spherical shape

