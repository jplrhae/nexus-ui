import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import FormItem from "../components/FormItem";
import { useContext, useState } from "react";
import Button from "../components/Button";
import Page from "../components/Page";
import FormRow from "../components/FormRow";
import { IUser } from "../interfaces/IUser";
import { NexusMockContext } from "../mocks/MockDatabase";

interface ILoginProps {
  onLogin: (user: IUser) => void;
}

function Login(props: ILoginProps) {
  const { mockDatabaseService } = useContext(NexusMockContext);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Add user validation here
  const handleLoginSubmit = () => {
    setIsLoggingIn(true);
    const { username } = loginData;
    const user = mockDatabaseService.findUserByUsername(username);

    if (user) {
      setIsLoggingIn(false);
      props.onLogin(user);
      navigate(`/profile/${user.id}`);
    }
  };

  return (
    <Page title="Login">
      <Card>
        <FormRow gap={12} justify="center">
          <FormItem
            name="username"
            type="text"
            error={!loginData.username}
            placeholder="Username"
            label="Username:"
            onChange={(value) =>
              setLoginData({ ...loginData, username: value })
            }
          />
          <FormItem
            name="password"
            type="password"
            error={!loginData.password}
            placeholder="Password"
            label="Password:"
            onChange={(value) =>
              setLoginData({ ...loginData, password: value })
            }
          />
        </FormRow>
        <div className="flex flex-row justify-end">
          <Button
            onClick={handleLoginSubmit}
            text="Login"
            disabled={isLoggingIn || !loginData.username || !loginData.password}
          />
        </div>
      </Card>
      <span className="text-lg">
        Don't have an account yet?{" "}
        <Link to="/register" className="text-primary font-semibold">
          Create a new account.
        </Link>
      </span>
    </Page>
  );
}

export default Login;
