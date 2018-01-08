import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';

import ScrollButton from '../../internal/ScrollButton';

const styles = theme => ({
  root: {
    flex: '1 0 100%',
  },
  hero: {
    minHeight: '100vh',//'75vh',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.primary[500] : theme.palette.primary[800],
    color: theme.palette.getContrastText(theme.palette.primary[500]),
  },
  content: {
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 16,
      paddingBottom: theme.spacing.unit * 14,
    },
  },
  text: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline: {
    maxWidth: 500,
    textAlign: 'center'
  },
  button: {
    marginTop: theme.spacing.unit * 3,
  },
  homeContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    maxWidth: theme.spacing.unit * 90,
    minHeight: '95vh',
  },
});

class Home extends Component {
  componentWillMount() {
    this.context.setAppNavConfig({
      shadow: false
    });

    this.props.fetchLastRelease();
  }

  getWinAsset() {
    const { releases: { latest } } = this.props;

    if(latest.assets) {
      return latest.assets.find(asset => asset.content_type === 'application/x-msdownload')
    }
    return null;
  }

  render() {
    const { classes } = this.props;

    const winAsset = this.getWinAsset();
    const href = winAsset ? winAsset.browser_download_url : "https://github.com/MovieCast/desktop/releases";

    return (
      <div className={classes.root}>
        <div className={classes.hero}>
          <div className={classes.content}>
            <div className={classes.text}>
              <Typography type="display2" component="h1" color="inherit" gutterBottom>
                MovieCast
              </Typography>
              <Typography type="headline" component="h2" color="inherit" className={classes.headline}>
                Streaming movies and shows has never been easier!
              </Typography>
              {/* <Typography color="inherit">
                Currently still in beta, but it can never hurt to try!
              </Typography> */}
              <Button
                component="a"
                className={classes.button}
                //to={classes.container}
                href={href}
                raised
              >
                Download MovieCast Now
              </Button>
            </div>
          </div>
        </div>
        {/* <div className={classes.homeContent}>
          <div className={classes.container}>

          </div>
        </div> */}
      </div>
    );
  }
}

Home.contextTypes = {
  setAppNavConfig: PropTypes.func
}

export default withStyles(styles)(Home);