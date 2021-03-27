import React from "react";
import "./Footer.css";
import ImgAssets from "../assets/ImgAssets";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_contentContainer">
        <div className="footer_linksContainer">
          <div className="footer_linksRow">
            <img
              className="header_logo_image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png"
              alt="logo.png"
            />
            <div className="link_stack">
              <h5>Company</h5>
              <p>About</p>
              <p>Jobs</p>
              <p>For the Record</p>
            </div>
            <div className="link_stack">
              <h5>Communities</h5>
              <p>For Artists</p>
              <p>Developers</p>
              <p>Advertising</p>
              <p>Investors</p>
              <p>Vendors</p>
            </div>
            <div className="link_stack">
              <h5>useful links</h5>
              <p>Support</p>
              <p>Web Player</p>
              <p>Free Mobile App</p>
            </div>
          </div>
          <div className="footer_socialMedia">
            <img src={ImgAssets.instagramIcon} alt="social" />
            <img src={ImgAssets.twitterIcon} alt="social" />
            <img src={ImgAssets.facebookIcon} alt="social" />
          </div>
        </div>
        <div className="subFooter_container">
          <div className="subFooter_links">
            <p>Legal</p>
            <p>Privacy Center</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
            <p>About Ads</p>
            <p>Additional CA Privacy Disclosures</p>
          </div>
          <div className="subFooter_copyright">
            <p>US</p>
            <p>2020 SPOTUY</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
