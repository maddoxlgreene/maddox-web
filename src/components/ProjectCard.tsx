import React from 'react';
import Image from 'next/image';
import GlassCard from './GlassCard';

interface Project {
  name: string;
  desc: string;
  link: string;
  imgSrc: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
	return (
		<a href={project.link} target="_blank" rel="noopener noreferrer" className="...">
			<GlassCard className="p-8 text-left h-full">
				<div className="m-5 flex flex-row items-center">
					<Image 
						alt='' 
						src={project.imgSrc} 
						width={512} 
						height={512} 
						className="w-20 h-20 rounded-2xl bg-gradient-to-br border border-current/30 transition-all duration-500 flex-shrink-0"
					/>

					<div className="flex flex-col ml-4">
						<h3 className="text-xl font-bold text-white transition-colors duration-500">
							{project.name}
						</h3>
						<p className="text-sm mt-1">
							{project.desc}
						</p>
					</div>
				</div>
			</GlassCard>
		</a>
	);
};

export default ProjectCard;