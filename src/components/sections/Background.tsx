"use client";
import React, { useState, useEffect, useRef } from 'react';

interface Sphere {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const Background = () => {
  const [scrollY, setScrollY] = useState(0);
  const spheresRef = useRef<Sphere[]>([]);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <>
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
    </>
  );
};

export default Background;