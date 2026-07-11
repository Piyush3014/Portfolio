import { motion } from "framer-motion";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    { 
      title: "AI Interview Agent", 
      tech:"MERN Stack, OpenRouter API, Firebase", 
      github: "https://github.com/Piyush3014/InterviewIQ", 
      live: "https://interviewiq-client-0mxg.onrender.com"                
    },
    { 
      title: "AI Website Builder", 
      tech:"MERN Stack, OpenRouter API, Firebase", 
      github: "https://github.com/Piyush3014/GenwebAI", 
      live: "https://genwebai-3.onrender.com" 
    },
    { 
      title: "AI Powered Blogging App", 
      tech: "MERN Stack, Gemini API", 
      github: "https://github.com/Piyush3014/QuickBlog", 
      live: "http://quick-blog-18mu.vercel.app" 
    },
    { 
      title: "N-Queens Visualizer", 
      tech: "HTML, CSS, Javascript Algorithms", 
      github: "https://github.com/Piyush3014/N-Queens-Visualizer", 
      live: "https://n-queens-visualizer-js.netlify.app/" 
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-24 px-6 bg-slate-950 text-white">
      <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -5 }}
            className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 transition-all flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-blue-400 text-sm mb-6 font-medium">{proj.tech}</p>
            </div>
            
            <div className="flex gap-6 mt-auto">
              <a 
                href={proj.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm"
              >
                <FaGithub /> GitHub
              </a>
              <a 
                href={proj.live} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors text-sm"
              >
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




