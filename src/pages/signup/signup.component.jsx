import React from "react";
import { Link } from "react-router-dom";

import "../sign-in/sign-in.styles.scss";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      cnfPassword: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="signin-container">
        <h2 className="signin-title">Sign Up</h2>
        <FormInput
          name="full-name"
          type="text"
          placeholder="Enter Full Name"
          label="Full Name"
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Enter Email"
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          label="Password"
        />
        <FormInput
          name="cnfpassword"
          type="password"
          placeholder="Confirm Password"
          label="Confirm Password"
        />
        <Link to="/" style={{ textDecoration: "none" }}>
          <CustomButton label="Sign Up" customClass />
        </Link>
      </div>
    );
  }
}

export default SignUp;
