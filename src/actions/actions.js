import fetch from 'isomorphic-fetch'

export function requestedApps() {
  return {
    type: 'REQUESTED_APPS'
  }
}

export function receiveApps(json) {
  return {
    type: 'RECEIVE_APPS',
    apps: json
  }
}

export function updateAppStatus(email, status) {
  return {
    type: 'UPDATE_APP_STATUS',
    email,
    status
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export function setSearchText(text) {
  return {
    type: 'SET_SEARCH_TEXT',
    text
  }
}

export function fetchApps() {
  return function(dispatch) {
    dispatch(requestedApps());

    return fetch('https://hackthenorth.com/fe-users.json').then(response => response.json()).then(json => dispatch(receiveApps(json)))
  }
}
