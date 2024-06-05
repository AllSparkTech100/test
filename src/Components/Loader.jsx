import Spinner from "react-bootstrap/Spinner";
import "./button.scss";

function Loader() {
  return (
    <div className="loader-carrier">
      <div className="loader-inner">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
}

export default Loader;
