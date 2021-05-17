import React from 'react'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'

import backArrow from '../../../assets/backArrow.svg'
import forwardArrow from '../../../assets/forwardArrow.svg'

import analytics from '../../../assets/analytics.svg'
import seo from '../../../assets/seo.svg'
import outreach from '../../../assets/outreach.svg'
import ecommerce from '../../../assets/ecommerce.svg'

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
    },
    paragraphContainer:{
        maxWidth:"30em"
    }
}))

export default function Websites() {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    return (
        <Grid container direction="column">
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
                        <Typography align={matchesMD ? "center" : undefined} variant="h3">Websites Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Whether we're old software or inventing new solutions.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            But also leap into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{ backgroundColor: "transparent" }} component={Link} to="/mobileapps">
                            <img src={forwardArrow} alt="Custom Software image"></img>
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid item container direction={matchesSM ? "column":"row"} alignItems="center"
            className={classes.rowContainer}
            style={{marginTop:"5em"}}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesSM ? "center" : undefined} variant="h3" gutterBottom >Analytics</Typography>
                        </Grid>
                        <Grid item>
                            <img src={analytics} style={{marginLeft:"-2.7em"}} alt="graph with magnifying glass revealing 1's and 0's" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer}>
                    <Typography  align={matchesSM ? "center" : undefined} variant="body1" style={{marginTop:"3em"}} >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction={matchesSM ? "column":"row"} alignItems="center"
            justify="flex-end"
            style={{marginTop:"5em",marginBottom:"5em"}}
            className={classes.rowContainer}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesSM ? "center" : undefined} variant="h3" gutterBottom >E-Commerce</Typography>
                        </Grid>
                        <Grid item>
                            <img src={ecommerce} alt="world outline made of dollar signs" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer}>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph style={{marginTop:"3em"}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction={matchesSM ? "column":"row"} alignItems="center"
            style={{marginTop:"5em",marginBottom:"5em"}}
            className={classes.rowContainer}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesSM ? "center" : undefined} variant="h3" gutterBottom >Outreach</Typography>
                        </Grid>
                        <Grid item>
                            <img src={outreach}  alt="megaphone" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer}>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" style={{marginLeft:matchesSM ? 0 : "1em",marginTop:"3em"}} >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction={matchesSM ? "column":"row"} alignItems="center"
            style={{marginBottom:"5em"}}
            justify="flex-end"
            className={classes.rowContainer}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesSM ? "center" : undefined} variant="h3" gutterBottom >Search Engine<br/>Optimization</Typography>
                        </Grid>
                        <Grid item>
                            <img src={seo} alt="website standing on winner's podium" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft:matchesSM ? 0 : "1em"}} className={classes.paragraphContainer}>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph style={{marginTop:"2em"}} >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction/>
            </Grid>
        </Grid >
    )
}
