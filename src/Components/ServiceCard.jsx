import "./components.scss";
import { Row, Col } from "react-bootstrap";
import { FaChildren } from "react-icons/fa6";
import { PiBrainLight } from "react-icons/pi";
import { TbPhysotherapist } from "react-icons/tb";
function ServiceCard() {
  return (
    <>
      <Row className="mt-5">
        <Col sm={12} md={4} lg={4}>
          <div className="service-carrier py-0 px-3 mt-3 mb-3 mx-2 bg-white text-center">
            <div className="my-3 fw-normal text-warning">
              <FaChildren size={50} />
            </div>
            <h3 className="mt-3 mb-0">Counseling Therapy</h3>
            <p className="my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quo
              quasi et eligendi est reiciendis enim minima, voluptatum
            </p>
            <button className="btn bg-dark dark-btn text-white">
              <a href="" className="text-white">
                Learn More
              </a>
            </button>
          </div>
        </Col>

        <Col sm={12} md={4} lg={4}>
          <div className="service-carrier py-0 px-3 mt-3 mb-3 mx-2 bg-dark text-white text-center">
            <div className="my-3 fw-normal text-warning">
              <TbPhysotherapist size={50} />
            </div>
            <h3 className="mb-3">Therapy Sessions</h3>
            <p className="my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quo
              quasi et eligendi est reiciendis enim minima, voluptatum
            </p>
            <button className="btn bg-white dark-btn">
              <a href="" className="text-dark">
                Learn More
              </a>
            </button>
          </div>
        </Col>

        <Col sm={12} md={4} lg={4}>
          <div className="service-carrier py-0 px-3 mt-3 mb-3 mx-2 bg-white text-center">
            <div className="my-3 fw-normal text-warning">
              <PiBrainLight size={50} className="text-warning" />
            </div>
            <h3 className="mb-3">Mindfulness Programs</h3>
            <p className="my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quo
              quasi et eligendi est reiciendis enim minima, voluptatum
            </p>
            <button className="btn bg-dark dark-btn text-white">
              <a href="" className="text-white">
                Learn More
              </a>
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ServiceCard;
