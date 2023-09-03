import { useContext, useEffect, useState } from "react";
import FollowingView from "../components/FollowingView";
import ProfileInfo from "../components/ProfileInfo";
import ProjectsView from "../components/ProjectsView";
import { IUser, rawUser } from "../interfaces/IUser";
import { useParams } from "react-router-dom";
import { MockDatabaseContext } from "../mocks/MockDatabase";
import { LinearProgress } from "@mui/material";

function ProfilePage() {
  const { id } = useParams();
  const { mockDatabaseService } = useContext(MockDatabaseContext);
  const [user, setUser] = useState<IUser>({
    id: 0,
    username: "",
    email: "",
    about: "",
    birthDate: new Date(),
    name: "",
  });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (id) {
      const user = mockDatabaseService.findUserById(parseInt(id));
      console.log("Found user: ", user);

      if (user) {
        setUser(user);
      }
    } else {
      setUser(rawUser);
    }

    setHasLoaded(true);
  }, [id]);

  return (
    <div
      className="flex flex-row justify-center mt-6 mx-4"
      style={{ height: "calc(100vh - 64px - 1.5rem" }}
    >
      {!hasLoaded ? (
        <LinearProgress />
      ) : (
        <div className="flex flex-row justify-center gap-4">
          <ProfileInfo user={user} />
          <div>
            <ProjectsView user={user} />
            <FollowingView user={user} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
