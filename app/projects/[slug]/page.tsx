// app/projects/[slug]/page.tsx
import React from 'react';
import { Project, ProjectPageProps } from '@/utils/Interface';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';

// Customize PortableText rendering
const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-8">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || 'Project Image'}
          width={800}
          height={450}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value.href || '#'} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
        {children}
      </a>
    ),
  },
};

async function getProject(slug: string) {
  const query = `
    *[_type == 'project' && slug.current == $slug][0] {
      title,
      description,
      mainImage,
      body,
      projectUrl
    }
  `;
  const project: Project | null = await client.fetch(query, { slug });
  return project;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.slug);

  if (!project) notFound();

  return (
    <div className="w-full px-4 sm:px-6 py-10 pt-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-2 md:mb-0">{project.title}</h1>
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline text-base sm:text-lg"
            >
              Visit Website
            </a>
          )}
        </div>

        {project.mainImage && (
          <img
            src={urlFor(project.mainImage).url()}
            alt={project.title}
            className="object-cover w-full h-[400px] sm:h-[500px] mb-6 rounded-lg shadow-lg"
          />
        )}

        <div className="prose prose-lg prose-invert text-gray-400 max-w-none">
          {project.body ? (
            <PortableText value={project.body} components={portableTextComponents} />
          ) : (
            <p>No additional content available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export const revalidate = 60;
