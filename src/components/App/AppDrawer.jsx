import React from 'react';
import PropTypes from 'prop-types';

import {
  List,
  Toolbar,
  Drawer,
  Divider,
  Typography
} from 'material-ui';

import { withStyles } from 'material-ui/styles';
import AppDrawerNavItem from './AppDrawerNavItem';

const styleSheet = theme => ({
  paper: {
    width: 250,
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  }
});

function AppDrawer(props) {
  const classes = props.classes;

  return (
    <Drawer
      classes={{
        paper: classes.paper,
      }}
      open={props.open}
      onClose={props.onRequestClose}
      keepMounted={false}
    >
      <div className={classes.nav}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="title" color="inherit">
            MovieCast
          </Typography>
          <Divider absolute />
        </Toolbar>

        <List disablePadding>

          <AppDrawerNavItem
            to="/"
            text="Home"
            onClick={props.onRequestClose}
          />

          <AppDrawerNavItem
            href="https://github.com/MovieCast/desktop/releases"
            text="Releases"
            onClick={props.onRequestClose}
          />

          {/* <AppDrawerNavItem
            to="/about"
            text="About"
            onClick={props.onRequestClose}
          /> */}

        </List>
      </div>
    </Drawer>
  );
}

/* eslint-disable react/forbid-prop-types */
AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
/* eslint-enable react/forbid-prop-types */

export default withStyles(styleSheet)(AppDrawer);