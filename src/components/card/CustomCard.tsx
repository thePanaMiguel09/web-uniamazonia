import { Card, Button } from "react-bootstrap";

import "./CustomCardStyles.css";

interface CustomCardProps {
  img?: string;
  title?: string;
  text?: string;
  className?: string;
  button?: boolean;
  width?: string;
  height?: string;
}


function CustomCard({ img, title, text, className, button = true, width, height }: CustomCardProps) {
  return (
    <Card
      style={{ width: `${width}`, height: `${height}` }}
      className={`card ${className}`}
    >
      <Card.Img variant="top" src={img} className="image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text> 
      </Card.Body>
      {
        button ? <Button
        variant="outline-primary"
        style={{ width: "70%", margin: "10px" }}
      >
        Leer Más
      </Button> : <></>
      }
      
    </Card>
  );
}

export default CustomCard;
