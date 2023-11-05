import React from "react";
import "./footer.css";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer max-width">
      <div className="top">
        <div className="top1">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="zomato-logo"
            className="footer-logo"
          />
          <div className="lang cur-po">
            <select>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="USA">USA</option>
              <option value="France">France</option>
              <option value="Brazil">Brazil</option>
              <option value="Englang">Englang</option>
              <option value="Russia">Russia</option>
            </select>
            <select>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Polish">Polish</option>
            </select>
          </div>
        </div>
        <div className="bottom1">
          <div className="bottomContent">
            <h4>ABOUT ZOMATO</h4>
            <p>Who We Are</p>
            <p>Blog</p>
            <p>Work With Us</p>
            <p>Investor Relations</p>
            <p>Report Fraud</p>
            <p>Press Kit</p>
            <p>Contact Us</p>
          </div>
          <div className="bottomContent">
            <h4>ZOMAVERSE</h4>
            <p>Zomato</p>
            <p>Blinkit</p>
            <p>Feeding India</p>
            <p>Hyperpure</p>
            <p>Zomaland</p>
          </div>
          <div className="bottomContent">
            <h4>FOR RESTAURANTS</h4>
            <p>Partner With Us</p>
            <p>Apps For You</p>
          </div>
          <div className="bottomContent">
            <h4>LEARN MORE</h4>
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms</p>
            <p>Sitemap</p>
          </div>
          <div className="bottomContent">
            <h4>SOCIAL LINKS</h4>
            <div className="links cur-po">
              <FaLinkedin />
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
              <FaFacebook />
            </div>
            <img
              src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
              alt="App-Store"
            />
            <img
              src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
              alt="Google-Play"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <p>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2023 © Zomato™ Ltd. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
