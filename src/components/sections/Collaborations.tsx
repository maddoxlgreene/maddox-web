import React from 'react';
import CollaborationsCarousel from '../CollaborationsCarousel';

const CollaborationsSection = () => {
  return (
    <section className="py-24 relative z-10 group" id="work">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-gray-400">
            Companies and organizations I&apos;ve had the privilege to work with
          </p>
        </div>
        
        <CollaborationsCarousel />
        
      </div>
    </section>
  );
};

export default CollaborationsSection;