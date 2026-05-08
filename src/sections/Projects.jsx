const projects = [
  {
    title: "STUDENT_RESULT_SYSTEM",
    description: "A full-stack student result management platform with admin, teacher, and student modules. Includes authentication, result publishing, student management, and responsive dashboard UI.",
    stack: ["JAVA", "SPRING BOOT", "REACT", "MYSQL"],
    github: "https://github.com/Kathir-vel0/student-result-system.git",
    demo: "https://student-result-system-phi.vercel.app/",
    tags: ["FULLSTACK", "MANAGEMENT", "EDUCATION"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  }
];

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-[#111111]/20 dark:border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className={index !== 0 ? "mt-32" : ""}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center text-center mb-16 gap-4">
              <p className="text-[#008b9e] dark:text-[#a0e8f5] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">MAIN PROJECT</p>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-[#111111] dark:text-white uppercase break-all drop-shadow-[0_0_15px_rgba(0,139,158,0.1)] dark:drop-shadow-[0_0_15px_rgba(160,232,245,0.1)]">
                {project.title}
              </h2>
            </div>

            <div className="relative group bg-white dark:bg-black/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-[#111111]/10 dark:border-white/10 shadow-lg dark:shadow-[0_0_20px_rgba(160,232,245,0.05)] hover:shadow-[0_0_40px_rgba(0,139,158,0.15)] dark:hover:shadow-[0_0_40px_rgba(160,232,245,0.15)] transition-all duration-700">
              <div className="aspect-[16/9] md:aspect-[21/9] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#f0f0f0] dark:from-[#0a0a0a] via-[#f0f0f0]/80 dark:via-[#0a0a0a]/80 to-transparent z-10"></div>
                
                {/* Futuristic background image preview */}
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 ease-out" />
                
                {/* Tech overlay grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(160,232,245,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(160,232,245,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-10"></div>
                
                <div className="absolute bottom-0 left-0 p-6 sm:p-10 z-20 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div className="max-w-2xl bg-white/60 dark:bg-black/40 backdrop-blur-md p-6 rounded-xl border border-[#111111]/10 dark:border-white/5">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-[#008b9e]/10 dark:bg-[#a0e8f5]/10 border border-[#008b9e]/30 dark:border-[#a0e8f5]/30 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#008b9e] dark:text-[#a0e8f5]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-[#111111] dark:text-white text-base sm:text-lg font-medium leading-relaxed drop-shadow-md">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6">
                      {project.stack.map(tech => (
                        <span key={tech} className="text-[#111111]/90 dark:text-white/80 text-[10px] font-mono font-bold tracking-widest uppercase bg-black/5 dark:bg-white/5 px-2 py-1 rounded">
                          // {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-6 md:mt-0">
                    {project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/20 backdrop-blur-sm text-[#111111] dark:text-white hover:bg-[#008b9e] dark:hover:bg-[#a0e8f5] hover:text-white dark:hover:text-black hover:shadow-[0_0_20px_rgba(0,139,158,0.5)] dark:hover:shadow-[0_0_20px_rgba(160,232,245,0.5)] transition-all shrink-0 text-[10px] sm:text-xs font-bold uppercase tracking-widest group/btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:animate-pulse"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                        Live Demo
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#008b9e]/10 dark:bg-[#a0e8f5]/10 border border-[#008b9e]/30 dark:border-[#a0e8f5]/30 backdrop-blur-sm text-[#008b9e] dark:text-[#a0e8f5] hover:bg-[#008b9e] dark:hover:bg-[#a0e8f5] hover:text-white dark:hover:text-black hover:shadow-[0_0_20px_rgba(0,139,158,0.5)] dark:hover:shadow-[0_0_20px_rgba(160,232,245,0.5)] transition-all shrink-0 text-[10px] sm:text-xs font-bold uppercase tracking-widest group/btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:animate-bounce"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
