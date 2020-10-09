import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import Layout from '../../components/Layout';
import { newProductInCookie } from '../utilities/database';

export default function ProductList(props) {
  const [selectProductFromCookie, setSelectProductFromCookie] = useState(
    props.selectProductFromCookie,
  );

  const [
    productsWithSelectProductData,
    setProductsWithSelectProductData,
  ] = useState(props.products);

  useEffect(() => {
    setProductsWithSelectProductData(
      props.products.map((product) => {
        return {
          ...product,
          selectProduct: selectProductFromCookie.includes(product.id),
        };
      }),
    );
  }, [
    props.products,
    selectProductFromCookie,
    setProductsWithSelectProductData,
  ]);

  return (
    <>
      <Head>
        <title>Product lists</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <Layout>
        <main>
          <ul>
            {productsWithSelectProductData.map((product) => {
              return (
                <li key={product.id}>
                  <Link href={`/products/${product.id}`}>
                    <a>
                      {product.artist} {product.album} {product.price}
                      {product.quantity}
                    </a>
                  </Link>

                  <button
                    onClick={() => {
                      const selectProduct = newProductInCookie(product.id);
                      setSelectProductFromCookie(selectProduct);
                    }}
                  >
                    {product.selectProduct ? 'Unselect' : 'Select'}
                  </button>
                </li>
              );
            })}
          </ul>
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { getProducts } = await import('../utilities/database');
  const products = await getProducts();

  const allCookies = nextCookies(context);

  const selectProduct = allCookies.selectProduct || [];

  return {
    props: {
      selectProductFromCookie: products,
    },
  };
}
