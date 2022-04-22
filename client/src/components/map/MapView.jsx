import { useEffect, useState, useRef, useCallback } from "react";
import "./Map.css";
import Info from "../info/Info";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { FullscreenControl, GeolocateControl, ScaleControl } from "react-map-gl";
import ControlPanel from "./control-panel";
import ControlPanel2 from "./control-panel2";
import MAP_STYLE from "./style.json";


const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const MapView = () => {
  const [lng, setLng] = useState(-114.07);
  const [lat, setLat] = useState(51.05);
  const [zoom, setZoom] = useState(12);
  const [feature, setFeature] = useState(null);
  const [mapStyle, setMapStyle] = useState(null);

  const interactiveLayerIds = ["greenwaynorth"];

  // const onInteractiveLayersChange = useCallback(layerFilter => {
  //   //   setInteractiveLayerIds(MAP_STYLE.layers.map(layer => layer.id).filter(layerFilter));
  //   // }, []);

  const onClick = (e) => {
    console.log(e);
    setFeature(e);
  };


  
  // const [cursor, setCursor] = useState('auto');
  // const [interactiveLayerIds, setInteractiveLayerIds] = useState();

  // const onInteractiveLayersChange = useCallback(layerFilter => {
  //   setInteractiveLayerIds(MAP_STYLE.layers.map(layer => layer.id).filter(layerFilter));
  // }, []);

  // const onClick = useCallback(event => {
  //   const feature = event.features && event.features[0];

  //   if (feature) {
  //     window.alert(`Clicked layer ${feature.layer.id}`); // eslint-disable-line no-alert
  //   }
  // }, []);

  // const onMouseEnter = useCallback(() => setCursor('pointer'), []);
  // const onMouseLeave = useCallback(() => setCursor('auto'), []);


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
            onClick={onClick}
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
            // cursor={cursor}
            interactiveLayerIds={interactiveLayerIds}
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            <GeolocateControl />
            <FullscreenControl />
            <ScaleControl />

          </Map>
          {/* <ControlPanel2 onChange={onInteractiveLayersChange} /> */}

          <ControlPanel onChange={setMapStyle} />
        </>
        <div className="info">{<Info feature={feature}></Info>}</div>
      </div>
    </div>
  );
};

export default MapView;
