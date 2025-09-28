import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import GradientText from '../GradientText';

const HeroSection = () => {
  return (
   <main className="pt-32 pb-24 relative z-10" id="about">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
                
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  Hi, I&apos;m <br />
                  <GradientText className="text-7xl md:text-8xl">Maddox</GradientText>
                </h1>
                
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed max-w-xl">
                  <p className="text-xl text-blue-300 font-medium">Cybersecurity & Infrastructure Specialist</p>
                  <p>As a 21-year-old cybersecurity and networking professional, I&apos;m currently pursuing a Bachelor&apos;s degree in Information System Security, backed by hands-on experience in IT support, infrastructure, and cybersecurity. I&apos;ve held leadership positions in both engineering and customer-facing roles, focusing on optimizing systems and enhancing user experience, and hold certifications from Cisco and Google.</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#contact" 
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 flex items-center justify-center relative overflow-hidden"
                >
                  <span className="relative z-10">Let&apos;s Connect</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <a 
                  href="#journey" 
                  className="px-8 py-4 bg-white/5 backdrop-blur-xl text-white rounded-xl font-semibold transition-all duration-300 border border-white/20 hover:bg-white/10 hover:border-white/30 flex items-center justify-center"
                >
                  View My Journey
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse" />
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full blur-xl opacity-20 animate-spin-slow" />
                <Image
                  src="/maddox-greene.jpg"
                  alt="Maddox Greene"
                  width={320}
                  height={320}
                  className="relative w-80 h-80 rounded-full object-cover border-2 border-white/20 transition-all duration-500 group-hover:scale-105 group-hover:border-white/40"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
  );
};

export default HeroSection;