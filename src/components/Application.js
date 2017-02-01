import React, { Component } from 'react';

class Application extends Component {
  render() {
    let app = this.props.application;
    let accepted = (app.status === 'accepted');
    let rejected = (app.status === 'rejected')

    return (
      <tr>
        <td><img src={app.picture} alt='Application' width='50' height='50' /></td>
        <td>{app.name}</td>
        <td>{app.company}</td>
        <td>{app.email}</td>
        <td>{app.phone}</td>
        <td>{accepted ? 'Accepted' : rejected ? 'Rejected' : 'In Review'}</td>
        <td>
          <div className='btn-group btn-group-xs'>
            <button className={
              'btn ' + (accepted ? 'btn-success disabled' : 'btn-default')
            } onClick={e => {
              this.props.onStatusUpdate(app.email, 'accepted')
            }}>{accepted ? 'Accepted' : 'Accept'}</button>
            <button className={
              'btn ' + (rejected ? 'btn-danger disabled' : 'btn-default')
            } onClick={e => {
              this.props.onStatusUpdate(app.email, 'rejected')
            }}>{rejected ? 'Rejected' : 'Reject'}</button>
            <button className='btn btn-default' onClick={e => {
              this.props.onStatusUpdate(app.email, 'in_review')
            }}>Reset</button>
          </div>
        </td>
      </tr>
    )
  }
}

export default Application;
