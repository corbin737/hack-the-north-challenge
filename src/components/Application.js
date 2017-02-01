import React, { Component } from 'react';

class Application extends Component {
  render() {
    return (
      <li>
        {this.props.application.name}
      </li>
    )
  }
}

export default Application;
