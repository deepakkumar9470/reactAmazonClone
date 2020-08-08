import React from 'react';
import './Products.css';
import {useStateValue} from './StateProvider';
import Star from './Star';
function Products({id,title,price,rating,image}) {
    const [{}, dispatch] = useStateValue();

   const addtoBasket = ()=>{
       dispatch({
        type:"ADD_ITEM_TO_BASKET",
        item:{
            id:id,
            title:title,
            price:price,
            rating:rating,
            image:image,
        },
       });
       
   };

    return (
        <div className="products">
           <div className="products-info">
            <p>{title}</p>
            <div className="product-price">
                <small>$</small>
                <strong>{price}</strong>
            </div>
            <div className="product-rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                    <Star/>))
                }
             </div>
           </div>
           <img src={image} alt="laptop"/>
           <button onClick={addtoBasket}>Add to cart</button> 
        </div>
    )
}

export default Products;
