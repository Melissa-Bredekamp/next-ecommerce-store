import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import Layout from '../../components/Layout';
import {
  newProductInCookie,
  removeFromCookie,
  selectProductFromCookies,
} from '../utilities/cookies';

export default function ProductList(props) {
  const [productCart, setProductCart] = useState(
    props.newProductCartFromCookie,
  );
  // const sumTotalOfProductsCalculator = sumTotalOfProducts();
  // const [productsInCart, setProductsInCart] = useState(props.props.albums);

  // useEffect(() => {
  //   setProductsInCart(
  //     props.props.albums.map((product) => {
  //       return {
  //         ...product,
  //         inCart: productFromCookie,
  //       };
  //     }),
  //     );
  //   }, [props.props.albums, productFromCookie, setProductsInCart]);

  function updatedProductCart(id) {
    const newCartList = removeFromCookie(id);
    setProductCart(newCartList);
  }

  return (
    <div>
      <Head>
        <title>Product lists</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        <main>
          <ul className="productSelectStyles">
            {props.albums.map((product) => {
              return (
                <div>
                  <li key={product.id}>
                    <Link href={`/products/${product.id}`}>
                      <a className="productListsImagesStyles">
                        <img
                          className="dynamicPageImageStyles"
                          src={product.productImage}
                          alt={product.alt}
                        />
                        <div className="productListsTextStyles">
                          {/* {product.id} */}
                          {/* <br /> */}
                          {product.artist}
                          <br />
                          {product.album}
                          <br />
                          {product.year}
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
                      <button
                        className="buttonStyles"
                        onClick={(e) => {
                          updatedProductCart(product.id);
                        }}
                      >
                        Delete
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

export async function getServerSideProps(context) {
  const { getAlbums } = await import('../utilities/database');
  const albums = await getAlbums();
  // const id = context.query.id;
  const allCookies = nextCookies(context);
  console.log(context);
  const productCart = allCookies.productCart || [];
  // const numberOfProductsAsStrings = Object.values(allCookies);
  // const intNumberOfProducts = numberOfProductsAsStrings.map((string) => parseInt(string),
  // );

  // function calculateSumOfProducts(arrayOfValues: number[]): number {
  //   if (arrayOfValues.length > 0) {
  //     let total = arrayOfValues[0];
  //     for (let i = 1; i < arrayOfValues.length; i++) {
  //       total += arrayOfValues[i];
  //     }
  //     return total;
  //   } else {
  //     return 0;
  //   }
  // }

  // const sumTotalOfProducts = calculateSumOfProducts (intNumberOfProducts);

  const productInCart = allCookies.product || [];

  return {
    props: {
      // props,
      // id,
      albums,
      // sumTotalOfProducts,
      allCookies,
      productCookies: productInCart,
      newProductcartFromCookie: productCart,
    },
  };
}
