import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";

import { Rovers } from "./components/Rovers/Rovers";

import "./App.css";
import RoverDetail from "./components/Rovers/RoverDetail";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Link to={`/`} className="link">
          Mars Rovers Images
        </Link>
      </Navbar>

      {/* <GetPhotos rover="spirit" /> */}
      <Routes>
        <Route path="/" element={<Rovers />} />
        <Route path="/roverdetail/:name" element={<RoverDetail />} />
      </Routes>
    </div>
  );
}

export default App;
