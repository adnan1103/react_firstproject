import {products} from '../data/products';

export const getVisibleProducts=(selectedCategories)=>{
    if(!selectedCategories.length)
    return products;
 return products.filter(product=>selectedCategories.includes(product.category));
   
}