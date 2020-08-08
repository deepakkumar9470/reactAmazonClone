import React from 'react';
import './Checkout.css';
import {useStateValue} from './StateProvider';
import prime from '../images/prime.png';
import CheckoutProducts from './CheckoutProducts';
import Subtotal from './Subtotal';
function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
          <div className="checkout-left">
            <img className="checkout_ad" src={prime} alt="Prime Time"/>
            
             {basket?.length === 0 ?
                 (<div className="checkout-empty-title">
                    <h2>Shopping Cart<br></br>
                    Your Shopping Cart is empty.</h2>
                    <p>You have items saved to buy later. 
                    To buy one or more now, click "Move to cart" next to the item.
                    </p>
                 </div>) :(
                     
                 <div>
                  <h2 className="checkout-title">Your Shopping Cart</h2>
                     {basket.map(item=>(
                        <CheckoutProducts 
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                        />
                         ))}
                
                 </div>
                 )}   
        </div>

         {basket.length > 0 && (
             <div className="checkout-right">
              <Subtotal />
             </div>

         )}
   </div>
       
        
    );
}

export default Checkout;
