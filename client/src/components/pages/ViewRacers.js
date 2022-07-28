import axios from "axios";
import { useState, useEffect } from "react";

export default function ViewRacers() {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    const racers = async () => {
      const res = await axios.get("http://localhost:3001/races");
      console.log(res.data);
      setinfo(res.data);
    };
    racers();
  }, []);

  return (
    <div>
      <h1>VIEW THE CURRENT RACES</h1>
      {info.map((res) => (
        <div className="">
          <h1>{res.name}</h1>
          <h2>{res.location}</h2>
          <img src={res.trackPhoto} />
          <h2>{res.raceType}</h2>
        </div>
      ))}
    </div>
  );
}
