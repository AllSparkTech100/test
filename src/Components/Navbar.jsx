import { Link } from "react-router-dom";
import "../Pages/pages.scss";
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
              <Link to={"/"}> Home</Link>
            </li>
            <li>
              <Link to={"/contact"}> Contact</Link>
            </li>
            <li>
              <Link to={"/about"}> About</Link>
            </li>
            <li>
              <Link to={"/services"}> Services</Link>
            </li>
            <li>
              <Link to={"/events"}> Events</Link>
            </li>
          </ul>
        </nav>

        <button className="appoint ms-5">
          <h5>Appointment</h5>
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
