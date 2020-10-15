import Head from 'next/head';
import Layout from '../components/Layout';

export default function aboutUs() {
  return (
    <div className="aboutUsImageStyles">
      <Head>
        <title>About us</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        <div>
          <img
            className="aboutPageImageStyles"
            src="/images/vinylchic.jpeg"
            alt=" lady on floor surrounded by vinyls"
          />
          <img
            className="aboutPageImageStyles"
            src="/images/turntable.jpeg"
            alt=" Turntable"
          />
          <img
            className="aboutPageImageStyles"
            src="/images/vinylshop.jpeg"
            alt="vinyl shop"
          />
          <h1>About Us</h1>
          <p className="aboutUsTextStyles">
            We love the classics. We love the warm and fuzzy feeling it gives
            us, those memories of the days when music made us lose control. We
            love the crackling sound of vinyl playing and the staisfactory
            silence when when it reaches the end. We love the cliches and the
            absolute variety. We love it all and we wanted to share this warm
            and fuzzy with evryone who wants a piece of it. Here's to
            sustainable memories and sustainable music!
          </p>
        </div>
      </Layout>
    </div>
  );
}
