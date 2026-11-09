import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-light mb-6 text-white">
          Hello, I'm <span className="font-semibold text-blue-400">Piyush Kumar</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
          A final-year undergraduate student at <strong>NIT Jamshedpur</strong>. 
          I am an aspiring software engineer with a deep passion for building 
          efficient and scalable solutions. I am always keen to explore new 
          technologies and master modern tech stacks to solve complex real-world problems.
        </p>

        {/* Social Links Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <a href="https://www.linkedin.com/in/piyush-kumar-2a0571288/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors">
            <FaLinkedin size={24} /> LinkedIn
          </a>
          <a href="https://github.com/Piyush3014" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <FaGithub size={24} /> GitHub
          </a>
          <a href="https://www.instagram.com/piyyush._.30?igsh=N3UxazQ4dWhycGJi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-pink-500 transition-colors">
            <FaInstagram size={24} /> Instagram
          </a>
        </div>

        {/* Resume Button */}
        <div>
          <a 
            href="https://drive.google.com/file/d/1rJ-lNt2V7SHA1CaMgYi7a9jFaQBFkcLo/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition-all inline-block"
          >
            View Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default About;