

# Redesigned Interactive Hero Section

## Concept

Replace the current static split-hero layout with a fully animated, interactive hero that communicates "regulatory compliance made simple" through visual storytelling. The design centers on an **animated compliance journey** -- a visual path from "complex regulations" to "market approval" -- with interactive service nodes, mouse-tracking particle effects, magnetic hover buttons, and a text reveal animation.

## Layout

```text
┌──────────────────────────────────────────────────────────┐
│  Animated gradient mesh background + floating particles  │
│                                                          │
│  ┌─────────────────────┐  ┌───────────────────────────┐  │
│  │ Typewriter headline │  │   Interactive Compliance  │  │
│  │ with word highlight │  │   Journey Visualization   │  │
│  │                     │  │                           │  │
│  │ Staggered subtitle  │  │  [node]──[node]──[node]   │  │
│  │                     │  │    ↕        ↕       ↕     │  │
│  │ Magnetic CTA btns   │  │  hover = expand + glow    │  │
│  │ with ripple effect  │  │  + detail card flyout     │  │
│  │                     │  │                           │  │
│  │ Animated counters   │  │  Animated connecting      │  │
│  │ (200+, 15yr, 100k)  │  │  SVG path with draw-in   │  │
│  └─────────────────────┘  └───────────────────────────┘  │
│                                                          │
│  ── Scrolling service pill bar (hover = tilt 3D card) ── │
└──────────────────────────────────────────────────────────┘
```

## Key Interactive Elements

1. **Animated Background** -- Gradient mesh with mouse-tracking spotlight, floating translucent geometric shapes (circles, hexagons) that drift and react to cursor proximity with a repel effect.

2. **Text Animations** -- Headline words reveal one-by-one with a clip-path wipe. "Regulatory Compliance" gets a gradient text shimmer on loop. Sub-heading fades in letter-by-letter.

3. **Interactive Compliance Journey (right column)** -- Replaces the static carousel. An SVG path connects 7 service nodes in a flowing S-curve. The path draws itself in on load. Each node is a circular icon that:
   - Pulses gently when idle
   - On hover: scales up, glows with service-specific color, and reveals a floating detail card (image + title + tagline) with a spring animation
   - Has a connecting particle trail between nodes

4. **Magnetic CTA Buttons** -- Buttons that subtly follow the mouse cursor when nearby (magnetic effect). On hover, a radial gradient ripple expands from cursor position. On click, a satisfying scale-bounce.

5. **Animated Stat Counters** -- The 3 value highlights (200+ clients, 15+ years, 100k+ products) count up from 0 with an easing curve when they enter view, with a subtle number-flip animation.

6. **Floating Service Pills Bar** -- A horizontal scrolling row of service pills at the bottom of the hero. Each pill tilts in 3D on hover (perspective transform) and links to the service section.

## Files to Create/Modify

1. **`src/components/hero/HeroSection.tsx`** -- Complete rewrite with new layout, animated text, magnetic buttons, animated counters
2. **`src/components/hero/ComplianceJourney.tsx`** -- New component: SVG path with interactive service nodes, hover cards, draw-in animation
3. **`src/components/hero/AnimatedBackground.tsx`** -- New component: gradient mesh, mouse-tracking spotlight, floating geometric shapes with repel physics
4. **`src/components/hero/MagneticButton.tsx`** -- New component: reusable magnetic hover + ripple button
5. **`src/components/hero/FloatingServicePills.tsx`** -- New component: 3D-tilt pill bar at bottom of hero
6. **`src/index.css`** -- Add keyframes for shimmer-text, clip-path reveal, number-flip
7. **`src/pages/Home.tsx`** -- Minor update to import new hero (already imports HeroSection)

## Technical Approach

- All animations via **Framer Motion** (already installed) -- `useMotionValue`, `useTransform`, `useSpring` for mouse tracking
- SVG path animation via `motion.path` with `pathLength`
- Mouse position tracked via `onMouseMove` on the hero container, passed to child components
- No new dependencies needed -- Framer Motion + Lucide icons + existing Tailwind setup covers everything
- Mobile: journey visualization stacks vertically, magnetic effects disabled, reduced particle count

