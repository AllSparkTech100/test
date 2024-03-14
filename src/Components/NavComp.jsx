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
    position: "fixed",
    top: "0",
    zIndex: "900",
    width: "100vw",
    transition: "background-color 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContents: "space-between",
    height: isScrolled ? "65px" : "65px",
    borderBottom: isScrolled ? "none" : "1px solid snow",
  };

  return (
    <>
      {/* <div id="new d-none">
        <div className="new_inner">
          <p>+234-123-4782-90</p>
          <p>youremail@me.com</p>
          <p>Open Hours: Monday - Saturday 8:00AM - 9:00PM</p>
        </div>
      </div> */}
      <header
        style={headerStyle}
        className={isScrolled ? "bg-white" : "bg-transparent"}
      >
      
        <Navbar expand="lg" fixed="top">
          <Container fluid="sm">
            <Navbar.Brand
              href="/"
              className={
                isScrolled ? "text-black fw-bold" : "text-white fw-bold"
              }
            >
              Feliciano
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="shadow-none border-2 border-primary "
              variant="secondary"
            />
            <Navbar.Collapse id="basic-navbar-nav shadow-none">
              <Nav className="ms-auto align-items-md-center justify-content-md-between ">
                <Nav.Link
                  href="/"
                  className={
                    isScrolled
                      ? "text-black fw-normal fs-6 me-4"
                      : "text-white fw-normal fs-6 me-4"
                  }
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="/about"
                  className={
                    isScrolled
                      ? "text-black fw-normal fs-6 me-4"
                      : "text-white fw-normal fs-6 me-4"
                  }
                >
                  About
                </Nav.Link>
                <Nav.Link
                  href="/menu"
                  className={
                    isScrolled
                      ? "text-black fw-normal fs-6 me-4"
                      : "text-white fw-normal fs-6 me-4"
                  }
                >
                  Menu
                </Nav.Link>
                <Nav.Link
                  href="/stories"
                  className={
                    isScrolled
                      ? "text-black fw-normal fs-6 me-4"
                      : "text-white fw-normal fs-6 me-4"
                  }
                >
                  Stories
                </Nav.Link>
                <Nav.Link
                  href="/contact"
                  className={
                    isScrolled
                      ? "text-black fw-normal fs-6 me-4"
                      : "text-white fw-normal fs-6 me-4"
                  }
                >
                  Contact
                </Nav.Link>
                <div
                  className={
                    isScrolled ? "text-black fw-bold" : "text-white fw-bold"
                  }
                >
                  <ButtonComp text="Book a Table" className="btn" />
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default NavComp;
