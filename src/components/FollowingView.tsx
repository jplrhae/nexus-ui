import { AvatarGroup, Avatar, Tooltip, Button } from "@mui/material";
import { IUser } from "../interfaces/IUser";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import { useState, useContext, useEffect } from "react";
import { MockDatabaseContext } from "../mocks/MockDatabase";
import { useNavigate } from "react-router-dom";
import { LinearProgress } from "@mui/material";

interface IFollowingViewProps {
  user: IUser;
}

export default function FollowingView(props: IFollowingViewProps) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const { mockDatabaseService } = useContext(MockDatabaseContext);
  const [following, setFollowing] = useState<IUser[]>([]);
  const [followed, setFollowed] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userFollowingsRelations =
      mockDatabaseService.findUserFollowingsByUserId(props.user.id);
    const userFollowerRelations = mockDatabaseService.findUserFollowersByUserId(
      props.user.id
    );
    const userFollowings: IUser[] = [];
    for (const relation of userFollowingsRelations) {
      userFollowings.push(
        mockDatabaseService.findUserById(relation.followedUserId)
      );
    }
    const userFollowers: IUser[] = [];
    for (const relation of userFollowerRelations) {
      userFollowers.push(
        mockDatabaseService.findUserById(relation.followingUserId)
      );
    }

    setFollowing(userFollowings);
    setFollowed(userFollowers);
    setHasLoaded(true);
  }, [props.user]);

  return (
    <div className="flex flex-col">
      {!hasLoaded ? (
        <LinearProgress />
      ) : (
        <>
          <div className="text-2xl font-bold">
            <GroupIcon /> Friends
          </div>
          <div className="flex flex-row mt-4 flex-wrap gap-4">
            <div className="flex flex-col">
              <div>
                Following <PersonIcon />:{following.length}
              </div>
              <AvatarGroup max={10} className="mt-2">
                {following.map((user) => {
                  return (
                    <Tooltip key={user.id} title={user.name}>
                      <Avatar
                        onClick={() => navigate(`/profile/${user.id}`, {})}
                        sx={{ cursor: "pointer" }}
                      >
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
                Followers <PersonIcon />:{followed.length}
              </div>
              <AvatarGroup max={10} className="mt-2">
                {followed.map((user) => {
                  return (
                    <Tooltip key={user.id} title={user.name}>
                      <Avatar
                        onClick={() => navigate(`/profile/${user.id}`, {})}
                        sx={{ cursor: "pointer" }}
                      >
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
          <div className="flex flex-col items-end mt-4">
            <Button variant="contained">Add friend</Button>
          </div>
        </>
      )}
    </div>
  );
}
