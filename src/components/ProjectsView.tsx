import { IProject } from "../interfaces/IProject";
import ProjectCard from "./ProjectCard";
import Button from "@mui/material/Button";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import "../styles/ProjectView.css";
import { useNavigate } from "react-router-dom";
import { IUser } from "../interfaces/IUser";
import { useContext, useEffect, useState } from "react";
import { NexusMockContext } from "../mocks/MockDatabase";
import { LinearProgress } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface IProjectsViewProps {
  user: IUser;
  isOwnProfile: boolean;
}

export default function ProjectsView(props: IProjectsViewProps) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [projects, setProjects] = useState<IProject[]>([]);
  const { mockDatabaseService } = useContext(NexusMockContext);
  const navigate = useNavigate();

  useEffect(() => {
    const projects = mockDatabaseService.findProjectsByUserId(props.user.id);
    setProjects(projects);
    setHasLoaded(true);
  }, [props.user]);

  return (
    <div className="flex flex-col gap-4">
      {!hasLoaded ? (
        <LinearProgress />
      ) : (
        <>
          <div className="text-2xl font-bold">
            <DeveloperBoardIcon /> Projects ({projects.length}) -{" "}
            <VisibilityIcon />{" "}
            {projects.filter((project) => project.isPublic).length} |{" "}
            <VisibilityOffIcon />{" "}
            {projects.filter((project) => !project.isPublic).length}
          </div>
          <div className="flex flex-wrap gap-2">
            {projects.map((project) => {
              if (props.isOwnProfile) {
                return <ProjectCard key={project.id} project={project} />;
              } else {
                return (
                  project.isPublic && (
                    <ProjectCard key={project.id} project={project} />
                  )
                );
              }
            })}
          </div>
          {props.isOwnProfile && (
            <Button
              variant="contained"
              className="self-end"
              onClick={() => navigate(`/${props.user.id}/project/new`)}
            >
              New project
            </Button>
          )}
        </>
      )}
    </div>
  );
}
