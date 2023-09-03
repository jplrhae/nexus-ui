import { Grid } from "@mui/material";
import { IProject } from "../interfaces/IProject";
import ProjectCard from "./ProjectCard";

interface IProjectsViewProps {
  projects: IProject[];
}

export default function ProjectsView(props: IProjectsViewProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-bold text-lg">Projects</div>
      <div className="flex flex-wrap gap-2">
        {props.projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
