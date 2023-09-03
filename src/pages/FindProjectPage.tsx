import { TextField, List, ListItem, ListItemText } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { NexusMockContext } from "../mocks/MockDatabase";
import { IProject } from "../interfaces/IProject";
import "../styles/FindProjectPage.css";

export default function FindProjectPage() {
  console.log("Hello");

  const { mockDatabaseService } = useContext(NexusMockContext);
  const projects = mockDatabaseService.findAllProjects();
  const [queryText, setQueryText] = React.useState<string>("");
  const [foundProjects, setFoundProjects] = React.useState<IProject[]>([]);

  useEffect(() => {
    if (queryText) {
      const query = queryText.toLowerCase();
      const matchingProjects = projects.filter(
        (project) =>
          project.name.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.about.toLowerCase().includes(query)
      );

      setFoundProjects(matchingProjects);
    } else {
      setFoundProjects([]);
    }
  }, [queryText]);

  return (
    <div className="flex flex-row w-screen justify-center">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
          <TextField
            id="outlined-basic"
            label="Search for a project"
            variant="outlined"
            value={queryText}
            onChange={(e) => {
              console.log(e.target.value);
              console.log(!!e.target.value);

              setQueryText(e.target.value);
            }}
            style={{ width: 500 }}
          />
        </div>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          className="min-w-fit"
        >
          {foundProjects.map((project) => {
            return (
              <ListItem className="find-project-card border-b-2 rounded mb-2 shadow-md">
                <ListItemText
                  primaryTypographyProps={{
                    fontWeight: "bold",
                  }}
                  primary={project.name}
                  secondary={
                    <div className="flex flex-col">
                      <div>{project.about || ""}</div>
                      <div>by a User</div>
                    </div>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}
