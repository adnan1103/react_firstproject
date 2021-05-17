import React,{useState} from 'react'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { categoryTitles } from '../../data/category'
import { Checkbox, FormControlLabel } from '@material-ui/core'


function CategoryFilterItem(props){
    const {category,isChecked,onChangeCategory}=props;
    return(
         <FormControlLabel
          control={
              <Checkbox
              checked={isChecked}
              onChange={event=>onChangeCategory(category,event.target.checked)}
              />
          }
          label={category}
         />
    )
}


export default function CategoryFilter(props) {
    let {selectedCategories,onChangeCategory}=props;
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">Category</Typography>
                {
                    categoryTitles.map(category => 
                        <CategoryFilterItem 
                        key={category}
                        category={category}
                        isChecked={selectedCategories.includes(category)}
                        onChangeCategory={onChangeCategory}
                        />
                        )
                }
            </CardContent>
        </Card>
    )

}