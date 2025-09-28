import React from 'react';
import { projects } from '@/data/portfolioData';
import GradientText from '../GradientText';
import ProjectCard from '../ProjectCard';

const ProjectsSection = () => {
  return (
    <section className="py-24 relative z-10" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            <GradientText>Projects</GradientText>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Projects that define my passion for cybersecurity and information technology, connecting the dots between stability and security
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;