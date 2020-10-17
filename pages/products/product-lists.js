import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import Layout from '../../components/Layout';
import { products } from '../utilities/database';
import { newProductInCookie, removeFromCookie } from '../utilities/cookies';

export default function ProductList(props) {
  const [productCart, setProductCart] = useState(
    props.newProductCartFromCookie,
  );
  function updatedProductCart(id) {
    const newCartList = removeFromCookie(id);
    setProductCart(newCartList);
  }

  // const [cartTotal, setCartTotal] = useState(0);

  // addToCart = (product) => {
  //   setCartTotal({
  //     cart: [...this.state.cart, product],
  //   });
  //   addToCookie.setItem('cart', JSON.stringify(cartTotal.cart));
  // };

  return (
    <div>
      <Head>
        <title>Product lists</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        <main>
          <ul className="productSelectStyles">
            {products.map((product) => {
              return (
                <div>
                  <li key={product.id}>
                    <Link href={`/products/${product.id}`}>
                      <a className="productListsImagesStyles">
                        <img
                          className="dynamicPageImageStyles"
                          src={product.img}
                          alt="album"
                        />
                        <div className="productListsTextStyles">
                          {product.id}
                          <br />
                          {product.artist}
                          <br />
                          {product.album}
                          <br />
                          {product.price}
                          <br />
                        </div>
                      </a>
                    </Link>
                    <div className="buttonFlexStyles">
                      <button
                        id={product.id}
                        className="buttonStyles"
                        onClick={(e) => {
                          newProductInCookie(product.id);
                        }}
                      >
                        Add to Cart
                      </button>

                      <button className="buttonStyles">Back to Shop</button>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </main>
      </Layout>
    </div>
  );
}

export function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  console.log(context);
  const productCart = allCookies.productCart || [];

  return {
    props: {
      newProductcartFromCookie: productCart,
    },
  };
}
