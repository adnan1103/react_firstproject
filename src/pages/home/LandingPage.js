import React from 'react'
import Grid from '@material-ui/core/Grid'
import animationData from '../../animations/landinganimation/data'
import { makeStyles, useTheme } from '@material-ui/styles'
import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import SimpleSlider from '../../Slider/slider'
import CallToAction from '../../ui/CallToAction'
import {Link} from 'react-router-dom'

import customSoftwareIcon from '../../assets/Custom Software Icon.svg'
import firstSection from '../../assets/first section.png'
import mobileAppIcon from '../../assets/mobileIcon.svg'
import websitesIcon from '../../assets/websiteIcon.svg'
import { CardContent, Card } from '@material-ui/core'
import revolutionBackground from '../../assets/repeatingBackground.svg'
import infoBackground from '../../assets/infoBackground.svg'

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        marginRight: "8em"
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        hight: 48,
        width: 145
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
    },
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
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
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0
        }
    },
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    }
}))

export default function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Grid container direction="column" className={classes.mainContainer} >
            <Grid item>
                {/* <SimpleSlider/> */}
            </Grid>
            {/*-----First Section-----*/}
            <Grid item>
                <Grid container justify="flex-end" alignItems="center" direction="row">
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography align="center" variant="h2">Bringing West Cost Technology<br /> to the Midwest</Typography>
                        <Grid container justify="center" className={classes.buttonContainer}>
                            <Grid item>
                                <Button component={Link} to="/estimate" variant="contained" className={classes.estimateButton}>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" className={classes.learnButtonHero}>Learn More</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item>
                        {/* <Lottie className={classes.animation} options={defaultOptions} height={"100%"} width={"100%"} /> */}
                        <img alt="First Section" className={classes.animation} src={firstSection} />
                    </Grid>
                </Grid>
            </Grid>
            {/*-----Custom Software Section-----*/}
            <Grid item>
                <Grid container direction="row" justify={matchesSM ? "center" : undefined} className={classes.serviceContainer}>
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
                        <img alt="custom software icon" src={customSoftwareIcon} />
                    </Grid>
                </Grid>
            </Grid>
            {/*-----IOS/Android Section-----*/}
            <Grid item>
                <Grid container direction="row" justify={matchesSM ? "center" : "flex-end"} className={classes.serviceContainer}>
                    <Grid item style={{ textAlign: matchesSM ? "center" : undefined }}>
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
                        <img alt="mobile phone icon" src={mobileAppIcon} />
                    </Grid>
                </Grid>
            </Grid>
            {/*-----Website Development Section-----*/}
            <Grid item>
                <Grid container direction="row" justify={matchesSM ? "center" : undefined} className={classes.serviceContainer}>
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
                    <Grid item className={classes.icon}>
                        <img alt="website icon" src={websitesIcon} />
                    </Grid>
                </Grid>
            </Grid>
            {/*-----The Revolution Section-----*/}
            <Grid item>
                <Grid container style={{ height: "100em", marginTop: "12em" }} alignItems="center" justify="center">
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column" style={{ textAlign: "center" }}>
                                <Grid item>
                                    <Typography variant="h3" gutterBottom>
                                        The Revolution
                                </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Visonary insights coupled with cutting-edge technology is a recipe for revolution.
                                </Typography>
                                    <Button variant="outlined" className={classes.learnButtonHero}>Learn More</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground} />
                </Grid>
            </Grid>
            {/*-----Information Section-----*/}
            <Grid item>
                <Grid container style={{ height: "80em" }} alignItems="center" direction="row">
                    <Grid item container style={{position: "absolute",
                    textAlign: matchesXS ? "center" : "inherit"}}
                     direction={matchesXS ? "column" : "row"}
                     spacing={matchesXS ? 10 : 0}
                    >
                        <Grid item sm style={{ margin: matchesSM ? "2em": "5em" }}>
                            <Grid container direction="column">
                                <Typography variant="h2" style={{ color: "white" }}>About Us</Typography>
                                <Typography variant="subtitle2">Let get's personal</Typography>
                                <Grid item>
                                    <Button variant="outlined" className={classes.learnButton}><span style={{ marginRight: 10 }}>Learn More</span></Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm style={{ margin: matchesSM ? "2em" : "5em" ,textAlign:matchesXS ? "center" :"right"}}>
                            <Grid container direction="column">
                                <Typography variant="h2" style={{ color: "white" }}>Contact Us</Typography>
                                <Typography variant="subtitle2">Say hello! </Typography>
                                <Grid item>
                                    <Button variant="outlined" className={classes.learnButton}><span style={{ marginRight: 10 }}>Learn More</span></Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div className={classes.infoBackground} />
                </Grid>
            </Grid>
            <Grid item>
            {/*-----Call To Action-------*/}
            <CallToAction/> 
            </Grid>
        </Grid>

    );
}