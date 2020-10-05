import Layout from '../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';

// import Link from 'next/link';

const products = [
  { id: '1', name: 'Pink Floyd', price: '100 euros' },
  { id: '2', name: 'ACDC', price: '120 euros' },
];

export default function ProductList() {
  return (
    <>
      <Head>
        <title>Product lists</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <Layout>
        <main>
          <p>
            <ul>
              {products.map((product) => {
                return (
                  <li key={product.id}>
                    <Link href={`/products/${product.id}`}>
                      <a>
                        {product.name} {product.price}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </p>
        </main>
      </Layout>
    </>
  );
}

// export function
