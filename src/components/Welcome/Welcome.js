import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Paper, Divider, Button } from 'material-ui';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    backgroundColor: '#ebebeb',
    color: theme.palette.text.primary,
  },
  title: {
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  subtitle: {
    color: theme.palette.text.secondary
  },
  container: {
    padding: 20
  },
  btn: {
    marginTop: 50,
    width: 70+"vw",
    maxWidth: 300,
    height: 75,
    fontSize: 29,
    fontWeight: 700
  },
  center: {
    display: "table",
    margin: 0 + " auto"
  }
}));

class Welcome extends Component {
  classes = this.props.classes;

  render() {
    return (
      <div className={this.classes.root}>
        <Grid Container spacing={24}>
          <Grid item>

            <Paper className={this.classes.paper}>
              <h1 className={this.classes.title}>Welcome</h1><Divider/>
              <div className={this.classes.container}>
                <h3 className={this.classes.subtitle}>We are Moviecast</h3>
                <p>Some text here</p>
              </div>

              <Divider/>
              <div className={this.classes.container}>
                <div className={this.classes.center}><Button raised color="primary" className={this.classes.btn}>Download now</Button></div>
              </div>
            </Paper>

          </Grid>
        </Grid>
      </div>
    );
  }
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Welcome);
