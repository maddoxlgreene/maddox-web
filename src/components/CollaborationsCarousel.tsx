import React from 'react';
import Image from 'next/image';
import { collaborations } from '@/data/portfolioData';
import GlassCard from './GlassCard';

const CollaborationsCarousel = () => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      <div className="flex w-max animate-infinite-scroll group-hover:pause-animation">
        
        {[...collaborations, ...collaborations].map((collab, index) => (
          <GlassCard
            key={`${collab.name}-${index}`}
            className="flex-shrink-0 w-72 h-32 mx-4 p-6 flex items-center justify-center"
            hover={false}
          >
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 flex items-center justify-center bg-gray-800/50 rounded">
                <Image
                  src={collab.imgSrc}
                  alt={`${collab.name} logo`}
                  width={48}
                  height={48}
                  className="max-w-full max-h-full object-contain opacity-80"
                  loading="eager"
                />
              </div>
              <span className="text-xl font-semibold text-white">{collab.name}</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default CollaborationsCarousel;