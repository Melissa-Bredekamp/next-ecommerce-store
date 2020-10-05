import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function TheClassics() {
  return (
    <>
      <Head>
        <title>The Classics</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        <main>
          <h1>This is the Classics page</h1>
        </main>
      </Layout>
    </>
  );
}
