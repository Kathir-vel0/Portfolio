import { motion } from "framer-motion";
import { FaJava, FaReact, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiJavascript } from "react-icons/si";

const skills = [
  {
    name: "Java",
    icon: <FaJava className="text-5xl text-cyan-400 drop-shadow-neon-cyan" />,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot className="text-5xl text-green-400 drop-shadow-neon-cyan" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-5xl text-cyan-300 drop-shadow-neon-cyan" />,
  },
  {
    name: "MySQL",
    icon: <FaDatabase className="text-5xl text-purple-400 drop-shadow-neon-purple" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-5xl text-cyan-400 drop-shadow-neon-cyan" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-5xl text-yellow-300 drop-shadow-neon-cyan" />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black via-[#1e293b] to-[#0f172a]">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 mb-12">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.1, boxShadow: "0 0 32px 4px #06b6d4" }}
            className="bg-white/10 dark:bg-black/40 backdrop-blur-lg rounded-2xl p-8 flex flex-col items-center shadow-lg border border-cyan-400/20 hover:border-cyan-400 transition-all duration-300 min-w-[140px]"
          >
            {skill.icon}
            <span className="mt-4 text-lg font-semibold text-white/90">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
