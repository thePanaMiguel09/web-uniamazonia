import { Row, Col, Card, Container, Button } from "react-bootstrap";

import { news } from "../../infrastructure/news";
import CustomCard from "../card/CustomCard";

function GridCard() {
  return (
    <Container>
      <Row className="g-4 justify-content-center">
        {news.map((item, index) => (
          <Col key={index} className="d-flex justify-content-center" style={{height: 'auto'}}>
            <CustomCard img={item.img} title={item.title} text={item.body} width="15rem" height="auto"/>
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
