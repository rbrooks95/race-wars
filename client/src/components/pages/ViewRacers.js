import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

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
      <Card.Group>
        {info.map((res) => (
          <Card textAlign="center">
            <Image src={res.trackPhoto} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{res.name}</Card.Header>
              <Card.Header>{res.model}</Card.Header>
              <Card.Header>{res.raceType}</Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
