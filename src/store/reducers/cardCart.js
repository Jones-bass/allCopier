import productsList from "./product";

const INITIAL_STATE = {
  value: 0,
  products: productsList,
  Cart: [],
};

export default function cardCart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.value === 0) {
        let item = {
          id: action.product.id_product,
          text: action.product.text,
          price: action.product.price,
          title: action.product.title,
          image: action.product.image,
          quantity: 1,
        };
        state.Cart.push(item);
      } else {
        let check = false;
        state.Cart.map((item, key) => {
          if (item.id === action.product.id_product) {
            state.Cart[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let item = {
            id: action.product.id_product,
            text: action.product.text,
            price: action.product.price,
            title: action.product.title,
            image: action.product.image,
            quantity: 1,
          };
          state.Cart.push(item);
        }
      }
      return {
        ...state,
        value: state.value + 1,
      };
    case "ADD_ITEM":
      action.product.quantity++;
      return {
        ...state,
        value: action.cart.value + 1,
      };
    case "REMOVE_ITEM":
      if (action.product.quantity > 1) {
        action.product.quantity--;
        return {
          ...state,
          value: action.cart.value - 1,
        };
      } else {
        return state;
      }
    case "DELETE_ITEM":
      return {
        ...state,
        value: action.cart.value - action.product.quantity,
        Cart: state.Cart.filter((item) => {
          return item.id !== action.product.id;
        }),
      };
    case "CHANGE_CART":
      return (state = action.localCart);
    default:
      return state;
  }
  return state;
}
