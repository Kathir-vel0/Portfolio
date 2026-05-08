import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "WORK", href: "#projects" },
    { name: "PROCESS", href: "#process" },
    { name: "ABOUT", href: "#about" },
    { name: "CONNECT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold to detect which section is mostly in view
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-[#f0f0f0]/90 dark:bg-[#111111]/90 backdrop-blur-md border-b border-[#111111]/10 dark:border-white/5 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex justify-between items-center h-20">
        <a href="#hero" className="font-bold text-xl tracking-tight text-[#111111] dark:text-white uppercase flex items-center gap-2">
          KATHIR_VEL
        </a>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 pb-1 border-b-2 ${activeSection === link.href.substring(1)
                ? "text-[#008b9e] dark:text-[#a0e8f5] border-[#008b9e] dark:border-[#a0e8f5] drop-shadow-[0_0_8px_rgba(0,139,158,0.6)] dark:drop-shadow-[0_0_8px_rgba(160,232,245,0.6)]"
                : "text-[#111111]/70 dark:text-white/60 hover:text-[#111111] dark:hover:text-white border-transparent hover:border-white/30"
                }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="text-[#111111] dark:text-white text-lg hover:text-[#008b9e] dark:hover:text-[#a0e8f5] transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="ml-2 px-6 py-2 rounded-full border border-[#008b9e]/50 dark:border-[#a0e8f5]/50 text-[#008b9e] dark:text-[#a0e8f5] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#008b9e] dark:hover:bg-[#a0e8f5] hover:text-white dark:hover:text-black hover:shadow-[0_0_15px_rgba(0,139,158,0.6)] dark:hover:shadow-[0_0_15px_rgba(160,232,245,0.6)] hover:border-[#008b9e] dark:hover:border-[#a0e8f5] transition-all">
            RESUME
          </a>
          <a href="#contact" className="px-6 py-2 rounded-full bg-[#008b9e] dark:bg-[#a0e8f5] text-white dark:text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#111111] dark:hover:bg-white transition-colors hover:shadow-[0_0_15px_rgba(0,139,158,0.6)] dark:hover:shadow-[0_0_15px_rgba(160,232,245,0.6)]">
            HIRE THE STUDIO
          </a>
        </div>
        <button className="md:hidden text-[#111111] dark:text-white text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#f0f0f0] dark:bg-[#111111] absolute top-20 left-0 w-full flex flex-col items-center gap-6 py-8 border-b border-[#111111]/20 dark:border-white/10 shadow-2xl">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs tracking-[0.2em] font-bold uppercase transition-colors ${activeSection === link.href.substring(1) ? "text-[#008b9e] dark:text-[#a0e8f5]" : "text-[#111111]/80 dark:text-white/70 hover:text-[#111111] dark:hover:text-white"
                }`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-4 w-full px-8">
            <button
              onClick={() => {
                toggleTheme();
                setOpen(false);
              }}
              className="w-full flex justify-center items-center gap-2 py-3 rounded-full border border-[#111111]/20 dark:border-white/20 text-[#111111] dark:text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#008b9e] dark:hover:bg-[#a0e8f5] hover:text-white dark:hover:text-black transition-all"
            >
              {theme === "dark" ? <><FiSun /> LIGHT MODE</> : <><FiMoon /> DARK MODE</>}
            </button>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="w-full text-center py-3 rounded-full border border-[#008b9e] dark:border-[#a0e8f5] text-[#008b9e] dark:text-[#a0e8f5] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#008b9e] dark:hover:bg-[#a0e8f5] hover:text-white dark:hover:text-black hover:shadow-[0_0_15px_rgba(0,139,158,0.6)] dark:hover:shadow-[0_0_15px_rgba(160,232,245,0.6)] transition-all">
              RESUME
            </a>
            <a href="#contact" className="w-full text-center py-3 rounded-full bg-[#008b9e] dark:bg-[#a0e8f5] text-white dark:text-black text-xs font-bold uppercase tracking-[0.2em] hover:shadow-[0_0_15px_rgba(0,139,158,0.6)] dark:hover:shadow-[0_0_15px_rgba(160,232,245,0.6)]">
              HIRE THE STUDIO
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
