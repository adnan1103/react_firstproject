import React from 'react'
import  Grid  from "@material-ui/core/Grid";
import { ProductCard } from "./product-card";

export function ProductListing(props) {
    let {products}=props;
    return (
        <Grid container spacing={4}>
            {
                products.map(product1 => (
                    <Grid item md={3} key={product1.id}>
                        <ProductCard  product={product1} />
                    </Grid>
                    ))
            }
        </Grid>
    )
}
