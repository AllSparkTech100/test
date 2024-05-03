import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Stories from "./Stories";
import Contact from "./Contact";
import styled from "styled-components";
import Error from "./Error";
import Breakfast from "./Breakfast";
import Dessert from "./Desserts";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Wines from "./Wines";
import Drinks from "./Drinks";
import { Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/desserts" element={<Dessert />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/wines" element={<Wines />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Main>
  );
}

const Main = styled.div`
  margin: auto;
`;
export default Pages;
