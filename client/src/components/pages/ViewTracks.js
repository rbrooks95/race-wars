import { Card, Button, Header, Image, Modal } from "semantic-ui-react";
import { useState } from "react";

export default function ViewTracks() {
  const [open, setOpen] = useState(false);
  const [mopen, msetOpen] = useState(false);
  const [lopen, lsetOpen] = useState(false);
  const [popen, psetOpen] = useState(false);
  const [copen, csetOpen] = useState(false);

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
        {/* ///////////////////////////////////// */}
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
        {/* ////////////////////////////////////////////////////// */}
        <Modal
          onClose={() => lsetOpen(false)}
          onOpen={() => lsetOpen(true)}
          open={lopen}
          trigger={
            <Card
              image="https://www.co.monterey.ca.us/home/showpublishedimage/25376/637123523806970000"
              header="LAGUNA SECA"
            />
          }
        >
          <Modal.Header textAlign="center">LAGUNA SECA</Modal.Header>
          <Modal.Content image>
            <Image
              size="large"
              src="https://phantom-marca.unidadeditorial.es/129f786ee94996750e0756971c33a704/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/09/16312120805110.jpg"
              fluid
              wrapped
              onClick={() => lsetOpen(false)}
            />
          </Modal.Content>
        </Modal>
        {/* ////////////////////////////////////////////////////////////// */}
        <Modal
          onClose={() => psetOpen(false)}
          onOpen={() => psetOpen(true)}
          open={popen}
          trigger={
            <Card
              image="https://www.thedrive.com/content/2020/02/DSC01209.jpg?quality=85"
              header="MOUNT PANORAMA"
            />
          }
        >
          <Modal.Header textAlign="center">MOUNT PANORAMA</Modal.Header>
          <Modal.Content image>
            <Image
              size="large"
              src="https://www.thedrive.com/content/2020/02/DSC01209.jpg?quality=85"
              fluid
              wrapped
              onClick={() => psetOpen(false)}
            />
          </Modal.Content>
        </Modal>
        {/* //////////////////////////////////////////////////////// */}
        <Modal
          onClose={() => csetOpen(false)}
          onOpen={() => csetOpen(true)}
          open={copen}
          trigger={
            <Card
              image="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fbeyondtheflag.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F04%2F690124314-f1-grand-prix-of-monaco.jpg.jpg"
              header="CIRCUIT DE MONACO"
            />
          }
        >
          <Modal.Header textAlign="center">CIRCUIT DE MONACO</Modal.Header>
          <Modal.Content image>
            <Image
              size="large"
              src="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fbeyondtheflag.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F04%2F690124314-f1-grand-prix-of-monaco.jpg.jpg"
              fluid
              wrapped
              onClick={() => csetOpen(false)}
            />
          </Modal.Content>
        </Modal>
      </Card.Group>
    </div>
  );
}

// MONZA
// https://phantom-marca.unidadeditorial.es/129f786ee94996750e0756971c33a704/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/09/16312120805110.jpg
