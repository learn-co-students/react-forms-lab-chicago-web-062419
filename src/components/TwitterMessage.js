import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      charsRemaining: props.maxChars
    };
  }
  handleMaxChars = (e) => {
    // console.log(e.target.value.length)
    const currentLength = e.target.value.length
    const charsRemaining = this.props.maxChars - currentLength
    this.setState({
      message: e.target.value,
      charsRemaining: charsRemaining
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" maxLength={this.props.maxChars} onChange={this.handleMaxChars} />
        <p>You have <strong>{this.state.charsRemaining}</strong> characters remaining!</p>
      </div>
    );
  }
}

export default TwitterMessage;
