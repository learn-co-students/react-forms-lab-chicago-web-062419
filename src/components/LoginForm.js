import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleFormInput = event => {
    this.setState({ [event.target.name]: event.target.value }, () =>
      console.log(this.state)
    );
  };

  handleLoginForm = event => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleLoginForm}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              onChange={this.handleFormInput}
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              onChange={this.handleFormInput}
              type="password"
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
