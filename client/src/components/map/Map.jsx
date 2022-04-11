import React from 'react'
import Map from 'react-map-gl';


const MAPBOX_TOKEN = 'pk.eyJ1IjoibWlmZmxsIiwiYSI6ImNsMWNtNTA2MDA3ZGgzY3BjN2d0dDgzczUifQ.hCA00GpYuE3C8miBX7tfPg';
const MapView = () => {
  return (
    <Map
    id="mymap"
    initialViewState={{
        longitude: -114.07,
        latitude: 51.05,
        zoom: 12
    }}
    style={{width: 800, height: 600}}
    mapStyle='mapbox://styles/miffll/cl1ful06h003y14nwehytpg6w/draft'
    mapboxAccessToken={MAPBOX_TOKEN}
  />
  )
}

export default MapView