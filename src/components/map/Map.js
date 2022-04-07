import React from 'react';
import mapboxgl from 'mapbox-gl';
import "./Map.css"
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2lzaTAwMCIsImEiOiJjbDFmN2QwaGswMjFtM3BvOXdrOWE0YXg3In0.qofv6jpqKojK7PMs3vcO5Q';
 
export default class App extends React.PureComponent {

   
 
constructor(props) {
super(props);
this.state = {
lng: -114.07,
lat: 51.05,
zoom: 12
};
this.mapContainer = React.createRef();
}
componentDidMount() {
const { lng, lat, zoom } = this.state;
const map = new mapboxgl.Map({
container: this.mapContainer.current,
style: 'mapbox://styles/sisi000/cl1f9x670003h15s644ud3mkf',
center: [-114.07, 51.05],
zoom: zoom
});
 
map.on('move', () => {
this.setState({
lng: map.getCenter().lng.toFixed(4),
lat: map.getCenter().lat.toFixed(4),
zoom: map.getZoom().toFixed(2)
});
});
}
render() {
const { lng, lat, zoom } = this.state;
return (
<div>
<h2 className='title'>The best Road Biking Routes in Calgary
    </h2>
    <div className="sidebar">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div>
<div ref={this.mapContainer} className="map-container" id ="map"></div>
</div>
);
}
}

