import FollowingView from "../components/FollowingView";
import ProfileInfo from "../components/ProfileInfo";
import ProjectsView from "../components/ProjectsView";
import { rawProjectItems } from "../interfaces/IProject";
import { IUser, rawUserItems1, rawUserItems2 } from "../interfaces/IUser";

interface IProfilePageProps {
  user: IUser;
}

function ProfilePage(props: IProfilePageProps) {
  return (
    <div
      className="flex flex-row justify-center mt-6 mx-4"
      style={{ height: "calc(100vh - 64px - 1.5rem" }}
    >
      <div className="flex flex-row justify-center gap-4">
        <div>
          <ProfileInfo user={props.user} />
        </div>
        <div>
          <ProjectsView projects={rawProjectItems} />
          <FollowingView following={rawUserItems1} followed={rawUserItems2} />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
