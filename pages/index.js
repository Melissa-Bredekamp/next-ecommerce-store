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
            <div>
              <Link href="/albums">
                <a>
                  <img
                    className="mainImageStyles"
                    src="/images/vinylwall.jpeg"
                    alt="vinylwall"
                  />
                  <p>Album</p>
                </a>
              </Link>
            </div>

            <div>
              <Link href="/best-seller">
                <a>
                  <img
                    className="mainImageStyles"
                    src="/images/vinylselection.jpeg"
                    alt="vinylselection"
                  />
                  <p>Best Sellers</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/the-classics">
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
        </div>
      </Layout>
    </div>
  );
}
