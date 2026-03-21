import { useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

const HIGHLIGHT_CLASS = "search-highlight";

function clearHighlights(container: HTMLElement) {
  const marks = container.querySelectorAll(`mark.${HIGHLIGHT_CLASS}`);
  marks.forEach((mark) => {
    const parent = mark.parentNode;
    if (parent) {
      parent.replaceChild(document.createTextNode(mark.textContent || ""), mark);
      parent.normalize();
    }
  });
}

function highlightText(container: HTMLElement, query: string) {
  if (!query || query.length < 2) return;

  const lowerQuery = query.toLowerCase();
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      // Skip script/style/mark nodes
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName.toLowerCase();
      if (tag === "script" || tag === "style" || tag === "mark" || tag === "input" || tag === "textarea")
        return NodeFilter.FILTER_REJECT;
      if ((node.textContent || "").toLowerCase().includes(lowerQuery))
        return NodeFilter.FILTER_ACCEPT;
      return NodeFilter.FILTER_REJECT;
    },
  });

  const textNodes: Text[] = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode as Text);
  }

  let firstMark: HTMLElement | null = null;

  textNodes.forEach((textNode) => {
    const text = textNode.textContent || "";
    const lowerText = text.toLowerCase();
    const idx = lowerText.indexOf(lowerQuery);
    if (idx === -1) return;

    const before = text.substring(0, idx);
    const match = text.substring(idx, idx + query.length);
    const after = text.substring(idx + query.length);

    const mark = document.createElement("mark");
    mark.className = HIGHLIGHT_CLASS;
    mark.textContent = match;

    const parent = textNode.parentNode;
    if (!parent) return;

    if (before) parent.insertBefore(document.createTextNode(before), textNode);
    parent.insertBefore(mark, textNode);
    if (after) parent.insertBefore(document.createTextNode(after), textNode);
    parent.removeChild(textNode);

    if (!firstMark) firstMark = mark;
  });

  // Scroll to first match
  if (firstMark) {
    setTimeout(() => {
      firstMark!.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 500);
  }
}

export function useSearchHighlight() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get("q") || "";

  useEffect(() => {
    if (!query || location.pathname === "/search") return;

    const mainEl = document.querySelector("main");
    if (!mainEl) return;

    // Wait for content to render
    const timeout = setTimeout(() => {
      clearHighlights(mainEl as HTMLElement);
      highlightText(mainEl as HTMLElement, query);
    }, 800);

    return () => {
      clearTimeout(timeout);
      if (mainEl) clearHighlights(mainEl as HTMLElement);
    };
  }, [query, location.pathname]);
}
