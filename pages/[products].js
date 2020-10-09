import Layout from '../components/Layout';
import Head from 'next/head';

export default function Product(props) {
  return (
    <Layout>
      <Head>
        <title>Product</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      Product
    </Layout>
  );
}
