import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './App'
import applications from './reducers/reducers'
import { fetchApps } from './actions/actions'

let store = createStore(applications, applyMiddleware(thunk))

store.dispatch(fetchApps())

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
)
