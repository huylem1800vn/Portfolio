export function scrollToCaseSection(id: string, headerOffset = 96) {
  if (typeof window === "undefined") return;

  const element = document.getElementById(id);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: "smooth" });
}
