export const initialState = {
  basket: [],
  user: null
}; 

// get the total price of the items in the cart
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => amount + (Number(item.number) * Number(item.priceDigit)), 0);

const reducer = (state, action) => {
  switch (action.type) {
      case "REMOVE_SINGLE_PRODUCT":
      return {
        basket: [...action.items]
      };
      case "NUMBER_OF_SINGLE_PRODUCT":
        return {
          basket: [...action.items]
        };
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item]
      };
      case "SINGLE_CART_ITEM_INCREASE":
        return {
          basket: [...action.items]
        }
      case "SET_USER":
      return {
        ...state,
        user: action.user
      };
      default:
        return state;
    }
}

export default reducer;