import Head from 'next/head';
import nextCookies from 'next-cookies';
import Layout from '../components/Layout';
import {
  selectProductFromCookies,
  removeFromCookie,
  addItemToCookie,
} from './utilities/cookies';
import { useState } from 'react';

export default function Cart(props) {
  const [productCart, setProductCart] = useState(
    props.newProductCartFromCookie,
  );
  // const sumTotalOfProductsCalculator = sumTotalOfProducts();
  // const [allProducts, setAllProducts] = useState(props.props.products);
  // const [items, setItems] = useState(cartProducts);

  const cookieCart = selectProductFromCookies();

  const cartProducts = cookieCart.map((item) => {
    if (item.count > 0) {
      return item.id;
    }
    item;
  });

  // const [count, setCount] = useState(0);

  function updatedProductCart(id) {
    const newCartList = removeFromCookie(id);
    setProductCart(newCartList);
  }

  function addItemToProductCart(id) {
    const newAddedItemList = addItemToCookie(id);
    setProductCart(newAddedItemList);
  }

  function handleChange(event) {
    setCount(event.target.value);
  }

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
                const product = props.albums.find((currentProduct) => {
                  return currentProduct.id === item.id;
                });
                return (
                  <div>
                    <div className="cartLayoutStyles">
                      <div>
                        <img
                          className="cartImageStyles"
                          src={props.productImage}
                          alt="album"
                        />
                      </div>
                      <br />
                      {props.id}
                      <br />
                      {props.artist}
                      <br />
                      {props.album}
                      <br />
                      {props.price}
                      <br />
                    </div>
                    <br />
                    <input
                      id="number"
                      type="number"
                      placeholder="0"
                      onChange={(e) => {
                        setCount(e.target.value);
                        addItemToProductCart(props.id);
                      }}
                      // onChange={(handleChange) => {
                      //   setCount;
                      // }}
                    ></input>

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

export async function getServerSideProps(context) {
  const { getAlbums } = await import('../utilities/database');
  const albums = await getAlbums();
  const allCookies = nextCookies(context);
  console.log(context);
  const productCart = allCookies.productCart || [];

  return {
    props: {
      albums,
      newProductCartFromCookie: productCart,
      addItemToCookie: productCart,
      newAddedItemListFromCookie: productCart,
    },
  };
}
