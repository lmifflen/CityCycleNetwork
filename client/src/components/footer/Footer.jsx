import React from "react";
import "./Footer.scss";
// import { AnimatedSocialIcon } from "react-animated-social-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="bikeknights">© 2022 Bike Knights</div>
           <div className="social">
           <div className="social-follow">Follow Us</div>
      <div class="social-container">
    <ul class="social-icons">
        <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener"><i class="fa fa-facebook"></i></a></li>
        <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener"><i class="fa fa-instagram"></i></a></li>
        <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener"><i class="fa fa-linkedin"></i></a></li>
        <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer noopener"><i class="fa fa-twitter"></i></a></li>
    </ul>
{/*       
      <div className="social">Follow Us
        <AnimatedSocialIcon
          brandName="facebook"
          url="https://www.facebook.com"
          animation="bounce"
          defaultColor="#D1D1D1"
          hoverColor="black"
          width="1.8em"
          animationDuration={0.8}
          style={{ padding: "1.5em" }}
        />
        <AnimatedSocialIcon
          brandName="instagram"
          url="https://www.instagram.com"
          animation="bounce"
          defaultColor="#D1D1D1"
          hoverColor="black"
          width="1.8em"
          animationDuration={0.8}
          style={{ padding: "1.5em" }}
        />
        <AnimatedSocialIcon
          brandName="linkedin"
          url="https://www.linkedin.com"
          animation="bounce"
          defaultColor="#D1D1D1"
          hoverColor="black"
          width="1.8em"
          animationDuration={0.8}
          style={{ padding: "1.5em" }}
        />
      </div> */}
      </div>
      </div>
    </div>
  );
};

export default Footer;
