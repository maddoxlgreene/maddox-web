"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Shield, Mail, Github, Linkedin, Coffee,
  ArrowRight, Briefcase, GraduationCap, Server, Lock, Origami
} from 'lucide-react';

interface Sphere {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [carouselOffset, setCarouselOffset] = useState(0);
  const spheresRef = useRef<Sphere[]>([]);
  const animationRef = useRef<number | null>(null);

  const collaborations = [
    { name: 'AuraSide', imgSrc: '/Auraside.jpg' },
    { name: 'Hone', imgSrc: '/Hone.jpg' },
    { name: 'Ghast', imgSrc: '/Ghast.jpg' },
    { name: 'DuelSet', imgSrc: '/duelset_logo.jpg' },
    { name: 'RegeditMC', imgSrc: '/RegeditMC.jpg' },
    { name: 'TJA', imgSrc: '/TJA.jpg' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    spheresRef.current = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 100 + 50,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: i % 2 === 0 ? 'from-blue-500/20 to-cyan-500/20' : 'from-pink-500/20 to-purple-500/20'
    }));
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    const animate = () => {
      setCarouselOffset(prev => {
        const newOffset = prev - 1; // Good speed for all devices
        // Reset when we've scrolled through one set of items
        const itemWidth = 320; // 288px card + 32px margin
        const totalWidth = itemWidth * collaborations.length;
        if (newOffset <= -totalWidth) {
          return 0;
        }
        return newOffset;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [collaborations.length]);

  const journey = [
    { period: "Present", title: "Customer Experience Manager", company: "Leading CX Operations", description: "Spearheading customer experience initiatives, managing cross-functional teams, and implementing data-driven improvements.", type: "work", technologies: ["Team Leadership", "Data Analytics", "Process Optimization"] },
    { period: "2024 - Present", title: "Bachelor's in Information System Security", company: "University Studies", description: "Pursuing specialized education in cybersecurity, focusing on advanced threat analysis, digital forensics, and security architecture.", type: "education", technologies: ["Digital Forensics", "Cryptography", "Incident Response"] },
    { period: "2023 - Present", title: "Penetration Tester", company: "Cybersecurity Consulting", description: "Conducting security assessments for startup enterprises, identifying critical vulnerabilities, and providing actionable remediation.", type: "work", technologies: ["OWASP", "Burp Suite", "Metasploit", "Nessus"] },
    { period: "2022 - Present", title: "System Administrator", company: "Enterprise IT Operations", description: "Managing hybrid cloud infrastructure for 10,000+ users, implementing automation, and maintaining 99.9% uptime.", type: "work", technologies: ["AWS", "Docker", "Kubernetes", "Ansible"] },
  ];
  
  const certifications = [
    { title: "CS50X Cyber Security", subtitle: "Professional Certificate", desc: "Harvard University's Cybersecurity Course", color: "blue", icon: Origami },
    { title: "Google Cybersecurity Certificate", subtitle: "Professional Certificate", desc: "Foundational Cybersecurity Skills and Hands-on Labs", color: "blue", icon: Shield },
    { title: "Google IT Support Certificate", subtitle: "Professional Certificate", desc: "Technical Troubleshooting and Customer Support", color: "pink", icon: Server },
    { title: "In Progress", subtitle: "Security+", desc: "System Security Architecture and Design", color: "gray", icon: Lock }
  ];

  const FloatingSpheres = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {spheresRef.current.map((sphere) => (
        <div
          key={sphere.id}
          className={`absolute rounded-full bg-gradient-to-br ${sphere.color} blur-3xl opacity-20 animate-float`}
          style={{
            width: `${sphere.size}px`,
            height: `${sphere.size}px`,
            left: `${sphere.x + Math.sin(Date.now() * 0.0005 + sphere.id) * 50}px`,
            top: `${sphere.y + Math.cos(Date.now() * 0.0005 + sphere.id) * 30 - scrollY * 0.05}px`,
            animationDelay: `${sphere.id * 0.8}s`,
            animationDuration: `${15 + sphere.id * 3}s`,
          }}
        />
      ))}
    </div>
  );

  const EnhancedBackground = () => (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/10 to-purple-950/10" />
      
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
    </div>
  );

  const GradientText: React.FC<GradientTextProps> = ({ children, className = "" }) => (
    <span className={`bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x ${className}`}>
      {children}
    </span>
  );

  const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hover = true }) => (
    <div className={`
      bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl
      ${hover ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2' : ''}
      transition-all duration-500 ease-out
      ${className}
    `}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans relative overflow-x-hidden">
      <EnhancedBackground />
      <FloatingSpheres />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-2xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <GradientText>Maddox Greene</GradientText>
          </h1>
          <div className="hidden md:flex space-x-8">
            {["About", "Journey", "Work", "Certifications", "Contact"].map((item) => (
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

      {/* Hero */}
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

      {/* Journey */}
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

      {/* Work */}
      <section className="py-24 relative z-10" id="work">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-gray-400">Companies and organizations I&apos;ve had the privilege to work with</p>
          </div>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex select-none"
              style={{
                transform: `translateX(${carouselOffset}px)`,
              }}
            >
              {/* Double the items for smooth infinite scroll */}
              {[...collaborations, ...collaborations].map((collab, index) => (
                <GlassCard 
                  key={`${collab.name}-${index}`} 
                  className="flex-shrink-0 w-72 h-32 mx-4 p-6 flex items-center justify-center"
                  hover={false}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 flex items-center justify-center bg-gray-800/50 rounded">
                      <img 
                        src={collab.imgSrc} 
                        alt={`${collab.name} logo`} 
                        width="48"
                        height="48"
                        className="max-w-full max-h-full object-contain opacity-80"
                        loading="eager"
                        onError={(e) => {
                          console.log(`Failed to load image: ${collab.imgSrc}`);
                          e.currentTarget.style.display = 'none';
                        }}
                        onLoad={() => {
                          console.log(`Successfully loaded: ${collab.imgSrc}`);
                        }}
                      />
                    </div>
                    <span className="text-xl font-semibold text-white">{collab.name}</span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-24 relative z-10" id="certifications">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">
              <GradientText>Certifications & Credentials</GradientText>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional certifications that validate my expertise and commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {certifications.map((cert) => {
              const gradientClass = cert.color === 'blue' 
                ? 'from-blue-500 to-cyan-500' 
                : cert.color === 'pink' 
                ? 'from-pink-500 to-purple-500' 
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

      {/* Contact */}
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

      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl relative z-10">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="text-center mb-8">
            <p className="text-gray-400 mb-6">
              © {new Date().getFullYear()} Maddox Greene. All Rights Reserved.
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { href: "https://www.linkedin.com/in/maddox-g-a759aa338", icon: Linkedin, color: "hover:text-blue-400" },
                { href: "https://github.com/maddoxlgreene", icon: Github, color: "hover:text-white" },
                { href: "mailto:business@maddoxgreene.tech", icon: Mail, color: "hover:text-pink-400" },
                { href: "https://buymeacoffee.com/realconflexed", icon: Coffee, color: "hover:text-yellow-400" }
              ].map(({ href, icon: Icon, color }) => (
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

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .pause-animation {
          animation-play-state: paused;
        }
        
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
