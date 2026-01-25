

## Procedure Page Complete Redesign Plan

### Overview
Transform the Procedure page from a confusing tabbed card layout into a **professional, visual roadmap experience** with clear progression, consistent branding, and placeholder sections for future content.

---

### Phase 1: Remove Neon Gradients - Adopt Professional Color Palette

**Current Problem:** 10 clashing neon gradients cause visual fatigue

**Solution:** Replace with brand-consistent, subtle styling

| Element | Current | New |
|---------|---------|-----|
| Step Preview Card | `from-sky-500 via-cyan-500 to-blue-600` (neon) | `bg-gradient-to-br from-primary/10 to-accent/10` with `border-primary/30` |
| Active Step Indicator | Neon gradient background | `bg-primary` circle with white number |
| Completed Steps | Same as active | `bg-primary/20` with checkmark |
| Upcoming Steps | Same as active | `bg-muted` with gray number |

**Files to modify:** `src/pages/Procedure.tsx` (remove `gradientPalette` array, update `StepPreview` component)

---

### Phase 2: Create Visual Roadmap Structure

**New Layout Architecture:**

```
┌─────────────────────────────────────────────────────────────┐
│  HERO: Service Title + Brief Description                    │
├─────────────────────────────────────────────────────────────┤
│  PHASE NAVIGATION: [Assessment] [Preparation] [Submission]  │
│                    [Review] [Approval]                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ●────────●────────●────────●────────○  (Progress Line)     │
│  1        2        3        4        5                       │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  ACTIVE STEP DETAIL CARD                            │   │
│  │  ┌──────────┐  Step 3: Submit Application           │   │
│  │  │   Icon   │  ─────────────────────────────────    │   │
│  │  │          │  Description text here...             │   │
│  │  └──────────┘                                       │   │
│  │                                                     │   │
│  │  ┌─────────────────────────────────────────────┐   │   │
│  │  │  📋 Key Documents Required (placeholder)    │   │   │
│  │  │  • Document 1                               │   │   │
│  │  │  • Document 2                               │   │   │
│  │  └─────────────────────────────────────────────┘   │   │
│  │                                                     │   │
│  │  ┌─────────────────────────────────────────────┐   │   │
│  │  │  ⏱️ Typical Timeline (placeholder)          │   │   │
│  │  │  2-4 weeks                                  │   │   │
│  │  └─────────────────────────────────────────────┘   │   │
│  │                                                     │   │
│  │  [Previous Step]              [Next Step →]         │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Key Visual Elements:**
- Horizontal progress line with numbered circles
- Active step highlighted with primary color
- Completed steps show checkmarks
- Click/tap to navigate between steps
- Smooth transitions between steps

---

### Phase 3: Restructure Content with Placeholder Sections

**New Step Data Structure:**

```typescript
type ProcedureStep = {
  title: string;
  description: string;
  phase: string; // "Assessment" | "Preparation" | "Submission" | "Review" | "Approval"
  icon: LucideIcon;
  // Placeholder sections - content to be added later
  keyDocuments?: string[]; // List of required documents
  typicalTimeline?: string; // e.g., "2-4 weeks"
  deliverables?: string[]; // What client receives at this step
  tips?: string[]; // Pro tips or common pitfalls
};
```

**Placeholder Cards Within Each Step:**
1. **Key Documents Required** - Empty state with "Content coming soon" or placeholder items
2. **Typical Timeline** - Placeholder for duration estimates
3. **Deliverables** - What client receives at this step
4. **Pro Tips** - Common pitfalls or advice

---

### Phase 4: Create Horizontal Progress Timeline Component

**New Component: `RoadmapTimeline.tsx`**

Features:
- Horizontal line connecting all steps
- Numbered circles for each step (1, 2, 3...)
- Visual states: completed (checkmark), active (primary color), upcoming (muted)
- Click to navigate
- Responsive: horizontal scroll on mobile with touch gestures
- Smooth animations when transitioning

**Styling:**
- Line: `h-1 bg-gradient-to-r from-primary to-primary/50`
- Active circle: `bg-primary text-white w-10 h-10`
- Completed: `bg-primary/80 text-white` with CheckCircle icon
- Upcoming: `bg-muted border-2 border-muted-foreground/30`

---

### Phase 5: Improve Tab Navigation

**Current:** 6 tabs that wrap awkwardly

**New Design:**
- Replace tabs with a dropdown selector on mobile
- Keep horizontal tabs on desktop but style as pill buttons
- Add icons to each tab for visual distinction
- Show step count badge (e.g., "Medical Devices (8 steps)")

**Tab styling:**
```css
/* Inactive */
bg-secondary/50 text-muted-foreground border border-border

/* Active */
bg-primary text-primary-foreground shadow-lg
```

---

### Phase 6: Add Service Page Links

Add a connection between Procedure and Service pages:

**At the top of each procedure:**
> "This procedure applies to our [Medical Devices Service →](/services/medical-devices)"

**At the bottom of each procedure:**
> CTA: "Ready to start? [Get Expert Assistance →]"

---

### Phase 7: Differentiate Content Per Service

Group steps into meaningful phases and add unique context:

| Service | Unique Elements to Add |
|---------|------------------------|
| Medical Devices | Device class badges (A, B, C, D), OSMD portal reference |
| IVD | Performance evaluation emphasis, ISO 13485 callout |
| Cosmetics | BIS standards reference, ingredient compliance |
| LMPC | State-level variations, packaging focus |
| IEC | Lifetime validity highlight, DGFT reference |
| EPR | Environmental focus, CPCB portal reference |

---

### Phase 8: Add Scroll Animations

Apply the same animation system from the About page:

- Fade-up for section headers
- Scale-in for step cards
- Slide transitions between steps
- Hover micro-interactions on timeline circles

---

### Phase 9: Mobile-First Roadmap

**Mobile Layout:**
- Vertical timeline (line on left, content on right)
- Swipe gestures to navigate steps
- Collapsible step details
- Sticky progress indicator at top

---

### Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `src/pages/Procedure.tsx` | Major Rewrite | New roadmap layout, remove neon gradients |
| `src/components/RoadmapTimeline.tsx` | Create | Horizontal progress line component |
| `src/components/StepDetailCard.tsx` | Create | Expanded step view with placeholders |
| `src/index.css` | Minor Update | Add any new utility classes needed |

---

### Placeholder Content Structure

For each step, create these placeholder sections that you can fill in later:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
  {/* Key Documents Placeholder */}
  <Card className="border-dashed border-2 border-muted-foreground/30">
    <CardContent className="p-4">
      <div className="flex items-center gap-2 mb-2">
        <FileText className="h-5 w-5 text-primary" />
        <h4 className="font-semibold">Key Documents Required</h4>
      </div>
      <p className="text-sm text-muted-foreground italic">
        Content to be added
      </p>
    </CardContent>
  </Card>
  
  {/* Timeline Placeholder */}
  <Card className="border-dashed border-2 border-muted-foreground/30">
    <CardContent className="p-4">
      <div className="flex items-center gap-2 mb-2">
        <Clock className="h-5 w-5 text-primary" />
        <h4 className="font-semibold">Typical Timeline</h4>
      </div>
      <p className="text-sm text-muted-foreground italic">
        Duration to be added
      </p>
    </CardContent>
  </Card>
</div>
```

---

### Implementation Order

1. Create `RoadmapTimeline.tsx` component
2. Create `StepDetailCard.tsx` with placeholder sections
3. Rewrite `Procedure.tsx` with new layout structure
4. Remove all neon gradient code
5. Apply professional color scheme
6. Add scroll animations
7. Add links between Procedure and Service pages
8. Test mobile responsiveness
9. Add micro-interactions

---

### Expected Outcome

A clean, professional roadmap that:
- Uses your brand blue palette consistently
- Shows clear progression through phases
- Has placeholder sections ready for content
- Links to relevant service pages
- Works beautifully on mobile
- Matches the polished feel of the improved About page

