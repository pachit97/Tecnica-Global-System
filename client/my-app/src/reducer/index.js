import { GET_PRODUCTS, GET_CART } from "../action/consts";

const initialState = {
  products: [],
  productsCopy: [],
  cart: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsCopy: action.payload,
      };
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
}
