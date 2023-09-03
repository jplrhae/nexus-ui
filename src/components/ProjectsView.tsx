import { IProject } from "../interfaces/IProject";
import ProjectCard from "./ProjectCard";
import Button from "@mui/material/Button";
import "../styles/ProjectView.css";
import { useNavigate } from "react-router-dom";

interface IProjectsViewProps {
  projects: IProject[];
}

export default function ProjectsView(props: IProjectsViewProps) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      <div className="font-bold text-lg">Projects</div>
      <div className="flex flex-wrap gap-2">
        {props.projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
      <Button
        variant="contained"
        className="self-end"
        onClick={() => navigate("/project/create")}
      >
        New project
      </Button>
    </div>
  );
}
