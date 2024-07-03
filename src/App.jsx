import "bootstrap/dist/css/bootstrap.min.css";
import Pages from "./Pages/Pages";
import "./app.scss";
import NavComp from "./Components/NavComp";
// import Footer from "./Components/Footer"; 
// import Loader from "./Components/Loader";
// import { useEffect, useState } from "react";

function App() {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <>
      {/* {loading && <Loader />}
      {!loading && ( */}
        <div>
          <NavComp />
          <Pages />
          {/* <Footer /> */}
        </div>
      {/* )} */}
    </>
  );
}

export default App;
