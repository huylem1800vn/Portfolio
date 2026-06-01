import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Work } from "./components/Work";
import { Process } from "./components/Process";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { I18nProvider } from "./i18n";
import { useRoute } from "./router";
import { AngAng } from "./components/case/AngAng";
import { Murror } from "./components/case/Murror";

function Home() {
  return (
    <div
      className="min-h-screen bg-[#f7f5f1] text-neutral-950 antialiased selection:bg-[#6b5cff] selection:text-[#f7f5f1]"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
    </div>
  );
}

function Router() {
  const route = useRoute();
  if (route === "angang") return <AngAng />;
  if (route === "murror") return <Murror />;
  return <Home />;
}

export default function App() {
  return (
    <I18nProvider>
      <Router />
    </I18nProvider>
  );
}
