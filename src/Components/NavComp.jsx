import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "../app.scss";
import { IoCallSharp } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { MdAccessTime } from "react-icons/md";
import ButtonComp from "./Button";
import { useState, useEffect } from "react";

function NavComp() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

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
    height: isScrolled ? "65px" : "110px",
    borderBottom: isScrolled ? "none" : "1px solid snow",
  };

  return (
    <>
      <header
        style={headerStyle}
        className={isScrolled ? "bg-white " : "bg-transparent"}
      >
        <div
          id="first_most_section"
          className={isScrolled ? "d-none" : "d-lg-block d-md-none d-sm-none"}
        >
          <div className="first_most_inner">
            <div className="phone_no d-flex justify-content-between text-white-50">
              <p>
                <IoCallSharp size={25} /> &nbsp;+234-903-090-239
              </p>
            </div>
            <div className="mailing_address d-flex align-items-center text-white-50">
              <p>
                <SiMinutemailer size={25} /> &nbsp;feliciano@hotmail.com
              </p>
            </div>
            <div className="open_hrs d-flex align-items-center text-white-50">
              <p>
                <MdAccessTime size={25} />
                &nbsp;Open Hours: Monday - Sunday 8:00am - 9:00pm
              </p>
            </div>
          </div>
        </div>
        <div className="second_inner_in">
          <Navbar
            expand="lg"
            fixed="top"
            className={isScrolled ? "mt-sm-0" : "mt-lg-5 mt-md-4"}
          >
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
                className="shadow-none d-none border-2 border-primary "
                variant="secondary"
              />

              <Navbar.Collapse id="basic-navbar-nav shadow-none">
                <Nav className="ms-auto align-items-md-center justify-content-md-between">
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
                    <ButtonComp text="Book a Table" />
                  </div>
                </Nav>
              </Navbar.Collapse>
              <Button
                className="d-lg-none d-sm-block shadow-none border-0 rounded-5 menu_iconn "
                variant="secondary"
                onClick={toggleMenu}
              >
                {isMenuVisible ? "X" : "Menu"}
              </Button>
            </Container>
          </Navbar>
        </div>  
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
                <Nav.Link href="" className="w-100 btn">
                  <ButtonComp text="Book a Table" />
                </Nav.Link>
              </ul>
            </div>
          </Container>
        )}
      </header>
    </>
  );
}

export default NavComp;
