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
        >
          <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 z-10">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.des}</p>
            <div className="flex space-x-2 mb-4">
              {project.categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded"
                >
                  {category}
                </span>
              ))}
            </div>
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

