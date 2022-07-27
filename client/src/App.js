import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Raceform from "./components/pages/RaceForm";
import ViewRacers from "./components/pages/ViewRacers";
import ViewTracks from "./components/pages/ViewTracks";

function App() {
  return (
    <div className="App">
      <h1>RACE WARS</h1>
      <Navbar />
      <div>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/signUp" element={<Raceform />} />
          <Route path="/tracks" element={<ViewTracks />} />
          <Route path="/racerList" element={<ViewRacers />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
