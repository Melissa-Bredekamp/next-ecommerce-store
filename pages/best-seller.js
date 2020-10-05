import Layout from '../components/Layout';
import Head from 'next/head';
// import Link from 'next/link';

export default function BestSeller() {
  return (
    <>
      <Head>
        <title>Best sellers</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        <main>
          <h1>This is the Best Sellers page</h1>
        </main>
      </Layout>
    </>
  );
}
