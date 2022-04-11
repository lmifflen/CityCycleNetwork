import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Map from "./components/map/Map";
import {MapProvider} from 'react-map-gl';
import "./App.css"
import Comments from "./components/comments/Comments";
import Controls from './components/map/controls';
import {render} from 'react-dom';
console.log(process.env.REACT_APP_MAPBOX_TOKEN);
function App() {
  return (
    <div className="flex">
      <Navbar />
      <Main />
      <MapProvider>
      <Controls />
      <Map />
    </MapProvider>
      <Comments commentsUrl="http://localhost:3004/comments"
        currentUserId="1"/>
    </div>
  );
}

export default App;
render(<App />, document.body.appendChild(document.createElement('div')));