import { combineReducers } from 'redux';

function application(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_APP_STATUS':
      if (state.id == action.id) {
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

const defaultApplications = require('../assets/data.json');

function applications(state = defaultApplications, action) {
  switch (action.type) {
    case 'UPDATE_APP_STATUS':
      return state.map(app =>
        application(app, action)
      )

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

const applicationsApp = combineReducers({
  applications,
  visibilityFilter,
  searchText
});

export default applicationsApp;
