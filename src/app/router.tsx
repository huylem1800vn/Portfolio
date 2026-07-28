import { useEffect, useLayoutEffect, useState } from "react";

export type Route = "home" | "angang" | "hdbiz" | "nepnha" | "meme" | "murror";

const ROUTE_CHANGE_EVENT = "portfolio-route-change";

function parse(hash: string): Route {
  if (hash.startsWith("#case/angang")) return "angang";
  if (hash.startsWith("#case/hdbiz")) return "hdbiz";
  if (hash.startsWith("#case/nepnha")) return "nepnha";
  if (hash.startsWith("#case/meme")) return "meme";
  if (hash.startsWith("#case/murror")) return "murror";
  return "home";
}

function routeHash(route: Route) {
  return route === "home" ? "" : `#case/${route}`;
}

function scrollToPageTop() {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  root.scrollTop = 0;
  document.body.scrollTop = 0;
  root.style.scrollBehavior = previousScrollBehavior;
}

export function navigateToRoute(route: Route) {
  const hash = routeHash(route);
  const nextUrl = `${window.location.pathname}${window.location.search}${hash}`;

  window.history.pushState(window.history.state, "", nextUrl);
  window.dispatchEvent(new Event(ROUTE_CHANGE_EVENT));
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() =>
    typeof window === "undefined" ? "home" : parse(window.location.hash)
  );

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const syncRoute = () => setRoute(parse(window.location.hash));

    window.addEventListener("hashchange", syncRoute);
    window.addEventListener("popstate", syncRoute);
    window.addEventListener(ROUTE_CHANGE_EVENT, syncRoute);

    return () => {
      window.removeEventListener("hashchange", syncRoute);
      window.removeEventListener("popstate", syncRoute);
      window.removeEventListener(ROUTE_CHANGE_EVENT, syncRoute);
    };
  }, []);

  useLayoutEffect(() => {
    scrollToPageTop();

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      scrollToPageTop();
      secondFrame = window.requestAnimationFrame(scrollToPageTop);
    });

    const safariFallback = window.setTimeout(scrollToPageTop, 120);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(safariFallback);
    };
  }, [route]);

  return route;
}
