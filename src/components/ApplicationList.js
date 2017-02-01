import React, { Component } from 'react';
import Application from './Application'

class ApplicationList extends Component {
  componentWillMount() {
    this.props.onMount();
  }

  render() {
    let applications = this.props.applications;
    let onUpdateApplicationStatus = this.props.onUpdateApplicationStatus;
    return (
      <table>
        <thead>
          <tr>
            <td></td>
            <td><strong>Name</strong></td>
            <td><strong>Company</strong></td>
            <td><strong>Email</strong></td>
            <td><strong>Phone</strong></td>
            <td><strong>Status</strong></td>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, i) =>
            <Application key={i} application={application} onStatusUpdate={onUpdateApplicationStatus}/>
          )}
        </tbody>
      </table>
    )
  }
}


export default ApplicationList;
