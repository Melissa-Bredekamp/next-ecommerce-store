import Layout from '../components/Layout';
import Head from 'next/head';

export default function product() {
  return (
    <>
      <Head>
        <title>Product</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        <main>
          <h1>This is the dynamic product page</h1>
        </main>
      </Layout>
    </>
  );
}
