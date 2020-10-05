import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function Albums() {
  return (
    <>
      <Head>
        <title>Album</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        <main>
          <h1>This is the album page</h1>
        </main>
      </Layout>
    </>
  );
}
