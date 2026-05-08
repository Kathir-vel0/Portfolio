import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "FULL_ECOSYSTEM_BUILD",
    brief: ""
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.brief) {
      setStatus("error");
      setErrorMessage("PLEASE FILL OUT ALL REQUIRED FIELDS.");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    setStatus("loading");

    // EMAILJS CONFIGURATION
    // -------------------------------------------------------------
    // Set these in your .env file at the root of your project:
    // VITE_EMAILJS_SERVICE_ID=your_service_id
    // VITE_EMAILJS_TEMPLATE_ID=your_template_id
    // VITE_EMAILJS_PUBLIC_KEY=your_public_key
    // -------------------------------------------------------------
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.send(
      serviceID,
      templateID,
      {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        message: formData.brief,
      },
      publicKey
    )
    .then((response) => {
      setStatus("success");
      setFormData({ name: "", email: "", projectType: "FULL_ECOSYSTEM_BUILD", brief: "" });
      setTimeout(() => setStatus("idle"), 5000);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMessage("FAILED TO SEND. PLEASE VERIFY CREDENTIALS.");
      setTimeout(() => setStatus("idle"), 5000);
    });
  };

  return (
    <section id="contact" className="py-24 border-t border-[#111111]/20 dark:border-white/10 relative overflow-hidden">
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
        <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter text-[#111111] dark:text-white uppercase mb-16 pb-8 border-b border-[#111111]/20 dark:border-white/10">
          LET'S CONNECT
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-[#008b9e] dark:text-[#a0e8f5] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">// ARCHITECTING DIGITAL PRECISION</p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight text-[#111111] dark:text-white mb-8">
              I build high-velocity digital experiences for brands that refuse to blend in. My work sits at the intersection of <span className="text-[#008b9e] dark:text-[#a0e8f5]">creative direction</span> and technical engineering.
            </h3>
            <p className="text-[#111111]/80 dark:text-white/70 text-sm leading-relaxed font-medium mb-12">
              With experience in brutalist UI design and complex system architecture via Spring Boot and React, I help startups scale their digital footprint with unapologetic confidence.
            </p>
            
            <div className="mb-12">
              <p className="text-[#111111] dark:text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">CORE COMPETENCIES</p>
              <div className="flex flex-wrap gap-2">
                {['JAVA', 'SPRING_BOOT', 'REACT_JS', 'MYSQL', 'JAVASCRIPT', 'TAILWIND_CSS', 'REST_APIS', 'GITHUB'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-[#111111]/20 dark:border-white/10 rounded-full text-[9px] sm:text-[10px] font-mono text-[#111111]/90 dark:text-white/80 uppercase tracking-widest">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-[#161616] backdrop-blur-md border border-[#111111]/10 dark:border-white/5 rounded-lg p-8 relative overflow-hidden group shadow-[0_0_30px_rgba(0,139,158,0.06)] dark:shadow-none transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-[#f0f0f0] dark:from-black/80 via-[#f0f0f0]/60 dark:via-black/20 to-transparent z-10 transition-colors duration-500"></div>
              {/* Fake grid for the map look */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-100 dark:opacity-30 transition-colors duration-500"></div>
              <div className="relative z-20 flex flex-col justify-end h-32">
                <p className="text-[#008b9e] dark:text-[#a0e8f5] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 transition-colors duration-500">CURRENT LOCATION</p>
                <p className="text-xl sm:text-2xl font-bold text-[#111111] dark:text-white uppercase tracking-tighter transition-colors duration-500">CHENNAI / INDIA</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#161616] border border-[#111111]/10 dark:border-white/5 p-8 sm:p-12 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-[#111111] dark:text-white mb-4 tracking-tight">START A PROJECT</h3>
            <p className="text-[#111111]/70 dark:text-white/60 text-xs sm:text-sm mb-10">Currently accepting high-impact collaborations.</p>
            
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/90 dark:text-white/80 mb-3">NAME</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="IDENTIFY YOURSELF" className="w-full bg-white dark:bg-[#111] border border-[#111111]/20 dark:border-white/10 rounded px-5 py-4 text-xs sm:text-sm text-[#111111] dark:text-white placeholder:text-[#111111]/50 dark:placeholder:text-white/30 focus:outline-none focus:border-[#008b9e] dark:focus:border-[#a0e8f5] focus:bg-black/5 dark:focus:bg-white/5 transition-all font-mono" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/90 dark:text-white/80 mb-3">EMAIL</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="WHERE_TO_REACH_YOU" className="w-full bg-white dark:bg-[#111] border border-[#111111]/20 dark:border-white/10 rounded px-5 py-4 text-xs sm:text-sm text-[#111111] dark:text-white placeholder:text-[#111111]/50 dark:placeholder:text-white/30 focus:outline-none focus:border-[#008b9e] dark:focus:border-[#a0e8f5] focus:bg-black/5 dark:focus:bg-white/5 transition-all font-mono" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/90 dark:text-white/80 mb-3">PROJECT TYPE</label>
                <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-white dark:bg-[#111] border border-[#111111]/20 dark:border-white/10 rounded px-5 py-4 text-xs sm:text-sm text-[#111111] dark:text-white focus:outline-none focus:border-[#008b9e] dark:focus:border-[#a0e8f5] focus:bg-black/5 dark:focus:bg-white/5 transition-all font-mono appearance-none">
                  <option value="FULL_ECOSYSTEM_BUILD" className="bg-white dark:bg-[#0a0a0a] text-[#111111] dark:text-white">FULL_ECOSYSTEM_BUILD</option>
                  <option value="INTERFACE_DESIGN" className="bg-white dark:bg-[#0a0a0a] text-[#111111] dark:text-white">INTERFACE_DESIGN</option>
                  <option value="SYSTEM_ARCHITECTURE" className="bg-white dark:bg-[#0a0a0a] text-[#111111] dark:text-white">SYSTEM_ARCHITECTURE</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/90 dark:text-white/80 mb-3">BRIEF</label>
                <textarea name="brief" value={formData.brief} onChange={handleChange} placeholder="DEFINE THE MISSION" rows="4" className="w-full bg-white dark:bg-[#111] border border-[#111111]/20 dark:border-white/10 rounded px-5 py-4 text-xs sm:text-sm text-[#111111] dark:text-white placeholder:text-[#111111]/50 dark:placeholder:text-white/30 focus:outline-none focus:border-[#008b9e] dark:focus:border-[#a0e8f5] focus:bg-black/5 dark:focus:bg-white/5 transition-all font-mono resize-none"></textarea>
              </div>
              <button type="submit" disabled={status === "loading"} className="w-full bg-[#008b9e] dark:bg-[#a0e8f5] text-white dark:text-black font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs py-5 rounded hover:bg-[#111111] dark:hover:bg-white transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                {status === "loading" ? "SENDING..." : "SEND_MESSAGE"}
              </button>
              {status === "success" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#008b9e] dark:text-[#a0e8f5] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-center mt-2">
                  MESSAGE SECURED. INITIATING CONTACT SHORTLY.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-center mt-2">
                  {errorMessage}
                </motion.p>
              )}
            </form>
            
            <div className="mt-12 pt-8 border-t border-[#111111]/10 dark:border-white/5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/90 dark:text-white/80 mb-6">GLOBAL_NETWORKS</p>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <a href="https://github.com/Kathir-vel0" className="flex items-center gap-3 text-[10px] sm:text-xs text-[#111111]/70 dark:text-white/60 hover:text-[#111111] dark:hover:text-white font-mono uppercase transition-colors tracking-widest"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> GITHUB</a>
                <a href="https://linkedin.com/in/kathir-vel-25484b28a/" className="flex items-center gap-3 text-[10px] sm:text-xs text-[#111111]/70 dark:text-white/60 hover:text-[#111111] dark:hover:text-white font-mono uppercase transition-colors tracking-widest"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> LINKEDIN</a>
                <a href="#" className="flex items-center gap-3 text-[10px] sm:text-xs text-[#111111]/70 dark:text-white/60 hover:text-[#111111] dark:hover:text-white font-mono uppercase transition-colors tracking-widest"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> INSTAGRAM</a>
                <a href="mailto:kathir@example.com" className="flex items-center gap-3 text-[10px] sm:text-xs text-[#111111]/70 dark:text-white/60 hover:text-[#111111] dark:hover:text-white font-mono uppercase transition-colors tracking-widest"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> EMAIL</a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Footer */}
      <div className="mt-32 pt-12 border-t border-[#111111]/20 dark:border-white/10 px-6 sm:px-12 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 pb-12">
        <div className="text-center md:text-left flex-1">
          <h2 className="text-xl font-bold uppercase tracking-tighter text-[#111111] dark:text-white mb-2">KATHIR_VEL</h2>
          <p className="text-[#111111]/60 dark:text-white/50 text-[9px] uppercase tracking-[0.2em]">Architecting the future of digital experiences.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-[9px] uppercase font-bold tracking-[0.2em] text-[#111111]/60 dark:text-white/50 flex-1">
          <a href="#projects" className="hover:text-[#111111] dark:hover:text-white transition-colors">WORK</a>
          <a href="#about" className="hover:text-[#111111] dark:hover:text-white transition-colors">PROCESS</a>
          <a href="https://github.com/Kathir-vel0" className="hover:text-[#111111] dark:hover:text-white transition-colors">GITHUB</a>
          <a href="https://linkedin.com/in/kathir-vel-25484b28a/" className="hover:text-[#111111] dark:hover:text-white transition-colors">LINKEDIN</a>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4 flex-1">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[#008b9e] dark:text-[#a0e8f5] text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#111111] dark:hover:text-white drop-shadow-[0_0_8px_rgba(0,139,158,0.8)] dark:drop-shadow-[0_0_8px_rgba(160,232,245,0.8)] transition-all flex items-center gap-2">
            BACK TO TOP <span className="text-sm leading-none">↑</span>
          </button>
          <p className="text-[#111111]/50 dark:text-white/30 text-[9px] uppercase tracking-[0.2em] text-center md:text-right">
            © {new Date().getFullYear()} KATHIR VEL. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </section>
  );
}
