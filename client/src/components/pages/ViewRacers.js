import { Card, Icon, Image, Button, Popup, Form } from "semantic-ui-react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ViewRacers() {
  const [info, setinfo] = useState([]);
  const [trackLaps, setTrackLaps] = useState([]);

  const [formState, setFormState] = useState([]);
  useEffect(() => {
    const racers = async () => {
      const res = await axios.get("http://localhost:3001/races");
      console.log(res.data);
      setinfo(res.data);
      setFormState(res.data);
    };
    racers();
  }, []);

  useEffect(() => {
    const trackLap = async () => {
      const res = await axios.get("http://localhost:3001/trackinfo");
      console.log(res.data);
      setTrackLaps(res.data);
    };
    trackLap();
  }, []);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };
  const updated = async (e, r) => {
    // e.preventDefault();
    let res = await axios.put(`http://localhost:3001/change/${r}`, formState);
    console.log(r);
    console.log(res);
    window.location.reload(false);
  };

  const remove = async (e) => {
    await axios.delete(`http://localhost:3001/delete/${e}`);
    setinfo(info);
    window.location.reload(false);
  };

  console.log(formState);

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
              {trackLaps.map((res) => (
                <Card.Header>{res.laps}</Card.Header>
              ))}
              <Button onClick={() => remove(res._id)}>Delete</Button>

              <Popup
                content={
                  <Form onSubmit={() => updated(res._id)}>
                    <Form.Field>
                      <label htmlFor="trackPhoto"> Tracks</label>
                      <select
                        id="trackPhoto"
                        onChange={handleChange}
                        value={formState.trackPhoto}
                      >
                        <option value="https://maxvelocity.events/wp-content/uploads/2019/04/Estoril-Portugal.jpg">
                          Coral Springs
                        </option>
                        <option value="https://phantom-marca.unidadeditorial.es/129f786ee94996750e0756971c33a704/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/09/16312120805110.jpg">
                          MONZA
                        </option>
                        <option value="https://www.co.monterey.ca.us/home/showpublishedimage/25376/637123523806970000">
                          LAGUNA SECA
                        </option>
                        <option value="https://www.thedrive.com/content/2020/02/DSC01209.jpg?quality=85">
                          MOUNT PANORAMA
                        </option>
                        <option value="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fbeyondtheflag.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F04%2F690124314-f1-grand-prix-of-monaco.jpg.jpg">
                          CIRCUIT DE MONACO
                        </option>
                      </select>
                    </Form.Field>
                    <Form.Field>
                      <label htmlFor="raceType">Race Type</label>
                      <select
                        id="raceType"
                        onChange={handleChange}
                        value={formState.raceType}
                      >
                        <option value="Drift">Drift</option>
                        <option value="circuit">Circuit</option>
                        <option value="time attack">Time Attack</option>
                        <option value="sprint">Sprint</option>
                        <option value="Drag">Drag</option>
                      </select>
                    </Form.Field>
                    <Button type="submit">Submit</Button>
                  </Form>
                }
                on="click"
                popper={{ id: "popper-container", style: { zIndex: 2000 } }}
                trigger={
                  <Button onClick={() => updated(res._id)}>Open a popup</Button>
                }
              />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
