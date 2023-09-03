import React from "react";

import logo from "../img/nexus-logo-200.png";
import { Link } from "react-router-dom";

function NexusAppBar() {
  return (
    <div className="bg-black h-16 flex flex-row items-center gap-8">
      <Link to="/" className="ml-4">
        <img src={logo} className="h-12 " />
      </Link>
      <Link to="/feed">
        <h1 className="font-bold">FEED</h1>
      </Link>
      <Link to="/challenges">
        <h1 className="font-bold">CHALLENGES</h1>
      </Link>
      <Link to="/profile">
        <h1 className="font-bold">PROFILE</h1>
      </Link>
      <Link to="/login" className="ml-auto mr-4">
        <h1 className="font-bold">LOGIN</h1>
      </Link>
    </div>
  );
}

export default NexusAppBar;
