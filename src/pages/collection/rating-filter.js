import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Grid from "@material-ui/core/Grid";
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    card: {
        marginTop: '15px'
    }
})

export default function RatingFilter(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h6">Rating</Typography>
                {/* <Grid container>
                    
                </Grid> */}
            </CardContent>
        </Card>
    )

}