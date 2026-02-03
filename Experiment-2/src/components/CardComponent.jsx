import Card from 'react-bootstrap/Card';

function CardComponent() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          I am a B.Tech AIML student learning Full Stack Development.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
