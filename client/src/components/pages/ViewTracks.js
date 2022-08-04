import { Card, Button, Header, Image, Modal } from "semantic-ui-react";
import { useState } from "react";

export default function ViewTracks() {
  const [open, setOpen] = useState(false);
  const [mopen, msetOpen] = useState(false);
  // const [open, setOpen] = useState(false);
  // const [open, setOpen] = useState(false);
  // const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>VIEW THE TRACKS</h1>
      <Card.Group>
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={
            <Card
              image="https://maxvelocity.events/wp-content/uploads/2019/04/Estoril-Portugal.jpg"
              header="Coral Springs"
            />
          }
        >
          <Modal.Header textAlign="center">Coral Springs</Modal.Header>
          <Modal.Content image>
            <Image
              size="large"
              src="https://maxvelocity.events/wp-content/uploads/2019/04/Estoril-Portugal.jpg"
              fluid
              wrapped
              onClick={() => setOpen(false)}
            />
          </Modal.Content>
        </Modal>

        <Modal
          onClose={() => msetOpen(false)}
          onOpen={() => msetOpen(true)}
          open={mopen}
          trigger={
            <Card
              image="https://phantom-marca.unidadeditorial.es/129f786ee94996750e0756971c33a704/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/09/16312120805110.jpg"
              header="MONZA"
            />
          }
        >
          <Modal.Header textAlign="center">MONZA</Modal.Header>
          <Modal.Content image>
            <Image
              size="large"
              src="https://phantom-marca.unidadeditorial.es/129f786ee94996750e0756971c33a704/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/09/16312120805110.jpg"
              fluid
              wrapped
              onClick={() => msetOpen(false)}
            />
          </Modal.Content>
        </Modal>

        <Modal
          onClose={() => msetOpen(false)}
          onOpen={() => msetOpen(true)}
          open={mopen}
          trigger={
            <Card
              image="https://phantom-marca.unidadeditorial.es/129f786ee94996750e0756971c33a704/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/09/16312120805110.jpg"
              header="MONZA"
            />
          }
        >
          <Modal.Header textAlign="center">MONZA</Modal.Header>
          <Modal.Content image>
            <Image
              size="large"
              src="https://phantom-marca.unidadeditorial.es/129f786ee94996750e0756971c33a704/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/09/16312120805110.jpg"
              fluid
              wrapped
              onClick={() => msetOpen(false)}
            />
          </Modal.Content>
        </Modal>

        <Modal
          onClose={() => msetOpen(false)}
          onOpen={() => msetOpen(true)}
          open={mopen}
          trigger={
            <Card
              image="https://phantom-marca.unidadeditorial.es/129f786ee94996750e0756971c33a704/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/09/16312120805110.jpg"
              header="MONZA"
            />
          }
        >
          <Modal.Header textAlign="center">MONZA</Modal.Header>
          <Modal.Content image>
            <Image
              size="large"
              src="https://phantom-marca.unidadeditorial.es/129f786ee94996750e0756971c33a704/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/09/16312120805110.jpg"
              fluid
              wrapped
              onClick={() => msetOpen(false)}
            />
          </Modal.Content>
        </Modal>

        <Modal
          onClose={() => msetOpen(false)}
          onOpen={() => msetOpen(true)}
          open={mopen}
          trigger={
            <Card
              image="https://phantom-marca.unidadeditorial.es/129f786ee94996750e0756971c33a704/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/09/16312120805110.jpg"
              header="MONZA"
            />
          }
        >
          <Modal.Header textAlign="center">MONZA</Modal.Header>
          <Modal.Content image>
            <Image
              size="large"
              src="https://phantom-marca.unidadeditorial.es/129f786ee94996750e0756971c33a704/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/09/16312120805110.jpg"
              fluid
              wrapped
              onClick={() => msetOpen(false)}
            />
          </Modal.Content>
        </Modal>
      </Card.Group>
    </div>
  );
}

// MONZA
// https://phantom-marca.unidadeditorial.es/129f786ee94996750e0756971c33a704/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/09/16312120805110.jpg
