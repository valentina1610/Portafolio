import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.18),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(190,24,93,0.18),_transparent_25%),linear-gradient(180deg,_#120811_0%,_#09060d_52%,_#050308_100%)]" />
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
