// {
//   id: "100000",
//   image: "1",
//   title: "Nike Metcon 6",
//   before: "170",
//   after: "140",
//   category: "Gym Shoe",
// },

import Metcon6 from '../AllShoes/Men/MenGym/metcon6.jpg';

export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) =>
cart?.reduce((amount, item) => item.after + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }

    case 'ADD_TO_CART':
      return { 
        ...state,
        cart: [...state.cart, action.item]
      }
      break;
    
    case 'REMOVE_FROM_CART':
      let newCart = [...state.cart];
      const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
      if(index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in your cart`
        );
      }
      return { 
        ...state, 
        cart: newCart,
      }
      break;

    default:
      return state;
  }
}

export default reducer;