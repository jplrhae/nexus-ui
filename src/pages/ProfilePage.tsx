import { useContext, useEffect, useState } from "react";
import FollowingView from "../components/FollowingView";
import ProfileInfo from "../components/ProfileInfo";
import ProjectsView from "../components/ProjectsView";
import { IUser } from "../interfaces/IUser";
import { useParams } from "react-router-dom";
import { NexusMockContext } from "../mocks/MockDatabase";
import { LinearProgress } from "@mui/material";
import { ISkill } from "../interfaces/ISkills";

interface IProfileInfoProps {
  onNewSkillSubmit: (skillTitle: string) => ISkill;
}

function ProfilePage(props: IProfileInfoProps) {
  const { id } = useParams();
  const { mockDatabaseService, loggedUser } = useContext(NexusMockContext);
  const [user, setUser] = useState<IUser>({
    id: 0,
    username: "",
    email: "",
    about: "",
    birthDate: new Date(),
    name: "",
  });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isOwnProfile, setIsOwnProfile] = useState<boolean>(false);
  const [isExistingProfile, setIsExistingProfile] = useState<boolean>(false);

  useEffect(() => {
    setIsExistingProfile(false);
    setIsOwnProfile(false);
    if (id) {
      const user = mockDatabaseService.findUserById(parseInt(id));
      console.log("Found user: ", user);

      if (user) {
        setUser(user);
        if (loggedUser && user.id === loggedUser.id) {
          setIsOwnProfile(true);
        }
        setIsExistingProfile(true);
      } else {
        setIsExistingProfile(false);
      }
    } else {
      setIsExistingProfile(false);
    }

    setHasLoaded(true);
  }, [id, loggedUser]);

  const renderProfileView = (): JSX.Element => {
    if (!isExistingProfile) {
      return (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">404</h1>
          <h2 className="text-xl font-semibold">User not found</h2>
        </div>
      );
    } else {
      return (
        <>
          <ProfileInfo
            user={user}
            isOwnProfile={isOwnProfile}
            onNewSkillSubmit={props.onNewSkillSubmit}
          />
          <div className="flex flex-col gap-4">
            <ProjectsView user={user} isOwnProfile={isOwnProfile} />
            <FollowingView user={user} isOwnProfile={isOwnProfile} />
          </div>
        </>
      );
    }
  };

  return (
    <div
      className="flex flex-row justify-evenly mt-6 w-screen"
      style={{ height: "calc(100vh - 64px - 1.5rem" }}
    >
      {!hasLoaded ? <LinearProgress /> : renderProfileView()}
    </div>
  );
}

export default ProfilePage;
