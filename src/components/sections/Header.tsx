import React from 'react';
import GradientText from '../GradientText';

const navItems = ["About", "Journey", "Work", "Certifications", "Contact"];

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-2xl border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <GradientText>Maddox Greene</GradientText>
        </h1>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-pink-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;