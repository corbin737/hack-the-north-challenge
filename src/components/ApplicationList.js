import React, { Component } from 'react';
import Application from './Application'
var jsonData = require('../assets/data.json');

const ApplicationList = ({ applications }) => (
  <ul>
    {applications.map((application, i) => <Application key={i} application={application}/>)}
  </ul>
)


export default ApplicationList;
