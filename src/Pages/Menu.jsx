import "./pages.scss";
import Data from "../Components/data";
// import { Container } from "react-bootstrap";
import Test from "../Components/Test";

function Menu() {
  return (
    <>
      <main className="">
        <div className="bg-image menu_intro">
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
          <Data />
          <Test/>
        </section>
      </main>
    </>
  );
}
export default Menu;
