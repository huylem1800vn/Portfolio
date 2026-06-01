import { useEffect, useState } from "react";

export type Route = "home" | "angang" | "murror";

function parse(hash: string): Route {
  if (hash.startsWith("#case/angang")) return "angang";
  if (hash.startsWith("#case/murror")) return "murror";
  return "home";
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() =>
    typeof window === "undefined" ? "home" : parse(window.location.hash)
  );
  useEffect(() => {
    const onHash = () => {
      setRoute(parse(window.location.hash));
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}
