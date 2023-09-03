import ProfileInfo from "../components/ProfileInfo";
import ProjectsView from "../components/ProjectsView";
import { rawProjectItems } from "../interfaces/IProject";
import { IUser } from "../interfaces/IUser";

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
        <div className="basis-2/3">
          <ProjectsView projects={rawProjectItems} />

          <div className="flex flex-row basis-1/3 "></div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
