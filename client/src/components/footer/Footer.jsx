import React from "react";
// import { FaFacebookF, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';
import "./Footer.css";
import { AnimatedSocialIcon } from "react-animated-social-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="bikeknights">© 2022 Bike Knights</div>
      
      <div className="social">Follow Us
      {/* <div className="follow"></div> */}
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
      </div>
    </div>
  );
};

export default Footer;
