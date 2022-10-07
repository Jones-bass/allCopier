import { combineReducers } from 'redux';
import carrinho from './carrinho';

import products from './products';

export default combineReducers({
    products,
    carrinho
})
