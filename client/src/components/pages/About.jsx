import React from "react";
import './About.css'
import Slideshow from './Slideshow'

const About = () => {
  return (
    <div>
      <div className="about">
        <h1 className="h1"> About</h1>
        <br/>
        <p1 className="p">
          Summers in Calgary are lovely, and cycling is one of the best ways to
          take advantage of the city's outstanding natural visual splendour.
          It's also one of the most convenient methods to get around town.
          Cycling's additional health benefits make it a popular choice among
          active people. There are various bike lanes and routes in Calgary,
          ranging from flat, simple terrain to mountain biking.
        </p1>
        <br />
        <br />

        <p2 className="p">
          City Cycle Network is aimed at providing a clear, visually beautiful,
          and intuitive map of cycle paths in Calgary. Calgarians and tourists
          may easily envision and plan their leisure bike journeys using the
          highlighted interesting bike routes. The City Cycle Network also
          facilitates connections with local businesses located along bike
          paths, which may be beneficial while out for a leisurely ride.
        </p2>
      </div>
      <div className="img">
        <Slideshow/>
      </div>
    </div>
  );
};

export default About;
