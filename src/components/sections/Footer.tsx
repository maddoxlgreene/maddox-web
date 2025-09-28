import React from 'react';
import { Linkedin, Github, Mail, Coffee } from 'lucide-react';

// An array to hold your social link data for easier management
const socialLinks = [
  { href: "https://www.linkedin.com/in/maddox-g-a759aa338", icon: Linkedin, color: "hover:text-blue-400" },
  { href: "https://github.com/maddoxlgreene", icon: Github, color: "hover:text-white" },
  { href: "mailto:business@maddoxgreene.tech", icon: Mail, color: "hover:text-pink-400" },
  { href: "https://buymeacoffee.com/realconflexed", icon: Coffee, color: "hover:text-yellow-400" }
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl relative z-10">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="text-center mb-8">
          <p className="text-gray-400 mb-6">
            © {new Date().getFullYear()} Maddox Greene. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ href, icon: Icon, color }) => (
              <a 
                key={href}
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-gray-500 ${color} transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-white/10`}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;