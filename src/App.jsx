import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Techstack from "./Components/Techstack";
import Aboutt from "./Components/Aboutt";
import ServicesSection from "./Components/ServiceSection";
import Skills from "./Components/Skills";
import About from "./Components/About";


function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <ServicesSection/>
      <About/>
      <Techstack/>
      <Projects />
      <Skills/> 
      <Footer/>
    </div>
  );
}
export default App;