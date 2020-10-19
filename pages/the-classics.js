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
          <div>
            <h1>The Classics</h1>
          </div>
          <div className="albumStyles">
            <div>
              <Link href="#a">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/bob-marley.jpg"
                    alt="Legend: The Best of Bob Marley and the Wailers Album"
                  />
                  <p className="artistStyles">Bob Marley</p>
                  <p>Legend: The Best of Bob Marley and the Wailers</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="#a">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/paul-simon.jpg"
                    alt="Graceland Album"
                  />
                  <p className="artistStyles">Paul Simon</p>
                  <p>Graceland</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="#a">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/depeche-mode.jpg"
                    alt="Music for the Masses Album"
                  />
                  <p className="artistStyles">Depeche Mode</p>
                  <p>Music for the Masters</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="#a">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/lionel-richie.jpg"
                    alt="Dancing on the Ceiling Album"
                  />
                  <p className="artistStyles">Lionel Richie</p>
                  <p>Dancing on the Ceiling Album</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="#a">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/michael-jackson.png"
                    alt="Thriller Album"
                  />
                  <p className="artistStyles">Micheal Jackson</p>
                  <p>Thriller</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>

            <div>
              <Link href="#a">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/nirvana.jpg"
                    alt="Bleach Album"
                  />
                  <p className="artistStyles">Nirvana</p>
                  <p>Bleach</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="#a">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/run-dmc.jpg"
                    alt="Raising Hell Album"
                  />
                  <p className="artistStyles">Run DMC</p>
                  <p>Raising Hell</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="#a">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/tracy-chapman.png"
                    alt="Tracy Chapman Album"
                  />
                  <p className="artistStyles">Tracy Chapman</p>
                  <p>Tracy Chapman</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div>
              <Link href="#a">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/wham.jpeg"
                    alt="Make it Big Album"
                  />
                  <p className="artistStyles">Wham</p>
                  <p>Make it Big</p>
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
