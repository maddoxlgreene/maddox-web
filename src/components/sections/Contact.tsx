import React from 'react';
import GradientText from '../GradientText';

const ContactSection = () => {
  return (
    <section className="py-24 relative z-10" id="contact">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-6">
            Let&apos;s Build Something <GradientText>Amazing</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your next project or opportunity? I&apos;m always open to connecting with fellow professionals and innovators.
          </p>
        </div>
        
        <div className="flex justify-center">
          <a 
            href="mailto:business@maddoxgreene.tech?subject=Portfolio Inquiry" 
            className="group relative px-12 py-6 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;