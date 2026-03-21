import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./Components/Footer";
import Techstack from "./Components/Techstack";
import Aboutt from "./Components/Aboutt";
import ServicesSection from "./Components/ServiceSection";


function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <ServicesSection/>
      <Aboutt/>
      <Techstack/>
      <Projects />  
      <Footer/>
    </div>
  );
}
export default App;