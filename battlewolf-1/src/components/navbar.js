import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Bwnav() {
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <h1>Welcome to The Battle Wolf.</h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home </Nav.Link>
            <Nav.Link href="#features">Our Members </Nav.Link>
            <Nav.Link href="#pricing">Our Mission </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Bwnav;
