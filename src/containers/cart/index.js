import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import saga from './saga';
import injectSaga from '../../utils/injectSaga';
import Table from 'react-bootstrap/lib/Table';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import {fetchCart, clearCart} from './actions';

export class Cart extends React.Component {
  componentWillMount() {
    this.props.fetchCart();
  }

  onClearClick() {
    this.props.clearCart();
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  list() {
    return (this.props.cart.products || []).map((product, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{product.name}</td>
          <td>{product.quantity}</td>
          <td>${product.amount}</td>
        </tr>
      ));
  }

  render() {
    return (
      <div className="container">
        <ButtonToolbar>
          <Button bsStyle="danger" onClick={() => this.onClearClick()}>Clear cart</Button>
        </ButtonToolbar>
        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          {this.list()}
          </tbody>
        </Table>
        <ListGroup>
          <ListGroupItem header="Total">${this.props.cart.total || 0}</ListGroupItem>
          <ListGroupItem header="Taxes">${this.props.cart.taxes || 0}</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
  clearCart: state.cart.clearCart
});

const mapDispatchToProps = dispatch => ({
  fetchCart: data => dispatch(fetchCart(data)),
  clearCart: () => dispatch(clearCart())
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