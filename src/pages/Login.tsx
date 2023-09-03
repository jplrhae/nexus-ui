import { Link } from "react-router-dom";
import Card from "../components/Card";
import FormItem from "../components/FormItem";
import { useState } from "react";
import Button from "../components/Button";
import Page from "../components/Page";
import FormRow from "../components/FormRow";

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLoginSubmit = () => {
    setIsLoggingIn(true);
    const { username, password } = loginData;
    console.log(username, password);
    setIsLoggingIn(false);
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
