import { Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

function Counterr() {
  const [counterState, setCounterState] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <Row
          data-aos="fade-up"
          className="stat p-md-5 text-md-start text-center"
        >
          <Col md={6} lg={2} sm={12} className="mb-4">
            <h3 className="fw-semibold">
              {counterState && (
                <CountUp start={0} end={18} duration={2.75}></CountUp>
              )}
            </h3>
            <h6>YEARS OF EXPERIENCE</h6>
          </Col>
          <Col md={6} lg={2} sm={12} className="mb-4">
            <h3 className="fw-semibold"> {counterState && (
                <CountUp start={0} end={100} duration={2.75}></CountUp>
              )}</h3>
            <h6>MENUS / DISHES</h6>
          </Col>
          <Col md={6} lg={2} sm={12} className="mb-4">
            <h3 className="fw-semibold"> {counterState && (
                <CountUp start={0} end={50} duration={2.75}></CountUp>
              )}</h3>
            <h6>STAFFS</h6>
          </Col>
          <Col md={4} lg={2} sm={12} className="mb-4">
            <h3 className="fw-semibold"> {counterState && (
                <CountUp start={0} end={15000} duration={2.75}></CountUp>
              )}</h3>
            <h6>HAPPY CUSTOMERS</h6>
          </Col>
          <Col md={12} lg={4} sm={12} className="mb-4">
            <p className="fs-5 text-center text-lg-start text-md-center ">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </Col>
        </Row>
      </ScrollTrigger>
    </>
  );
}

export default Counterr;
