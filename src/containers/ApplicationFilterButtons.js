import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/actions'
import FilterButtons from '../components/FilterButtons'

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChanged: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

const ApplicationFilterButtons = connect(
  undefined,
  mapDispatchToProps
)(FilterButtons);

export default ApplicationFilterButtons
