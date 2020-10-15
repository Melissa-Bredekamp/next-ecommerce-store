import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footerStyles">
        <div className="footerRowStyles">
          <Link href="/about-us">
            <h2>ABOUT US</h2>
          </Link>
          <p>Our Mission Statement</p>
          <p>FAQ</p>
          <p>Terms, Privacy and License</p>
        </div>

        <div className="footerRowStyles">
          <h2>FOLLOW US</h2>
          <div className="iconStyles">
            <img
              className="socialMediaStyles"
              src="/images/twitter.png"
              alt="twitter"
            />

            <img
              className="socialMediaStyles"
              src="/images/instagram.png"
              alt="instagram"
            />

            <img
              className="socialMediaStyles"
              src="/images/pintrest.png"
              alt="pinterest"
            />

            <img
              className="socialMediaStyles"
              src="/images/facebook.png"
              alt="facebook"
            />
          </div>
        </div>
        <div>
          <div className="footerRowStyles">
            <h2>CONTACT US</h2>

            <p>letsgroovetonight@pinkfreud.shop</p>
            <p>0660 970043 00</p>
            <div>
              <p>Electric Avenue 1</p>
              <br />
              <p>Rock City</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
