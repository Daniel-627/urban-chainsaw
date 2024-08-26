export interface Project {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  link: string;
  categories?: string[]; // Added categories property
}

export interface ProjectsProps {
  projects: Project[];
}
