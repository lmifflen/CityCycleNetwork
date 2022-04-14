import { useEffect, useState, useRef } from "react";
import "./Map.css";
import mapboxgl from "mapbox-gl";
import Info from "../info/Info";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MapView = () => {
  const [lng, setLng] = useState(-114.07);
  const [lat, setLat] = useState(51.05);
  const [zoom, setZoom] = useState(12);

  const mapContainer = useRef(null);
  const [feature, setFeature] = useState(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/miffll/cl1ful06h003y14nwehytpg6w/draft",
      center: [-114.07, 51.05],
      zoom: 12,
    });

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    map.on('click', (e) => {

      const bbox = [
          [e.point.x - 6, e.point.y - 6],
          [e.point.x + 6, e.point.y + 6]
      ];
      let x = map.queryRenderedFeatures(bbox);
      setFeature(x);
      
    });
  }, []);

  return (
    <div className="map">
      <h2 className="title">The best Road Biking Routes in Calgary</h2>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div
          ref={mapContainer}
          className="map-container"
          id="mapbox"
        ></div>
        {feature && (<Info feature={feature}></Info>)}
    </div>
  );
};

export default MapView;
