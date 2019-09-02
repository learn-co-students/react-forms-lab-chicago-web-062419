import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { chars: this.props.maxChars };
  }

  minusChars = event => {
    // this.setState({ chars: this.state.chars - 1 });
    this.setState({ chars: event.target.value });
  };

  //   render() {
  //     return (
  //       <div>
  //         <strong>Your message:</strong>
  //         <input
  //           type="text"
  //           name="message"
  //           id="message"
  //           onChange={event => this.setState({ chars: event.target.value })}
  //           value={this.state.chars}
  //         />
  //         {this.props.maxChars - this.state.chars.length}
  //       </div>
  //     );
  //   }
  // }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.minusChars}
        />
        <em>
          Characters Remaining:{this.props.maxChars - this.state.chars.length}
        </em>
      </div>
    );
  }
}

export default TwitterMessage;
