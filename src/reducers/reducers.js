import { combineReducers } from 'redux'
import {
  REQUEST_APPS, RECEIVE_APPS, UPDATE_APP_STATUS,
  SET_VISIBILITY_FILTER, SET_SEARCH_TEXT, SET_PAGE_NUMBER,
  FILTER_SHOW_ALL
} from '../actions/actions'

function application(state = {}, action) {
  switch (action.type) {
    case UPDATE_APP_STATUS:
      if (state.email === action.email) {
        return Object.assign({}, state, {
          status: action.status
        })
      } else {
        return state
      }

    default:
      return state
  }
}

function applications(state = [], action) {
  switch (action.type) {
    case UPDATE_APP_STATUS:
      return state.map(app =>
        application(app, action)
      )

    case RECEIVE_APPS:
      return action.apps

    default:
      return state
  }
}

function visibilityFilter(state = FILTER_SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter

    default:
      return state
  }
}

function searchText(state = '', action) {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return action.text

    default:
      return state
  }
}

function isFetching(state = false, action) {
  switch (action.type) {
    case REQUEST_APPS:
      return true

    case RECEIVE_APPS:
      return false

    default:
      return state
  }
}

function currentPage(state = 1, action) {
  switch (action.type) {
    case SET_PAGE_NUMBER:
      return action.page

    default:
      return state
  }
}

const applicationsApp = combineReducers({
  applications,
  visibilityFilter,
  searchText,
  isFetching,
  currentPage
})

export default applicationsApp
