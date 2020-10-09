import cookie from 'js-cookie';

export function getSelectProductFromCookies() {
  const selectProduct = cookie.getJSON('selectProduct') || [];
  return selectProduct;
}

export function newProductInCookie(id) {
  const selectProduct = getSelectProductFromCookies();

  let newSelectedProduct;

  if (selectProduct.includes(id)) {
    newSelectedProduct = selectProduct.filter(
      (showNewSelectedProduct) => showNewSelectedProduct !== id,
    );
  } else {
    newSelectedProduct = [...selectProduct, id];
  }

  cookie.set('selectProduct', newSelectedProduct);

  return newSelectedProduct;
}
