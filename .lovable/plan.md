

## Redesign: Professional Light Gradient Theme

### Overview
Transform the website from the current dark navy theme to a light, professional gradient-based design that conveys trust, clarity, and corporate sophistication - ideal for a regulatory compliance company.

---

### 1. Core Color System Updates

**Remove dark mode enforcement:**
- Remove the `document.documentElement.classList.add("dark")` lines from `src/main.tsx`
- The site will now use the light theme defined in `:root`

**Refined Light Palette:**
```css
/* Primary Background - Cool professional gray */
--background: 220 14% 97%;    /* #F7F8FA */

/* Card/Surface - Pure white */
--card: 0 0% 100%;            /* #FFFFFF */

/* Primary - Deep Navy (kept for brand consistency) */
--primary: 209 53% 23%;       /* #1C3C5A */

/* Accent - Teal (kept) */
--accent: 162 66% 32%;        /* #1C8864 */
```

---

### 2. Gradient System

**Professional gradients to add:**

| Gradient | Use Case | Colors |
|----------|----------|--------|
| Hero gradient | Hero background | White → Light blue-gray (#F7F8FA → #EEF2F7) |
| Section gradient | Alternating sections | Light gray → White |
| Accent gradient | CTAs, highlights | Navy → Teal (#1C3C5A → #1C8864) |
| Subtle blue tint | Feature sections | White → Very light blue (#FFFFFF → #F5F8FC) |

---

### 3. Section-by-Section Changes

**Navbar:**
- White/light background with subtle shadow
- Navy logo and text
- Teal accent on active links
- Solid, professional appearance

**Hero Section (Home):**
- Soft gradient: light gray at top fading to white
- Navy headings, gray body text
- Primary CTA: Navy-to-teal gradient button
- Service carousel: Light card backgrounds with soft shadows

**Content Sections:**
- Alternating white and very light gray sections
- Creates visual separation without harsh contrasts
- Cards: Pure white with subtle box shadows
- Icons: Navy or teal colored

**Footer:**
- Reversed: Keep navy background for grounding
- Creates a professional bookend effect
- White text for contrast

---

### 4. Typography Contrast

| Element | Color |
|---------|-------|
| H1-H3 Headings | Deep navy (#1C3C5A) |
| Body text | Dark charcoal (#2D3748) |
| Muted text | Medium gray (#6B7280) |
| Links | Teal (#1C8864) |

---

### 5. Shadow and Depth System

Replace dark-themed shadows with light-appropriate ones:
```css
--shadow-sm: 0 1px 3px rgba(28, 60, 90, 0.06);
--shadow-md: 0 4px 12px rgba(28, 60, 90, 0.08);
--shadow-lg: 0 12px 32px rgba(28, 60, 90, 0.12);
```

---

### 6. Files to Modify

| File | Changes |
|------|---------|
| `src/main.tsx` | Remove dark mode class enforcement |
| `src/index.css` | Update gradient definitions, refine light theme colors, adjust shadows |
| `src/pages/Home.tsx` | Update hero section gradients and styling |
| `src/components/Navbar.tsx` | Adjust to light background styling |
| `src/components/Footer.tsx` | Keep dark or adjust to match theme |
| `src/components/HeroServiceCarousel.tsx` | Update for light theme visibility |
| All page files | Ensure consistent light styling across sections |

---

### 7. Visual Result

The final design will feature:
- Clean, professional light backgrounds
- Subtle gradient transitions between sections
- Navy and teal as accent colors for brand recognition
- High contrast, readable typography
- Cards with soft shadows for depth
- A dark footer as a grounding element
- Overall feel: Corporate, trustworthy, document-friendly

This approach is common among compliance, legal, and B2B service companies because it conveys professionalism, clarity, and attention to detail.

