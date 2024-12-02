import "../Pages/pages.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

function NavHead() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header>
        <Navbar>
          <Container fluid>
            <Navbar.Brand href="/">
              Mental Health <span className="fw-bold">+</span>
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav d-md-block shadow-none">
              <Nav className="ms-auto large-nav me-auto align-items-md-center justify-content-md-between">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div
              className="d-lg-none d-sm-block shadow-none border-0"
              onClick={menuToggle}
            >
              {isMenuOpen ? <IoClose size={30} /> : <TiThMenu size={30} />}
            </div>
          </Container>
        </Navbar>
        {isMenuOpen && (
          <Container
            fluid
            className="hamburger-menu d-md-none d-lg-none d-block"
          >
            <div>
              <ul>
                <Nav.Link href="/" className="">
                  Home
                </Nav.Link>
                <Nav.Link href="/about" className="">
                  About
                </Nav.Link>

                <Nav.Link href="/contact" className="">
                  Contact
                </Nav.Link>
              </ul>
            </div>
          </Container>
        )}
      </header>
    </>
  );
}

export default NavHead;
