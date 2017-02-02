import { connect } from 'react-redux';
import { changePage } from '../actions/actions'
import Pager from '../components/Pager'


const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (page) => {
      dispatch(changePage(page));
    }
  }
}

const ApplicationPager = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pager);

export default ApplicationPager
