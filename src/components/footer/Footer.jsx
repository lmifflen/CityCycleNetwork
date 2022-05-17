import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="flex-wraper">
    <div className="footer">
      <div className="bikeknights">© 2022 Bike Knights.</div>
      <div className="social">
        <div className="social-follow">Follow Us</div>
        <div className="social-container">
          <ul className="social-icons">
            {/* <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </li> */}
            <li>
              <a
                href="https://www.instagram.com/miffll/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/luke-mifflen/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
