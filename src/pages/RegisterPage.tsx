import { useState } from "react";
import Card from "../components/Card";
import Page from "../components/Page";
import FormRow from "../components/FormRow";
import FormItem from "../components/FormItem";
import Button from "../components/Button";

interface IRegisterForm {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  name: string;
  birthDate: Date | null;
}

function RegisterPage() {
  const [registerData, setRegisterData] = useState<IRegisterForm>({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    name: "",
    birthDate: null,
  });

  const [isRegistering, setIsRegistering] = useState(false);

  const isValidRegisterData = (
    dataType:
      | "username"
      | "password"
      | "confirmPassword"
      | "email"
      | "name"
      | "birthDate"
  ): boolean => {
    switch (dataType) {
      case "username":
        return registerData.username.length > 4;
      case "password":
        return registerData.password.length > 8;
      case "confirmPassword":
        return (
          !!registerData.password &&
          registerData.password === registerData.confirmPassword
        );
      case "email":
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(registerData.email);
      case "name":
        return registerData.name.length > 0;
      case "birthDate":
        return !!registerData.birthDate;
      default:
        return false;
    }
  };

  const isValidRegisterForm = (form: IRegisterForm): boolean => {
    console.log("Reached isValidRegisterForm");
    console.log(isValidRegisterData("username"));
    console.log(isValidRegisterData("password"));
    console.log(isValidRegisterData("confirmPassword"));
    console.log(isValidRegisterData("email"));
    console.log(isValidRegisterData("name"));
    console.log(isValidRegisterData("birthDate"));

    return (
      isValidRegisterData("username") &&
      isValidRegisterData("password") &&
      isValidRegisterData("confirmPassword") &&
      isValidRegisterData("email") &&
      isValidRegisterData("name") &&
      isValidRegisterData("birthDate")
    );
  };

  const handleRegisterSubmit = () => {
    setIsRegistering(true);
    console.log(registerData);
    setIsRegistering(false);
  };

  return (
    <Page title="Register">
      <Card>
        <FormRow gap={12}>
          <FormItem
            name="email"
            type="email"
            label="Email:"
            placeholder="Email"
            error={!isValidRegisterData("email")}
            onChange={(value) =>
              setRegisterData({ ...registerData, email: value })
            }
          />
        </FormRow>
        <FormRow gap={12}>
          <FormItem
            name="name"
            type="text"
            label="Name:"
            placeholder="Name"
            error={!isValidRegisterData("name")}
            onChange={(value) =>
              setRegisterData({ ...registerData, name: value })
            }
          />
          <FormItem
            name="birthDate"
            type="date"
            label="Birth date:"
            placeholder="Birth date"
            error={!isValidRegisterData("birthDate")}
            onChange={(value) =>
              setRegisterData({ ...registerData, birthDate: new Date(value) })
            }
          />
        </FormRow>
        <FormRow gap={12}>
          <FormItem
            name="username"
            type="text"
            label="Username:"
            placeholder="Username"
            error={!isValidRegisterData("username")}
            onChange={(value) =>
              setRegisterData({ ...registerData, username: value })
            }
          />
          <FormRow className="grow basis-0" gap={12}>
            <FormItem
              name="password"
              type="password"
              label="Password:"
              placeholder="Password"
              error={!isValidRegisterData("password")}
              onChange={(value) =>
                setRegisterData({ ...registerData, password: value })
              }
            />
            <FormItem
              name="confirmPassword"
              type="password"
              label="Confirm password:"
              placeholder="Confirm password"
              error={!isValidRegisterData("confirmPassword")}
              onChange={(value) =>
                setRegisterData({ ...registerData, confirmPassword: value })
              }
            />
          </FormRow>
        </FormRow>
        <div className="flex flex-row justify-end">
          <Button
            onClick={handleRegisterSubmit}
            text="Create account"
            disabled={isRegistering || !isValidRegisterForm(registerData)}
          />
        </div>
      </Card>
    </Page>
  );
}

export default RegisterPage;
