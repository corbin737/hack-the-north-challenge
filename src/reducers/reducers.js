import { combineReducers } from 'redux';

function application(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_APP_STATUS':
      if (state.email === action.email) {
        return Object.assign({}, state, {
          status: action.status
        })
      } else {
        return state;
      }

    default:
      return state;
  }
}

function applications(state = [], action) {
  switch (action.type) {
    case 'UPDATE_APP_STATUS':
      return state.map(app =>
        application(app, action)
      )

    case 'RECEIVE_APPS':
      return action.apps;

    default:
      return state;
  }
}

function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;

    default:
      return state;
  }
}

function searchText(state = '', action) {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.text;

    default:
      return state;
  }
}

function isFetching(state = false, action) {
  switch (action.type) {
    case 'REQUESTED_APPS':
      return true;

    case 'RECEIVE_APPS':
      return false;

    default:
      return state;
  }
}

const applicationsApp = combineReducers({
  applications,
  visibilityFilter,
  searchText,
  isFetching
});

export default applicationsApp;
