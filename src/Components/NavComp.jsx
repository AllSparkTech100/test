import { Container, Nav, Navbar } from "react-bootstrap";
import "../app.scss";
import ButtonComp from "./Button";
import { useState, useEffect } from "react";

function NavComp() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    backgroundColor: isScrolled ? "white" : "transparent",
    position:'fixed',
    top:'0',
    zIndex: '900',
    width: '100vw',
    transition: "background-color 0.3s ease",
    color: isScrolled ? "white" : "black",
    display: 'flex',
    alignItems: 'center',
    justifyContents: 'center',
    height: isScrolled ? '80px' : '90px',
    borderBottom: isScrolled ? "none" : "1px solid white",
  };

  return (
    <header style={headerStyle}>
      <Navbar expand="lg" fixed="top" className="p-3">     <Container>
          <Navbar.Brand href="#home" className="fw-bolder">
            Feliciano
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="shadow-none"
            variant="secondary"
          />
          <Navbar.Collapse id="basic-navbar-nav shadow-none">
            <Nav className="ms-auto align-items-md-center justify-content-md-between ">
              <Nav.Link href="#home" className=" fw-normal fs-5">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className=" fw-normal fs-5">
                About
              </Nav.Link>
              <Nav.Link href="#link" className=" fw-normal fs-5">
                Menu
              </Nav.Link>
              <Nav.Link href="#link" className=" fw-normal fs-5">
                Stories
              </Nav.Link>
              <ButtonComp text="Book a Table" className="btn" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavComp;
