import { Accordion, Card } from "react-bootstrap";

import { acordionInformation } from "../../infrastructure/acordionInformation";

function Acordion() {
  return (
    <Accordion style={{ width: "95%", boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.6)'}}>
      {acordionInformation.map((item, index) => (
        <Accordion.Item eventKey={`${index}`}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Text>{item.body.text}</Card.Text>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default Acordion;
