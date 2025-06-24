'use client';

import React, { useEffect, useRef, useState } from "react";
import { client } from "@/sanity/lib/client";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { Project } from '@/utils/Interface';
import { FiArrowUpRight } from "react-icons/fi";

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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col py-10 px-4 sm:px-6 md:px-10 lg:px-20"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="text-left mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin text-white">
          Selected Work
        </h1>
        <p className="text-sm sm:text-base md:text-base font-thin text-neutral-400 mt-2">
          This is what I'm capable of...
        </p>
      </motion.div>

      <div className="flex flex-col divide-y divide-neutral-700">
        {projects.map((project) => (
          <motion.div
            key={project._id}
            variants={itemVariants}
            className="flex items-center justify-between py-6 group"
          >
            <Link
              href={`/projects/${project.slug.current}`}
              className="flex-1"
            >
              <div className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extralight text-white group-hover:text-[#5588f7] transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base md:text-base font-thin text-neutral-400 mt-1 max-w-2xl line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>

            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: -45 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="ml-4 text-[#5588f7] text-2xl"
            >
              <Link href={`/projects/${project.slug.current}`}>
                <FiArrowUpRight />
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
