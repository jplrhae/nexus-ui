import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import SignInSide from "./pages/SignInSide";
import NexusAppBar from "./components/NexusAppBar";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <NexusAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
