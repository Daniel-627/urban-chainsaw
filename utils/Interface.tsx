export interface Project {
  _id: string;
  title: string;
  description: string;
  slug: {current : string};
  mainImage: string;
  link: string;
  categories: { title: string }[]; // Added categories property
  body?: any[];
}

export interface ProjectsProps {
  projects: Project[];
}

export interface ProjectPageProps {
  params: {
    slug: string;
  };
}