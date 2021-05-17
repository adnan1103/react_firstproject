import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core';
import logo from '../assets/logoAD.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'


function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '6em'
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: "transparent"
    }
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px'
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px"
  }
}))

export default function Header(props) {
  const classes = useStyles();
  const [value, steValue] = useState(0);

  const handleChange = (e, value) => {
    steValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      steValue(0);
    } else if (window.location.pathname === '/services' && value !== 1) {
      steValue(1);
    } else if (window.location.pathname === '/collection' && value !== 2) {
      steValue(2);
    } else if (window.location.pathname === '/revolutions' && value !== 3) {
      steValue(3);
    } else if (window.location.pathname === '/about' && value !== 4) {
      steValue(4);
    } else if (window.location.pathname === '/contact"' && value !== 5) {
      steValue(5);
    }
    else if (window.location.pathname === '/estimate' && value !== 6) {
      steValue(6);
    }
  }, [value]);


  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar positon="fixed">
          <Toolbar disableGutters>
            <Button component={Link} to="/" onClick={() => steValue(0)} disableRipple className={classes.logoContainer}>
              <img alt="company logo" className={classes.logo} src={logo} />
            </Button>
            <Tabs value={value} onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="secondary">
              <Tab className={classes.tab} component={Link} to="/" label="Home" />
              <Tab className={classes.tab} component={Link} to="/services" label="Services" />
              <Tab className={classes.tab} component={Link} to="/collection" label="Products" />
              <Tab className={classes.tab} component={Link} to="/revolutions" label="Revolution" />
              <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
              <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
            </Tabs>
            <Button component={Link}
              to="/estimate"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}
