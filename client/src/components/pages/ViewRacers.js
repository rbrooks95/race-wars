import { Card, Icon, Image, Button } from "semantic-ui-react";
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

  const id = info.map((res) => {
    return res._id;
  });
  console.log(id);

  const remove = async (e) => {
    await axios.delete(`http://localhost:3001/delete/${e}`);
    setinfo(info);
    window.location.reload(false);
  };
  console.log(info);
  return (
    <div>
      <h1>VIEW THE CURRENT RACES</h1>
      <Card.Group>
        {info.map((res) => (
          <Card textAlign="center">
            <Image src={res.trackPhoto} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{res.name}</Card.Header>
              <Card.Header>{res.car}</Card.Header>
              <Card.Header>{res.model}</Card.Header>
              <Card.Header>{res.raceType}</Card.Header>
              <Button onClick={() => remove(res._id)}>Delete</Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
