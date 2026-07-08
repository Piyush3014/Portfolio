import { motion } from "framer-motion";
import { FaCode, FaServer, FaGlobe, FaTools } from "react-icons/fa";
import * as SiIcons from "react-icons/si";

function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      subtitle: "Foundational Expertise",
      icon: <FaCode />,
      skills: [
        { name: "C", id: "SiC" },
        { name: "C++", id: "SiCplusplus" },
        { name: "JavaScript", id: "SiJavascript" },
        { name: "Python", id: "SiPython" },
      ],
    },
    {
      title: "MERN Stack",
      subtitle: "Full-Stack Capabilities",
      icon: <FaServer />,
      skills: [
        { name: "MongoDB", id: "SiMongodb" },
        { name: "Express.js", id: "SiExpress" },
        { name: "React", id: "SiReact" },
        { name: "Node.js", id: "SiNodedotjs" },
      ],
    },
    {
      title: "Web Technologies",
      subtitle: "Modern UI/UX",
      icon: <FaGlobe />,
      skills: [
        { name: "HTML5", id: "SiHtml5" },
        { name: "CSS3", id: "SiCss3" },
        { name: "Tailwind CSS", id: "SiTailwindcss" },
      ],
    },
    {
      title: "Tools & DevOps",
      subtitle: "Workflow & Deployment",
      icon: <FaTools />,
      skills: [
        { name: "Git", id: "SiGit" },
        { name: "GitHub", id: "SiGithub" },
        { name: "Postman", id: "SiPostman" },
        { name: "VS Code", id: "SiVisualstudiocode" },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-24 px-6 flex flex-col justify-center bg-[#0B1120] text-white">
      <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tighter">TECH STACK & PROFICIENCIES</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-[90rem] mx-auto">
        {categories.map((cat, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="flex flex-col items-center">
            <div className="text-center mb-8 w-full">
              <div className="text-blue-400 text-3xl flex justify-center mb-3">{cat.icon}</div>
              <h3 className="text-2xl font-bold">{cat.title}</h3>
              <p className="text-slate-400 text-sm">{cat.subtitle}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              {cat.skills.map((skill, i) => {
                const IconComponent = SiIcons[skill.id];
                return (
                  <div key={i} className="group flex flex-col items-center justify-center p-5 bg-[#111827] rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all">
                    <span className="text-4xl mb-4 text-slate-300">
                      {IconComponent ? <IconComponent /> : <FaCode />}
                    </span>
                    <span className="text-center text-sm font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;