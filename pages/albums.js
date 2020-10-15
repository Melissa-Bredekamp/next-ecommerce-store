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
          <div>
            <h1>Albums</h1>
          </div>
          <div className="albumStyles">
            <div ClassName="individualProductStyles">
              <Link href="./[products].js">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/beastie-boys.png"
                    alt="License to Ill Album"
                  />
                  <p className="artistStyles">Beastie Boys</p>
                  <p>License to Ill</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div ClassName="individualProductStyles">
              <Link href="./[id].js">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/bon-jovi.jpeg"
                    alt="New Jersey Album"
                  />
                  <p className="artistStyles ">Bon Jovi</p>
                  <p>New Jersey </p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div ClassName="individualProductStyles">
              <Link href="./[products].js">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/iron-maiden.jpg"
                    alt="Somewhere in Time Album"
                  />
                  <p className="artistStyles">Iron Maiden</p>
                  <p>Somewhere in Time</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div ClassName="individualProductStyles">
              <Link href="./[products].js">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/prince.png"
                    alt="Purple Rain Album"
                  />
                  <p className="artistStyles">Prince</p>
                  <p>Purple Rain</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div ClassName="individualProductStyles">
              <Link href="./[products].js">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/public-enemy.jpg"
                    alt="It Takes a Nation of Millions to Hold Us Back Album"
                  />
                  <p className="artistStyles">Public Enemy</p>
                  <p>It Takes a Nation of Millions to Hold Us Back</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div ClassName="individualProductStyles">
              <Link href="./[products].js">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/guns-n-roses.jpg"
                    alt="Appetite For Destruction"
                  />
                  <p className="artistStyles">Guns 'n Roses</p>
                  <p>Appetite For Destruction</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div ClassName="individualProductStyles">
              <Link href="./[products].js">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/david-bowie.jpg"
                    alt="Scary Monsters"
                  />
                  <p className="artistStyles">David Bowie</p>
                  <p>Scary Monsters</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div ClassName="individualProductStyles">
              <Link href="./[products].js">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/bruce-springsteen.jpg"
                    alt="Born in the USA Album"
                  />
                  <p className="artistStyles">Bruce Springsteen</p>
                  <p>Born in the USA</p>
                  <p>120 EUR</p>
                </a>
              </Link>
            </div>
            <div ClassName="individualProductStyles">
              <Link href="./[products].js">
                <a>
                  <img
                    className="productImageStyles"
                    src="/product-images/salt-and-pepa.png"
                    alt="Disintegration Album"
                  />
                  <p className="artistStyles">Salt 'n Pepa</p>
                  <p>Hot cool and Vicious</p>
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
