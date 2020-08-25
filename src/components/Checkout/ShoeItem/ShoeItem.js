import React from 'react';

import './ShoeItem.css';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { useStateValue } from '../../StateProvider/StateProvider';

const ShoeItem = ({ id, image, title, before, after, category }) => {

  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  }

  return (
    <div className="shoeItem">
      <img src={image} alt="shoe" />
      <div className="shoeItem__right">
        <span className="shoeItem__title">{title}</span>
        <span className="shoeItem__category">{category}</span>
        {/* <div className="shoeItem__price">
          <span className="shoeItem__before">Before: <span className="shoeItem__beforePrice">{before}</span></span>
          <span className="shoeItem__after">After: <span className="shoeItem__afterPrice">{after}</span></span>
        </div> */}
        <span className="shoeItem__price">Price:  <span className="shoeItem__afterPrice"> ${after}</span></span>
        <div className="shoeItem__remove" onClick={removeFromCart} >
          <span className="shoeItem__click">Remove From Cart</span>
          <ShoppingCartRoundedIcon />
        </div>
      </div>
    </div>
  );
}

export default ShoeItem;