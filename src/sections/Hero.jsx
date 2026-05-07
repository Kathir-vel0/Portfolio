import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col justify-center min-h-screen pt-20 pb-10 px-6 sm:px-12 max-w-[1400px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl z-10"
      >
        <h1 className="text-[11vw] sm:text-[80px] md:text-[100px] lg:text-[120px] font-black leading-[0.85] tracking-tighter mb-8">
          <span className="block text-white">JAVA FULLSTACK</span>
          <span className="block text-[#a0e8f5] drop-shadow-[0_0_15px_rgba(160,232,245,0.4)]">DEVELOPER</span>
        </h1>
        <p className="max-w-xl text-white/70 text-sm sm:text-base leading-relaxed font-medium mb-10">
          Hi, I'm <span className="text-[#a0e8f5] font-bold">Kathir Vel</span>. I build modern, scalable web applications with a passion for clean code, UI/UX, and futuristic design. Bridging the gap between architectural intent and high-performance execution.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="px-8 py-4 bg-[#a0e8f5] text-black text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:shadow-[0_0_20px_rgba(160,232,245,0.5)] transition-all">
            EXPLORE SYSTEMS
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 border border-[#a0e8f5]/50 text-[#a0e8f5] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#a0e8f5] hover:text-black hover:shadow-[0_0_20px_rgba(160,232,245,0.6)] transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            RESUME
          </a>
          <a href="#contact" className="px-8 py-4 border border-white/20 text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors">
            CONSULTATION
          </a>
        </div>
      </motion.div>
      
      {/* Decorative compass icon on the right */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center opacity-20">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2v20M2 12h20"/>
          <path d="M12 8v8"/>
        </svg>
      </div>
      
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none z-0 overflow-hidden w-full h-full">
        {/* Subtle grid background to match the aesthetic */}
        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
      </div>
    </section>
  );
}
