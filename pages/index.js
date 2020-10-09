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
        <img
          className="moodImageStyles"
          src="/images/moodturntable.jpeg"
          alt=" mood turntable"
        />

        <div className="generalImageContainer">
          <div className="imageContainer">
            <Link href="#a">
              <a>
                <img
                  className="mainImageStyles"
                  src="/images/vinylwall.jpeg"
                  alt="vinylwall"
                />
                <p>Album</p>
              </a>
            </Link>

            <Link href="#a">
              <a>
                <img
                  className="mainImageStyles"
                  src="/images/vinylselection.jpeg"
                  alt="vinylselection"
                />
                <p>Best Sellers</p>
              </a>
            </Link>
            <Link href="#a">
              <a>
                <img
                  className="mainImageStyles"
                  src="/images/bandbuttons.jpeg"
                  alt="bandbuttons"
                />
                <p>The Classics</p>
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
