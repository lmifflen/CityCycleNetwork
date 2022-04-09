import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import "./Navbar.css";
import Img1 from "../../images/bike2.jpg";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <h1>
          City Cycle Network <img className="bike" src={Img1} alt="" />
        </h1>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <p>
              <a href="/">Home</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#mapbox">Map</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#">About</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#">Contact</a>
            </p>
          </li>
          <button className="btn">Sign In</button>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <HiOutlineMenuAlt4 className="icon" />
          )}
        </div>
      </div>
    </div>
  );
}
