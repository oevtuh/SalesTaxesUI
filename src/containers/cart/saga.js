import {takeLatest, all, call, put} from 'redux-saga/effects';
import {GET_CART, cartResult, CLEAR_CART} from './actions';
import api from '../../api';

export function* fetchCartData() {
  const defaultCart = {
    total: 0,
    taxes: 0,
    products: []
  };

  try {
    const cart = yield call({
      context: localStorage,
      fn: localStorage.getItem
    }, 'cart');

    const products = (JSON.parse(cart) || {}).products || [];

    const res = yield call(api.cart, products);

    if (res.ok) {
      yield put(cartResult(res.data.content.cart))
    } else {
      yield put(cartResult(defaultCart));
    }
  } catch (e) {
    console.error(e);
    yield put(cartResult(defaultCart));
  }
}

export function* clearCartSaga() {
  yield localStorage.clear();
}

export default function* defaultSaga() {
  yield all([
    yield takeLatest(GET_CART, fetchCartData),
    yield takeLatest(CLEAR_CART, clearCartSaga)
  ]);
}
