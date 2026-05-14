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
            className="text-2xl font-medium text-green-500 underline decoration-2 underline-offset-8 hover:text-green-200 transition-colors"
          >
            aishwarya056789@gmail.com
          </a>
          <div className="flex justify-center gap-6 mt-12 text-slate-300">
            <a
              href="https://www.linkedin.com/in/aishwarya-sharma-b6a992394"
              target="_blank"
            >
              {" "}
              <FaLinkedinIn className="hover:text-white cursor-pointer" />
            </a>
            <a href="https://github.com/aishwaryaaa22" target="_blank">
              <FaGithub className="hover:text-white cursor-pointer" />
            </a>
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
