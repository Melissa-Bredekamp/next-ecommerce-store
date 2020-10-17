import Head from 'next/head';
import { products } from './utilities/database';
import nextCookies from 'next-cookies';
import Layout from '../components/Layout';
import {
  selectProductFromCookies,
  removeFromCookie,
} from './utilities/cookies';
import { useState } from 'react';

export default function Cart(props) {
  const [productCart, setProductCart] = useState(
    props.newProductCartFromCookie,
  );
  function updatedProductCart(id) {
    const newCartList = removeFromCookie(id);
    setProductCart(newCartList);
  }

  // const productCart = selectProductFromCookies();
  return (
    <div>
      <Head>
        <title>Product</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        <div className="checkoutPageStyles">
          <div className="checkoutStyles">
            <h1>Checkout</h1>
            <div>
              {productCart.map((item) => {
                const product = products.find((currentProduct) => {
                  return currentProduct.id === item.id;
                });
                return (
                  <div>
                    <div className="cartLayoutStyles">
                      <div>
                        <img
                          className="cartImageStyles"
                          src={product.img}
                          alt="album"
                        />
                      </div>
                      <br />
                      {product.id}
                      <br />
                      {product.artist}
                      <br />
                      {product.album}
                      <br />
                      {product.price}
                      <br />
                    </div>
                    <br />
                    <input id="number" type="number"></input>
                    <br />
                    <div className="checkoutGrid">
                      <button
                        className="buttonStyles"
                        onClick={(e) => {
                          updatedProductCart(product.id);
                        }}
                      >
                        Delete from Cart
                      </button>
                      <button className="buttonStyles">Back to Shop</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
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
      newProductCartFromCookie: productCart,
    },
  };
}
