import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

import '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        <div>
          <div className="container">
            <Link href="#a">
              <a>
                <img
                  className="mainImageStyles"
                  src="/images/bandbuttons.jpeg"
                  alt="band buttons"
                />
                <p>Album of the month</p>
              </a>
            </Link>

            <Link href="#a">
              <a>
                <img
                  className="mainImageStyles"
                  src="/images/turntable.jpeg"
                  alt="turn table"
                />
                <p>Back to the Boogie: Review Time</p>
              </a>
            </Link>
            <Link href="#a">
              <a>
                <img
                  className="mainImageStyles"
                  src="/images/vinylwall.jpeg"
                  alt="vinyl wall"
                />
                <p>Product info</p>
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
