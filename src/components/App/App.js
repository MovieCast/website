import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Welcome from '../Welcome/Welcome';

import { 
  AppBar,
  Typography,
  IconButton,
  Toolbar,
  Tabs,
  Tab
} from 'material-ui';

import { Menu, FileDownload } from 'material-ui-icons';
import SwipeableViews from 'react-swipeable-views';

const TabContainer = props =>
  <div style={{ padding: 24 }}>
    {props.children}
  </div>;

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class App extends Component {
  classes = {
    flex: {
      flex: 1,
    },
  }

  state = {
    index: 0,
  };  

  handleChange = (event, index) => {
    this.setState({ index });
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <Menu />
            </IconButton>
            <Typography type="Moviecast" color="inherit">Title</Typography>
          </Toolbar>
          <Tabs index={this.state.index} onChange={this.handleChange}>
            <Tab label="Home" />
            <Tab label={(<FileDownload/>)} />
          </Tabs>
        </AppBar>
        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          <TabContainer>
            <Welcome/>
          </TabContainer>
          <TabContainer>
            {'Item Three'}
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

export default App;
