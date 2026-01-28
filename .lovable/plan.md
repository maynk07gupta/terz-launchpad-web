

# Hero Section Complete Overhaul - Dynamic Animations & Visual Fix

## Problems Identified

### 1. Mobile Blank Space Issue
- The right column in HeroSection uses `isMobile` to conditionally render either floating cards or carousel
- The HeroServiceCarousel has `min-h-[320px]` but appears to not be rendering properly
- Large blank space between hero text and stats bar

### 2. Faded/Light Appearance
- Background gradients use very low opacity values (`bg-primary/5`, `bg-primary/8`)
- Left vignette `from-background/90` creates washed-out effect
- Decorative dots are barely visible (`bg-primary/30`, `bg-accent/40`)
- Missing strong visual anchors and contrast

### 3. Lack of Motion Animations
- Current animations are entrance-only (fade in, slide in)
- No continuous motion that creates visual interest
- Missing the dynamic, engaging feel of sites like cliniexperts

---

## Proposed Solutions

### A. Main Hero Section - Add 3D Globe-Like Animation

**Concept**: Create a rotating 3D globe effect using concentric rings with orbiting service icons, similar to a rotating earth visualization.

**Implementation**:
```text
┌──────────────────────────────────────────────────────────────┐
│  MAIN HERO - GLOBE ANIMATION                                 │
│                                                              │
│  ┌─────────────────┐    ┌─────────────────────────────────┐ │
│  │  Text Content   │    │     3D GLOBE ANIMATION          │ │
│  │  (Enhanced)     │    │                                  │ │
│  │                 │    │    ╭─────────────────────╮       │ │
│  │                 │    │   ╱    ╭───────────╮    ╲       │ │
│  │                 │    │  │   ╱   [MD Icon]  ╲   │       │ │
│  │                 │    │  │  │    TERZ LOGO   │  │       │ │
│  │                 │    │  │   ╲  [IVD Icon]  ╱   │       │ │
│  │                 │    │   ╲    ╰───────────╯   ╱        │ │
│  │                 │    │    ╰─────────────────╯          │ │
│  │                 │    │   (Orbiting rings + icons)      │ │
│  └─────────────────┘    └─────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

**New Component**: `GlobeAnimation.tsx`
- SVG-based 3D globe with:
  - 3 concentric elliptical orbits rotating at different speeds
  - 6 service icons positioned on the orbits
  - MD and IVD on the innermost (fastest) orbit - highlighted
  - Cosmetics and LMPC on middle orbit
  - IEC and EPR on outer (slowest) orbit
  - Central Terz logo with pulse effect
  - Connecting animated dashed lines
  - Gradient glow behind globe
- Framer Motion for continuous rotation
- 3D perspective transform for depth illusion

### B. Sub-Hero Section - Vertical Scrolling Info Animation

**Concept**: Replace static circular infographic with a vertically scrolling marquee of info cards/facts that continuously loop.

**Implementation**:
```text
┌──────────────────────────────────────────────────────────────┐
│  SUB-HERO - VERTICAL SCROLL ANIMATION                        │
│                                                              │
│  ┌─────────────────┐    ┌─────────────────────────────────┐ │
│  │  Text Content   │    │  VERTICAL MARQUEE               │ │
│  │                 │    │  ┌─────────────────────────┐    │ │
│  │  • Deep MD/IVD  │    │  │ ▲ 100k+ Products        │    │ │
│  │  • 360° support │    │  │   Registered            │    │ │
│  │  • Proven track │    │  ├─────────────────────────┤    │ │
│  │  • Pan-India    │    │  │ ▲ CDSCO Expert Team     │    │ │
│  │                 │    │  │   24-hour Response      │    │ │
│  │  [Learn More →] │    │  ├─────────────────────────┤    │ │
│  │                 │    │  │ ▲ 200+ Global Clients   │    │ │
│  │                 │    │  │   Worldwide             │    │ │
│  │                 │    │  ├─────────────────────────┤ ↑  │ │
│  │                 │    │  │ ▲ 15+ Years Experience  │ │  │ │
│  │                 │    │  │   (scrolling up)        │ │  │ │
│  │                 │    │  └─────────────────────────┘    │ │
│  └─────────────────┘    └─────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

**New Component**: `VerticalMarquee.tsx`
- CSS animation-based infinite vertical scroll
- 8-10 info cards with:
  - Icon on left
  - Stat/headline text
  - Supporting description
- Smooth infinite loop (duplicated content for seamless scroll)
- Hover to pause effect
- Gradient fade at top/bottom edges

### C. Visual Contrast Fixes

**Background Enhancements**:
| Current | Proposed |
|---------|----------|
| `bg-primary/8` | `bg-primary/15` |
| `bg-accent/6` | `bg-accent/12` |
| `bg-primary/5` | `bg-primary/10` |
| Decorative dots `bg-primary/30` | `bg-primary/50` |

**Text Contrast Fixes**:
- Remove the heavy left vignette overlay
- Increase headline font weight
- Add subtle text-shadow for depth

**Mobile Layout Fix**:
- On mobile, show simplified globe animation (no orbit, static icons)
- OR show a horizontal scrolling card strip
- Ensure proper min-height for mobile hero

---

## Technical Implementation

### New Components to Create

| Component | Location | Purpose |
|-----------|----------|---------|
| `GlobeAnimation.tsx` | `src/components/hero/` | 3D rotating globe with orbiting service icons |
| `VerticalMarquee.tsx` | `src/components/hero/` | Infinite vertical scrolling info cards |

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/hero/HeroSection.tsx` | Replace floating cards with GlobeAnimation, fix backgrounds |
| `src/components/hero/SubHeroSection.tsx` | Replace CircularInfographic with VerticalMarquee |
| `src/index.css` | Add new keyframes for orbit and marquee animations |

### Animation Keyframes to Add

```css
/* 3D Orbit rotation */
@keyframes orbit-1 {
  from { transform: rotateX(60deg) rotateZ(0deg); }
  to { transform: rotateX(60deg) rotateZ(360deg); }
}

@keyframes orbit-2 {
  from { transform: rotateX(60deg) rotateZ(120deg); }
  to { transform: rotateX(60deg) rotateZ(480deg); }
}

@keyframes orbit-3 {
  from { transform: rotateX(60deg) rotateZ(240deg); }
  to { transform: rotateX(60deg) rotateZ(600deg); }
}

/* Vertical marquee */
@keyframes scroll-up {
  from { transform: translateY(0); }
  to { transform: translateY(-50%); }
}
```

### Vertical Marquee Info Cards Content

| Icon | Headline | Description |
|------|----------|-------------|
| Award | 100k+ Products | Successfully registered across India |
| Users | 200+ Clients | Global manufacturers trust Terz |
| Clock | 24-Hour Response | Pan-India expert availability |
| Shield | 15+ Years | Deep regulatory experience |
| FileCheck | CDSCO Expertise | Medical Device specialists |
| Flask | IVD Focus | In-Vitro Diagnostics mastery |
| Sparkles | Cosmetics | Complete registration support |
| Scale | Legal Metrology | Packaging compliance experts |

---

## Mobile Responsiveness

### Main Hero (Mobile)
- Globe becomes a static circular arrangement (no 3D rotation)
- OR horizontal auto-scrolling service cards
- Full-width text content stacked above

### Sub-Hero (Mobile)
- Vertical marquee continues but slower
- Smaller card heights
- Single column layout

---

## Performance Considerations

1. **CSS Animations over JS**: Use `@keyframes` for continuous animations (GPU-accelerated)
2. **will-change**: Add `will-change: transform` to animated elements
3. **Reduced Motion**: Pause animations if `prefers-reduced-motion` is set
4. **Lazy Rendering**: Use `IntersectionObserver` for sub-hero animations

---

## Expected Visual Outcome

**Before**:
- Static, faded hero with blank mobile areas
- No motion or visual interest
- Weak contrast and washed-out appearance

**After**:
- Dynamic 3D globe with orbiting service icons (main hero)
- Continuously scrolling vertical info cards (sub-hero)
- Strong visual contrast with vibrant backgrounds
- Engaging animations that draw users in
- Properly responsive mobile layout with no blank spaces

