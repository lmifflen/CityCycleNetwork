import info from "./pathwayInfo";
import "./Info.css";
import BowCyclepath from "../../images/BowCyclepath.jpg";
import { useMap } from "react-map-gl";
import { useState } from "react";


const Info = (props) => {

  
          
  const { feature }  = props;

  const matchingKey = Object.keys(info).find((key) => {
    return feature?.some((vector) => {
      return vector.sourceLayer === key;
    });
  });
  console.log(feature)
  if (!matchingKey) {
    return (
      <div>
        Calgary communities, parks and natural areas are connected by an
        extensive network of multi-use pathways available for all Calgarians to
        enjoy, whether for walking, running, in-line skating or cycling. In
        fact, Calgary has the most extensive urban pathway and bikeway network
        in North America. The City maintains approximately 1000 km of regional
        pathways and 96 km of trails.
        <div>
          <img className="img" src={BowCyclepath} alt="" />
        </div>
        City Cycle Networks mission is to simplify the navigation of the pathway
        system so Calgarians can spend less time figuring out how to navigate
        the pathways and spend more time getting fresh air and exercise. We
        highlight seperated cyclepaths predominatly through parks, and through
        the city centre.
      </div>
    );
  }

  const matchingInfo = info[matchingKey];

  return (
    <div>
      <div className="name">{matchingInfo.name}</div>
      <div className="image">{matchingInfo.image}</div>
      <div className="description">{matchingInfo.description}</div>
    </div>
  );
};

export default Info;
