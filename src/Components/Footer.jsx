import React from "react";
import { FaLinkedinIn, FaPhoneAlt, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <div>
      <footer id="contact" className="py-20 px-6 border-t border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's work together.</h2>
          <p className="text-slate-400 mb-8">
            Currently accepting internships and full-time opportunities.
          </p>
          <a
            href="mailto:hello@example.com"
            className="text-2xl font-medium text-cyan-500 underline decoration-2 underline-offset-8 hover:text-cyan-300 transition-colors"
          >
            aishwarya056789@gmail.com
          </a>
          <div className="flex justify-center gap-6 mt-12 text-slate-300">
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
            <FaPhoneAlt className="hover:text-white cursor-pointer" />
             <SiGmail className="hover:text-white cursor-pointer" />
           
          </div>
          <p className="mt-20 text-xs text-slate-200">
            © 2026 Developed with ❤️ and React.
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
