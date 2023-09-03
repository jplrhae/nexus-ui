import { useContext, useEffect, useState } from "react";
import { ISkill } from "../interfaces/ISkills";
import { IUser } from "../interfaces/IUser";
import { Avatar, Button, Chip, LinearProgress } from "@mui/material";
import { MockDatabaseContext } from "../mocks/MockDatabase";

interface IProfileInfoProps {
  user: IUser;
}

export default function ProfileInfo(props: IProfileInfoProps) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [userSkills, setUserSkills] = useState<ISkill[]>([]);
  const { mockDatabaseService } = useContext(MockDatabaseContext);

  useEffect(() => {
    const userSkills = mockDatabaseService.findUserSkillsByUserId(
      props.user.id
    );
    const skills = userSkills.map((userSkill) =>
      mockDatabaseService.findSkillById(userSkill.skillId)
    );

    setUserSkills(skills);
    setHasLoaded(true);
  }, [props.user]);

  return (
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
                  <Chip className="" key={skill.id} label={skill.title}></Chip>
                </>
              ))}
            </div>
          </>
        )}
        <Button className="self-end" variant="contained">
          Add skill
        </Button>
      </div>
    </div>
  );
}
