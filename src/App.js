import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Map from "./components/map/Map";

function App() {
   return (
    <span>
      <div>
        <Navbar />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Map />
      </div>
    </span>
  );
}

export default App;
