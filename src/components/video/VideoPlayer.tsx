import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";

import './styles.css'

interface VideoPlayerProps {
  url: string;
  title: string;
}

function VideoPlayer({ url, title }: VideoPlayerProps) {
  return (
    <>
      <Container fluid >
        <Row>
          <Col>
            <h2>{title}</h2>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <ReactPlayer url={url} playing controls 
             config={{ youtube: { playerVars: { origin: '*' } } }}
             className="containerVideoPlayer"
            />

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VideoPlayer;
