import { IProject } from "../interfaces/IProject";

interface IProjectCardProps {
  project: IProject;
}

export default function ProjectCard(props: IProjectCardProps) {
  return (
    <div
      className="flex flex-col p-2 bg-primary"
      style={{ flexBasis: "calc(33.33% - 10px)", marginBottom: "10px" }}
    >
      <div className="text-lg font-bold">{props.project.name}</div>
      <div className="text-sm">{props.project.description}</div>
    </div>
  );
}
