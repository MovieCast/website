import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';

const styles = {
  content: {
    //flex: '1 1 auto',
    width: '100%',
  }
}

class AppContent extends Component {
  render() {
    const {classes, children} = this.props;

    return (
      <div className={classes.content}>
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(AppContent);