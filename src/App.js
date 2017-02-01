import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApplicationList from './components/ApplicationList';
import FilteredApplicationList from './containers/FilteredApplicationList'
import ApplicationSearchBar from './containers/ApplicationSearchBar'
import './App.css';
import logoSvg from './assets/logo.svg';
import { updateAppStatus } from './actions/actions'

class App extends Component {
  render() {
    return (
      <div>
        <header className='header'>
          <div className='logo'>
            <img src={logoSvg}/>
          </div>
          <h1>Hack the North Frontend Challenge</h1>
        </header>
        <section>
          <ApplicationSearchBar />
          <FilteredApplicationList />
        </section>
      </div>
    );
  }
}

export default App;
