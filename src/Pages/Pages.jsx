import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Admission from "./Admission";
import Alumni from "./Alumni";
import styled from "styled-components";
import Error from "./Error";
import { Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Main>
  );
}

const Main = styled.div`
  margin: auto;
`;
export default Pages;
