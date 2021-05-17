import React from 'react'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'

import backArrow from '../../../assets/backArrow.svg'
import forwardArrow from '../../../assets/forwardArrow.svg'

import swiss from '../../../assets/swissKnife.svg'
import access from '../../../assets/extendAccess.svg'
import engagement from '../../../assets/increaseEngagement.svg'

import integrationAnimation from '../../../animations/integrationAnimation/data.json';

import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'
import CallToAction from '../../../ui/CallToAction'

const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: '40em'
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        }
    }
}))

export default function MobileApps() {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM=useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: integrationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <Grid container dierection="column">
            <Grid item container
                className={classes.rowContainer}
                style={{ marginTop: matchesXS ? ".5em" : "2em" }}
                direction="row"
                justify={matchesMD ? "center" : undefined}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{ marginLeft: "-3.5em", marginRight: "1em" }}>
                        <IconButton style={{ backgroundColor: "transparent" }} component={Link} to="/services">
                            <img src={backArrow} alt="Back to Services Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h3">IOS/Android App Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Whether we're old software or inventing new solutions,
                            Arc Development is her to help your business tackle technology.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Convenience.Connection.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{ backgroundColor: "transparent" }} component={Link} to="/websites">
                            <img src={forwardArrow} alt="Custom Software image"></img>
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid item container 
            direction={matchesSM ? "column":"row"}
            style={{marginTop:"15em",marginBottom:"15em"}}
             className={classes.rowContainer}>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography align="right" variant="h4" gutterBottom>Integration</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align="right" variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book.
                        </Typography>
                        <Typography align="right" variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md >
                    <Lottie options={defaultOptions} isStopped={true} style={{maxWidth:"20em"}}/>
                </Grid>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography variant="h4" gutterBottom>Simultaneous Platform Support</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container 
            direction={matchesMD ? "column":"row"} 
            className={classes.rowContainer}
            style={{marginBottom:"15em"}}
            >
                <Grid item container 
                direction="column" 
                alignItems="center" md
                >
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>Extend Functionality</Typography>
                    </Grid>
                    <Grid item>
                        <img src={swiss} alt="awiss army knife"/>
                    </Grid>
                </Grid>
                <Grid item container 
                direction="column"
                style={{marginTop:matchesMD ? "10em" : 0 , marginBottom:matchesMD ? "10em" : 0}} 
                alignItems="center" md>
                    <Grid item>
                        <Typography align="center"  variant="h4" gutterBottom>Extend Access</Typography>
                    </Grid>
                    <Grid item>
                        <img src={access} alt="tear one of sign" style={{maxWidth:matchesXS ? "20em" : "28em"}}/>
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" md>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>Increase Engagement</Typography>
                    </Grid>
                    <Grid item>
                        <img src={engagement} alt="app with notification"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="row">
                <CallToAction/>
            </Grid>
           
        </Grid>
    )
}