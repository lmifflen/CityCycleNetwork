import * as React from "react";
import { useState, useEffect } from "react";
import { fromJS } from "immutable";
import MAP_STYLE from "./style.json";

const defaultMapStyle = fromJS(MAP_STYLE);
const defaultLayers = defaultMapStyle.get("layers");


const categories = [
  "labels",
  "roads",
  "buildings",
  "parks",
  "water",
  "ParkandRide",
];

// Layer id patterns by category
const layerSelector = {
  ParkandRide: /maxbell|pearceestates|edworthynorth|edworthysouth|homeroad|sandybeach|vistaheights/, 
  water: /water/,
  parks: /park/,
  buildings: /building/,
  roads: /bridge|road|tunnel/,
  labels: /label|place|poi/,
};



function getMapStyle({ visibility}) {
  const layers = defaultLayers
    .filter((layer) => {
      const id = layer.get("id");
      return categories.every(
        (name) => visibility[name] || !layerSelector[name].test(id)
      );
    })
    console.log(layers)

  return defaultMapStyle.set("layers", layers);
}

function StyleControls(props) {
  const [visibility, setVisibility] = useState({
    water: true,
    parks: true,
    buildings: true,
    roads: true,
    labels: true,
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
    props.onChange(getMapStyle({ visibility}));
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
