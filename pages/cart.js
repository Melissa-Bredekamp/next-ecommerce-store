import Head from 'next/head';
import nextCookies from 'next-cookies';
import Layout from '../components/Layout';
import { removeItemFromCookie, addItemToCookie } from './utilities/cookies';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Cart(props) {
  // State variable "itemInCart"changes the initial value "props.album" with an updater function "setItemsInCart".
  const [itemsInCart, setItemsInCart] = useState(props.album);
  // console.log(props.albums);
  const [subTotal, setSubTotal] = useState(null);

  /* WORKS BUT NOT IN USE*/
  // useEffect(() => {
  //   const totalPrice = itemsInCart.reduce((acc, itemInCart) => {
  //     const albumInfo = props.albums.find((item) => {
  //       return item.id === itemInCart.id;
  //     });

  //     return acc + albumInfo.price * itemInCart.quantity;
  //   }, 0);

  //   console.log('sumOfProductsPrice', sumOfProductsPrice);

  //   setSubTotal(totalPrice);
  // }, [props.album]);

  // Create a new array from information from the database based on corresponding information from the cookie

  const selectedAlbumInCart = itemsInCart.map((item) => ({
    ...item,
    ...props.albums.find((dbItem) => item.id === dbItem.id),
  }));

  // console.log(itemsInCart);

  if (!selectedAlbumInCart.length) {
    return (
      <div>
        <Head>
          <title>Product</title>
          <link rel="icon" href="/images/favicon.png" />
        </Head>
        <Layout>
          <div className="productNotFoundPage">
            Your shopping cart is waiting to be filled!
          </div>
        </Layout>
      </div>
    );
  }
  const totalPrice = selectedAlbumInCart.reduce(
    (acc, itemInCart) => acc + itemInCart.price * itemInCart.quantity,
    0,
  );
  console.log(selectedAlbumInCart, 'selectedAlbumInCart');
  console.log(totalPrice, 'totalPrice');

  return (
    <div>
      <Head>
        <title>Product</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        <div className="cartInfoPageStyles">
          <div className="checkoutStyles">
            <h1>Shopping Cart</h1>
            <div>
              {selectedAlbumInCart.map((product) => {
                return (
                  <div key={product.id}>
                    <div className="cartLayoutStyles">
                      <div>
                        <img
                          className="cartImageStyles"
                          src={product.productImage}
                          alt="album"
                        />
                      </div>

                      <br />
                      {product.artist}
                      <br />
                      {product.album}
                      <br />
                      {product.price}
                      <br />
                    </div>
                    <br />
                    <br />
                    <input type="number" value={product.quantity} />
                    <div className="checkoutGrid">
                      <p>{product.price * product.quantity} EUR</p>
                      <button
                        className="buttonStyles"
                        onClick={(e) => {
                          // using the updater function to remove an object from the cart
                          setItemsInCart(removeItemFromCookie(product.id));
                        }}
                      >
                        Delete from Cart
                      </button>
                      <Link href="/products/product-lists">
                        <a>
                          <button className="buttonStyles">Back to Shop</button>
                        </a>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              Total: <span>{totalPrice}</span>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { getAlbums } = await import('./utilities/database');
  const albums = await getAlbums();
  const allCookies = nextCookies(context);
  const album = allCookies.album || [];
  // console.log(albums);

  return {
    props: {
      album: album,
      albums,
    },
  };
}
