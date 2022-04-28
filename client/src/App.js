import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

// console.log(process.env.REACT_APP_MAPBOX_TOKEN);

function App() {
  return (
    <div className="flex">
      <header>
        <Navbar />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
