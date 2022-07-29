import { Container, Form, Button, Dropdown } from "semantic-ui-react";

import { useEffect, useState } from "react";
import axios from "axios";

export default function RaceForm(props) {
  const initialState = {
    name: "",
    car: "",
    model: "",
    trackPhoto: "",
    raceType: "",
  };
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:3001/newracer", formState);
    console.log(res);
    setFormState(formState);
  };
  return (
    <div>
      <h1>LET'S RACE!!!!</h1>
      <Container className="form-border" textAlign="center">
        <Form onSubmit={handleSubmit} className="form">
          <Form.Field className="form-border">
            <label htmlFor="name"> Name</label>
            <input
              id="name"
              placeholder="First Name"
              onChange={handleChange}
              value={formState.name}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="car">Car</label>
            <input id="car" placeholder="Car" onChange={handleChange} />
          </Form.Field>
          <Form.Field>
            <label htmlFor="model">Model</label>
            <input
              id="model"
              placeholder="Model"
              onChange={handleChange}
              value={formState.model}
            />
          </Form.Field>

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
      </Container>
    </div>
  );
}
