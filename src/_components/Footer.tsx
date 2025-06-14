import React from "react";
import { ArrowUp, Code, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-accent py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="h-6 w-6 text-primary-500 mr-2" />
            <span className="text-lg font-bold gradient-text">
              Kiran Jaiswal
            </span>
          </div>

          <div className="flex items-center">
            <span className="text-gray-400 text-sm">
              © {currentYear} Kiran Jaiswal. All rights reserved.
            </span>
          </div>

          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-400 text-sm flex items-center">
              Made with <Heart size={16} className="text-error mx-1" /> and{" "}
              <Code size={16} className="text-primary-500 mx-1" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
