import React, { Component } from 'react';

class Application extends Component {
  render() {
    let app = this.props.application;

    return (
      <tr>
        <td><img src={app.picture} width='50' height='50' /></td>
        <td>{app.name}</td>
        <td>{app.company}</td>
        <td>{app.email}</td>
        <td>{app.phone}</td>
        <td>{app.status}</td>
        <td>
          <button onClick={e => {
            this.props.onStatusUpdate(app.email, 'accepted')
          }}>Accept</button>
          <button onClick={e => {
            this.props.onStatusUpdate(app.email, 'rejected')
          }}>Reject</button>
          <button onClick={e => {
            this.props.onStatusUpdate(app.email, 'in_review')
          }}>Reset</button>
        </td>
      </tr>
    )
  }
}

export default Application;
