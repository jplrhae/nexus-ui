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
import { NexusMockContext } from "../mocks/MockDatabase";
import { Add } from "@mui/icons-material";
import { LinearProgress } from "@mui/material";

interface IProfileInfoProps {
  user: IUser;
  isOwnProfile: boolean;
  onNewSkillSubmit: (skillTitle: string) => ISkill;
}

export default function ProfileInfo(props: IProfileInfoProps) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [userSkills, setUserSkills] = useState<ISkill[]>([]);
  const [allSkillTitles, setAllSkillTitles] = useState<string[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const { mockDatabaseService } = useContext(NexusMockContext);
  const [openAddSkillModal, setOpenAddSkillModal] = useState(false);
  const { mockDatabase } = useContext(NexusMockContext);

  useEffect(() => {
    console.log("In useffect");

    const userSkills = mockDatabaseService.findUserSkillsByUserId(
      props.user.id
    );
    const skills = userSkills.map((userSkill) =>
      mockDatabaseService.findSkillById(userSkill.skillId)
    );
    const allSkillsTitleList: string[] = [];
    const allSkills = mockDatabaseService.findAllSkills();
    allSkills.forEach((skill) => {
      if (!userSkills.find((userSkill) => userSkill.skillId === skill.id)) {
        allSkillsTitleList.push(skill.title);
      }
    });

    setUserSkills(skills);
    setAllSkillTitles(allSkillsTitleList);
    setHasLoaded(true);
  }, [props.user, mockDatabase]);

  const handleSkillSubmit = () => {
    setHasLoaded(false);
    console.log("Clicked skill submit, value is", selectedSkill);
    const skill = props.onNewSkillSubmit(selectedSkill!);
    userSkills.push(skill);
    setUserSkills([...userSkills]);
    setHasLoaded(true);
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
              color: "white",
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
        <div className="flex flex-col gap-4">
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
          {props.isOwnProfile && (
            <Button
              startIcon={<Add />}
              variant="contained"
              onClick={() => setOpenAddSkillModal(true)}
            >
              Add skill
            </Button>
          )}
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
            style={{ width: 500, height: 200 }}
            freeSolo
            onChange={(_e, v) => {
              setSelectedSkill(v);
            }}
            options={allSkillTitles}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Skill" />}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddSkillModal(false)}>Cancel</Button>
          <Button onClick={handleSkillSubmit} disabled={!selectedSkill}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
