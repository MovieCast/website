import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as releaseActions from '../redux/actions/releases';
import * as settingsActions from '../redux/actions/settings';
import Home from '../components/pages/Home/Home';

function mapStateToProps({ releases, settings }) {
  return { releases, settings };
}

function mapDispatchToProps(dispatch) {
  return {
    releasesActions: bindActionCreators(releaseActions, dispatch),
    settingsActions: bindActionCreators(settingsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
