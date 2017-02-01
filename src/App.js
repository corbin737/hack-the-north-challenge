import React, { Component } from 'react';
import VisibleApplicationList from './containers/VisibleApplicationList'
import ApplicationSearchBar from './containers/ApplicationSearchBar'
import ApplicationFilterButtons from './containers/ApplicationFilterButtons'
import './App.css';
import logoSvg from './assets/logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <header className='header'>
          <div className='logo'>
            <img src={logoSvg} alt='Logo'/>
          </div>
          <h1>Hack the North Frontend Challenge</h1>
        </header>
        <section>
          <ApplicationFilterButtons />
          <ApplicationSearchBar />
          <VisibleApplicationList />
        </section>
      </div>
    );
  }
}

export default App;
