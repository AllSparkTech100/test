import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./contact";
import Error from "./Error";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default Pages;
