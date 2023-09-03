import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import FormProjectPage from "./pages/FormProjectPage";
import NexusAppBar from "./components/NexusAppBar";
import Login from "./pages/Login";
import { useContext, useEffect } from "react";
import { MockDatabaseContext } from "./mocks/MockDatabase";
import { rawUserItems1 } from "./interfaces/IUser";

function App() {
  const mockDatabase = useContext(MockDatabaseContext);
  useEffect(() => {
    console.log(mockDatabase);
  }, []);

  return (
    <>
      <NexusAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/project/create"
          element={<FormProjectPage user={rawUserItems1[0]} />}
        />
        <Route path="/profile/:id?" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
