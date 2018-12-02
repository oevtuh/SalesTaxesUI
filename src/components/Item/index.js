import React from 'react';
import Media from 'react-bootstrap/lib/Media';
import Button from 'react-bootstrap/lib/Button';
import Well from 'react-bootstrap/lib/Well';
import './item.css';

export default class Item extends React.Component {

  thumbnail() {
    return `https://api.adorable.io/avatars/285/${Math.random().toString(36).substring(7)}.png`;
  }

  formatMoney(amount) {
    return `$${amount}`;
  }

  render() {
    return (
      <Well className="product-item">
        <Media>
          <Media.Heading>{this.props.name}</Media.Heading>
          <Media.Heading>
            <img width={64} height={64} src={this.thumbnail()} alt="thumbnail"/>
          </Media.Heading>
          <Media.Body>
            <div className="desc">
              {this.props.description}
            </div>
            <div className="price">
              {this.formatMoney(this.props.price)}
            </div>
            <br/>
            <Button bsStyle="primary" bsSize="small" block onClick={() => this.props.addToCart(this.props.id)}>
              Add to cart
            </Button>
          </Media.Body>
        </Media>
      </Well>);
  }
}