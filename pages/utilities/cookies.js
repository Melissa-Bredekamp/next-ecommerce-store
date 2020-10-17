import Cookie from 'js-cookie';

export function selectProductFromCookies() {
  const productCart = Cookie.getJSON('productCart') || [];
  return productCart;
}

export function newProductInCookie(id) {
  const productCart = selectProductFromCookies();

  const newProductCart = [...productCart, { id: id }];

  Cookie.set('productCart', newProductCart);

  return newProductCart;
}

export function removeFromCookie(id) {
  const cart = selectProductFromCookies();
  const newProductCart = cart.filter((item) => item.id !== id);

  Cookie.set('productCart', newProductCart);
  console.log('removed item, updated cart', newProductCart);

  return newProductCart;
}

export function addItemToCookie(id) {
  const cart = selectProductFromCookies();
  const newProductCart = cart.filter((item) => item.id === id);

  Cookie.set('productCart', newProductCart);

  return newProductCart;
}
