import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
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
    <nav className="fixed w-full z-50 bg-[#111111]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex justify-between items-center h-20">
        <a href="#hero" className="font-bold text-xl tracking-tight text-white uppercase flex items-center gap-2">
          KATHIR_VEL
        </a>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 pb-1 border-b-2 ${activeSection === link.href.substring(1)
                ? "text-[#a0e8f5] border-[#a0e8f5] drop-shadow-[0_0_8px_rgba(160,232,245,0.6)]"
                : "text-white/60 hover:text-white border-transparent hover:border-white/30"
                }`}
            >
              {link.name}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="ml-4 px-6 py-2 rounded-full border border-[#a0e8f5]/50 text-[#a0e8f5] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#a0e8f5] hover:text-black hover:shadow-[0_0_15px_rgba(160,232,245,0.6)] hover:border-[#a0e8f5] transition-all">
            RESUME
          </a>
          <a href="#contact" className="px-6 py-2 rounded-full bg-[#a0e8f5] text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors hover:shadow-[0_0_15px_rgba(160,232,245,0.6)]">
            HIRE THE STUDIO
          </a>
        </div>
        <button className="md:hidden text-white text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#111111] absolute top-20 left-0 w-full flex flex-col items-center gap-6 py-8 border-b border-white/10 shadow-2xl">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs tracking-[0.2em] font-bold uppercase transition-colors ${activeSection === link.href.substring(1) ? "text-[#a0e8f5]" : "text-white/70 hover:text-white"
                }`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-4 w-full px-8">
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="w-full text-center py-3 rounded-full border border-[#a0e8f5] text-[#a0e8f5] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#a0e8f5] hover:text-black hover:shadow-[0_0_15px_rgba(160,232,245,0.6)] transition-all">
              RESUME
            </a>
            <a href="#contact" className="w-full text-center py-3 rounded-full bg-[#a0e8f5] text-black text-xs font-bold uppercase tracking-[0.2em] hover:shadow-[0_0_15px_rgba(160,232,245,0.6)]">
              HIRE THE STUDIO
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
