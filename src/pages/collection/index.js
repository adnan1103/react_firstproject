import React, { useState } from 'react'
import Grid from "@material-ui/core/Grid";
import { ProductListing } from './product-listing'
import CategoryFilter from './category-filter'
import PriceFilter from './price-filter';
import RatingFilter from './rating-filter';
import { getVisibleProducts } from '../../api/products-api';
import SearchBar from '../collection/searchbar'
import VerticalToggleButtons from '../collection/viewbutton'

export default function Collection() {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const products = getVisibleProducts(selectedCategories);

    const onChangeCategoryHandler = (category, isChecked) => {
        if (isChecked)
            setSelectedCategories([...selectedCategories, category]);
        else
            setSelectedCategories(selectedCategories.filter(cat => cat !== category))
    }

    return (
        <Grid container spacing={2} style={{ marginBottom: "3em", marginTop: "3em", padding: "4em" }}>
            <Grid item lg={2} style={{ paddingRight: "2em" }}>
                <CategoryFilter
                    selectedCategories={selectedCategories}
                    onChangeCategory={onChangeCategoryHandler}
                />
                <PriceFilter />
                <RatingFilter />
            </Grid>
            <Grid item lg={10}>
                <Grid container direction="column">
                    <Grid item style={{marginBottom:"4em"}}>
                        <Grid container direction="row">
                            <Grid item lg={6}>
                                {/* <SearchBar /> */}
                            </Grid>
                            <Grid item lg={6}>
                                {/* <VerticalToggleButtons/> */}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <ProductListing
                            products={products}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
