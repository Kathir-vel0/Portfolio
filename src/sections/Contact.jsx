import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-white/10 relative overflow-hidden">
      {/* Background large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] text-center opacity-[0.03] pointer-events-none z-0">
        <h1 className="text-[20vw] font-black whitespace-nowrap tracking-tighter">SYSTEM DESIGN</h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10"
      >
        <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white uppercase mb-16 pb-8 border-b border-white/10">
          LET'S CONNECT
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-[#a0e8f5] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">// ARCHITECTING DIGITAL PRECISION</p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight text-white mb-8">
              I build high-velocity digital experiences for brands that refuse to blend in. My work sits at the intersection of <span className="text-[#a0e8f5]">creative direction</span> and technical engineering.
            </h3>
            <p className="text-white/70 text-sm leading-relaxed font-medium mb-12">
              With experience in brutalist UI design and complex system architecture via Spring Boot and React, I help startups scale their digital footprint with unapologetic confidence.
            </p>
            
            <div className="mb-12">
              <p className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">CORE COMPETENCIES</p>
              <div className="flex flex-wrap gap-2">
                {['JAVA', 'SPRING_BOOT', 'REACT_JS', 'MYSQL', 'JAVASCRIPT', 'TAILWIND_CSS', 'REST_APIS', 'GITHUB'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] sm:text-[10px] font-mono text-white/80 uppercase tracking-widest">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-[#161616] border border-white/5 rounded-lg p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              {/* Fake grid for the map look */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
              <div className="relative z-20 flex flex-col justify-end h-32">
                <p className="text-[#a0e8f5] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">CURRENT LOCATION</p>
                <p className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tighter">CHENNAI / INDIA</p>
              </div>
            </div>
          </div>

          <div className="bg-[#161616] border border-white/5 p-8 sm:p-12 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">START A PROJECT</h3>
            <p className="text-white/60 text-xs sm:text-sm mb-10">Currently accepting high-impact collaborations.</p>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-3">NAME</label>
                <input type="text" placeholder="IDENTIFY YOURSELF" className="w-full bg-[#111] border border-white/10 rounded px-5 py-4 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#a0e8f5] focus:bg-white/5 transition-all font-mono" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-3">EMAIL</label>
                <input type="email" placeholder="WHERE_TO_REACH_YOU" className="w-full bg-[#111] border border-white/10 rounded px-5 py-4 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#a0e8f5] focus:bg-white/5 transition-all font-mono" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-3">PROJECT TYPE</label>
                <select className="w-full bg-[#111] border border-white/10 rounded px-5 py-4 text-xs sm:text-sm text-white/50 focus:outline-none focus:border-[#a0e8f5] focus:bg-white/5 transition-all font-mono appearance-none">
                  <option>FULL_ECOSYSTEM_BUILD</option>
                  <option>INTERFACE_DESIGN</option>
                  <option>SYSTEM_ARCHITECTURE</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-3">BRIEF</label>
                <textarea placeholder="DEFINE THE MISSION" rows="4" className="w-full bg-[#111] border border-white/10 rounded px-5 py-4 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#a0e8f5] focus:bg-white/5 transition-all font-mono resize-none"></textarea>
              </div>
              <button type="button" className="w-full bg-[#a0e8f5] text-black font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs py-5 rounded hover:bg-white transition-colors mt-4">
                SEND_MESSAGE
              </button>
            </form>
            
            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-6">GLOBAL_NETWORKS</p>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <a href="https://github.com/Kathir-vel0" className="flex items-center gap-3 text-[10px] sm:text-xs text-white/60 hover:text-white font-mono uppercase transition-colors tracking-widest"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> GITHUB</a>
                <a href="https://linkedin.com/in/kathir-vel-25484b28a/" className="flex items-center gap-3 text-[10px] sm:text-xs text-white/60 hover:text-white font-mono uppercase transition-colors tracking-widest"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> LINKEDIN</a>
                <a href="#" className="flex items-center gap-3 text-[10px] sm:text-xs text-white/60 hover:text-white font-mono uppercase transition-colors tracking-widest"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> INSTAGRAM</a>
                <a href="mailto:kathir@example.com" className="flex items-center gap-3 text-[10px] sm:text-xs text-white/60 hover:text-white font-mono uppercase transition-colors tracking-widest"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> EMAIL</a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Footer */}
      <div className="mt-32 pt-12 border-t border-white/10 px-6 sm:px-12 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 pb-12">
        <div className="text-center md:text-left flex-1">
          <h2 className="text-xl font-bold uppercase tracking-tighter text-white mb-2">KATHIR_VEL</h2>
          <p className="text-white/50 text-[9px] uppercase tracking-[0.2em]">Architecting the future of digital experiences.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-[9px] uppercase font-bold tracking-[0.2em] text-white/50 flex-1">
          <a href="#projects" className="hover:text-white transition-colors">WORK</a>
          <a href="#about" className="hover:text-white transition-colors">PROCESS</a>
          <a href="https://github.com/Kathir-vel0" className="hover:text-white transition-colors">GITHUB</a>
          <a href="https://linkedin.com/in/kathir-vel-25484b28a/" className="hover:text-white transition-colors">LINKEDIN</a>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4 flex-1">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[#a0e8f5] text-[10px] font-bold uppercase tracking-[0.2em] hover:text-white hover:drop-shadow-[0_0_8px_rgba(160,232,245,0.8)] transition-all flex items-center gap-2">
            BACK TO TOP <span className="text-sm leading-none">↑</span>
          </button>
          <p className="text-white/30 text-[9px] uppercase tracking-[0.2em] text-center md:text-right">
            © {new Date().getFullYear()} KATHIR VEL. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </section>
  );
}
