import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import About from "./sections/About";
import Contact from "./sections/Contact";
import "./index.css";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-[#f0f0f0] dark:bg-[#111111] min-h-screen font-sans selection:bg-[#008b9e] dark:selection:bg-[#a0e8f5] selection:text-white dark:selection:text-black transition-colors duration-500">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
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
