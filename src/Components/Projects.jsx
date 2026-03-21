import React from "react";
import SliderImport from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
const Slider = SliderImport.default ? SliderImport.default : SliderImport;
// These CSS imports are MANDATORY for the slider to work
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    id: "1",
    title: "UGC-CLONE",
    desc: "A Govt. UGC Frontend clone developed using Tailwind CSS and React utilities",
    link: "https://github.com/aishwayraaa22/UGC-clone",
  },
  {
    id: "2",
    title: "E-commerce App",
    desc: "Full-stack store using MERN stack.",
    link: "#",
  },
  {
    id: "3",
    title: "inkIT",
    desc: "A blogging site developed using CSS and Django for backend.",
    link: "https://github.com/aishwaryaaa22/inkIT",
  },
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <section id="projects" className="bg-gray-800 py-20 px-8"  data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500">
      <h1 className="text-4xl md:text-5xl font-semibold text-zinc-100 tracking-tight mb-20 text-center">Recent Pojects</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, idx) => (
          <div key={idx} className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-indigo-600 transition">
            <h4 className="text-xl font-bold mb-2">{p.title}</h4>
            <p className="text-gray-400 mb-4">{p.desc}</p>
            <a href={p.link} className="text-indigo-400 hover:underline">View Project →</a>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
