import { Grid,Typography, Button} from '@material-ui/core';
import Card from '@material-ui/core/Card'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getProductById } from '../../data/products'


export default function Detail() {
    let { id } = useParams();
    let history = useHistory();
    let product = getProductById(id);

    if (!product) {
        history.push("/");
        return null;
    }

    return (
        // <div>
        //    <h1>Show detail of Product whose id={product.id}</h1>
        //    <h1>Show detail of Product whose id={product.title}</h1>
        //    <h1>Show detail of Product whose id={product.price}</h1>
        // </div>
        <Grid container direction="column">
            <Grid item>
                <Grid container direction="row" style={{marginTop:"4em"}}>
                    <Grid item sm={4}>
                        <img alt="Show the image" src={product.image} width="420px" style={{marginLeft:"4em"}}/>
                    </Grid>
                    <Grid item sm={6}>
                        <Card style={{padding:"4em",backgroundColor:"lightgrey"}}>
                            <Typography  style={{fontSize:"20px"}}><span style={{fontWeight:"bold",marginRight:"4em"}}>Title:</span>{product.title}</Typography><hr/>
                            <Typography  style={{fontSize:"20px"}}><span style={{fontWeight:"bold",marginRight:"3em"}}>SKU-ID:</span>{product.id}</Typography><hr/>
                            <Typography  style={{fontSize:"20px"}}><span style={{fontWeight:"bold",marginRight:"1em"}}>Description:</span>{product.description}</Typography><hr/>
                            <Typography  style={{fontSize:"20px"}}><span style={{fontWeight:"bold",marginRight:"4em"}}>Price:</span>{product.price}</Typography>
                        </Card>
                        <Button style={{marginTop:"2em",color:"White",backgroundColor:"Red",borderRadius:50}}  variant="contained">Add to Card</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
