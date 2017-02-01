import { connect } from 'react-redux';
import ApplicationList from '../components/ApplicationList';

const mapStateToProps = (state) => {
  return {
    applications: state.applications.filter(application => {
      return application.name.toLowerCase().includes(state.searchText)
    })
  }
}

const SearchedApplicationList = connect(
  mapStateToProps
)(ApplicationList);

export default SearchedApplicationList
