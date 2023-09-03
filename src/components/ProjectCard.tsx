import { IProject } from "../interfaces/IProject";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../styles/ProjectView.css";

interface IProjectCardProps {
  project: IProject;
}

export default function ProjectCard(props: IProjectCardProps) {
  return (
    <div className="project-card flex flex-col p-2 bg-primary basis-0 grow">
      <div className="font-bold">{props.project.name}</div>
      <div className="text-sm overflow-hidden">{props.project.description}</div>
      <div>
        {props.project.isPublic ? (
          <>
            <VisibilityIcon /> <span className="text-xs">Public</span>
          </>
        ) : (
          <>
            <VisibilityOffIcon /> <span className="text-xs">Private</span>
          </>
        )}
      </div>
    </div>
  );
}
