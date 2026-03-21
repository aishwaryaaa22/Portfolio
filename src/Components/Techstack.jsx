import React, { useEffect } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaBootstrap,
  FaCss3,
  FaPython,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { DiMongodb, DiDjango } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { RiAiGenerate } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
function Techstack() {
  const icons = [
    <FaReact className="text-indigo-400"/>,
    <FaCss3Alt className="text-blue-600"/>,
    <FaNodeJs className="text-green-600" />,
    <FaHtml5  className="text-red-600"/>,
    <FaJs  className="text-orange-400"/>,
    <RiTailwindCssFill  className="text-blue-400"/>,
    <DiMongodb className="text-green-400" />,
    <FaBootstrap className="text-purple-700" />,
     <FaGithub  className=""/>,
    <DiDjango  className="text-green-600"/>,
    <SiExpress className="" />,
    <FaPython  className="text-yellow-300"/>,
     <FaFigma className=""/>,
    <VscVscode className="text-blue-400"/>,
    <FaFigma className=""/>,
    <DiDjango  className="text-green-600"/>,
    <RiAiGenerate className="text-white"/>
  ];

  useEffect(() => {
    AOS.init({
      duration: 8000,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <div>
      <section id="stack" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-zinc-100 tracking-tight mb-20 text-center">My Tech Stack</h1>
          <div className="flex flex-wrap justify-center p-4 text-slate-300 gap-10 grayscale opacity-60 hover:grayscale-0 transition-all">
            {icons.map((icon, index) => (
              <div
              key={index}
                className="items-center text-5xl hover:text-white border p-2"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Techstack;
