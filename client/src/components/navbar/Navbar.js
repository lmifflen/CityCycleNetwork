import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import "./Navbar.css";
import Img1 from "../../images/bike2.jpg";
import { useAuth0 } from "@auth0/auth0-react";


export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { user } = useAuth0();

  return (
    <div className="navbar">
      <div className="container">
        <h1>
          City Cycle Network <img className="bike" src={Img1} alt="" />
        </h1>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <p>
              <a className="menu" href="/">Home</a>
            </p>
          </li>
          <li>
            <p>
              <a className="menu" href="/#mapbox">Map</a>
            </p>
          </li>
          <li>
            <p>
              <a className="menu" href="/about">About</a>
            </p>
          </li>
          <li>
            <p>
              <a className="menu" href="/">Contact</a>
            </p>
          </li>
          <li>{isAuthenticated && (<p><b>Hello {user.nickname}</b></p>)}</li>
          <div>
            {!isAuthenticated && (
              <button className="btn" onClick={() => loginWithRedirect({})}>
                Log in
              </button>
            )}

            {isAuthenticated && (
              <button className="btn" onClick={() => logout()}>
                Log out
              </button>
            )}
          </div>
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
