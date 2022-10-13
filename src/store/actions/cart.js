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

const RemoveItem = (cart, product) => {
  return{
      type: 'REMOVE_ITEM',
      cart,
      product
  }
}

const DeleteItem = (cart, product) => {
  return{
      type: 'DELETE_ITEM',
      cart,
      product   
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Add,
  AddItem,
  RemoveItem,
  DeleteItem
}