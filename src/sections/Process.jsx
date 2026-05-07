import { motion } from "framer-motion";

export default function Process() {
  return (
    <section id="process" className="py-24 border-t border-white/10">
      {/* Scrolling Banner */}
      <div className="w-full overflow-hidden border-b border-white/10 pb-24 flex whitespace-nowrap opacity-20">
        <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter uppercase px-4 flex gap-8 animate-[spin_10s_linear_infinite]">
          JAVA FULL STACK <span className="text-[#a0e8f5]">▵</span> SPRING BOOT BACKEND <span className="text-[#a0e8f5]">◎</span> REACT FRONTEND <span className="text-[#a0e8f5]">▵</span> REST API DEVELOPMENT <span className="text-[#a0e8f5]">▵</span>
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
        >
          <div className="lg:col-span-5 border-l-2 border-[#a0e8f5] pl-8">
            <p className="text-[#a0e8f5] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">DEVELOPMENT PROCESS</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-white">
              Architecting<br/>Modern<br/>Full-Stack Systems.
            </h2>
          </div>
          
          <div className="lg:col-span-7">
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-12 max-w-2xl font-medium">
              As a passionate Java Full Stack Developer, I am dedicated to learning and implementing clean, scalable architecture. My journey ranges from debugging web applications and developing WordPress sites during my internship to engineering comprehensive platforms like my Student Result Management System. I thrive on bridging robust backend logic with dynamic frontend experiences.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#161616] p-8 border border-white/5 hover:border-white/20 transition-colors">
                <div className="text-[#a0e8f5] mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Backend Engineering</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Building secure, high-performance REST APIs and scalable server-side architectures driven by Java, Spring Boot, and MySQL.
                </p>
              </div>
              
              <div className="bg-[#161616] p-8 border border-white/5 hover:border-white/20 transition-colors">
                <div className="text-[#a0e8f5] mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Frontend & UI Design</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Crafting responsive, pixel-perfect user interfaces with React and Tailwind CSS, prioritizing immersive digital experiences.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
