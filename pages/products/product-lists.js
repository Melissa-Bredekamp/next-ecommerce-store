import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import Layout from '../../components/Layout';
import {
  newProductInCookie,
  removeItemFromCookie,
  getCookie,
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

  // function updatedProductCart(id) {
  //   const newCartList = removeItemFromCookie(id);
  //   setProductCart(newCartList);
  // }

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
                          newProductInCookie(product.id, product.quantity);
                          // console.log(product.productImage);
                        }}
                      >
                        Add to Cart
                      </button>
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

  const allCookies = nextCookies(context);
  // console.log(context);
  const productCart = allCookies.productCart || [];

  const productInCart = allCookies.product || [];

  return {
    props: {
      albums,
      allCookies,
      productCookies: productInCart,
      newProductcartFromCookie: productCart,
    },
  };
}
