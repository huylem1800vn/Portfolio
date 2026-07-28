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
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    const onHash = () => {
      const nextRoute = parse(window.location.hash);
      setRoute(nextRoute);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (window.location.hash.startsWith("#case/")) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50); // slight delay ensures iOS Safari correctly resets scroll after DOM paints
    }
  }, [route]);

  return route;
}
