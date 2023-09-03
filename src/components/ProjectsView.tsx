import { IProject } from "../interfaces/IProject";
import ProjectCard from "./ProjectCard";
import Button from "@mui/material/Button";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import "../styles/ProjectView.css";

interface IProjectsViewProps {
  projects: IProject[];
}

export default function ProjectsView(props: IProjectsViewProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-bold">
        <DeveloperBoardIcon /> Projects ({props.projects.length})
      </div>
      <div className="flex flex-wrap gap-2">
        {props.projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
      <Button variant="contained" className="self-end">
        New project
      </Button>
    </div>
  );
}
