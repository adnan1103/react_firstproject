import React from "react";
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'

import backArrow from '../../../assets/backArrow.svg'
import forwardArrow from '../../../assets/forwardArrow.svg'

import lightbulb from '../../../assets/bulb.svg'
import cash from '../../../assets/cash.svg'
import stopwatch from '../../../assets/stopwatch.svg'
import roots from '../../../assets/root.svg'

import documentsAnimation from '../../../animations/documentsAnimation/data';
import scaleAnimation from '../../../animations/scaleAnimation/data.json';
import autoAnimations from '../../../animations/automationAnimation/data.json';
import uxAnimations from '../../../animations/uxAnimation/data';
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
    itemContainer: {
        maxWidth: "40em"
    }
}))

export default function CustomSoftware() {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const documentsOptions = {
        loop: true,
        autoplay: true,
        animationData: documentsAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const scaleOptions = {
        loop: true,
        autoplay: true,
        animationData: scaleAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const autoOptions = {
        loop: true,
        autoplay: true,
        animationData: autoAnimations,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const uxOptions = {
        loop: true,
        autoplay: true,
        animationData: uxAnimations,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


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
                        <Typography align={matchesMD ? "center" : undefined} variant="h3">Custom Software Development</Typography>
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially unchanged.
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
            <Grid item container
                direction="row"
                className={classes.rowContainer}
                justify="center" style={{ marginBottom: "20em", marginTop: "15em" }}>
                <Grid item container direction="column" md alignItems="center" style={{ maxWidth: "40em" }}>
                    <Grid item>
                        <Typography variant="h4">Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img src={lightbulb} alt="light bulb" />
                    </Grid>
                </Grid>
                <Grid item
                    container
                    direction="column" md
                    alignItems="center"
                    style={{
                        maxWidth: "40em", marginTop: matchesSM ? "10em" : 0,
                        marginBottom: matchesSM ? "10em" : 0
                    }}>
                    <Grid item>
                        <Typography variant="h4">Save Time</Typography>
                    </Grid>
                    <Grid item>
                        <img src={stopwatch} alt="stopwatch" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" md alignItems="center" style={{ maxWidth: "40em" }}>
                    <Grid item>
                        <Typography variant="h4">Save Money</Typography>
                    </Grid>
                    <Grid item>
                        <img src={cash} alt="cash" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item
                container
                className={classes.rowContainer}
                alignItems={matchesMD ? "center" : undefined}
                direction={matchesMD ? "column" : "row"}
                justify="space-around">
                <Grid item
                    container
                    className={classes.itemContainer} style={{ marginBottom: matchesMD ? "15em" : 0 }}
                    direction={matchesSM ? "column" : "row"}
                    md>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography align={matchesSM ? "center" : undefined} variant="h4">Digital Documents & Data</Typography>
                            <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                                It is a long established fact that a reader.
                            </Typography>
                            <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                                The point of using Lorem Ipsum is that it has a more-or-less
                                normal distribution of letters, as opposed to using Content here, content here.
                            </Typography>
                            <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage
                                of Lorem Ipsum
                             </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie
                            options={documentsOptions} isStopped={true}
                            style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
                        />
                    </Grid>
                </Grid>
                <Grid item
                    container
                    direction={matchesSM ? "column" : "row"}
                    className={classes.itemContainer} md>
                    <Grid item md>
                        <Lottie
                            options={scaleOptions} isStopped={true}
                            style={{ maxHeight: 260, maxWidth: 280 }}
                        />
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : "right"} >Scale</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                                The point of using Lorem Ipsum is that it has a more-or-less
                                normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item
                container
                direction="row"
                className={classes.rowContainer}
                style={{ marginTop: "20em", marginBottom: "20em" }}>
                <Grid item container direction="column" alignItems="center">
                    <Grid item align="center">
                        <img src={roots} alt="tree with roots extending out"
                            height={matchesSM ? "300em" : "450em"}
                            width={matchesSM ? "300em" : "450em"} />
                    </Grid>
                    <Grid item className={classes.itemContainer}>
                        <Typography variant="h4" gutterBottom align="center">Root-Cause Analysis</Typography>
                        <Typography variant="body1" paragraph align="center">
                            The point of using Lorem Ipsum is that it has a more-or-less
                        </Typography>
                        <Typography variant="body1" paragraph align="center">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                            by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage
                            of Lorem Ipsum
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item
                container
                className={classes.rowContainer}
                alignItems={matchesMD ? "center" : undefined}
                direction={matchesMD ? "column" : "row"}
                justify="space-around"
                style={{ marginBottom: "20em" }}>
                <Grid item
                    container
                    className={classes.itemContainer}
                    style={{ marginBottom: matchesMD ? "15em" : 0 }}
                    direction={matchesSM ? "column" : "row"}
                    md
                >
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : undefined}>Automations</Typography>
                            <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph>
                                It is a long established fact that a reader.
                            </Typography>
                            <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph>
                                The point of using Lorem Ipsum is that it has a more-or-less
                                normal distribution of letters, as opposed to using Content here, content here.
                            </Typography>
                            <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage
                                of Lorem Ipsum
                             </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie
                            options={autoOptions} isStopped={true}
                            style={{ maxHeight: 290, maxWidth: 280 }}
                        />
                    </Grid>
                </Grid>
                <Grid item
                    container
                    className={classes.itemContainer}
                    direction={matchesSM ? "column" : "row"}
                    md
                >
                    <Grid item md>
                        <Lottie
                            options={uxOptions} isStopped={true}
                            style={{ maxHeight: 310, maxWidth: 155 }}
                        />
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : "right"}>User Experience Design</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                                The point of using Lorem Ipsum is that it has a more-or-less
                            </Typography>
                            <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                                There are many variations of passages of Lorem Ipsum available?
                            </Typography>
                            <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                by injected humour
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                <CallToAction />
            </Grid>
        </Grid>
    )
}