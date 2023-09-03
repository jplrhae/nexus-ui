import logo from "../img/nexus-logo-200.png";
import { Link } from "react-router-dom";

function NexusAppBar() {
  return (
    <div className="bg-gradient-to-by h-16 flex flex-row items-center gap-8">
      <Link to="/" className="ml-4">
        <img src={logo} className="h-12 " />
      </Link>
      <Link to="/login">
        <h1 className="font-bold">LOGIN/REGISTER</h1>
      </Link>

      <h1 style={{ opacity: 0.5, cursor: "default" }} className="font-bold">
        FEED
      </h1>
      <h1 style={{ opacity: 0.5, cursor: "default" }} className="font-bold">
        CHALLENGES
      </h1>
      <Link to="/profile" className="ml-auto mr-4">
        <h1 className="font-bold">PROFILE</h1>
      </Link>
    </div>
  );
}

export default NexusAppBar;
