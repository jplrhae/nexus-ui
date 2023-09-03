import { Avatar } from "@mui/material";

function ProfilePage() {
  return (
    <div
      className="flex flex-row justify-center border"
      style={{ height: "calc(100vh - 64px" }}
    >
      <div className="flex flex-row justify-center border">
        <div className="flex flex-col border basis-1/3">
          <div className="flex flex-col justify-center items-center border basis-1/4">
            <Avatar
              sx={{
                height: 190,
                width: 190,
                backgroundColor: "primary.main",
                color: "secondary.main",
                fontSize: "50px",
              }}
            >
              JA
            </Avatar>
            <div>
              <span className="font-bold text-lg">Joshua Alves</span> (jplalves)
            </div>
          </div>
          <div className="border basis-3/4">
            Hello! I am a student of microelectronics and semiconductors looking
            to start a career in Austria.
          </div>
        </div>
        <div className="flex flex-col border justify-center items-center basis-2/3">
          <div className="flex flex-col items-center basis-2/3 gap-2">
            <h1>Projects</h1>
            <div className="flex flex-row gap-1">
              <div>Project</div>
              <div>Project</div>
              <div>Project</div>
            </div>
          </div>
          <div className="flex flex-row basis-1/3 "></div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
