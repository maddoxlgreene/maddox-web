import React from 'react';
import { certifications } from '@/data/portfolioData';
import GradientText from '../GradientText';
import GlassCard from '../GlassCard';

const CerificationsSection = () => {
  return (
    <section className="py-24 relative z-10" id="certifications">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">
              <GradientText>Certifications & Credentials</GradientText>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Projects that define my passion for cybersecurity and information technology, connecting the dots between stability and security
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {certifications.map((cert) => {
              const gradientClass = cert.color === 'blue' 
                ? 'from-blue-500 to-cyan-500' 
                : cert.color === 'pink' 
                ? 'from-pink-500 to-purple-500'
                : cert.color === 'red' 
                ? 'from-red-500 to-maroon-500'
                : 'from-gray-500 to-slate-500';

              const outlineGlowClass = cert.color === 'blue' 
                ? 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]' 
                : cert.color === 'pink' 
                ? 'group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]' 
                : 'group-hover:shadow-[0_0_20px_rgba(107,114,128,0.4)]';

              const Icon = cert.icon;
              return (
                <div 
                  key={cert.title} 
                  className={`
                    group cursor-pointer transform transition-all duration-500 
                    hover:scale-105 ${outlineGlowClass}
                    relative rounded-2xl
                  `}
                >
                  <GlassCard className="p-8 text-center h-full">
                  <div className="relative z-10">
                    <div className="mb-6 flex flex-col items-center">
                      <div className={`
                        w-20 h-20 mx-auto rounded-2xl flex items-center justify-center
                        bg-gradient-to-br ${gradientClass}/20 border border-current/30
                        transition-all duration-500
                      `}>
                        <Icon className="w-12 h-12 text-white drop-shadow-lg transition-transform duration-500" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-500">
                      {cert.title}
                    </h3>
                    
                    <p className={`
                      mb-4 text-lg font-semibold bg-gradient-to-r ${gradientClass}
                      bg-clip-text text-transparent transition-all duration-500
                    `}>
                      {cert.subtitle}
                    </p>
                    
                    <p className="text-gray-400 transition-colors duration-500">
                      {cert.desc}
                    </p>
                  </div>
                </GlassCard>
              </div>
              );
            })}
          </div>
        </div>
      </section>
  );
};

export default CerificationsSection;