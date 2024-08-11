import React from 'react';
import { projects } from '@/data';
import { Animate } from './Animate';

const Projects = () => {
  return (
    <div className="flex flex-col space-y-8 py-3">
      <div className='flex flex-col justify-center items-center'>
        <Animate>
          <h1 className='text-3xl text-[#ffffff] font-extralight'>Selected Work</h1>
        </Animate>
        <Animate>
          <p className='text-xs text-[#b0b0b0]'>This is what I'm capable of...</p>
        </Animate>
      </div>
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
                    <Animate>
                      <div
                        key={index}
                        className="text-[#b0b0b0] text-xs font-semibold space-x-2 border bg-black border-[#b0b0b0] bg-opacity-50 rounded-3xl p-2 "
                      >
                        {category}
                      </div>
                    </Animate>
                  ))}
                </div>
                <Animate>
                  <h3 className="text-xl font-semibold text-[#5588f7] mb-2">{project.title}</h3>
                </Animate>
                <Animate>
                 <p className="text-xl font-extralight text-[#b0b0b0] mb-2">{project.des}</p> 
                </Animate>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;

