import "./pages.scss";
// import { useState, useEffect } from "react";
import ImgCard from "../Components/ImgCard";
import CardComp from "../Components/Card";
import Data from "../Components/data"
import FormComp from "../Components/Form";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { FaBirthdayCake, FaBusinessTime } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import barr from "../Photos/chef-2.jpg";
import bar2 from "../Photos/bar-2.jpg";
import bar1 from "../Photos/wineee.jpg";
import wine from "../Photos/wines.jpg";
import chef from "../Photos/chef-1.jpg";

function Menu() {
  return (
    <>
      <main className="">
        <div className="bg-image about_intro">
          <div className="about_text">
            <h3 className="text-white text-center">Specialties</h3>
            <p className="text-center">
              <a href="/" className="text-white fw-normal">
                Home
              </a>
            </p>
          </div>
        </div>
<section>
  <Data/>
</section>
      </main>
    </>
  );
}
export default Menu;
