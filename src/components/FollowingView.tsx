import { AvatarGroup, Avatar, Tooltip, Button } from "@mui/material";
import { IUser } from "../interfaces/IUser";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";

interface IFollowingViewProps {
  following: IUser[];
  followed: IUser[];
}

export default function FollowingView(props: IFollowingViewProps) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-bold">
        <GroupIcon /> Friends
      </div>
      <div className="flex flex-row mt-4 flex-wrap gap-4">
        <div className="flex flex-col">
          <div>
            Following <PersonIcon />:{props.following.length}
          </div>
          <AvatarGroup max={10} className="mt-2">
            {props.following.map((user) => {
              return (
                <Tooltip key={user.id} title={user.name}>
                  <Avatar>
                    {user.name.split(" ").map((name) => {
                      return name[0];
                    })}
                  </Avatar>
                </Tooltip>
              );
            })}
          </AvatarGroup>
        </div>
        <div className="flex flex-col">
          <div>
            Followers <PersonIcon />:{props.followed.length}
          </div>
          <AvatarGroup max={10} className="mt-2">
            {props.followed.map((user) => {
              return (
                <Tooltip title={user.name}>
                  <Avatar>
                    {user.name.split(" ").map((name) => {
                      return name[0];
                    })}
                  </Avatar>
                </Tooltip>
              );
            })}
          </AvatarGroup>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <Button variant="contained">Add friend</Button>
      </div>
    </div>
  );
}
