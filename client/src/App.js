import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Map from "./components/map/Map";
import "./App.css"
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <Main />
      <Map />
      <Comments commentsUrl="http://localhost:3004/comments"
        currentUserId="1"/>
    </div>
  );
}

export default App;
