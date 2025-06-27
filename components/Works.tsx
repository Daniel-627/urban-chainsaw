// app/projects/page.tsx
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { Project } from "@/utils/Interface";
import { FiArrowUpRight } from "react-icons/fi";

async function getProjects(): Promise<Project[]> {
  const query =`
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

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="text-left mb-10">
        <h1 className="text-3xl md:text-5xl font-thin text-white">Selected Work</h1>
        <p className="text-base text-neutral-400 mt-2">This is what I'm capable of...</p>
      </div>

      <div className="flex flex-col divide-y divide-neutral-700">
        {projects.map((project) => (
          <div
            key={project._id}
            className="flex items-center justify-between py-6 group"
          >
            <Link href={`/projects/${project.slug.current}`} className="flex-1">
              <div className="text-left">
                <h2 className="text-2xl font-extralight text-white group-hover:text-[#5588f7] transition-colors">
                  {project.title}
                </h2>
                <p className="text-base text-neutral-400 mt-1 max-w-2xl line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
            <div className="ml-4 text-[#5588f7] text-2xl group-hover:rotate-12 transition-transform duration-200">
              <Link href={`/projects/${project.slug.current}`}>
                <FiArrowUpRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
