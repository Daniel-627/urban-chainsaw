'use client'

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectsProps, Project } from '@/utils/Interface'; // Import the interfaces
import { urlFor } from '@/sanity/lib/image'; // Import the urlFor function

async function getProjects(): Promise<Project[]> {
  const query = 
  `
    *[_type == 'project'] {
      title,
      _id,
      description,
      slug,
      mainImage,
      categories[]->{
        title
      }
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <div className="flex flex-col space-y-16 py-8">
      <div className="flex flex-col justify-center items-center mb-16">
        <h1 className="text-3xl text-[#ffffff] font-extralight">Selected Work</h1>
        <p className="text-xs text-[#b0b0b0]">This is what I'm capable of...</p>
      </div>

      <div className="space-y-16">
        {projects.map((project) => (
          <motion.div
            key={project._id}
            className="relative rounded-3xl overflow-hidden h-[550px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={projectVariants}
          >
            <Link href={`/projects/${project.slug.current}`}>
              <div className="relative h-full w-full">
                {project.mainImage ? (
                  <img
                    src={urlFor(project.mainImage).url()}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-800">
                    <span className="text-white">No Image Available</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 p-6 text-left z-10 bg-neutral-950/70 w-full">
                  <h3 className="text-xl font-semibold text-[#5588f7] mb-2">{project.title}</h3>
                  <p className="text-lg font-extralight text-[#b0b0b0] mb-2">{project.description}</p>
                  {project.categories && (
                    <div className="flex flex-wrap space-x-2 mt-2">
                      {project.categories.map((category, index) => (
                        <span key={index} className="text-xs font-light text-[#ffffff] bg-[#5588f7] px-2 py-1 rounded-md">
                          {category.title}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
