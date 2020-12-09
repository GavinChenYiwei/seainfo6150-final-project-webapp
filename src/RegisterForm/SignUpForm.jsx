import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import "./style.css";

const SignUpForm = ({
  type
}) => {
  return (
    <div className="loginBox">
      <h1>Sign Up</h1>

      <form>
        <TextField
          name="username"
          floatingLabelText="user name"
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

        <TextField
          type={type}
          name="pwconfirm"
          floatingLabelText="confirm password"
        />
        <br />
        <RaisedButton
          className="signUpSubmit"
          primary={true}
          type="submit"
          label="submit"
          href="/seainfo6150-final-project-webapp"
        />
      </form>
      <p>
        Aleady have an account? <br />
        <a href="/login">Log in here</a>
      </p>
    </div>
  );
};

export default SignUpForm;
