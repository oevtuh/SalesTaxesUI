import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import saga from './saga';
import injectSaga from '../../utils/injectSaga';
import Table from 'react-bootstrap/lib/Table';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import {fetchCart} from './actions';

export class Cart extends React.Component {
  componentWillMount() {
    console.log('home will mount');
    this.props.fetchCart([1, 3]);

  }

  componentDidMount() {
    console.log('cart did mount', this.props);
  }

  list() {
    return (this.props.cart.products || []).map((product, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      ));
  }

  render() {
    return (
      <div className="container">
        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          {this.list()}
          </tbody>
        </Table>
        <ListGroup>
          <ListGroupItem header="Total">${this.props.cart.total}</ListGroupItem>
          <ListGroupItem header="Taxes">${this.props.cart.taxes}</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
});

const mapDispatchToProps = dispatch => ({
  fetchCart: data => {
    console.log('fetchCart', data);
    return dispatch(fetchCart(data))
  }
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withSaga = injectSaga({key: 'cart', saga});

export default compose(
  withSaga,
  withConnect
)(Cart)