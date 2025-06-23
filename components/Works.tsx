'use client';

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectsProps, Project } from '@/utils/Interface';
import { AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

async function getProjects(): Promise<Project[]> {
  const query = `
    *[_type == 'project'] {
      title,
      _id,
      description,
      slug,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <div className="flex flex-col py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="text-left mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-light text-white"
        >
          Selected Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm sm:text-base text-neutral-400 mt-2"
        >
          This is what I'm capable of...
        </motion.p>
      </div>

      <div className="flex flex-col divide-y divide-neutral-700">
        <AnimatePresence>
          {projects.map((project) => (
            <motion.div
              key={project._id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              className="flex items-center justify-between py-6 group"
            >
              <Link
                href={`/projects/${project.slug.current}`}
                className="flex-1"
              >
                <div className="text-left">
                  <h2 className="text-xl sm:text-2xl font-medium text-white group-hover:text-[#5588f7] transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-400 mt-1 max-w-2xl line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="ml-4 text-[#5588f7] text-2xl"
              >
                <Link href={`/projects/${project.slug.current}`}>
                  <FiArrowRight />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
