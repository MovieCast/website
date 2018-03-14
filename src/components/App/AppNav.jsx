import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
//  Button
} from 'material-ui';

import { Menu as MenuIcon } from 'material-ui-icons';
import { withStyles } from 'material-ui/styles';

const styles = {
  grow: {
    flex: '1 1 auto'
  },
  menuButton: {
    marginRight: 20,
  },
  noShadow: {
    boxShadow: 'none'
  }
};

class AppNav extends Component {
  render() {
    const { classes, shadow, onMenuClick } = this.props;

    return (
      <div>
        <AppBar position="fixed" className={classNames({[classes.noShadow]: !shadow})}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={onMenuClick}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.grow}>
              MovieCast
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppNav.propTypes = {
  classes: PropTypes.object.isRequired,
  shadow: PropTypes.bool,
  onMenuClick: PropTypes.func
};

AppNav.defaultProps = {
  shadow: true,
  onMenuClick: () => {}
};

export default withStyles(styles)(AppNav);