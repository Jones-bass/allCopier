import { combineReducers } from 'redux';
import cardCart from './cardCart';

import productsList from './productsList';

export default combineReducers({
    productsList,
    cardCart
})
