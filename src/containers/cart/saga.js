import {takeLatest, all, call, put, select} from 'redux-saga/effects';
import {GET_CART, cartResult} from './actions';
import api from '../../api';

export function* fetchCartData(products = []) {
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

    // console.log('local cart', products);
    const res = yield call(api.cart, JSON.parse(cart).products);

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

export default function* defaultSaga(products) {
  console.log('defaultSaga', products);
  yield all([yield takeLatest(GET_CART, fetchCartData.bind(null, products))]);
}
