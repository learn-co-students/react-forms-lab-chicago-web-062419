import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleLogin = (e) => {
    e.preventDefault()
    const usernameValue = e.target[0].value
    const passwordValue = e.target[1].value
    this.setState({
      username: e.target[0].value,
      password: e.target[1].value 
    })
    this.props.login({usernameValue, passwordValue})
  }
  
  handleChange = (e) => {
    // console.log(e.target.name);
    e.target.name === 'username' ?
    this.setState({
      username: e.target.value 
    }) :
    this.setState({
      password: e.target.value 
    })  
  }
  
  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} />
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
