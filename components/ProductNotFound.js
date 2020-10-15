import Head from 'next/head';
import Layout from './Layout';

export default function Header() {
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
