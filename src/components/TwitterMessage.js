import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    // set the initial state
    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    // log the value of each change
    console.log(event.target.value);
    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <p>
          {this.props.maxChars - this.state.message.length} characters remaining
        </p>
        {/* Why doesn't this work? */}
        <h2>Hello {this.state.messsage} </h2>
      </div>
    );
  }
}

export default TwitterMessage;
