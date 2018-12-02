import productsResponse from './products.json'
import cartResponse from './cart.json'

const response = (data, success = true) => ({
  ok: success,
  data,
});

export const products = () => response(productsResponse);
export const cart = (data, gg) => {
  console.log('cart saga', data);

  const products = productsResponse.content.products.filter(product => data.includes(product.id));
  return response(Object.assign({}, cartResponse, {content: {cart: {products}}}));
};
