import Link from 'next/link';

export default function Header() {
  return (
    <div className="divStyles">
      <header className="headerStyles">
        <div className="navTestStyles">
          <nav>
            <Link href="/albums">
              <a>Albums</a>
            </Link>
            <Link href="/best-seller">
              <a>Best Sellers</a>
            </Link>
            <Link href="/the-classics">
              <a>The Classics</a>
            </Link>
          </nav>
        </div>

        <div>
          {/* <Link href="#a">
            <a>
              <img
                className="logoImageStyles"
                src="/images/logo.jpg"
                alt="Vinyl Shop Logo"
              />
            </a>
          </Link> */}
        </div>
        <div>
          <img
            className="cartStyles"
            src="/images/tote.png"
            alt="shopping cart"
          />
        </div>
      </header>
    </div>
  );
}
