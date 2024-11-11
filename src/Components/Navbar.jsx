import "../Pages/pages.scss";
import { Nav } from "react-bootstrap";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header>
        <div className="company-logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiOhqb-J6znS_ToviHSl85R9OEI3UV8Cn9gg&s"
            alt=""
          />
        </div>

        <nav className="large_screen">
          <ul>
            <li>
              <Nav.Link href="/"> Home</Nav.Link>
            </li>
            <li>
              <Nav.Link href="/contact"> Contact</Nav.Link>
            </li>
            <li>
              <Nav.Link href="/about"> About</Nav.Link>
            </li>
            <li>
              <Nav.Link href="/services"> Services</Nav.Link>
            </li>
            <li>
              <Nav.Link href="/events"> Events</Nav.Link>
            </li>
          </ul>
        </nav>

        <button className="appoint ms-5">
          <h5>Book a Session</h5>
        </button>
        <button
          className="d-lg-none d-sm-block menu-icon"
          onClick={() => {
            menuToggle();
          }}
        >
          {" "}
          {isMenuOpen ? (
            <IoClose size={30} className="text-black" />
          ) : (
            <TiThMenu size={30} className="text-white" />
          )}
        </button>
      </header>
    </>
  );
}

export default Navbar;
