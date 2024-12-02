import "./components.scss";
import { Row, Col } from "react-bootstrap";
import { FaChildren } from "react-icons/fa6";
import { PiBrainLight } from "react-icons/pi";
import { TbPhysotherapist } from "react-icons/tb";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ServiceCard() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease",
      once: false,
      startEvent: "DOMContentLoaded",
    });
  });
  return (
    <>
      <Row className="mt-5">
        <Col
          sm={12}
          md={12}
          lg={6}
          className="mt-4 mt-md-0 mt-lg-4 mb-md-4 mb-lg-4"
        >
          <div
            className="service-carrier h-100 carde py-0 px-3 mt-3 mb-3 mx-2 text-center"
            data-aos="flip-right"
          >
            <div className="my-3 fw-normal text-warning">
              <FaChildren size={60} />
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

        <Col sm={12} md={12} lg={6} className="mt-4 mt-md-0 mt-lg-4">
          <div
            className="service-carrier h-100 py-0 px-3 mt-3 mb-3 mx-2 dark-card text-white text-center"
            data-aos="flip-left"
          >
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

        <Col
          sm={12}
          md={12}
          lg={12}
          className="mt-4 mb-5 mb-md-4 mb-lg-4 mt-md-4 mt-lg-4"
        >
          <div
            className="service-carrier h-100 carde py-0 px-3 mt-3 mt-lg-5 mb-lg-5 mb-3 mx-2 text-center"
            data-aos="fade-up"
          >
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
