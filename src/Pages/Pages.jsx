import Home from "./Home";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

function Pages() {
  return (
   <Main>
     <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   </Main>
  );
}

const Main = styled.div`
margin: auto;
`;
export default Pages;
