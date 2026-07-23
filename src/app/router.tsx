import { useEffect, useState } from "react";

export type Route = "home" | "angang" | "hdbiz" | "nepnha" | "meme" | "murror";

function parse(hash: string): Route {
  if (hash.startsWith("#case/angang")) return "angang";
  if (hash.startsWith("#case/hdbiz")) return "hdbiz";
  if (hash.startsWith("#case/nepnha")) return "nepnha";
  if (hash.startsWith("#case/meme")) return "meme";
  if (hash.startsWith("#case/murror")) return "murror";
  return "home";
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() =>
    typeof window === "undefined" ? "home" : parse(window.location.hash)
  );
  useEffect(() => {
    const onHash = () => {
      const nextRoute = parse(window.location.hash);
      setRoute(nextRoute);

      // Keep in-page anchors like #work or #about working normally.
      // Only force scroll-to-top for dedicated case-study routes.
      if (window.location.hash.startsWith("#case/")) {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}
