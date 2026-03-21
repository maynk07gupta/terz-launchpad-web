

## Global Site Search Feature

### What We're Building
A search icon in the navbar (between "About" and "Contact Us") that expands into a search input on hover/click. When the user types and submits, it navigates to the target page and highlights all matching text occurrences on that page.

### Approach

**1. Create a Search Route + Page (`src/pages/Search.tsx`)**
- A dedicated `/search?q=term` page that searches across all site content
- Define a searchable content index (page title, text snippets, route) for all pages: Home, Services (each sub-service), Resources, About, Contact, Privacy, Terms
- Display search results as cards linking to the relevant page with the query param preserved

**2. Create Text Highlight Component (`src/components/TextHighlighter.tsx`)**
- A wrapper that reads `?q=` from the URL search params
- Uses `window.find()` or a DOM TreeWalker to find and wrap matching text nodes with a `<mark>` highlight style
- Applies a yellow/primary background highlight with smooth animation
- Auto-scrolls to the first match on the page

**3. Add Highlight Logic to App Layout (`src/App.tsx`)**
- After each route renders, run the highlight logic if `?q=` param exists
- Use a `useEffect` in a layout-level component that walks the DOM of `<main>` and wraps matching text in `<mark className="bg-yellow-200">` elements
- Clean up highlights on navigation

**4. Desktop Navbar Search Icon (`src/components/Navbar.tsx`)**
- Place a `Search` icon (lucide, size 20-22) between the "About" NavItem and the "Contact Us" button
- On hover, smoothly expand to show a text input (width transition from 0 to ~200px)
- On Enter or click submit, navigate to `/search?q=<term>`
- Collapse when mouse leaves (with a small delay so user can type)

**5. Mobile Navbar Search**
- Add a search input row inside the mobile menu dropdown (at the top of the menu)
- Full-width input with search icon, same submit behavior

**6. Register Search Route (`src/App.tsx`)**
- Add `<Route path="/search" element={<Search />} />`

### Technical Details

- **Searchable index**: Static array of `{ title, content, path, section? }` objects. Content is plain text extracted from each page's key sections. For services, include each sub-service as a separate entry.
- **Highlight mechanism**: After navigation to a result page with `?q=param`, a `useSearchHighlight` hook in `App.tsx` uses `MutationObserver` + `TreeWalker` to find text nodes containing the query, wraps matches in `<mark>` elements, and scrolls to the first one. Cleans up on unmount/navigation.
- **Expand animation**: CSS `transition-all duration-300` on `width` (0 to 220px) and `opacity` for the input. The search icon remains visible; input appears to its left.
- **Mobile**: Simple full-width `<Input>` with search icon prefix at the top of the mobile menu.

### Files to Create/Edit
| File | Action |
|------|--------|
| `src/pages/Search.tsx` | Create - search results page |
| `src/hooks/useSearchHighlight.ts` | Create - DOM text highlight hook |
| `src/data/searchIndex.ts` | Create - searchable content index |
| `src/components/Navbar.tsx` | Edit - add expandable search icon (desktop + mobile) |
| `src/App.tsx` | Edit - add search route + highlight hook |

