import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
        >
          <div className="lg:col-span-5 border-l-2 border-[#a0e8f5] pl-8">
            <p className="text-[#a0e8f5] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">ABOUT THE DEVELOPER</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter text-white uppercase">
              Kathir Vel
            </h2>
            <p className="mt-4 text-[#a0e8f5]/80 font-mono text-xs tracking-widest uppercase">
              Java Full Stack Developer <br/>
              Chennai, Tamil Nadu
            </p>
          </div>
          
          <div className="lg:col-span-7">
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Professional Summary</h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-12 max-w-2xl font-medium">
              Passionate Full Stack Java Developer with experience in Java, Spring Boot, React.js, MySQL, REST APIs, and responsive frontend development. Experienced in debugging applications, WordPress development, and building scalable full-stack projects.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">Experience</h3>
            <div className="relative border-l border-white/10 pl-8 ml-2">
              <div className="absolute w-3 h-3 bg-[#a0e8f5] rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(160,232,245,0.8)] animate-pulse"></div>
              <h4 className="text-lg font-bold text-white">Full Stack Java Developer Intern</h4>
              <p className="text-[#a0e8f5] text-xs font-mono uppercase tracking-widest mb-4 mt-1">Vybog, Chennai</p>
              <ul className="list-disc list-inside text-white/70 text-sm space-y-2 marker:text-white/30">
                <li>Worked on WordPress web applications</li>
                <li>Debugged and improved existing systems</li>
                <li>Assisted in Spring Boot + React development</li>
                <li>Worked with REST APIs and MySQL</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background graphic */}
      <div className="absolute left-0 bottom-0 opacity-[0.03] pointer-events-none z-0">
        <h1 className="text-[20vw] font-black whitespace-nowrap tracking-tighter">ABOUT_ME</h1>
      </div>
    </section>
  );
}
