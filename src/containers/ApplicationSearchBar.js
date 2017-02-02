import { connect } from 'react-redux';
import { changePage, setSearchText } from '../actions/actions'
import SearchBar from '../components/SearchBar'

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchTextChanged: (text) => {
      dispatch(changePage(1))
      dispatch(setSearchText(text))
    }
  }
}

const ApplicationSearchBar = connect(
  undefined,
  mapDispatchToProps
)(SearchBar);

export default ApplicationSearchBar
