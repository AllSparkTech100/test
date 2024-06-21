import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { useState } from "react";
import "./button.scss";
import ScrollTrigger from "react-scroll-trigger";

function Counterr() {
  const [counterState, setCounterState] = useState(false);
  return (
    <>
      <Container className=" count_carrier p-4 bg-dark text-white" fluid>
        <ScrollTrigger
          onEnter={() => setCounterState(true)}
          onExit={() => setCounterState(false)}
        >
          <Row
            data-aos="fade-up"
            className="stat p-md-5 text-md-start text-center"
          >
            <Col md={6} lg={4} sm={12} className="text-center mb-4">
              <h3 className="fw-semibold">
                {counterState && (
                  <CountUp start={0} end={20} duration={2.75}></CountUp>
                )}
              </h3>
              <h6 className="fw-semibold">New School Programs</h6>
            </Col>
            <Col md={6} lg={4} sm={12} className="text-center mb-4">
              <h3 className="fw-semibold">
                {" "}
                {counterState && (
                  <CountUp start={0} end={120} duration={2.75}></CountUp>
                )}
              </h3>
              <h6 className="fw-semibold">Upcoming Education Events</h6>
            </Col>
            <Col md={6} lg={4} sm={12} className="text-center mb-4">
              <h3 className="fw-semibold">
                {" "}
                {counterState && (
                  <CountUp start={0} end={950} duration={2.75}></CountUp>
                )}
              </h3>
              <h6 className="fw-semibold">Online Interested Courses</h6>
            </Col>
            <Col md={4} lg={4} sm={12} className="text-center mb-4 mt-lg-5">
              <h3 className="fw-semibold">
                {" "}
                {counterState && (
                  <CountUp start={0} end={30} duration={2.75}></CountUp>
                )}
              </h3>
              <h6 className="fw-semibold">Expert Education Workers</h6>
            </Col>
            <Col md={4} lg={4} sm={12} className="text-center mb-4 mt-lg-5">
              <h3 className="fw-semibold">
                {" "}
                {counterState && (
                  <CountUp start={0} end={1100} duration={2.75}></CountUp>
                )}
              </h3>
              <h6 className="fw-semibold">Best European Curriculums</h6>
            </Col>
            <Col md={4} lg={4} sm={12} className="text-center mb-4 mt-lg-5">
              <h3 className="fw-semibold">
                {" "}
                {counterState && (
                  <CountUp start={0} end={1000} duration={2.75}></CountUp>
                )}
              </h3>
              <h6 className="fw-semibold">Complete Education Workers</h6>
            </Col>
          </Row>
        </ScrollTrigger>
      </Container>
    </>
  );
}

export default Counterr;
