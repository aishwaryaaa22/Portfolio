import { motion } from "framer-motion";
import { FaServer, FaPalette, FaRocket, FaHandshake } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md";
import { RiFocus3Fill } from "react-icons/ri";
import image from '/image.jpeg';


const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="bg-slate-950 py-20 px-6 text-white min-h-screen" data-aos="fade-right" data-aos-easing="linear"
                data-aos-duration="1500">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-green-800 to-green-400">
            Me
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Main Intro Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm"
          >
            <div className="relative group">
              {/* Replace with your actual image path */}
              <img
                src={image}
                alt="Aishwarya Sharma"
                className="w-80 h-48 rounded-2xl object-cover group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-3 -right-3 bg-green-200 text-black px-4 py-1 rounded-full text-xs font-bold">
                MERN STACK
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Engineering <span className="text-green-200">clean code</span>{" "}
                sleek interfaces.
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I'm a Full-stack Developer specializing in high-performance
                applications. I bridge the gap between complex backend logic and
                pixel-perfect frontend design to create high-impact digital
                products.
              </p>
            </div>
          </motion.div>

          {/* Expertise Tile */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-3xl bg-linear-to-br from-blue-600/20 to-purple-600/20 border border-white/10"
          >
            <TbSchool className="text-3xl mb-4 text-blue-400" />
            <h4 className="text-xl font-bold mb-2 text-white">Education</h4>
            <p className="text-slate-400 text-sm">
              B.Tech - INFORMATION TECHNOLOGY from SRI GURU GOBIND SINGH
              INDRAPRASTHA UNIVERSITY - Dr. Akhilesh Das Gupta institute of
              Professional studies 2022 - 2026
              <br />
              Higher Secondary Education- Science(PCMB) St. Margaret Sr. Sec.
              School, Delhi
              <br />
              Secondary Education- St. Margaret Sr. Sec. School, Delhi
            </p>
          </motion.div>

          {/* Freelance Tile */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <FaHandshake className="text-3xl mb-4 text-green-400" />
            <h4 className="text-xl font-bold mb-2">Freelance</h4>
            <p className="text-slate-400 text-sm">
              Successfully delivered the 'Atrios Design Studio' & 'Deep
              Architects' Websites to clients.
            </p>
          </motion.div>

          {/* Soft Skills Tile */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <MdWorkOutline className="text-3xl mb-4 text-yellow-400" />
            <h4 className="text-xl font-bold mb-2 text-white">Internships</h4>
            <div className="flex flex-wrap gap-2 mt-3">
              {["ERICSSON INDIA PVT. LTD.", "BHARAT ELECTRONIC LIMITED"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          {/* Project Focus Tile */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group"
          >
            <RiFocus3Fill className="text-3xl mb-4 text-purple-400 group-hover:animate-bounce" />
            <h4 className="text-xl font-bold mb-2">Area of Focus</h4>
            <p className="text-slate-400 text-sm">
              I aim to drive engineering excellence while delivering products
              that solve high-priority user pain points. My goal is to
              contribute to an organization where I can apply my passion for
              clean architecture and Test-Driven Development (TDD) to build
              highly maintainable codebases that scale effortlessly with user
              growth.
            </p>
            <a
              href="#projects"
              className="mt-4 text-green-200 text-sm font-semibold hover:underline"
            >
              View My Work →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
