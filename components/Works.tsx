import React from 'react';
import { projects } from '@/data';

const Projects = () => {
  return (
    <div className="space-y-8 pb-3">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative rounded-3xl overflow-hidden h-[550px] px-6"
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div>

              <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover z-0" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 z-10">
                <div className="flex flex-row space-x-2 mb-4">
                  {project.categories.map((category, index) => (
                    <span
                      key={index}
                      className="text-slate-200 text-xs font-semibold space-x-2 border border-slate-400 rounded-3xl p-2 "
                    >
                      {category}
                    </span>
                  ))}
                </div>
                  <h3 className="text-xl font-semibold text-slate-50 mb-2">{project.title}</h3>
                  <p className="text-xl font-extralight text-slate-200 mb-2">{project.des}</p> 
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;

