import Cookie from 'js-cookie';

export function getCookie() {
  const productCart = Cookie.getJSON('album') || [];
  return productCart;
}

export function newProductInCookie(id) {
  const productCart = getCookie();
  // This function find the matching object
  const matchingProduct = productCart.find((product) => product.id === id);
  let newProductCart;
  // When there is no matching object this adds one object to the array
  if (!matchingProduct) {
    newProductCart = [...productCart, { id, quantity: 1 }];
  } else {
    // If there is a matching object this increments the quantity on object
    newProductCart = productCart.map((product) => {
      if (product.id === id) {
        product.quantity = product.quantity + 1;
      }
      return product;
    });
  }

  Cookie.set('album', newProductCart);

  return newProductCart;
}

export function removeItemFromCookie(id) {
  const cart = getCookie();

  const newProductCart = cart.filter((item) => item.id !== id);

  Cookie.set('album', newProductCart);
  console.log('removed item, updated cart', newProductCart);

  return newProductCart;
}

export function addItemToCookie(id) {
  const cart = getCookie();
  const addProduct = 1;

  const newProductCart = cart.map((item) => {
    if (item.id === id) {
      item.count += addProduct;
    }
    return item;
  });

  Cookie.set('album', newProductCart);
  // console.log(productCart);

  return newProductCart;
}

export function sumTotalOfProducts() {
  const cart = getCookie();

  const findCartValues = cart.map((item) => item.count);

  const reducer = (accumulator, currentValue) =>
    parseInt(accumulator) + parseInt(currentValue);

  function calculateSumOfProducts() {
    if (cart.length > 0) {
      return findCartValues.reduce(reducer);
    } else {
      return 0;
    }
  }
  return calculateSumOfProducts();
}
