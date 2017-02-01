import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/actions'
import FilterButtons from '../components/FilterButtons'

const mapStateToProps = (state) => {
  return {
    filter: state.visibilityFilter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChanged: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

const ApplicationFilterButtons = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterButtons);

export default ApplicationFilterButtons
