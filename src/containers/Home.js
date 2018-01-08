import { connect } from 'react-redux';
import { fetchLastRelease } from '../actions/releases';
import Home from '../components/pages/Home/Home';

function mapStateToProps({ releases }) {
  return { releases };
}

export default connect(mapStateToProps, {
    fetchLastRelease
})(Home);
