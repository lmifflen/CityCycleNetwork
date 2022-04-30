import { useState } from "react";
import * as React from "react";
import "./Map.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  FullscreenControl,
  GeolocateControl,
  ScaleControl,
  NavigationControl
} from "react-map-gl";
import ControlPanel from "../../utils/controlpanel/control-panel";
import GetFeature from "../getfeature/GetFeature";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const MapView = () => {
  const [viewState, setViewState] = useState({
    longitude: -114.07,
    latitude: 51.05,
    zoom: 12
  });

  const [mapStyle, setMapStyle] = useState(null);

  return (
    <div className="map" id="mapbox">
      <h2 className="title">Highlighting Calgarys Best Cyclepaths</h2>
      <ControlPanel onChange={setMapStyle} />
      <div className="sidebar">
        Longitude: {viewState.longitude.toFixed(2)} | Latitude: {viewState.latitude.toFixed(2)} | Zoom: {viewState.zoom.toFixed(2)}
      </div>
      <div className="mapandinfo">
        <>
          <Map
          {...viewState}
          onMove={evt => setViewState(evt.viewState)}
            mapStyle={mapStyle && mapStyle.toJS()}
            styleDiffing
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            <GeolocateControl />
            <FullscreenControl />
            <ScaleControl />
            <GetFeature />
            {/* <NavigationControl /> */}
          </Map>

          
        </>
      </div>
    </div>
  );
};

export default MapView;
