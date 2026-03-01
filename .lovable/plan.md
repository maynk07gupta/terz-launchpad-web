

# Update Authorities Bar to Show Only CDSCO (Highlighted)

## Change

Modify `src/components/hero/AuthoritiesBar.tsx` to display only **CDSCO** instead of all 6 authorities, with a prominent highlighted background styling.

## Details

- Remove all authorities except CDSCO from the array
- Give the CDSCO badge a highlighted/emphasized look: larger size, primary background color or border accent, bolder text
- Update the section heading to something like "Licensed by" or "Registered with" since it's now a single authority
- Keep the overall section background but make it more visually distinct (e.g., subtle primary-tinted background)
- Maintain the tooltip showing the full name "Central Drugs Standard Control Organization"

## File Modified

- `src/components/hero/AuthoritiesBar.tsx` - Reduce to CDSCO only, apply highlighted styling with primary accent background/border

