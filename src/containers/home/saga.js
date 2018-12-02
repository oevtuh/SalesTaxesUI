import {takeLatest, all, call, put} from 'redux-saga/effects';
import {GET_PRODUCTS_LIST, productsListResult} from './actions';
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

export default function* defaultSaga() {
  yield all([yield takeLatest(GET_PRODUCTS_LIST, fetchProductsSaga)]);
}
