import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import "./style.css";

const LoginForm = ({
  type
}) => {
  return (
    <div className="loginBox">
      <h1>Login</h1>

      <form>
        <TextField
          name="username"
          floatingLabelText="user name (optional)"
        />
        <TextField
          name="email"
          floatingLabelText="email"
        />
        <TextField
          type={type}
          name="password"
          floatingLabelText="password"
        />

        <br />
        <RaisedButton
          className="signUpSubmit"
          primary={true}
          type="submit"
          label="submit"
          href="/"
        />
      </form>
    </div>
  );
};

export default LoginForm;
