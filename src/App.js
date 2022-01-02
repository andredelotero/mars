import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Rovers } from "./components/Rovers/Rovers";
import "./App.css";
import RoverDetail from "./components/Rovers/RoverDetail";
import { StyledFooter } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Link to={`/`} className="link">
          Mars Photos - André Gama del Otero
        </Link>
      </Navbar>

      <Routes>
        <Route path="/" element={<Rovers />} />
        <Route path="/roverdetail/:name" element={<RoverDetail />} />
      </Routes>
      <StyledFooter>
        <p>
          Mars Photos. A project by André Gama del Otero Created in 2022 with
          React, Styled components and NASA open API "Mars Rover Photos"
        </p>
        <p>All photos belong to NASA</p>
      </StyledFooter>
    </div>
  );
}

export default App;
