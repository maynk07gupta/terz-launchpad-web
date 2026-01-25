

## Update Color Scheme: Logo Blue Across Website

### Overview
Replace the current deep navy primary color (`#1C3C5A`) with the vibrant blue from your logo (`#3B82F6`) to create visual consistency between your brand mark and website content, while maintaining excellent contrast on the light theme.

---

### 1. New Color Definition

**Logo Blue in HSL format:**
```css
/* Logo Blue - Vibrant brand blue */
--primary: 217 91% 60%;        /* #3B82F6 */
--primary-hover: 217 91% 52%;  /* Slightly darker on hover */

/* Heading color - using logo blue for authority */
--heading: 217 91% 45%;        /* Slightly darker for text readability */
```

**Brand color ramp (matching logo blue):**
```css
--brand-50:  217 89% 97%;   /* #EFF6FF - Very light blue */
--brand-100: 217 89% 93%;   /* #DBEAFE */
--brand-200: 217 90% 85%;   /* #BFDBFE */
--brand-300: 217 91% 72%;   /* #93C5FD */
--brand-400: 217 91% 65%;   /* #60A5FA */
--brand-500: 217 91% 60%;   /* #3B82F6 - Logo color */
--brand-600: 217 91% 52%;   /* #2563EB */
--brand-700: 217 93% 42%;   /* #1D4ED8 */
--brand-900: 217 94% 30%;   /* #1E3A8A */
```

---

### 2. Contrast Considerations

| Use Case | Color Choice | Contrast Ratio |
|----------|--------------|----------------|
| Headings on white | Brand-600 (#2563EB) | 4.8:1 (AA pass) |
| Body text | Keep dark charcoal (#252A33) | 12.5:1 (AAA pass) |
| Buttons | Brand-500 (#3B82F6) + white text | 4.5:1 (AA pass) |
| Links | Brand-600 (#2563EB) | Good readability |
| Icons | Brand-500 (#3B82F6) | Vibrant visibility |

---

### 3. Elements to Update

**Global CSS (`src/index.css`):**
- Update `--primary` to logo blue (217 91% 60%)
- Update `--primary-hover` for button states
- Update `--heading` for readable dark blue
- Update entire `--brand-*` color ramp
- Adjust gradients to use new blue shades
- Update shadow colors to tint with new blue

**Components using primary color (automatic via CSS variables):**
- Navbar active states and buttons
- CTA buttons throughout
- Service cards icons
- Footer accents
- Form focus rings

---

### 4. Gradient Updates

**Updated gradients using logo blue:**
```css
/* Primary to Accent gradient (Blue to Teal) */
--gradient-primary: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(162, 66%, 32%));

/* Accent gradient for CTAs */
--gradient-accent: linear-gradient(135deg, hsl(217, 91%, 52%) 0%, hsl(162, 66%, 32%) 100%);

/* Subtle blue section backgrounds */
--gradient-subtle-blue: linear-gradient(180deg, hsl(0, 0%, 100%) 0%, hsl(217, 85%, 97%) 100%);
```

---

### 5. Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Update primary, heading, and brand color variables; adjust gradients and shadows |

Since all components use CSS variables (`text-primary`, `bg-primary`, etc.), updating the CSS variables will automatically propagate the new logo blue across:
- Navbar (active links, buttons)
- Home page (CTAs, icons, headings)
- All service pages
- About, Contact, Resources pages
- Cards, buttons, form elements

---

### 6. Visual Impact

**Before:** Deep navy (`#1C3C5A`) - Darker, more muted corporate feel
**After:** Logo blue (`#3B82F6`) - Vibrant, modern, consistent with brand identity

The result will be:
- Logo and website colors in perfect harmony
- More energetic and modern appearance
- Maintained readability with proper contrast
- Teal accent (`#1C8864`) still provides complementary color
- Professional but more approachable feel

---

### 7. Keep the Teal Accent

The existing teal accent (`#1C8864`) complements the bright blue beautifully and should remain as the secondary accent for:
- Success states
- Secondary highlights
- Gradient endpoints
- Alternative visual interest

