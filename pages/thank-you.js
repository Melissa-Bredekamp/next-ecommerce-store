import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function User() {
  return (
    <Layout>
      <Head>
        <title>Payment</title>
      </Head>

      <div className="thankYouStyles">
        <div className="productListsTextStyles">
          <div>
            <h1>Thank you for shopping at Pink Freud Vinyl Shop!</h1>
            <p>
              Your awesome 80's hits are on their way. <br />
            </p>
            <p>
              Please check your email for details
              <br /> regarding shipping and payment.
            </p>
            <Link href="/">
              <a>
                <button className="thankYoubuttonStyles">Back to Shop</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
