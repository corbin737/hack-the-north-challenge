export function updateAppStatus(id, status) {
  return {
    type: 'UPDATE_APP_STATUS',
    id,
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
