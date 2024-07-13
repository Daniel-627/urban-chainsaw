// app/Projects.tsx
import React from 'react';
import { projects } from '@/data';

const Projects = () => {
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative border rounded-lg overflow-hidden shadow-lg h-96"
          style={{ backgroundImage: `url(${project.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.des}</p>
            <a
              href={project.link}
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
