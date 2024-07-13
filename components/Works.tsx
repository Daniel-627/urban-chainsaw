// app/Projects.tsx
import React from 'react';
import { projects } from '@/data';

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <div key={project.id} className="border rounded-lg overflow-hidden shadow-lg p-4">
          <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.des}</p>
            <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
