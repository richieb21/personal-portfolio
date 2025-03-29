import React from "react";

const SocialIcons = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <a
          href="mailto:r25bai@uwaterloo.ca"
          className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          aria-label="Email"
        >
          [ email ]
        </a>
        <a
          href="https://x.com/richieb21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          aria-label="GitHub"
        >
          [ twitter ]
        </a>
        <a
          href="https://github.com/richieb21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          aria-label="GitHub"
        >
          [ github ]
        </a>
        <a
          href="https://linkedin.com/in/bai-richard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          aria-label="LinkedIn"
        >
          [ linkedin ]
        </a>
      </div>

      <div className="flex items-center gap-2">
        <a href="https://cs.uwatering.com/#https://richardbai.me/?nav=prev">
          ←
        </a>
        <a
          href="https://cs.uwatering.com/#https://richardbai.me/"
          target="_blank"
        >
          <img
            src="https://cs.uwatering.com/icon.black.svg"
            alt="CS Webring"
            className="w-6 h-auto opacity-80"
          />
        </a>
        <a href="https://cs.uwatering.com/#https://richardbai.me/?nav=next">
          →
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
