import Layout from '../../components/Layout';
import Head from 'next/head';
import nextCookies from 'next-cookies';
import { newProductInCookie } from '../utilities/cookies';
import { useState } from 'react';
import Link from 'next/link';

export default function SingleProduct(props) {
  // const [productId, setProductId] = useState(props.id);
  // console.log(props);

  function findAlbumInfo() {
    // this function loops through the length of the array of albums starting at 0
    // if the id property of an album equals the selected product id, it returns the properties of this id information
    for (let i = 0; i < props.albums.length; i++) {
      if (props.albums[i].id === parseInt(props.id)) {
        return props.albums[i];
      }
    }
  }

  const albumInfo = findAlbumInfo();
  console.log(albumInfo);

  if (!albumInfo) {
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
            This product was not found
          </div>
        </Layout>
      </div>
    );
  }
  // console.log(props);
  // console.log(props.id);
  // console.log(props);

  return (
    <div>
      <div>
        <Head>
          <title>Product</title>
          <link rel="icon" href="/images/favicon.png" />
        </Head>
        <Layout>
          <main>
            <div>
              <div className="productStyles">
                <h1>Product</h1>
                <img src={albumInfo.productImage} alt={props.alt} />
                <br />
                <div>
                  {albumInfo.artist}

                  <br />
                  {albumInfo.album}
                  <br />
                  {albumInfo.year}
                  <br />
                  {albumInfo.price}
                  <br />
                </div>

                <button
                  id={albumInfo.id}
                  className="buttonStyles"
                  onClick={(e) => {
                    setProductId(newProductInCookie(albumInfo.id));
                  }}
                >
                  Add to Cart
                </button>

                <Link href="/products/product-lists">
                  <a>
                    <button className="buttonStyles">Back to Shop</button>
                  </a>
                </Link>
              </div>
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
  // console.log(context.query.id);
  const productCart = allCookies.productCart || [];
  const productId = context.query.id;

  // const props = {};

  // if (albums) props.albums = albums;
  // console.log(productId);
  return {
    props: {
      albums,
      id: productId,
      productCart,
    },
  };
}
