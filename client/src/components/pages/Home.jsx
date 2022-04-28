import React from "react";
import Comments from "../comments/Comments";
import Main from "../main/Main";
import MapView from "../map/MapView";
import Weather from "../Weather/Weather";
import './Home.css'


const Home = () => {
  return (
    <>
      <Main />
      <MapView />
      <h9 className="container">
      <Comments />
      <Weather />
      </h9>
    </>
  );
};

export default Home;
