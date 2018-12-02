import React from 'react';
import {fetchProducts, addProductToCart} from './actions';
import {connect} from 'react-redux';
import {compose} from 'redux';
import saga from './saga';
import injectSaga from '../../utils/injectSaga';
import ProductList from '../../components/ProductList';

export class Home extends React.Component {
  componentWillMount() {
    console.log('home will mount');
    this.props.fetchProducts();
  }

  componentDidMount() {
    console.log('home did mount');
  }

  shouldComponentUpdate() {
    console.log('should update', this.props.products);
    return !this.props.products.length;
  }

  addToCart(product) {
    console.log('add to cart');
    this.props.addProductToCart(product);

    localStorage.setItem('cart', JSON.stringify({
      products: this.props.cart
    }));
  }

  render() {
    console.log('home render', this.state);
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