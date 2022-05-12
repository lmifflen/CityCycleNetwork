import { useState, useMemo } from "react";
import * as React from "react";
import "./Map.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  FullscreenControl,
  GeolocateControl,
  ScaleControl,
  Popup,
  Marker,
} from "!react-map-gl";
import ControlPanel from "../../utils/controlpanel/control-panel";
import GetFeature from "../getfeature/GetFeature";
import Pin from "../popup/Pin";

import BUSINESS from "../popup/business.json";

// const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const MAPBOX_TOKEN = 'pk.eyJ1IjoibWlmZmxsIiwiYSI6ImNsMWNtNTA2MDA3ZGgzY3BjN2d0dDgzczUifQ.hCA00GpYuE3C8miBX7tfPg';

const MapView = () => {
  const [viewState, setViewState] = useState({
    longitude: -114.07,
    latitude: 51.05,
    zoom: 12
  });

  const [mapStyle, setMapStyle] = useState(null);
  const [popupInfo, setPopupInfo] = useState(null);

  const pins = useMemo(
    () =>
      BUSINESS.map((business, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={business.longitude}
          latitude={business.latitude}
          anchor="bottom"
        >
          <Pin onClick={() => setPopupInfo(business)} />
        </Marker>
      )),
    []
  );
  

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
     
            {pins}


            {popupInfo && (
          <Popup
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              {popupInfo.business}, {popupInfo.type} |{' '}
              <a
                href={popupInfo.website}
                
              >
                Website
              </a>
            </div>
            <img width="100%" src={popupInfo.image} />
          </Popup>
        )}
           
          </Map>

          
        </>
      </div>
    </div>
  );
};

export default React.memo(MapView);
