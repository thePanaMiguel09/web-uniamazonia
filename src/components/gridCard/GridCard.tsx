import { Row, Col, Card, Container, Button } from "react-bootstrap";

import { news } from "../../infrastructure/news";

function GridCard() {
  return (
    <Container>
      <Row className="g-4 justify-content-center">
        {news.map((item, index) => (
          <Col key={index} className="d-flex justify-content-center">
            <Card style={{ width: "15rem", height: "auto"}}>
              <Card.Img variant="top" src={item.img} alt={item.title} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="flex-grow-1">{item.body}</Card.Text>
              </Card.Body>
              <Button variant="outline-primary" style={{marginBottom: '10px'}}>Leer Más</Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <Button style={{marginTop: '15px'}}>Ver Todas Las Noticias</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default GridCard;
