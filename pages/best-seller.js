import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function BestSeller() {
  return (
    <>
      <Head>
        <title>Best sellers</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        <main>
          <div>
            <h1>Best Sellers</h1>
          </div>
          <div className="albumStyles">
            <div>
              <Link href="#a">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/guardians-of-the-galaxy.jpg"
                    alt="Awesome Mix Volume 1 Album"
                  />
                  <p className="artistStyles">Guardians of the Galaxy</p>
                  <p>Awesome Mix Volume 1</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="#a">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/acdc.jpeg"
                    alt="Back in Black Album"
                  />
                  <p className="artistStyles">ACDC</p>
                  <p>Back in Black</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="#a">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/dirty-dancing.jpg"
                    alt="Dirty Dancing Album"
                  />
                  <p className="artistStyles">Dirty Dancing</p>
                  <p>Dirty Dancing</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="#a">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/madonna.png"
                    alt="Like a Virgin Album"
                  />
                  <p className="artistStyles">Madonna</p>
                  <p>Like a Virgin</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="#a">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/pet-shop-boys.jpg"
                    alt="Please Album"
                  />
                  <p className="artistStyles">Pet Shop Boys</p>
                  <p>Please</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>

            <div>
              <Link href="#a">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/queen.jpg"
                    alt="Works Album"
                  />
                  <p className="artistStyles">Queen</p>
                  <p>Works</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="#a">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/sade.jpg"
                    alt="Promise Album"
                  />
                  <p className="artistStyles">Sade</p>
                  <p>Promise</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="#a">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/whitney-houston.png"
                    alt="Whitney"
                  />
                  <p className="artistStyles">Whitney Houston</p>
                  <p>Whitney</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="[id].js">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/pink-floyd.jpeg"
                    alt="Prism Album"
                  />
                  <p className="artistStyles">Pink Floyd</p>
                  <p>Prism</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
