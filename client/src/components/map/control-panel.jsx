import * as React from "react";
import { useState, useEffect } from "react";
import { fromJS } from "immutable";
import MAP_STYLE from "./style.json";
import info from "../info/pathwayInfo";

const defaultMapStyle = fromJS(MAP_STYLE);
const defaultLayers = defaultMapStyle.get("layers");

// console.log(Object.keys(info));
let pathways = Object.keys(info);
// console.log(pathways);
const pathString = pathways.toString().toLowerCase();
// console.log(pathString);
const pathReplacement = pathString.replaceAll(",", "|");
// console.log(pathReplacement);

let cycleWays = new RegExp(pathReplacement);
// console.log(cycleWays);
// let test = "bridge|road|tunnel";
// let testRegEx = new RegExp(test);

const categories = ["Cycleways", "ParkandRide"];

// Layer id patterns by category
const layerSelector = {
  ParkandRide:
    /maxbell|pearceestates|edworthynorth|edworthysouth|homeroad|sandybeach|vistaheights/,
  Cycleways: cycleWays,

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
