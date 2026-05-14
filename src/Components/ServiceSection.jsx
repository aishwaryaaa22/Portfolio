import React from "react";
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import {
  RiLayout4Line,
  RiSmartphoneLine,
  RiFlashlightLine,
  RiRobot2Line,
  RiArrowRightUpLine,
  RiSearchLine,
} from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const Slider = SliderImport.default ? SliderImport.default : SliderImport;
const ServicesSection = () => {
  const services = [
    {
      title: "Core Development & Architecture",
      description:
        "Get a unique website built by a MERN developer by building dynamic web applications where users can create accounts, post content, and interact with data. I combine modern aesthetics with robust coding and advanced SEO to create a fast, sales-focused digital experience.",
      icon: <RiLayout4Line className="text-xl" />,
    },
    {
      title: "API Integration & Responsive Web Design",
      description:
        "Connecting websites to external services (like payment gateways, maps, or social media) and building custom backends to manage data. & Ensuring a site looks and performs perfectly on everything from a 27-inch monitor to a 6-inch smartphone using modern styling tools like Tailwind CSS.",
      icon: <RiSmartphoneLine className="text-xl" />,
    },
    {
      title: "Visual Design & User Experience",
      description:
        "Creating high-fidelity wireframes and interactive prototypes in Figma or Photoshop before a single line of code is written. dding subtle animations and transitions that guide a user’s attention and make the site feel premium.",
      icon: <RiFlashlightLine className="text-xl" />,
    },
    {
      title: "Strategic & Specialized Solutions with AI",
      description:
        "Setting up systems for group buying, inventory management, or digital storefronts. aking an existing, slow website and optimizing the code and images to improve load times and SEO rankings. Building custom themes for content management systems so non-technical clients can update their own blogs or shops easily.",
      icon: <RiRobot2Line className="text-xl" />,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 8000,
    cssEase: "linear",
  };

  const tags = [
    { icon: <RiSearchLine />, label: "SEO" },
    { icon: <RiLayout4Line />, label: "Development" },
    { icon: <GiBrain />, label: "Creativity" },
    { icon: <AiOutlineTeam />, label: "Collaboration" },
    { icon: <RiFlashlightLine />, label: "Optimization" },
    { icon: <RiLayout4Line />, label: "Custom Code" },
  ];
  const duplicatedTags = [...tags, ...tags, ...tags];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 p-10 md:p-24 font-sans selection:bg-zinc-700"  data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-zinc-100 tracking-tight">
            How I Can Help Your Business
          </h1>
          <a
            href="#contact"
            className="px-4 py-3 flex gap-2 justify-center items-center  bg-green-200 text-green-800 hover:bg-green-500 hover:text-black rounded-6xl transition "
          >
            Get in Touch
            <RiArrowRightUpLine className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="flex items-center gap-3 mb-4 text-zinc-100">
                <span className="p-1 border border-zinc-800 rounded-md">
                  {service.icon}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
              </div>
              <p className="leading-relaxed text-zinc-400 text-[1.05rem] font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Tags / Skills */}
        <div className="relative w-full mt-32 py-12 border-t border-zinc-900 overflow-hidden bg-[#0a0a0a]">
          {/* Optional: Gradient Fades on edges for a high-end look */}
          <div className="absolute inset-y-0 left-0 w-32 bg-g-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-g-to-l from-[#0a0a0a] to-transparent z-10" />

          <motion.div
            className="flex whitespace-nowrap gap-16 items-center"
            animate={{
              // Move from right to left (standard)
              // To move Left to Right, change to [ "-50%", "0%" ]
              x: [0, "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Adjust for speed
                ease: "linear",
              },
            }}
          >
            {duplicatedTags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-zinc-500 hover:text-zinc-100 transition-colors shrink-0"
              >
                {tag.icon && (
                  <span className="text-xl opacity-80">{tag.icon}</span>
                )}
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                  {tag.label}
                </span>
                {/* Minimalist Separator */}
                <div className="ml-10 h-1 w-1 bg-zinc-800 rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
