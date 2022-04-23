import { useState } from "react";
import * as React from "react";
import "./Map.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  FullscreenControl,
  GeolocateControl,
  ScaleControl,
} from "react-map-gl";
import ControlPanel from "./control-panel";
import GetFeature from "./GetFeature";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const MapView = () => {
  const [lng, setLng] = useState(-114.07);
  const [lat, setLat] = useState(51.05);
  const [zoom, setZoom] = useState(12);
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
          >
            <GeolocateControl />
            <FullscreenControl />
            <ScaleControl />
            <GetFeature />
          </Map>

          <ControlPanel onChange={setMapStyle} />
        </>
      </div>
    </div>
  );
};

export default MapView;
