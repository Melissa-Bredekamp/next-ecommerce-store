import Layout from '../../components/Layout';
import Head from 'next/head';
import { products } from '../utilities/database';
import nextCookies from 'next-cookies';
import { newProductInCookie, removeFromCookie } from '../utilities/cookies';

export default function SingleProduct(props) {
  const product = products.find((currentProduct) => {
    if (currentProduct.id === props.id) {
      return true;
    }
    return false;
  });
  if (!product) {
    return (
      <div>
        <Head>
          <title>Product</title>
          <link rel="icon" href="/images/favicon.png" />
        </Head>
        <Layout>
          <div className="productNotFoundPage">
            Oops...
            <br />
            Sorry about that. <br />
            This product is not found
          </div>
        </Layout>
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>Product</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        <main>
          <div className="productStyles">
            <h1>Product</h1>
            <img src={product.img} alt="album" />
            <br />
            {product.id}
            <br />
            <br />
            {product.artist}
            <br />
            <br />
            {product.album}
            <br />
            <br />
            {product.price}
            <br />
            <br />
            <button
              id={product.id}
              className="buttonStyles"
              onClick={(e) => {
                newProductInCookie(product.id);
              }}
            >
              Add to Cart
            </button>
            <button className="buttonStyles">Delete</button>
            <button className="buttonStyles">Back to Shop</button>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  // console.log(context);
  const selectProduct = allCookies.selectProduct || [];

  return {
    props: { id: context.query.id, selectProduct },
  };
}
