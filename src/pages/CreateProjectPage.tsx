import { useParams } from "react-router-dom";
import { IUser } from "../interfaces/IUser";
import { useContext, useEffect, useState } from "react";
import { MockDatabaseContext } from "../mocks/MockDatabase";
import FormRow from "../components/FormRow";
import FormItem from "../components/FormItem";
import { IProject } from "../interfaces/IProject";
import { Chip } from "@mui/material";
import { ISkill } from "../interfaces/ISkills";
import Page from "../components/Page";
import Button from "../components/Button";
import Card from "../components/Card";

function CreateProjectPage() {
  const { userId } = useParams();
  const [user, setUser] = useState<IUser>();
  const [openAddTagModal, setOpenAddTagModal] = useState(false);
  const [projectFormData, setProjectFormData] = useState<IProject>({
    about: "",
    description: "",
    id: 0,
    isPublic: false,
    name: "",
    userId: 0,
  });
  const [projectTags, setProjectTags] = useState<ISkill[]>([]);
  const [isRegistering, setIsRegistering] = useState(false);
  const { mockDatabaseService } = useContext(MockDatabaseContext);

  useEffect(() => {
    if (userId) {
      const userParameter = mockDatabaseService.findUserById(parseInt(userId));
      setUser(userParameter);
      setProjectFormData({ ...projectFormData, userId: parseInt(userId) });
    }
  }, [user]);

  const isValidRegisterData = (dataType: "name" | "description"): boolean => {
    switch (dataType) {
      case "name":
        return projectFormData.name.length > 4;
      case "description":
        return projectFormData.description.length > 8;
      default:
        return false;
    }
  };

  const isValidRegisterForm = (): boolean => {
    console.log("Reached isValidRegisterForm");
    console.log(isValidRegisterData("name"));
    console.log(isValidRegisterData("description"));

    return isValidRegisterData("name") && isValidRegisterData("description");
  };

  const handleProjectSubmit = () => {
    window.alert("Submitted project");
  };

  return (
    user && (
      <Page title="Create a project">
        <Card>
          <FormRow gap={12}>
            <FormItem
              name="owner"
              type="text"
              label="Owner:"
              placeholder="Owner"
              value={user.username}
            />
            <FormItem
              name="name"
              type="text"
              label="Project name:"
              placeholder="Name"
              error={!isValidRegisterData("name")}
              onChange={(value) =>
                setProjectFormData({ ...projectFormData, name: value })
              }
            />
          </FormRow>
          <FormRow gap={12}>
            <FormItem
              name="description"
              type="text"
              height={200}
              label="Description:"
              placeholder="Description"
              error={!isValidRegisterData("description")}
              onChange={(value) =>
                setProjectFormData({ ...projectFormData, description: value })
              }
            />
          </FormRow>
          <div className="flex flex-row justify-between">
            <label htmlFor="tags" className="block text-sm font-medium mb-1">
              Tags:
            </label>
            <Button onClick={() => setOpenAddTagModal(true)} text="Add tags" />
          </div>
          <div className="flex flex-row justify-end">
            <Button
              onClick={handleProjectSubmit}
              text="Create project"
              disabled={isRegistering || !isValidRegisterForm()}
            />
          </div>
        </Card>
      </Page>
    )
  );
}

export default CreateProjectPage;
