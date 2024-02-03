import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Stories from "./Stories";
import Contact from "./Contact";
import styled from "styled-components";
import Error from "./Error";
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
      <Route path="*" element={<Error />} />
    </Routes>
   </Main>
  );
}

const Main = styled.div`
margin: auto;
`;
export default Pages;
