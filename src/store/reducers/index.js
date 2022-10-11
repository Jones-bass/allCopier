import { combineReducers } from 'redux';
import cardCart from './cardCart';

import products from './products';

export default combineReducers({
    products,
    cardCart
})
