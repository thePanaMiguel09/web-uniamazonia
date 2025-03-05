import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
  title: string;
}

function VideoPlayer({ url, title }: VideoPlayerProps) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h2>{title}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <ReactPlayer url={url} playing controls />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VideoPlayer;
