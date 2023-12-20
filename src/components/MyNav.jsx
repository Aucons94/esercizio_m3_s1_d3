import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNav() {
  return (
    <header>
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand href="#" className="text-light">
            Libreria Nani infami
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-light">
                About
              </Nav.Link>
              <Nav.Link href="#" className="text-light">
                Browse
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MyNav;
