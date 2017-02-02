import fetch from 'isomorphic-fetch'

export const REQUEST_APPS = 'REQUEST_APPS'
export const RECEIVE_APPS = 'RECEIVE_APPS'
export const UPDATE_APP_STATUS = 'UPDATE_APP_STATUS'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'
export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER'

// Possible values for SET_VISIBILITY_FILTER
export const FILTER_SHOW_ALL = 'FILTER_SHOW_ALL'
export const FILTER_SHOW_ACCEPTED = 'FILTER_SHOW_ACCEPTED'
export const FILTER_SHOW_REJECTED = 'FILTER_SHOW_REJECTED'
export const FILTER_SHOW_IN_REVIEW = 'FILTER_SHOW_IN_REVIEW'

export function requestApps() {
  return {
    type: REQUEST_APPS
  }
}

export function receiveApps(json) {
  return {
    type: RECEIVE_APPS,
    apps: json
  }
}

export function updateAppStatus(email, status) {
  return {
    type: UPDATE_APP_STATUS,
    email,
    status
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export function setSearchText(text) {
  return {
    type: SET_SEARCH_TEXT,
    text
  }
}

export function changePage(page) {
  return {
    type: SET_PAGE_NUMBER,
    page
  }
}

export function fetchApps() {
  return function(dispatch) {
    dispatch(requestApps());
    return fetch('https://hackthenorth.com/fe-users.json')
           .then(response => response.json())
           .then(json => dispatch(receiveApps(json)))
  }
}
