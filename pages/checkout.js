import Layout from '../components/Layout';
import Head from 'next/head';

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Product</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        <div className="checkoutPageStyles">
          <div className="checkoutStyles">
            <h1>Checkout</h1>
            <ul>
              <li>Vinyl 1</li>
              <li>Vinyl 2</li>
              <li>Vinyl 3</li>
            </ul>
            <div className="checkoutGrid">
              <button className="buttonStyles">Checkout</button>
              <br />
              <button className="buttonStyles">Back to Shop</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
