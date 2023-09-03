import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RegisterPage, { IRegisterForm } from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import CreateProjectPage from "./pages/CreateProjectPage";
import NexusAppBar from "./components/NexusAppBar";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import {
  INexusMockContext,
  NexusMockContext,
  defaultNexusMockContext,
} from "./mocks/MockDatabase";
import { IUser } from "./interfaces/IUser";
import FindTalentPage from "./pages/FindTalentPage";
import FindProjectPage from "./pages/FindProjectPage";

function App() {
  const navigate = useNavigate();
  const [mockData, setMockData] = useState<INexusMockContext>(
    defaultNexusMockContext
  );

  useEffect(() => {
    console.log(mockData);
  }, [mockData]);

  const logUser = (user: IUser) => {
    logUserOut();
    setMockData({
      ...mockData,
      loggedUser: user,
    });
    navigate(`/profile/${user.id}`);
  };

  const logUserOut = () => {
    const newMockData: INexusMockContext = {
      loggedUser: undefined,
      mockDatabase: mockData.mockDatabase,
      mockDatabaseService: mockData.mockDatabaseService,
    };
    setMockData(newMockData);
    navigate("/");
  };

  const registerUser = (userData: IRegisterForm) => {
    const newUser: IUser = {
      id: mockData.mockDatabaseService.generateId("user"),
      about: userData.about || "",
      email: userData.email,
      name: userData.name,
      username: userData.username,
      birthDate: new Date(userData.birthDate),
    };
    mockData.mockDatabase.users.push(newUser);
    logUser(newUser);
  };

  const registerNewSkill = (skillTitle: string) => {
    console.log("Received call to add new skill", skillTitle);

    const skill = mockData.mockDatabase.skills.find(
      (skill) => skill.title === skillTitle
    );

    if (!skill) {
      const newSkill = {
        id: mockData.mockDatabaseService.generateId("skill"),
        title: skillTitle,
      };
      mockData.mockDatabase.skills.push(newSkill);
      mockData.mockDatabase.userSkills.push({
        id: mockData.mockDatabaseService.generateId("userSkill"),
        skillId: newSkill.id,
        userId: mockData.loggedUser!.id,
      });
      return newSkill;
    } else {
      mockData.mockDatabase.userSkills.push({
        id: mockData.mockDatabaseService.generateId("userSkill"),
        skillId: skill.id,
        userId: mockData.loggedUser!.id,
      });
      return skill;
    }
  };

  return (
    <>
      <NexusMockContext.Provider value={mockData}>
        <NexusAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login onLogin={(user) => logUser(user)} />}
          />
          <Route
            path="/register"
            element={
              <RegisterPage
                onRegister={(userData: IRegisterForm) => registerUser(userData)}
              />
            }
          />
          <Route path="/find-talent" element={<FindTalentPage />} />
          <Route path="/find-project" element={<FindProjectPage />} />
          <Route path="/:userId/project/new" element={<CreateProjectPage />} />
          <Route
            path="/profile/:id?"
            element={<ProfilePage onNewSkillSubmit={registerNewSkill} />}
          />
        </Routes>
      </NexusMockContext.Provider>
    </>
  );
}

export default App;
