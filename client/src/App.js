import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import "./App.css";
import Comments from "./components/comments/Comments";
import MapView from "./components/map/Map";
import Footer from "./components/footer/Footer";

console.log(process.env.REACT_APP_MAPBOX_TOKEN);

function App() {
  return (
    <div className="flex">
    <Navbar />
    <Main />
    <MapView />
    <Comments commentsUrl="http://localhost:3004/comments"
      currentUserId="1"/>
      <Footer />
  </div>
  );
}

export default App;
