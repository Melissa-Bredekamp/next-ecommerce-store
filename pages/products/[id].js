import Layout from '../../components/Layout';
import Head from 'next/head';
import nextCookies from 'next-cookies';
import {
  addItemToCookie,
  newProductInCookie,
  sumTotalOfProducts,
} from '../utilities/cookies';
import { useEffect, useState } from 'react';

export default function SingleProduct(props) {
  const sumTotalOfProductsCalculator = sumTotalOfProducts();
  const [numberOfProductsInCart, setNumberOfProductsInCart] = useState(
    props.sumOfProducts,
  );
  // const [productCount, setProductCount] = useState(0);

  // const [artist, setArtist] = useState(productInfo.artist);
  // const [album, setalbum] = useState(productInfo.album);
  // const [year, setYear] = useState(productInfo.year);
  // const [price, setPrice] = useState(productInfo.price);
  // const [productImgage, setProductImgage] = useState(productInfo.productImgage);
  // const [altTag, setAltTag] = useState(productInfo.alt);

  const [productFromCookie, setProductFromCookie] = useState(
    props.productCookies,
  );
  const [productInCart, setProductInCart] = useState([]);
  const id = props.id;
  const [cookieCount, setCookieCount] = useState(0);
  const [productId, setProductId] = useState(parseInt(props.id));

  function findAlbumInfo() {
    for (let i = 0; i < props.albums.length; i++) {
      if (props.albums[i].id === productId) {
        return props.albums[i];
      }
    }
  }

  const albumInfo = findAlbumInfo();
  console.log(albumInfo);
  // console.log(props.ProductInCart);

  // useEffect(() => {
  //   setProductInCart(newProductInCookie(productId));
  //   setCookieCount(productInCart[0]?.count);
  // }, [props.albums, productFromCookie, setProductInCart, addItemToCookie]);
  //     return {
  //       ...product,
  //       inCart: productFromCookie.includes(product.id),
  //     };
  //   }),
  // );
  // }, [props.albums, productFromCookie, setProductsInCart, newProductInCookie]);

  // function handleChange(event) {
  //   setCookieCount(event.target.value);
  // }
  // const product = props.albums.find((currentProduct) => {
  //   if (currentProduct.id === props.id) {
  //     return true;
  //   }
  //   return false;
  // });
  if (!props.albums) {
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
      <div>
        <Head>
          <title>Product</title>
          <link rel="icon" href="/images/favicon.png" />
        </Head>
        <Layout>
          <main>
            {/* key={props.album} */}
            <div className="productStyles">
              <h1>Product</h1>
              <img src={props.productImage} alt={props.alt} />
              <br />
              <div>
                {props.id}
                {/* <br />
                <br /> */}
                {props.artist}
                <br />
                {props.album}
                <br />
                {props.year}
                <br />
                {props.price}
                <br />
              </div>
              <input
                id="number"
                type="number"
                placeholder="0"
                onChange={(e) => {
                  setCookieCount(e.target.value);
                  addItemToCookie(props.id);
                }}
              ></input>

              <button
                id={props.id}
                className="buttonStyles"
                onClick={(e) => {
                  newProductInCookie(props.id);
                }}
              >
                Add to Cart
              </button>
              {/* <AddToCart id={id} cookieCount={cookieCount}></AddToCart> */}

              <button className="buttonStyles">Back to Shop</button>
            </div>
          </main>
        </Layout>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { getAlbums } = await import('../utilities/database');
  const albums = await getAlbums();
  const allCookies = nextCookies(context);
  console.log(context);
  const productCart = allCookies.productCart || [];

  const numberOfProducts = Object.values(allCookies);
  const reducer = (accumulator, currentValue) =>
    parseInt(accumulator) + parseInt(currentValue);

  function calculateSumOfProducts() {
    if (numberOfProducts.length > 0) {
      return numberOfProducts.reduce(reducer);
    } else {
      return 0;
    }
  }

  const sumTotalOfProducts = calculateSumOfProducts();

  const productId = parseInt(context.query.id);
  const ProductInCart = allCookies.product || [];

  return {
    props: {
      albums,
      // sumTotalOfProducts,
      id: context.query.id,
      newProductCartFromCookie: productCart,
      allCookies,
      productCookies: ProductInCart,
      id: productId,
    },
  };
}
