import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from "@material-ui/core/styles";
import { Slider } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        marginTop: '15px'
    },
    slider:{
        marginTop:'30px',
        marginBottom:'5px'
    }
})

export default function PriceFilter() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h6">Price</Typography>
                <Slider className={classes.slider}
                />
            </CardContent>
        </Card>
    )

}