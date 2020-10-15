import Head from 'next/head';
import { products } from './utilities/database';
import nextCookies from 'next-cookies';
import Layout from '../components/Layout';
import {
  selectProductFromCookies,
  removeFromCookie,
} from './utilities/cookies';

export default function Cart(props) {
  const productCart = selectProductFromCookies();
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
                    <div>
                      <img src={product.image} alt="album" />
                      {product.id}
                      <br />
                      {product.artist}
                      <br />
                      {product.album}
                      <br />
                      {product.price}
                      <br />
                    </div>

                    <div className="checkoutGrid">
                      <button className="buttonStyles">
                        Add one more Item
                      </button>
                      <br />
                      <button
                        className="buttonStyles"
                        onClick={(e) => {
                          removeFromCookie(product.id);
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
  const productCart = allCookies.productCart || [];
  return {
    props: {
      productCart: productCart,
    },
  };
}
