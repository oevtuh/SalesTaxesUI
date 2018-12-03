import {takeLatest, takeEvery, all, call, put} from 'redux-saga/effects';
import {GET_PRODUCTS_LIST, ADD_TO_CART, productsListResult} from './actions';
import api from '../../api';

export function* fetchProductsSaga() {
  try {
    const res = yield call(api.products);

    if (res.ok) {
      yield put(productsListResult(res.data.content.products))
    } else {
      yield put(productsListResult([]));
    }
  } catch (e) {
    console.error(e);
    yield put(productsListResult([]));
  }
}

export function* addToCartSaga(action) {
  const cart = JSON.parse(localStorage.getItem('cart') || '{"products": []}');

  const product = cart.products.find(p => p.id === action.product);

  if (product) {
    product.quantity += 1;
  } else {
    cart.products.push({id: action.product, quantity: 1});
  }

  yield call({
    context: localStorage,
    fn: localStorage.setItem
  }, 'cart', JSON.stringify(cart));
}

export default function* defaultSaga() {
  yield all([
    yield takeLatest(GET_PRODUCTS_LIST, fetchProductsSaga),
    yield takeEvery(ADD_TO_CART, addToCartSaga)
  ]);
}