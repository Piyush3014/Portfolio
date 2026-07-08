import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    { title: "AI Interview Agent", tech: "MERN Stack, OpenRouter API, Firebase", github: "#" },
    { title: "AI Website Builder", tech: "MERN Stack, OpenRouter API, Firebase", github: "#" },
    { title: "AI Powered Blogging App", tech: "MERN Stack, Gemini API", github: "#" },
    { title: "N-Queens Visualizer", tech: "HTML, CSS, Javascript Algorithms", github: "#" },
  ];

  return (
    <section id="projects" className="min-h-screen py-24 px-6 bg-slate-950 text-white">
      <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 transition-all group"
          >
            <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-blue-400 text-sm mb-6">{proj.tech}</p>
            <div className="flex gap-4">
              <a href={proj.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <FaGithub /> GitHub
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;