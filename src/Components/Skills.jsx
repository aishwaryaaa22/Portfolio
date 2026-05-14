import React from "react";
import { FaUsers, FaLightbulb, FaComments, FaRocket } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: "Collaborative Engineering", desc: "Experienced in working within structured development workflows, utilizing Git/GitHub for version control and collaborating on full-stack projects to ensure seamless integration between frontend and backend.", icon: <FaUsers />, color: "from-blue-500" },
    { name: "Analytical Problem Solving", desc: "Logic-driven approach from MERN development. Applying a rigorous engineering mindset to debug complex MERN stack applications and optimize database schemas. Skilled at breaking down high-level project requirements into scalable technical tasks", icon: <FaLightbulb />, color: "from-purple-500" },
    { name: "Client-Centric Communication", desc: "Fluent in English & Hindi; freelance client handling.Proven ability to translate technical jargon into actionable business insights for freelance clients. Managed the end-to-end delivery of the Atrios Design Studio portfolio, from initial wireframing to final deployment.", icon: <FaComments />, color: "from-pink-500" },
    { name: "Self-Driven Technical Agility", desc: "Quickly learning new tech like AI-integration & A consistent track record of self-learning and implementing new technologies, such as transitioning from Django for inventory systems to building AI-driven e-commerce logic in the MERN stac", icon: <FaRocket />, color: "from-orange-500" },
  ];

  return (
    <section id="projects" className="bg-gray-800 py-20 px-8"  data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500">
      <h1 className="text-4xl md:text-5xl font-semibold text-zinc-100 tracking-tight mb-20 text-center">Soft Skills</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
      {skills.map((skill, index) => (
        <div key={index} className="group relative p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-green-500 transition-all duration-300">
          <div className={`w-12 h-12 mb-4 rounded-lg bg-linear-to-br ${skill.color} to-transparent flex items-center justify-center text-2xl text-white`}>
            {skill.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
          <p className="text-gray-400 text-sm">{skill.desc}</p>
          
          {/* Subtle Glow Effect on Hover */}
          <div className="absolute -inset-0.5 bg-linear-to-r from-green-100 to-green-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
        </div>
      ))}
    </div>
    </section>
  );
};
export default Skills;