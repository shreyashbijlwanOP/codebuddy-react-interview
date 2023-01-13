import { Card } from 'react-bootstrap';

const Cards = ({ elem }) => {
  const { firstName, lastName, writeup, image, avatar } = elem;
  return (
    <div className="col col-md-6 col-lg-4">
      <Card style={{ width: '18rem' }} className="m-auto my-2">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="d-flex align-items-center">
            <img src={avatar} className="avatar me-2" alt="A" />
            <span>
              {firstName} {lastName}
            </span>
          </Card.Title>
          <Card.Text>{writeup}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
