import { useContext, useEffect, useState } from "react";
import logo from "../img/nexus-logo-200.png";
import { Link } from "react-router-dom";
import { NexusMockContext } from "../mocks/MockDatabase";
import "../styles/NexusAppBar.css";

function NexusAppBar() {
  const { loggedUser } = useContext(NexusMockContext);
  const [hasLoggedUser, setHasLoggedUser] = useState<boolean>(false);

  useEffect(() => {
    console.log("Context from nexus app bar: ", loggedUser);
    console.log("Is logged user?", !!loggedUser);
    if (loggedUser) {
      setHasLoggedUser(true);
    } else {
      setHasLoggedUser(false);
    }
  }, [loggedUser]);

  return (
    <div className="app-bar-container h-16 flex flex-row items-center gap-8">
      <Link to="/" className="ml-4">
        <img src={logo} className="h-12 " />
      </Link>
      <h1 style={{ opacity: 0.5, cursor: "default" }} className="font-bold">
        FEED
      </h1>
      <h1 style={{ opacity: 0.5, cursor: "default" }} className="font-bold">
        CHALLENGES
      </h1>
      <Link to="/find-talent">
        <h1 className="font-bold">FIND TALENT</h1>
      </Link>
      <Link to="/find-project">
        <h1 className="font-bold">FIND PROJECTS</h1>
      </Link>
      <Link
        to="/login"
        className="ml-auto mr-4"
        style={{ display: hasLoggedUser ? "none" : "block" }}
      >
        <h1 className="font-bold">LOGIN/REGISTER</h1>
      </Link>
      <Link
        style={{ display: hasLoggedUser ? "block" : "none" }}
        to={`/profile/${loggedUser?.id}`}
        className="ml-auto mr-4"
      >
        <h1 className="font-bold">PROFILE</h1>
      </Link>
    </div>
  );
}

export default NexusAppBar;
