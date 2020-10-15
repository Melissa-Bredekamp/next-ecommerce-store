import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import Layout from '../../components/Layout';
import { products } from '../utilities/database';
import { newProductInCookie, removeFromCookie } from '../utilities/cookies';

export default function ProductList(props) {
  const [selectProduct, setSelectProduct] = useState(props.selectProduct);

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
                <li key={product.id}>
                  <Link href={`/products/${product.id}`}>
                    <a>
                      <img src={product.image} alt="album" />
                      {product.id}
                      <br />
                      {product.artist}
                      <br />
                      {product.album}
                      <br />
                      {product.price}
                      <br />
                    </a>
                  </Link>
                  <button
                    id={product.id}
                    className="buttonStyles"
                    onClick={(e) => {
                      newProductInCookie(product.id);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="buttonStyles"
                    onClick={(e) => {
                      removeFromCookie(product.id);
                    }}
                  >
                    Delete from Cart
                  </button>
                  <button className="buttonStyles">Back to Shop</button>
                </li>
              );
            })}
          </ul>
        </main>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  console.log(context);
  const selectProduct = allCookies.selectProduct || [];
  const id = allCookies.id || [];

  return {
    props: {
      id: id,
      selectProduct: selectProduct,
    },
  };
}
