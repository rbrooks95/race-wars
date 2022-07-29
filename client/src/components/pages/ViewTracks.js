import { Card, Button, Header, Image, Modal } from "semantic-ui-react";
import { useState } from "react";

export default function ViewTracks() {
  const [open, setOpen] = useState(false);
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
      </Card.Group>
    </div>
  );
}
