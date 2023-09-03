import { useContext, useEffect, useState } from "react";
import { ISkill } from "../interfaces/ISkills";
import { IUser } from "../interfaces/IUser";
import {
  Autocomplete,
  Avatar,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { MockDatabaseContext } from "../mocks/MockDatabase";
import { Add } from "@mui/icons-material";
import { LinearProgress } from "@mui/material";

interface IProfileInfoProps {
  user: IUser;
}

export default function ProfileInfo(props: IProfileInfoProps) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [userSkills, setUserSkills] = useState<ISkill[]>([]);
  const [allSkillTitles, setAllSkillTitles] = useState<string[]>([]);
  const { mockDatabaseService } = useContext(MockDatabaseContext);
  const [openAddSkillModal, setOpenAddSkillModal] = useState(false);

  useEffect(() => {
    const userSkills = mockDatabaseService.findUserSkillsByUserId(
      props.user.id
    );
    const skills = userSkills.map((userSkill) =>
      mockDatabaseService.findSkillById(userSkill.skillId)
    );
    const allSkillsTitleList: string[] = [];
    const allSkills = mockDatabaseService.findallSkills();
    allSkills.forEach((skill) => {
      allSkillsTitleList.push(skill.title);
    });

    setUserSkills(skills);
    setAllSkillTitles(allSkillsTitleList);
    setHasLoaded(true);
  }, [props.user]);

  const handleSkillSubmit = () => {
    console.log("Clicked skill submit");
  };

  return (
    <>
      <div className="flex flex-col grow-0 shrink-0 basis-1/3">
        <div className="flex flex-col">
          <Avatar
            sx={{
              height: 190,
              width: 190,
              backgroundColor: "primary.main",
              color: "secondary.main",
              fontSize: "50px",
            }}
          >
            {props.user.name.split(" ").map((name) => name[0])}
          </Avatar>
          <div className="mt-2">
            <span className="font-bold text-lg">{props.user.name}</span> (
            {props.user.username})
          </div>
        </div>
        <div className="mt-2">{props.user.about}</div>
        <div className="flex flex-col gap-2">
          {!hasLoaded ? (
            <LinearProgress />
          ) : (
            <>
              <div className="text-2xl font-bold mt-2">Skills</div>
              <div className="flex flex-row flex-wrap gap-2">
                {userSkills.map((skill) => (
                  <>
                    <Chip
                      className=""
                      key={skill.id}
                      label={skill.title}
                    ></Chip>
                  </>
                ))}
              </div>
            </>
          )}
          <Button
            className="self-end"
            startIcon={<Add />}
            variant="contained"
            onClick={() => setOpenAddSkillModal(true)}
          >
            Add skill
          </Button>
        </div>
      </div>
      <Dialog
        open={openAddSkillModal}
        onClose={() => setOpenAddSkillModal(false)}
      >
        <DialogTitle>Inform a skill</DialogTitle>
        <DialogContent>
          <Autocomplete
            className="mt-4"
            disablePortal
            fullWidth
            freeSolo
            id="combo-box-demo"
            options={allSkillTitles}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Skill" />}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddSkillModal(false)}>Cancel</Button>
          <Button onClick={handleSkillSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
