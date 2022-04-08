import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Map from "./components/map/Map";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <Main />
      <Map />
    </div>
  );
}

export default App;
