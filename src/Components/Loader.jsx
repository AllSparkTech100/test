import { Spinner } from "react-bootstrap";
import "./button.scss";

function Loader() {
  return (
    <div className="preloader">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default Loader;