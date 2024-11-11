import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import Error from "./Error";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default Pages;
