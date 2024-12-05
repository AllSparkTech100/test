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
      <header className="sticky-top">
        <Navbar className="menu-insight" expand="md">
          <Container fluid>
            <Navbar.Brand
              href="/"
              className="d-flex align-items-center justify-content-center text-white fw-bold ms-3  ms-lg-5 text-uppercase"
            >
              Mental Health{" "}
              <span className="fw-bold text-warning fs-2 ms-2">+</span>
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav d-md-block shadow-none">
              <Nav className="ms-auto large-nav me-auto align-items-md-center justify-content-md-between ">
                <Nav.Link href="/" className="text-white">
                  Home
                </Nav.Link>
                <Nav.Link href="/about" className="text-white">
                  About Us
                </Nav.Link>
                <Nav.Link href="/contact" className="text-white">
                  Contact Us
                </Nav.Link>
                <Nav.Link href="/services" className="text-white">
                  Our Services
                </Nav.Link>
              </Nav>
              <button className="btn-yellow d-none d-md-block d-lg-block ms-auto mb-3 me-4 ">
                <a
                  href="mailto:mentalhealthplus24@gmail.com"
                  className="text-dark"
                >
                  Book a Session
                </a>
              </button>
            </Navbar.Collapse>
            <div
              className="d-lg-none d-md-none menu-insight d-sm-block shadow-none border-0"
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
            <div className="menu-inner">
              <ul>
                <Nav.Link href="/" className="">
                  Home
                </Nav.Link>
                <Nav.Link href="/about" className="">
                  About Us
                </Nav.Link>

                <Nav.Link href="/contact" className="">
                  Contact Us
                </Nav.Link>
                <Nav.Link href="/services" className="">
                  Our Services
                </Nav.Link>

                <div className="btn bg-warning w-100 rounded-2">
                  <a
                    href="mailto:mentalhealthplus24@gmail.com"
                    className="text-dark"
                  >
                    Book a Session
                  </a>
                </div>
              </ul>
            </div>
          </Container>
        )}
      </header>
    </>
  );
}

export default NavHead;
