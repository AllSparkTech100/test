import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";

import { Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}

export default Pages;
