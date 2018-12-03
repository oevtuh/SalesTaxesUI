import React from 'react';
import {fetchProducts, addProductToCart} from './actions';
import {connect} from 'react-redux';
import {compose} from 'redux';
import saga from './saga';
import injectSaga from '../../utils/injectSaga';
import ProductList from '../../components/ProductList';

export class Home extends React.Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  shouldComponentUpdate() {
    return !this.props.products.length;
  }

  addToCart(product) {
    this.props.addProductToCart(product);
  }

  render() {
    return (
      <ProductList list={this.props.products} addToCart={e => this.addToCart(e)}></ProductList>
    );
  }
}

const mapStateToProps = state => ({
  products: state.home.products,
  cart: state.home.cart
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  addProductToCart: product => dispatch(addProductToCart(product))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withSaga = injectSaga({key: 'home', saga});

export default compose(
  withSaga,
  withConnect
)(Home)