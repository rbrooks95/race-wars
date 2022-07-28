import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Raceform from "./components/pages/RaceForm";
import ViewRacers from "./components/pages/ViewRacers";
import ViewTracks from "./components/pages/ViewTracks";

function App() {
  const [info, setinfo] = useState("");

  useEffect(() => {
    const racers = async () => {
      const res = await axios.get("http://localhost:3001/races");
      console.log(res.data);
      setinfo(res.data);
    };
    racers();
  }, []);

  return (
    <div className="App">
      <h1>RACE WARS</h1>
      <Navbar />
      <div>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/signUp" element={<Raceform />} />
          <Route path="/tracks" element={<ViewTracks />} />
          <Route path="/raceList" element={<ViewRacers />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
