import React, { Component } from "react";
import LoginForm from "./LoginForm.jsx";

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "password",
    };
  }

  render() {
    return (
      <div>
        <LoginForm
          type={this.state.type}
        />
      </div>
    );
  }
}

export default LoginContainer;