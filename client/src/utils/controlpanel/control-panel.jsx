import * as React from "react";
import { useState, useEffect } from "react";
import { fromJS } from "immutable";
import MAP_STYLE from "./style.json";
import info from "../../components/info/pathwayKeys";
import "./control-panel.css";

const defaultMapStyle = fromJS(MAP_STYLE);
const defaultLayers = defaultMapStyle.get("layers");


let pathways = Object.keys(info);

const pathString = pathways.toString().toLowerCase();

const pathReplacement = pathString.replaceAll(",", "|");


let cycleWays = new RegExp(pathReplacement);


const categories = ["Cycleways", "ParkandRide", "BikeRoutes"];

// Layer id patterns by category
const layerSelector = {
  ParkandRide:
    /maxbell|pearceestates|edworthynorth|edworthysouth|homeroad|sandybeach|vistaheights/,
  Cycleways: cycleWays,
  BikeRoutes: /fishcreekroute|shouldicebownessloop/,

  // ParkandRide: "maxbell",
};

function getMapStyle({ visibility }) {
  const layers = defaultLayers.filter((layer) => {
    const id = layer.get("id");
    return categories.every(
      (name) => visibility[name] || !layerSelector[name].test(id)
    );
  });
  // console.log(layers)

  return defaultMapStyle.set("layers", layers);
}

function StyleControls(props) {
  const [visibility, setVisibility] = useState({
    Cycleways: true,

    ParkandRide: true,

    BikeRoutes: false,
  });

  // const [color, setColor] = useState({
  //   water: "#DBE2E6",
  //   parks: "#E6EAE9",
  //   buildings: "#c0c0c8",
  //   roads: "#ffffff",
  //   labels: "#78888a",
  //   background: "#EBF0F0",
  // });

  useEffect(() => {
    props.onChange(getMapStyle({ visibility }));
  }, [visibility]);

  const onVisibilityChange = (name, value) => {
    setVisibility({ ...visibility, [name]: value });
  };

  return (
    <div className="control-panel">
      <h3>Toggle layers</h3>

      <hr />
      {categories.map((name) => (
        <div key={name} className="input">
          <label>{name}</label>
          <input
            type="checkbox"
            checked={visibility[name]}
            onChange={(evt) => onVisibilityChange(name, evt.target.checked)}
          />
        </div>
      ))}
    </div>
  );
}

export default React.memo(StyleControls);
