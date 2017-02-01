import React, { Component } from 'react';
import Application from './Application'
var jsonData = require('../assets/data.json');

const ApplicationList = ({ applications, onUpdateApplicationStatus }) => (
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


export default ApplicationList;
