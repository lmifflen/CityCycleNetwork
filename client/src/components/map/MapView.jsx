import { useEffect, useState, useRef } from "react";
import "./Map.css";
import Info from "../info/Info";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl";
import ControlPanel from "./control-panel";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const MapView = () => {
  const [lng, setLng] = useState(-114.07);
  const [lat, setLat] = useState(51.05);
  const [zoom, setZoom] = useState(12);
  const [feature, setFeature] = useState(null);
  const [mapStyle, setMapStyle] = useState(null);

  return (
    <div className="map" id="mapbox">
      <h2 className="title">The best Road Biking Routes in Calgary</h2>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div className="mapandinfo">
        <>
          <Map
            initialViewState={{
              latitude: lat,
              longitude: lng,
              zoom: zoom,
            }}
            mapStyle={mapStyle && mapStyle.toJS()}
            styleDiffing
            mapboxAccessToken={MAPBOX_TOKEN}
          />
          <ControlPanel onChange={setMapStyle} />
        </>
        <div className="info">{<Info feature={feature}></Info>}</div>
      </div>
    </div>
  );
};

export default MapView;
