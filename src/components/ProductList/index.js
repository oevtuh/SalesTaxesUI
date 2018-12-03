import React from 'react';
import Item from '../Item';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class ProductList extends React.Component {
  list() {
    return this.props.list.map(product => (
      <Item {...product} addToCart={this.props.addToCart} key={product.id}></Item>
    ));
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            {this.list()}
          </Col>
        </Row>
      </Grid>
    );
  }
}