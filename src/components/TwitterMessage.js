import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      typedChars: ""
    };
  }
  
  handleMessageChange = (event) => {
    const maxCount = this.props.maxChars
    this.setState(
      {message: event.target.value, 
      typedChars: maxCount - event.target.value.length}
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={(event) => this.handleMessageChange(event)} name="message" id="message" />
        <p>Characters Remaining: {this.state.typedChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
