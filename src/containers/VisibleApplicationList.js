import { connect } from 'react-redux'
import { updateAppStatus } from '../actions/actions'
import ApplicationList from '../components/ApplicationList'
import {
  FILTER_SHOW_ALL, FILTER_SHOW_ACCEPTED,
  FILTER_SHOW_REJECTED, FILTER_SHOW_IN_REVIEW
} from '../actions/actions'

const appsPerPage = 20

const applyFilter = (applications, filter) => {
  switch (filter) {
    case FILTER_SHOW_ALL:
      return applications

    case FILTER_SHOW_ACCEPTED:
      return applications.filter(application => application.status === 'accepted')

    case FILTER_SHOW_REJECTED:
      return applications.filter(application => application.status === 'rejected')

    case FILTER_SHOW_IN_REVIEW:
      return applications.filter(application => application.status === 'in_review')

    default:
      return applications
  }
}

const applySearch = (applications, search) => {
  return applications.filter(application => {
    return application.name.toLowerCase().includes(search)
  })
}

const applyPagination = (applications, currentPage) => {
  return applications.slice(
    appsPerPage * (currentPage - 1),
    appsPerPage * (currentPage - 1) + appsPerPage
  )
}

const countPages = (applications) => {
  return Math.ceil(applications.length / appsPerPage)
}

const mapStateToProps = (state) => {
  let visibleApps, paginatedApps
  visibleApps = applyFilter(state.applications, state.visibilityFilter)
  visibleApps = applySearch(visibleApps, state.searchText)
  paginatedApps = applyPagination(visibleApps, state.currentPage)
  return {
    applications: paginatedApps,
    isFetching: state.isFetching,
    pageCount: countPages(visibleApps)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateApplicationStatus: (email, status) => {
      dispatch(updateAppStatus(email, status))
    },
  }
}

const VisibleApplicationList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationList)

export default VisibleApplicationList
