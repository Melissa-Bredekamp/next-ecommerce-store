import Head from 'next/head';
import Layout from '../components/Layout';
import Cookie from 'js-cookie';
import React, { useState } from 'react';
// import nextCookies from 'next-cookies';
// import Link from 'next/link';

export default function Checkout() {
  const [input, setInput] = useState('');

  function buy() {
    Cookie.remove('cart');
    Cookie.remove('total');
  }

  const regexText = /[a-zA-Z]/g;
  const regexNumber = /[0-9/]/g;

  function checksTypeText(e) {
    if (e.target.value.match(regexText)) {
      setInput(e.target.value);
      // console.log(input);
    } else {
      e.target.value = '';
    }
  }

  function checksTypeNumber(e) {
    if (e.target.value.match(regexNumber)) {
      setInput(e.target.value);
      // console.log(input);
    } else {
      e.target.value = '';
    }
  }
  return (
    <div>
      <Head>
        <title>Checkout Page</title>
        <link rel="icon" href="/siteicon.png" />
      </Head>
      <Layout>
        <div className="checkoutStyles">
          <h1>Contact information and payment</h1>
          <div className="wholeBox">
            <div className="contactInfo">
              <h3>Shipping address</h3>
              <span>
                <label htmlFor="name"> Full name: </label>
                <input
                  data-cy="full-name"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  onChange={checksTypeText}
                ></input>
              </span>
              <span>
                <label htmlFor="email"> Email: </label>
                <input
                  id="email"
                  type="email"
                  placeholder="youremail@gmail.com"
                ></input>
              </span>
              <span>
                <label htmlFor="address"> Address: </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Your Address"
                ></input>
              </span>
              <span>
                <label htmlFor="zip"> Zip-code: </label>
                <input
                  id="zip"
                  placeholder="zip-code"
                  type="text"
                  maxLength="8"
                  onChange={checksTypeNumber}
                ></input>
              </span>
              <span>
                <label htmlFor="city"> City: </label>
                <input id="city" placeholder="City" type="text"></input>
              </span>
            </div>
            <div className="payment">
              <h3>Payment info</h3>
              <span>
                <label htmlFor="namecard"> Name on card: </label>
                <input
                  id="namecard"
                  type="text"
                  placeholder="Name on Card"
                  onChange={checksTypeText}
                ></input>
              </span>
              <br />
              <span>
                <label htmlFor="cardnumber"> Credit card number: </label>
                <input
                  id="cardnumber"
                  type="text"
                  placeholder="0000-0000-0000-0000"
                  maxLength="16"
                  onChange={checksTypeNumber}
                ></input>
              </span>
              <br />
              <span>
                <label htmlFor="expdate"> Expiry date: </label>
                <input
                  id="expdate"
                  type="text"
                  placeholder="00/00"
                  onChange={checksTypeNumber}
                  maxLength="5"
                ></input>
              </span>
              <br />
              <span>
                <label htmlFor="cvv"> CVV: </label>
                <input
                  id="cvv"
                  type="number"
                  placeholder="000"
                  onChange={checksTypeNumber}
                ></input>
              </span>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
