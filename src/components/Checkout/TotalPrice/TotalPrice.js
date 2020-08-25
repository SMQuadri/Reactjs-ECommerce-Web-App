import React from 'react';

import './TotalPrice.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider/StateProvider';
import { getCartTotal } from '../../StateProvider/reducer';
import stripeCheckout from 'react-stripe-checkout';
import StripeCheckout from 'react-stripe-checkout';

const TotalPrice = () => {

  const [{ cart }, dispatch] = useStateValue();

  const handleToken = (token, addresses) => {
    console.log({ token, addresses });
    alert("Cannot recognize your payment info. Please enter correct data to proceed further.");
  }

  return (
    <div className="totalPrice">
      <CurrencyFormat 

        renderText={(value) => (
          <>
            <span className="totalPrice__items">Total number of Items in your cart: <strong>{cart?.length}</strong></span>
            <span className="totalPrice__total">Total Price of your items: <strong>{`${value}`}</strong></span>
          </>
        )}

        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {/* <button>Proceed to Payment</button> */}
      <div className="totalPrice__button">
        <StripeCheckout 
          stripeKey="pk_test_51HJOaQLdoACKysu0wLwQumXY74LkQqXgEnlGlwVZ4YxqUYt4WbS0T5os1yPD4DYdSxGfLZZednPt3Lef3CiD6Eru00duSbZPBO"
          token={handleToken}
        />
      </div>
    </div>
  );
}

export default TotalPrice;