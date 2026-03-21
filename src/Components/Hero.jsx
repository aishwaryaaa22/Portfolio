import "./Hero.css";
import React from "react";
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
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb, DiDjango } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const icons = [
    <FaReact />,
    <FaNodeJs />,
    <FaHtml5 />,
    <FaCss3Alt />,
    <FaJs />,
    <RiTailwindCssFill />,
    <FaBootstrap />,
    <FaCss3 />,
    <DiMongodb />,
    <DiDjango />,
    <SiExpress />,
    <FaPython />,
    <FaGithub />,
  ];

  return (
    <div>
      <div className="app">
        <div className="background-icons">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="icon"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      <section id="home" className="h-80 flex flex-col items-center text-center"  data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-400">Aishwarya sharma</span>
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Web Developer | MERN Enthusiast | Web Designer
        </p>{" "}
        <div className="flex gap-6 ">
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-400 hover:bg-indigo-500 rounded-2xl transition"
        >
          View My Work
        </a>
        <a
          href="/pdf.pdf"
          className="px-6 py-3 bg-indigo-400 hover:bg-indigo-500 rounded-2xl transition"
        >
          Resume
        </a>
        </div>
        <div>
      <marquee direction="down" scrollamount="2" className="flex justify-center text-2xl text-white mt-15">
        <IoIosArrowDown />
      </marquee></div>
      </section>
    </div>
  );
}
