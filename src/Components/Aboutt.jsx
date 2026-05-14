import React from "react";
import image from '/image.jpeg';
import { FiTerminal , FiCpu } from "react-icons/fi";
import { PiBracketsCurlyBold } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Aboutt = () => {
    useEffect(() => {
        AOS.init({
          duration: 9000,
          once: true,
          offset: 100,
        });
      }, []);
  return (
    <section id="about" className="py-12 px-6 bg-slate-950 border-y border-slate-900 "  data-aos="fade-right" data-aos-easing="linear"
                data-aos-duration="1500">
        <h1 className="text-4xl md:text-5xl font-semibold text-zinc-100 tracking-tight mb-20 md:ml-60 ml-30">About</h1>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Left: Tighter Image Frame */}
        <div className="relative flex" data-aos="fade-right">
          <div className="absolute -inset-2 bg-gr-to-tr from-cyan-500 to-blue-600 rounded-xl blur-sm opacity-20"></div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <img 
              src={image} 
              alt="Profile" 
              className="w-full h-full p-4 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          {/* Subtle floating tech tag */}
          <div className="absolute -bottom-3 -right-3 bg-green-200 text-slate-950 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
            MERN STACK
          </div>
        </div>

        {/* Right: Focused Content */}
        <div className="flex-1 text-center md:text-left" data-aos="fade-left">
          

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Engineering <span className="text-green-200">clean code</span> & sleek interfaces.
          </h2>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
            I'm a Full-stack Developer specializing in high-performance applications and modern UI/UX design.
        I love clean code, smooth animations, and creative UI design that solves real problems. I bridge the gap between complex backend logic and pixel-perfect frontend design to create high-impact digital products.
          </p>

          {/* Quick Stats/Skills Grid */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-lg">
              <PiBracketsCurlyBold/>
              <span className="text-xs font-semibold text-slate-300">Full-Stack</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-lg">
             <FiCpu size={16} className="text-green-400" />
              <span className="text-xs font-semibold text-slate-300">Software Architecture</span>
            </div>
          </div>
        </div>

      </div>
    </section>
     
       
           
  );
};

export default Aboutt;
