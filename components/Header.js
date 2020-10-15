import Link from 'next/link';

export default function Header() {
  return (
    <div className="headerDiv">
      <nav className="navFlexStyles">
        <Link href="/albums">
          <a>Albums</a>
        </Link>

        <Link href="/best-seller">
          <a>Best Sellers</a>
        </Link>

        <Link href="/the-classics">
          <a>The Classics</a>
        </Link>

        <div className="logoflexStyles">
          <Link href="/">
            <a>
              <img
                className="logoImageStyles"
                src="/images/logo.jpg"
                alt="Vinyl Shop Logo"
              />
            </a>
          </Link>
        </div>
        <Link href="/about-us">
          <a>About Us</a>
        </Link>
        <div>
          <Link href="/cart">
            <a>
              <img
                className="cartStyles"
                src="/images/tote.png"
                alt="shopping cart"
              />
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
