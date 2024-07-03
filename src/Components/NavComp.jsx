import { Container, Nav, Navbar } from "react-bootstrap";
import { BiSolidCameraMovie } from "react-icons/bi";
import "../app.scss";
import { useState, useEffect } from "react";

function NavComp() {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isMenuVisible, setIsMenuVisible] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuVisible(!isMenuVisible);
  // };

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
    zIndex: "9999",
    width: "100vw",
    transition: "background-color 0.3s ease",
    display: "flex",
    // alignItems: "center",
    justifyContents: "space-between",
    height: isScrolled ? "75px" : "75px",
  };

  return (
    <>
      <header
        style={headerStyle}
        className={isScrolled ? "bg-dark " : "bg-transparent"}
      >
        <Navbar expand="lg" fixed="top">
          <Container fluid="sm">
            <Navbar.Brand
              href="/"
              className={
                isScrolled
                  ? "text-white d-flex justify-content-evenly align-items-center fw-bold"
                  : "text-white d-flex justify-content-evenly align-items-center fw-bold"
              }
            >
              <div>
                <BiSolidCameraMovie
                  size={40}
                  className="text-warning cursor-pointer"
                />
              </div>
              Movfix
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="shadow-none d-none border-2 border-primary "
              variant="secondary"
            />

            <Navbar.Collapse id="basic-navbar-nav shadow-none">
              <Nav className="align-items-md-center text-center">
                <Nav.Link
                  href="/"
                  className={
                    isScrolled
                      ? "text-white fw-bold fs-6 text-uppercase"
                      : "text-white fw-bold fs-6 text-uppercase"
                  }
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="/movie"
                  className={
                    isScrolled
                      ? "text-white fw-bold fs-6 text-uppercase"
                      : "text-white fw-bold fs-6 text-uppercase"
                  }
                >
                  movie
                </Nav.Link>
                <Nav.Link
                  href="/shows"
                  className={
                    isScrolled
                      ? "text-white fw-bold fs-6 text-uppercase"
                      : "text-white fw-bold fs-6 text-uppercase"
                  }
                >
                  tvshows
                </Nav.Link>
                <Nav.Link
                  href="/price"
                  className={
                    isScrolled
                      ? "text-white fw-bold fs-6 text-uppercase"
                      : "text-white fw-bold fs-6 text-uppercase"
                  }
                >
                  pricing
                </Nav.Link>
                <Nav.Link
                  href="/blog"
                  className={
                    isScrolled
                      ? "text-white fw-bold fs-6 text-uppercase"
                      : "text-white fw-bold fs-6 text-uppercase"
                  }
                >
                  blog
                </Nav.Link>
                <Nav.Link
                  href="/contact"
                  className={
                    isScrolled
                      ? "text-white fw-bold fs-6 text-uppercase"
                      : "text-white fw-bold fs-6 text-uppercase"
                  }
                >
                  contact
                </Nav.Link>
              </Nav>
              <ul>
                
              </ul>
            </Navbar.Collapse>
            {/* <button
              className="d-lg-none d-sm-block shadow-none border-0 rounded-5 menu_iconn "
               onClick={toggleMenu}
            >
              {isMenuVisible ? "X" : "Menu"}
            </button> */}
          </Container>
        </Navbar>
        {/* 
        {isMenuVisible && (
          <Container fluid className="menu_carrier">
            <div className="menu_inner">
              <ul>
                <Nav.Link href="/" className="">
                  Home
                </Nav.Link>
                <Nav.Link href="/about" className="">
                  About
                </Nav.Link>
                <Nav.Link href="/menu" className="">
                  Menu
                </Nav.Link>
                <Nav.Link href="/stories" className="">
                  Stories
                </Nav.Link>
                <Nav.Link href="/contact" className="">
                  Contact
                </Nav.Link>
              </ul>
            </div>
          </Container>
        )} */}
      </header>
    </>
  );
}

export default NavComp;
