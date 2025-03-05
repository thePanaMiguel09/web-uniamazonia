
import { Container, Image } from "react-bootstrap";
import logo from "../../assets/logo/uniamazonia.png";
import "./NavBarStyles.css";

function NavBar() {
  

  return (
    <>
      <Container fluid>
        <Image src={logo}/>
        This Will be The Nav Section
      </Container>
    </>
  );
}

export default NavBar;
