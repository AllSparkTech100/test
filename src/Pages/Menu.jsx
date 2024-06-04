import "./pages.scss";
import Data from "../Components/data";
import Category from "./Category";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Menu() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease",
      once: false,
      startEvent: 'DOMContentLoaded',
    });
  });
  return (
    <>
      <main className="">
        <div className="bg-image menu_intro">
          <div className="about_text" >
            <h3 className="text-white text-center" data-aos="fade-up" data-aos-offset="0">Specialties</h3>
            <p className="text-center" data-aos="fade-up" data-aos-offset="0">
              <a href="/" className="text-white fw-normal">
                Home &gt;
              </a>
            </p>
          </div>
        </div>
        <section>
          <div data-aos="fade-up">
          <Category  />
          </div>
          <Data />
        </section>
      </main>
    </>
  );
}
export default Menu;