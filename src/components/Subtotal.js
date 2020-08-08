import React from 'react'
import './Subtotal.css';
import {useStateValue} from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './Reducer';
function Subtotal() {
    const [{basket}] = useStateValue();
    return (
        <div className="subtotal">
            
                <CurrencyFormat
                  renderText={(value) =>(
                      <div>
                        <p className="total-subtotal">Subtotal({basket.length} items) : 
                          <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal-gift">
                         <input type="checkbox"/>This order contains a gift
                        </small>
                      </div>
                  )}
                    displayScale={2}
                    value={getBasketTotal(basket)} 
                    displayType={'text'} 
                    thousandSeparator={true} 
                    prefix={"$"}
                />
                <button>Proceed to Checkout</button>

        </div>
    );
}

export default Subtotal;
