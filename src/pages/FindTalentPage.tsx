import React, { useContext, useEffect } from "react";
import {
  Autocomplete,
  Avatar,
  Checkbox,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";
import { NexusMockContext } from "../mocks/MockDatabase";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { IUser } from "../interfaces/IUser";
import { ISkill } from "../interfaces/ISkills";
import "../styles/TalentPage.css";

export default function FindTalentPage() {
  const { mockDatabaseService } = useContext(NexusMockContext);
  const skills = mockDatabaseService.findAllSkills();

  const [talents, setTalents] = React.useState<IUser[]>([]);
  const [selectedSkills, setSelectedSkills] = React.useState<ISkill[]>([]);

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  useEffect(() => {
    let talents: IUser[] = [];

    selectedSkills.forEach((skill) => {
      const users = mockDatabaseService.findUsersBySkillId(skill.id);
      talents = talents.concat(users);
    });

    console.log("Talents: ", talents);
    setTalents(talents);
  }, [selectedSkills]);

  return (
    <div className="flex flex-row w-screen justify-center">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={skills}
            onChange={(_e, v) => setSelectedSkills(v)}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
              <TextField {...params} label="Search by talent tags" />
            )}
          />
        </div>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          className="min-w-fit"
        >
          {talents.map((user) => {
            return (
              <ListItem
                className="talent-card border-b-2 rounded mb-2 shadow-md"
                onClick={() =>
                  window.open(`/profile/${user.id}`, "_blank")?.focus()
                }
              >
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      backgroundColor: "primary.main",
                      color: "white",
                    }}
                  >
                    {user.name.split(" ").map((word) => word[0])}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={user.about || ""}
                />
                <div className="flex flex-row flex-wrap gap-2">
                  {mockDatabaseService
                    .findSkillsByUserId(user.id)
                    .map((skill) => (
                      <>
                        <Chip
                          className=""
                          key={skill.id}
                          label={skill.title}
                        ></Chip>
                      </>
                    ))}
                </div>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}
