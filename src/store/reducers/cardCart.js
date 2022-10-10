import productsList from "./productsList";

const INITIAL_STATE = {
  value: 0,
  productsList,
  Cart: []
};

export default function cardCart(state = INITIAL_STATE, action) {
  if (action.type === "ADD_TO_CART") {
    console.log(state.productsList)
    return {
      ...state,
      value: state.value + 1,
    };
  }
  return state;
}
