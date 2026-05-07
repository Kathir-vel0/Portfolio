import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import About from "./sections/About";
import Contact from "./sections/Contact";
import "./index.css";

export default function App() {
  return (
    <div className="bg-[#111111] min-h-screen font-sans selection:bg-[#a0e8f5] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Process />
        <About />
        <Contact />
      </main>
    </div>
  );
}
