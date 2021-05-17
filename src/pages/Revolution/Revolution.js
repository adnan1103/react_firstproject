import React from 'react'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'


import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'

import vision from '../../assets/vision.svg'
import technologyAnimation from '../../animations/technologyAnimation/data.json'
import consultation from '../../assets/consultationIcon.svg'
import mockup from '../../assets/mockupIcon.svg'
import review from '../../assets/reviewIcon.svg'
import design from '../../assets/designIcon.svg'
import build from '../../assets/buildIcon.svg'
import launch from '../../assets/launchIcon.svg'
import maintain from '../../assets/maintainIcon.svg'
import iterate from '../../assets/iterateIcon.svg'


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
    paragraphContainer: {
        maxWidth: "30em"
    }
}))

export default function Websites() {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: technologyAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Grid container direction="column">
            <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
                <Typography variant={matchesMD ? "h3" : "h2" } style={{ fontFamily: "Pacifico" }} align={matchesMD ? "center" : undefined}>The Revolution</Typography>
            </Grid>
            <Grid item container direction={matchesMD ? "column" :"row"} align="center" className={classes.rowContainer} style={{marginTop:"10em"}}>
                <Grid item lg>
                    <img src={vision} alt="mountain through binoculars" 
                    style={{ maxWidth: matchesSM ? 300 : "40em",marginRight:matchesMD ? 0 :"5em" ,marginBottom:matchesMD ? "5em": 0}} />
                </Grid>

                <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
                    <Grid item>
                        <Typography align={matchesMD ? "center":"right"} variant="h4" gutterBottom>Vision</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center":"right"} variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                     </Typography>
                        <Typography align={matchesMD ? "center":"right"} variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center":"right"} variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center":"right"} variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" :"row"} align="center" className={classes.rowContainer} style={{marginTop:"10em",marginBottom:"10em"}}>
                <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="h4" gutterBottom>Technology</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                     </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container justify="flex-end" lg>
                    <Lottie options={defaultOptions} isStopped={true} style={{ maxWidth: "40em", margin: 0 }} />
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" :"row"} justify="center" className={classes.rowContainer}>
                <Grid item>
                    <Typography variant="h2" gutterBottom>Process</Typography>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" :"row"} className={classes.rowContainer} style={{backgroundColor:"#B3B3B3",height:"90em"}}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="h4" gutterBottom style={{color:"#000",marginTop:"5em"}}>Consultation</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1"  style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={consultation} alt="handshake"
                    style={{ maxWidth: 1000 }}/>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" :"row"} className={classes.rowContainer} style={{backgroundColor:"#FF7373",height:"90em"}}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="h4" gutterBottom style={{color:"#000",marginTop:"5em"}}>Mockup</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1"  style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={mockup} alt="handshake" style={{ maxWidth:matchesMD ? 500 : 1000,width:"100%"}}/>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" :"row"} className={classes.rowContainer} style={{backgroundColor:"#39B54A",height:"90em"}}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="h4" gutterBottom style={{color:"#000",marginTop:"5em"}}>Review</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1"  style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={review} alt="handshake" style={{ maxWidth:matchesMD ? 600 : 1000,width:"100%"}}/>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" :"row"}className={classes.rowContainer} style={{backgroundColor:"#A67C52",height:"90em"}}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="h4" gutterBottom style={{color:"#000",marginTop:"5em"}}>Design</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1"  style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={design} alt="handshake" style={{ maxWidth:matchesMD ? 600 : 1000,width:"100%"}} />
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" :"row"} className={classes.rowContainer} style={{backgroundColor:"#39B54A",height:"90em"}}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="h4" gutterBottom style={{color:"#000",marginTop:"5em"}}>Review</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1"  style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={review} alt="handshake" style={{ maxWidth:matchesMD ? 600 : 1000,width:"100%"}} />
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" :"row"} className={classes.rowContainer} style={{backgroundColor:"#FBB03B",height:"90em"}}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="h4" gutterBottom style={{color:"#000",marginTop:"5em"}}>Build</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1"  style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={build} alt="handshake" style={{ maxWidth:matchesMD ? 600 : 1000,width:"100%"}}/>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" :"row"} className={classes.rowContainer} style={{backgroundColor:"#C1272D",height:"90em"}}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="h4" gutterBottom style={{color:"#000",marginTop:"5em"}}>Launch</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1"  style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={launch} alt="handshake" style={{ maxWidth:matchesMD ? 600 : 1000,width:"100%"}}/>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" :"row"} className={classes.rowContainer} style={{backgroundColor:"#8E45CE",height:"90em"}}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="h4" gutterBottom style={{color:"#000",marginTop:"5em"}}>Maintain</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1"  style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={maintain} alt="maintain" style={{ maxWidth:matchesMD ? 600 : 1000,width:"100%"}}/>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" :"row"} className={classes.rowContainer} style={{backgroundColor:"#29ABE2",height:"90em"}}>
                <Grid item container direction="column" lg>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="h4" gutterBottom style={{color:"#000",marginTop:"5em"}}>Iterate</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1"  style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                        <Typography align={matchesMD ? "center": undefined} variant="body1" style={{color:"#fff",maxWidth:"20em"}} paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf:"center"}}>
                    <img src={iterate} alt="handshake" style={{ maxWidth:matchesMD ? 600 : 1000,width:"100%"}}/>
                </Grid>
            </Grid>
        </Grid>
    )
}