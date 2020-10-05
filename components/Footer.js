export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <div>
            <h2 className="aboutUsStyles">ABOUT US</h2>
            <a ref="#a">Our Mission Statement</a>
            <a ref="#a">FAQ</a>
            <a ref="#a">Terms, Privacy and License</a>
          </div>
          <div>
            <h2>EMAIL</h2>
            <p>xyz@email.shop</p>
          </div>
          <h2 className="followUsStyles">FOLLOW US</h2>
        </div>
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
        </div>
      </div>
    </footer>
  );
}
