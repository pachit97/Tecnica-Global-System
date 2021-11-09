import axios from 'axios';
import { GET_PRODUCTS,GET_CART } from './consts';

export function getAllProducts(){
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3001/product/')
        dispatch({ type: GET_PRODUCTS, payload: res.data })
    }
}

export function getAddToCart(id){
    return async(dispatch) => {
        const res = await axios.post('http://localhost:3001/cart/', {id})
        dispatch({type: GET_CART, payload: res.data})
    }
}

export function getAllCart(){
    return async(dispatch) => {
        const res = await axios.get('http://localhost:3001/cart/')
        dispatch({type: GET_CART, payload: res.data})
    }
}