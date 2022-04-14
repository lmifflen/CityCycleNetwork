import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import "./App.css";
import Comments from "./components/comments/Comments";
import MapView from "./components/map/Map";

console.log(process.env.REACT_APP_MAPBOX_TOKEN);

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <MapView />
      <Comments />
    </>
  );
}

export default App;
