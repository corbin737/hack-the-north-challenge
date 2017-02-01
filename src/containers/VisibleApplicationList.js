import { connect } from 'react-redux';
import { updateAppStatus, fetchApps } from '../actions/actions'
import ApplicationList from '../components/ApplicationList'

const getVisibleApplications = (applications, filter, search) => {
  let filteredApps;
  switch (filter) {
    case 'SHOW_ALL':
      filteredApps = applications;
      break;

    case 'SHOW_ACCEPTED':
      filteredApps = applications.filter(application => application.status === 'accepted');
      break;

    case 'SHOW_REJECTED':
      filteredApps = applications.filter(application => application.status === 'rejected');
      break;

    case 'SHOW_IN_REVIEW':
      filteredApps = applications.filter(application => application.status === 'in_review');
      break;

    default:
      filteredApps = applications;
      break;
  }
  return filteredApps.filter(application => {
    return application.name.toLowerCase().includes(search)
  })
}

const mapStateToProps = (state) => {
  return {
    applications: getVisibleApplications(state.applications, state.visibilityFilter, state.searchText),
    isFetching: state.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateApplicationStatus: (email, status) => {
      dispatch(updateAppStatus(email, status));
    },
    onMount: () => {
      dispatch(fetchApps());
    }
  }
}

const VisibleApplicationList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationList);

export default VisibleApplicationList
