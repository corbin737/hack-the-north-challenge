import React from 'react'
import VisibleApplicationList from './containers/VisibleApplicationList'
import ApplicationSearchBar from './containers/ApplicationSearchBar'
import ApplicationFilterButtons from './containers/ApplicationFilterButtons'
import './App.css'
import logoSvg from './assets/logo.svg'

const App = () => {
  return (
    <div>
      <header className='header container-fluid'>
        <div className='logo'>
          <img src={logoSvg} alt='Logo'/>
        </div>
        <h1>Hack the North Frontend Challenge</h1>
      </header>
      <section className='container'>
        <div className='controls row'>
          <div className='col-sm-6 col-md-8'>
            <ApplicationSearchBar />
          </div>
          <div className='pull-right'>
            <ApplicationFilterButtons className='filter-buttons'/>
          </div>
        </div>
        <VisibleApplicationList />
      </section>
    </div>
  )
}

export default App
