import React from 'react'
import './CheckoutProducts.css';
import Star from './Star';
import {useStateValue} from './StateProvider';


function CheckoutProducts({id, title, price, rating, image}) {

    const [{basket}, dispatch] = useStateValue();
const removeFromBasket=()=>{
    dispatch({
        type:"REMOVE_ITEM_TO_BASKET",
        id:id,
    });
};

    return (
        <div className="checkout-products">
          <img className="checkout-products-image" src={image} alt=""/>
            <div className="checkout-products_info">
                <p className="checkout-products-title">{title}</p>
                <p className="checkout-products-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
               
            <div className="checkout-products-rating">
                {
                    Array(rating)
                    .fill()
                    .map((_,i) => (
                    <h2 key={i}><Star/></h2>))
                }
           </div>
            <button onClick={removeFromBasket}>Remove from Cart</button>
           </div>
        </div>
    );
}

export default CheckoutProducts;
