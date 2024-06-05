import "bootstrap/dist/css/bootstrap.min.css";
import Pages from "./Pages/Pages";
import "./app.scss";
import NavComp from "./Components/NavComp";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

function App() {
  return (
    <>
      <NavComp />
      <Pages />
      <Footer />
      <Loader />
    </>
  );
}

export default App;
