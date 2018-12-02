export const GET_PRODUCTS_LIST = 'home/GET_PRODUCTS_LIST';
export const PRODUCTS_LIST_RESULT = 'home/PRODUCTS_LIST_RESULT';
export const ADD_TO_CART = 'home/ADD_TO_CART ';

export const fetchProducts = () => ({type: GET_PRODUCTS_LIST});

export const productsListResult = products => ({type: PRODUCTS_LIST_RESULT, products});

export const addProductToCart = product => ({type: ADD_TO_CART, product});