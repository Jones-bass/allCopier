const Add = (cart, product) => {
  return{
      type: 'ADD_TO_CART',
      cart,
      product
  }
}

const AddItem = (cart, product) => {
  return{
      type: 'ADD_ITEM',
      cart,
      product
  }
}

export default {
  Add,
  AddItem
}