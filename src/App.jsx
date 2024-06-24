import "bootstrap/dist/css/bootstrap.min.css";
import Pages from "./Pages/Pages";
import "./app.scss";
import NavComp from "./Components/NavComp";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      {" "}
      <div>
        <NavComp />
        <Pages />
        <Footer />
      </div>
    </>
  );
}

export default App;
