import { IProject } from "../interfaces/IProject";
import ProjectCard from "./ProjectCard";
import Button from "@mui/material/Button";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import "../styles/ProjectView.css";
import { IUser } from "../interfaces/IUser";
import { useContext, useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import { MockDatabaseContext } from "../mocks/MockDatabase";

interface IProjectsViewProps {
  user: IUser;
}

export default function ProjectsView(props: IProjectsViewProps) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [projects, setProjects] = useState<IProject[]>([]);
  const { mockDatabaseService } = useContext(MockDatabaseContext);

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
            <DeveloperBoardIcon /> Projects ({projects.length})
          </div>
          <div className="flex flex-wrap gap-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <Button variant="contained" className="self-end">
            New project
          </Button>
        </>
      )}
    </div>
  );
}
