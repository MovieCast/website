import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui';

const styles = {
  root: {
    paddingLeft: 10
  }
}

function AppDrawerNavItem(props) {
  return (
    <ListItem button component={Link} to={props.to} onClick={props.onClick}>
      {props.icon &&
        <ListItemIcon>
          {props.icon}
        </ListItemIcon>}
      <ListItemText primary={props.text} classes={{ text: props.classes.root }} />
    </ListItem>
  );
}

AppDrawerNavItem.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

AppDrawerNavItem.defaultProps = {
  to: null,
  icon: null,
  onClick: null
};

export default withStyles(styles)(AppDrawerNavItem);