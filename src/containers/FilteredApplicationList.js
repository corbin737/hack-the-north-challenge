import { connect } from 'react-redux';
import SearchedApplicationList from './SearchedApplicationList'

const getVisibleApplications = (applications, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return applications;

    case 'SHOW_ACCEPTED':
      return applications.filter(application => application.status == 'accepted');

    case 'SHOW_REJECTED':
      return applications.filter(application => application.status == 'rejected');

    case 'IN_REVIEW':
      return applications.filter(application => application.status == 'in_review');

    default:
      return applications;
  }
}

const mapStateToProps = (state) => {
  return {
    applications: getVisibleApplications(state.applications, state.visibilityFilter)
  }
}

const FilteredApplicationList = connect(
  mapStateToProps
)(SearchedApplicationList);

export default FilteredApplicationList
