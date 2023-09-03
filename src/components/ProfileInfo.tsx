import { useEffect, useState } from "react";
import { IUser } from "../interfaces/IUser";
import { Avatar } from "@mui/material";

interface IProfileInfoProps {
  user: IUser;
}

export default function ProfileInfo(props: IProfileInfoProps) {
  return (
    <div className="flex flex-col">
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
    </div>
  );
}
