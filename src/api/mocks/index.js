import cartResponse from './cart.json'
import productsResponse from './products';

const response = (data, success = true) => ({
  ok: success,
  data,
});

export const products = () => response(productsResponse);
export const cart = (data) => {
  cartResponse.content.cart.products = productsResponse.content.products.filter(product => data.some(p => p.id === product.id));
  return response(cartResponse);
};
