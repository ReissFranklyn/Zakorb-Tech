
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zarkorb-grid py-12 border-t border-zarkorb-cyan/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-zarkorb-cyan font-orbitron text-2xl font-bold">
              ZARKORB
              <span className="text-white text-xs ml-1 tracking-wider align-top">TECH</span>
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              International Tech Solutions, Locally Empowered.
              Code Meets Culture: Secured by Strategy.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-zarkorb-cyan transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-zarkorb-cyan transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-zarkorb-cyan transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-zarkorb-cyan/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Zarkorb Tech Solutions. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <a href="#" className="hover:text-zarkorb-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zarkorb-cyan transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zarkorb-cyan transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
