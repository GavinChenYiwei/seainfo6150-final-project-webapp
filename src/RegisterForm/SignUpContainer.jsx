import React, { Component } from "react";
import SignUpForm from "./SignUpForm.jsx";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "password",
    };
  }

  render() {
    return (
      <div>
        <SignUpForm
          type={this.state.type}
        />
      </div>
    );
  }
}

export default SignUpContainer;