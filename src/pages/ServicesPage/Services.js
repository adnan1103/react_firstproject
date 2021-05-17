import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg'
import mobileAppIcon from '../../assets/mobileIcon.svg'
import websitesIcon from '../../assets/websiteIcon.svg'

const useStyles = makeStyles(theme => ({
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: "1em"
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 15,
        color: "white",
        borderColor: "white",
        borderRadius: 50,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    }
}))

export default function Services() {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <Grid container direction="column">
            <Grid item style={{marginLeft:matchesSM ? 0 : "5em", marginTop: matchesSM ? "1em" : "2em"}}>
                <Typography align={matchesSM ? "center" : undefined} variant="h2" gutterBottom >Services</Typography>
            </Grid>
            {/*-----Website Development Section-----*/}
            <Grid item>
                <Grid container
                    direction="row"
                    justify={matchesSM ? "center" : "flex-end"}
                    className={classes.serviceContainer}
                    style={{ marginTop: '5em' }}
                >
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button component={Link} to="/websites" variant="contained" className={classes.learnButton}><span style={{ marginRight: 10 }}>Learn More</span></Button>
                    </Grid>
                    <Grid item className={classes.icon} style={{ marginRight: matchesSM ? 0 : "5em" }}>
                        <img alt="website icon" src={websitesIcon} width="250em" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container
                    direction="row"
                    justify={matchesSM ? "center" : undefined}
                    className={classes.serviceContainer}
                    style={{ marginTop: matchesSM ? "2em" : '5em' }}
                >
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investigation to{" "} <span className={classes.specialText}>celebration</span>
                        </Typography>
                        <Button component={Link} to="/customsoftware" variant="contained" className={classes.learnButton}><span style={{ marginRight: 10 }}>Learn More</span></Button>
                    </Grid>
                    <Grid item className={classes.icon}>
                        <img alt="custom software icon" src={customSoftwareIcon} width="250em" />
                    </Grid>
                </Grid>
            </Grid>
            {/*-----IOS/Android Section-----*/}
            <Grid item>
                <Grid container
                    direction="row"
                    justify={matchesSM ? "center" : "flex-end"}
                    className={classes.serviceContainer}
                    style={{ marginBottom: '10em', marginTop: '5em' }}
                >
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                        <Typography variant="h4">
                            Ios/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone app {matchesSM ? null : <br />} with either mobile platform.
                        </Typography>
                        <Button component={Link} to="/mobileapps" variant="contained" className={classes.learnButton}><span style={{ marginRight: 10 }}>Learn More</span></Button>
                    </Grid>
                    <Grid item className={classes.icon} style={{ marginRight: matchesSM ? 0 : "5em" }}>
                        <img alt="mobile phone icon" src={mobileAppIcon} width="250em" />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}