import React from 'react';
import { useStateValue } from '../StateProvider/StateProvider';

import './Checkout.css';
import ShoeItem from './ShoeItem/ShoeItem';
import TotalPrice from './TotalPrice/TotalPrice';

const Checkout = () => {

  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      .
      <div className="checkout__top">
        {cart?.length === 0 ? (
          <div className="checkout__empty">
            <span className="checkout__empty1">Your Shopping Cart is Empty</span>
            <span className="checkout__empty2">You have no items in your cart. To buy one or more items, click <strong>'Add To Cart'</strong> next to the item.</span>
          </div>
        ) : (
          <div className="checkout__notEmpty">
            <span>Your Shopping Cart</span>
            {cart?.map(item => (
              <ShoeItem 
                id={item.id}
                image={item.image}
                title={item.title}
                before={item.before}
                after={item.after}
                category={item.category}
              />
            ))}
          </div>
        )}
      </div>
      {cart?.length > 0 && (
        <div className="checkout__bottom">
          <TotalPrice />
        </div>
      )}
    </div>
  );
}

export default Checkout;