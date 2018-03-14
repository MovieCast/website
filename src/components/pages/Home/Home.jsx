import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';

//import ScrollButton from '../../internal/ScrollButton';
import desktop from './desktop.png';

const styles = theme => ({
  root: {
    flex: '1 0 100%',
  },
  hero: {
    minHeight: '100vh',//'75vh',
    flex: '0 0 auto',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.primary.dark,
    color: theme.palette.primary.contrastText
  },
  desktop: {
    minWidth: 200,
    maxWidth: 1280,
    width: '80%',
    height: 'auto',
    boxShadow: theme.shadows[10]
  },
  content: {
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 16
    },
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    flex: '1 0 auto'
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

    this.props.settingsActions.detectUserAgent();
    this.props.releasesActions.fetchLastRelease();
  }

  getDownloadButton() {
    const { classes, releases, settings } = this.props;

    if(!releases.latest || settings.userAgent === 'unknown') {
      return (
        <Button
          className={classes.button}
          disabled
          variant="raised"
        >
          Fetching releases
        </Button>
      )
    }

    try {
      const asset = releases.latest.assets[settings.userAgent][0];
      return (
        <Button
          component="a"
          className={classes.button}
          href={asset.browser_download_url}
          variant="raised"
        >
          Download MovieCast {releases.latest.version}
        </Button>
      )
    } catch(e) {
      console.log(`releases: No asset found for ${settings.userAgent}`, e);
      return (
        <Button
          className={classes.button}
          disabled
          variant="raised"
        >
          No binaries found
        </Button>
      )
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.hero}>
          <div className={classes.content}>
            <div className={classes.text}>
              <Typography variant="display2" component="h1" color="inherit" gutterBottom>
                MovieCast
              </Typography>
              <Typography variant="headline" component="h2" color="inherit" className={classes.headline}>
                Streaming movies and shows has never been easier!
              </Typography>
              {/* <Typography color="inherit">
                Currently still in beta, but it can never hurt to try!
              </Typography> */}
              {this.getDownloadButton()}
            </div>
          </div>
          <img className={classes.desktop} src={desktop} alt="" />
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