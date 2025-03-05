import {
  ButtonGroup,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";

import { linksFooter } from "../../infrastructure/links";

function FooterComponent() {
  return (
    <Container fluid>
      <Row className="g-4 justify-content-center">
        {linksFooter.map((item, index) => (
          <Col>
            <DropdownButton
              as={ButtonGroup}
              title={item.head}
              key={index}
              variant="success"
            >
              {item.links.map((itemLink, indexLink) => (
                <><Dropdown.Item as="a" href={itemLink.url} key={indexLink}>
                  {itemLink.title}
                </Dropdown.Item><Dropdown.Divider /></>
              ))}
            </DropdownButton>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FooterComponent;
