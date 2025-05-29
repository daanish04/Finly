import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
config.autoAddCss = false;
library.add(faGithub, faLinkedinIn, faEnvelope);

const Footer = () => {
  return (
    <div className="mt-5 flex justify-between items-center px-16 bg-blue-50 py-8 dark:bg-slate-950 text-gray-700 dark:text-slate-300 text-sm">
      <div>
        <span className="font-bold">Finly</span> © 2025{" "}
        <span className="ml-3 mr-1">·</span> Built for the future of finance
      </div>
      <div className="flex space-x-6">
        <a
          href="https://github.com/daanish04/Finly"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-100"
        >
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/daanishqan/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-100"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2xl" />
        </a>
        <a
          href="mailto:qanoongodaanish@gmail.com"
          className="hover:scale-105 transition-transform duration-100"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
