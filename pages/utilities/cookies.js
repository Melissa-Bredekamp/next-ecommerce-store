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
  const addProduct = 1;

  const newProductCart = cart.map((item) => {
    if (item.id === id) {
      item.count += addProduct;
    }
    return item;
  });

  Cookie.set('productCart', newProductCart);

  return newProductCart;
}

export function sumTotalOfProducts() {
  const cart = selectProductFromCookies();

  const findCartValues = cart.map((item) => item.count);

  const reducer = (accumulator, currentValue) =>
    parseInt(accumulator) + parseInt(currentValue);

  function calculateSumOfProducts() {
    if (cart.length < 0) {
      return findCartValues.reduce(reducer);
    } else {
      return 0;
    }
  }
  return calculateSumOfProducts();
}
