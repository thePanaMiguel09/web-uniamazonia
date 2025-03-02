import { Card, Button } from "react-bootstrap";

import { cardInformation } from "../../infrastructure/headerCardImages";

import "./CustomCardStyles.css";

function CustomCard() {
  return cardInformation.map((item, index) => (
    <Card
      style={{ width: "14rem", height: "90%" }}
      className="card"
      key={index}
    >
      <Card.Img variant="top" src={item.img} className="image" />
      <Button variant="outline-primary" style={{ width: "70%", margin: '10px' }}> 
        Leer Más
      </Button>
    </Card>
  ));
}

export default CustomCard;
