import React from "react";
import "./sign-in.styles.scss";
import { Link } from "react-router-dom";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // perform sign in logic with username and password
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin-container">
        <h2 className="signin-title">Login</h2>
        <div>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            placeholder="Enter the email"
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            placeholder="Enter your password"
          />
          <Link to="/home" style={{ textDecoration: "none" }}>
            <CustomButton label="Login" />
          </Link>

          <div className="row">
            <p>
              Not a member? <Link to="/signup">Sign Up {">>>"}</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
