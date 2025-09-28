import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { journey } from '@/data/portfolioData'; // Import data
import GradientText from '../GradientText';
import GlassCard from '../GlassCard';

const JourneySection = () => {
  return (
   <section className="py-24 relative z-10" id="journey">
           <div className="max-w-5xl mx-auto px-8">
             <div className="text-center mb-20">
               <h2 className="text-5xl font-bold mb-4">
                 <GradientText>Career Journey</GradientText>
               </h2>
               <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                 A timeline of growth, learning, and professional development
               </p>
             </div>
             
             <div className="space-y-8">
               {journey.map((item, index) => (
                 <div className={`
                   group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] relative
                   ${item.type === 'education' 
                     ? 'hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]' 
                     : 'hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                   }
                   rounded-2xl
                 `} key={index}>
                   <GlassCard className="p-8 h-full">
                     <div className="relative z-10 flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                     <div className="flex-shrink-0">
                       <div className={`
                         w-16 h-16 rounded-2xl flex items-center justify-center relative
                         ${item.type === 'education' 
                           ? 'bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30' 
                           : 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30'
                         }
                         transition-all duration-500
                       `}>
                         {item.type === 'education' ? 
                           <GraduationCap className="w-8 h-8 text-pink-400 transition-colors duration-500" /> : 
                           <Briefcase className="w-8 h-8 text-blue-400 transition-colors duration-500" />
                         }
                       </div>
                     </div>
                     
                     <div className="flex-1 space-y-4">
                       <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                         <div>
                           <p className="text-sm font-medium text-blue-400 mb-2 transition-colors duration-500">{item.period}</p>
                           <h3 className="text-2xl font-bold text-white mb-1 transition-colors duration-500">{item.title}</h3>
                           <p className="text-pink-400 font-semibold transition-colors duration-500">{item.company}</p>
                         </div>
                       </div>
                       
                       <p className="text-gray-300 leading-relaxed text-lg transition-colors duration-500">{item.description}</p>
                       
                       <div className="flex flex-wrap gap-2">
                         {item.technologies.map((tech) => (
                           <span 
                             key={tech} 
                             className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                           >
                             {tech}
                           </span>
                         ))}
                       </div>
                     </div>
                   </div>
                 </GlassCard>
               </div>
               ))}
             </div>
           </div>
         </section>
  );
};

export default JourneySection;