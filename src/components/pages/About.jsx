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
        City Cycle Network is aimed at providing a clear, visually beautiful,
          and intuitive map of cycle paths in Calgary. Calgarians and tourists
          may easily envision and plan their leisure bike journeys using the
          highlighted interesting bike routes. The City Cycle Network also
          facilitates connections with local businesses located along bike
          paths, which may be beneficial while out for a leisurely ride.
        </p1>
        <br />
        <br />

        <p2 className="p">
          This project was created in part for <a href='https://www.inceptionu.com/'>InceptionU's</a> Cohort 8 Project 2. The project was create by <a href="https://www.linkedin.com/in/luke-mifflen/">Luke Mifflen</a>, <a href="https://www.linkedin.com/in/sanja-ivansic/">Sanja Ivansic</a>, and Adnan Ather.
        </p2>
      </div>
      <div className="img">
        <Slideshow/>
      </div>
    </div>
  );
};

export default About;
